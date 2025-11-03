-- Fix: Add INSERT policy for service role on reservations table
-- This allows the edge function to create reservations while maintaining security
-- through the edge function's validation logic (input validation, rate limiting, sanitization)

CREATE POLICY "Service role can insert reservations"
ON public.reservations
FOR INSERT
TO service_role
WITH CHECK (true);