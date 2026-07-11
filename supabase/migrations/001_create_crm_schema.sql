-- Create CRM Schema Migration

-- Contacts Table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    company TEXT,
    phone TEXT,
    status TEXT DEFAULT 'Lead' CHECK (status IN ('Lead', 'Prospect', 'Customer')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Deals Table
CREATE TABLE IF NOT EXISTS public.deals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    company TEXT NOT NULL,
    value NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    stage TEXT DEFAULT 'Qualified' CHECK (stage IN ('Qualified', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost')),
    rep TEXT NOT NULL,
    expected_close_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security (RLS) policies
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to contacts" ON public.contacts
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to deals" ON public.deals
    FOR SELECT USING (true);
