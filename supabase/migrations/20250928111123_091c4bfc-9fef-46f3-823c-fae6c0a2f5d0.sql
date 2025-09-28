-- Create user roles system to properly control access to reservations
CREATE TYPE public.app_role AS ENUM ('admin', 'staff', 'user');

-- Create user_roles table to manage access permissions
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Add user_id to reservations table to track ownership (nullable for existing data)
ALTER TABLE public.reservations 
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

-- Create security definer function to check user roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to check if user is admin or staff
CREATE OR REPLACE FUNCTION public.is_admin_or_staff(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'staff')
  )
$$;

-- Drop existing overly permissive RLS policies
DROP POLICY IF EXISTS "Authenticated users can view reservations" ON public.reservations;
DROP POLICY IF EXISTS "Authenticated users can update reservations" ON public.reservations;
DROP POLICY IF EXISTS "Anyone can create reservations" ON public.reservations;

-- Create secure RLS policies for reservations

-- 1. Public users can create reservations (for guest bookings)
CREATE POLICY "Public can create reservations" 
ON public.reservations 
FOR INSERT 
WITH CHECK (true);

-- 2. Only admin/staff can view all reservations
CREATE POLICY "Admin and staff can view all reservations" 
ON public.reservations 
FOR SELECT 
USING (public.is_admin_or_staff(auth.uid()));

-- 3. Users can view their own reservations (if they have user_id set)
CREATE POLICY "Users can view own reservations" 
ON public.reservations 
FOR SELECT 
USING (auth.uid() = user_id);

-- 4. Only admin/staff can update reservations
CREATE POLICY "Admin and staff can update reservations" 
ON public.reservations 
FOR UPDATE 
USING (public.is_admin_or_staff(auth.uid()));

-- 5. Only admin/staff can delete reservations
CREATE POLICY "Admin and staff can delete reservations" 
ON public.reservations 
FOR DELETE 
USING (public.is_admin_or_staff(auth.uid()));

-- Create RLS policies for user_roles table

-- Only admins can view roles
CREATE POLICY "Admins can view all user roles" 
ON public.user_roles 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

-- Users can view their own roles
CREATE POLICY "Users can view own roles" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Only admins can assign roles
CREATE POLICY "Admins can manage user roles" 
ON public.user_roles 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));

-- Add trigger to automatically update updated_at for user_roles
CREATE TRIGGER update_user_roles_updated_at
    BEFORE UPDATE ON public.user_roles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert a default admin user (you'll need to replace this UUID with an actual user ID)
-- This is commented out - you'll need to manually assign admin role to a user after they sign up
-- INSERT INTO public.user_roles (user_id, role) 
-- VALUES ('YOUR_USER_UUID_HERE', 'admin');