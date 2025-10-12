-- Create rate limiting table for reservations
CREATE TABLE IF NOT EXISTS public.reservation_rate_limit (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address TEXT NOT NULL,
  submission_count INTEGER DEFAULT 1,
  last_submission_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_rate_limit_ip ON public.reservation_rate_limit(ip_address);
CREATE INDEX IF NOT EXISTS idx_rate_limit_time ON public.reservation_rate_limit(last_submission_at);

-- Enable RLS on rate limit table
ALTER TABLE public.reservation_rate_limit ENABLE ROW LEVEL SECURITY;

-- Only admins can view rate limit data
CREATE POLICY "Admins can view rate limits" ON public.reservation_rate_limit
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create cleanup function for old rate limit entries
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  DELETE FROM public.reservation_rate_limit 
  WHERE last_submission_at < now() - interval '24 hours';
$$;

-- Create date validation trigger function
CREATE OR REPLACE FUNCTION public.validate_reservation_dates()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  -- Check checkout is after checkin
  IF NEW.check_out_date <= NEW.check_in_date THEN
    RAISE EXCEPTION 'Check-out date must be after check-in date';
  END IF;
  
  -- Check dates are not in the past (allow today)
  IF NEW.check_in_date < CURRENT_DATE THEN
    RAISE EXCEPTION 'Check-in date cannot be in the past';
  END IF;
  
  -- Check dates are within reasonable future (2 years)
  IF NEW.check_in_date > CURRENT_DATE + INTERVAL '2 years' THEN
    RAISE EXCEPTION 'Check-in date cannot be more than 2 years in the future';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Attach trigger to reservations table
DROP TRIGGER IF EXISTS validate_dates_before_insert_or_update ON public.reservations;
CREATE TRIGGER validate_dates_before_insert_or_update
  BEFORE INSERT OR UPDATE ON public.reservations
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_reservation_dates();

-- Update RLS policies for better data protection
-- Drop existing conflicting SELECT policies
DROP POLICY IF EXISTS "Admin and staff can view all reservations" ON public.reservations;
DROP POLICY IF EXISTS "Users can view own reservations" ON public.reservations;

-- Create consolidated SELECT policy
CREATE POLICY "View reservations based on role" ON public.reservations
  FOR SELECT
  USING (
    is_admin_or_staff(auth.uid())
    OR
    (auth.uid() = user_id AND user_id IS NOT NULL)
  );

-- Drop public insert policy (will use edge function instead)
DROP POLICY IF EXISTS "Public can create reservations" ON public.reservations;

-- Add policy for users to update their own reservations
DROP POLICY IF EXISTS "Users can update own reservations" ON public.reservations;
CREATE POLICY "Users can update own reservations" ON public.reservations
  FOR UPDATE
  USING (auth.uid() = user_id AND user_id IS NOT NULL)
  WITH CHECK (auth.uid() = user_id AND user_id IS NOT NULL);