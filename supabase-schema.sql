-- ------------------------------------------------------------
-- Marketty App — Supabase schema
-- Run this once in: Supabase Dashboard → SQL Editor → New query
-- ------------------------------------------------------------

create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  country text not null,
  created_at timestamptz not null default now()
);

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

-- Row Level Security is ON, and no policies are added.
-- The website uses the SERVICE ROLE key server-side, which bypasses RLS.
-- The anon key has zero access to this table.
alter table public.waitlist enable row level security;
