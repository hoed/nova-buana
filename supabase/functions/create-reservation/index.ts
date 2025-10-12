import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ReservationData {
  checkIn: string;
  checkOut: string;
  guests: string;
  accommodationType: string;
  name: string;
  phone: string;
  email: string;
  specialRequests?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP address for rate limiting
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                     req.headers.get('x-real-ip') || 
                     'unknown';

    // Create Supabase client with service role key for admin operations
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          persistSession: false,
        },
      }
    );

    // Check rate limiting (max 3 submissions per hour per IP)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    
    const { data: rateLimitData, error: rateLimitError } = await supabaseClient
      .from('reservation_rate_limit')
      .select('submission_count, last_submission_at')
      .eq('ip_address', clientIp)
      .gte('last_submission_at', oneHourAgo)
      .single();

    if (rateLimitError && rateLimitError.code !== 'PGRST116') {
      console.error('Rate limit check error:', rateLimitError);
    }

    // If too many submissions, reject
    if (rateLimitData && rateLimitData.submission_count >= 3) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ 
          error: 'Too many reservation requests. Please try again later.' 
        }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Parse request body
    const body: ReservationData = await req.json();

    // Server-side validation
    if (!body.checkIn || !body.checkOut || !body.guests || !body.accommodationType || 
        !body.name || !body.phone || !body.email) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate dates
    const checkIn = new Date(body.checkIn);
    const checkOut = new Date(body.checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      return new Response(
        JSON.stringify({ error: 'Check-in date cannot be in the past' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (checkOut <= checkIn) {
      return new Response(
        JSON.stringify({ error: 'Check-out date must be after check-in date' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize and prepare data
    const sanitizedData = {
      check_in_date: body.checkIn,
      check_out_date: body.checkOut,
      guests: body.guests.trim(),
      accommodation_type: body.accommodationType.trim(),
      guest_name: body.name.trim().substring(0, 100),
      guest_phone: body.phone.trim().substring(0, 20),
      guest_email: body.email.trim().toLowerCase().substring(0, 255),
      special_requests: body.specialRequests?.trim().substring(0, 1000) || null,
      user_id: null, // Guest reservation (no authentication required)
    };

    // Insert reservation
    const { data, error } = await supabaseClient
      .from('reservations')
      .insert([sanitizedData])
      .select();

    if (error) {
      console.error('Reservation insert error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to create reservation. Please try again.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Update rate limiting (increment or create)
    if (rateLimitData) {
      await supabaseClient
        .from('reservation_rate_limit')
        .update({
          submission_count: rateLimitData.submission_count + 1,
          last_submission_at: new Date().toISOString(),
        })
        .eq('ip_address', clientIp)
        .gte('last_submission_at', oneHourAgo);
    } else {
      await supabaseClient
        .from('reservation_rate_limit')
        .insert([{
          ip_address: clientIp,
          submission_count: 1,
          last_submission_at: new Date().toISOString(),
        }]);
    }

    // Log successful reservation
    console.log(`Reservation created successfully for ${sanitizedData.guest_email}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        data: data[0],
        message: 'Reservation created successfully' 
      }),
      { 
        status: 201, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error processing reservation:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
