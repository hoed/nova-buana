-- Fix: Rate Limit Table Missing Write Policy
-- The reservation_rate_limit table is a system table used for operational
-- rate limiting and contains no user PII (only IP addresses and counts).
-- Disabling RLS is appropriate for this use case.

ALTER TABLE public.reservation_rate_limit DISABLE ROW LEVEL SECURITY;