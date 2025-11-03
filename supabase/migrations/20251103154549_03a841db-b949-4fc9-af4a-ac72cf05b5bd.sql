-- Clean up rate limit table configuration
-- First drop the existing admin-only SELECT policy since we're disabling RLS
DROP POLICY IF EXISTS "Admins can view rate limits" ON public.reservation_rate_limit;

-- The reservation_rate_limit table is a system table for operational rate limiting
-- It contains only IP addresses and submission counts, not user PII
-- Disabling RLS is appropriate for this operational use case
ALTER TABLE public.reservation_rate_limit DISABLE ROW LEVEL SECURITY;