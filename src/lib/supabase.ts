import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { env } from "./env";

let cached: SupabaseClient | null = null;

/**
 * Server-only Supabase client using the SERVICE ROLE key.
 * Bypasses Row Level Security — never import from client components.
 */
export function supabaseAdmin(): SupabaseClient {
  if (cached) return cached;
  cached = createClient(env.supabaseUrl(), env.supabaseServiceRoleKey(), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}

export type WaitlistRow = {
  id: string;
  name: string;
  email: string;
  country: string;
  created_at: string;
};
