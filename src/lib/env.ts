// Server-only env access. Throws early if something is missing.

function required(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(
      `Missing required environment variable: ${name}. See .env.local.example.`,
    );
  }
  return v;
}

export const env = {
  supabaseUrl: () => required("SUPABASE_URL"),
  supabaseServiceRoleKey: () => required("SUPABASE_SERVICE_ROLE_KEY"),
  adminPassword: () => required("ADMIN_PASSWORD"),
  adminSessionSecret: () => required("ADMIN_SESSION_SECRET"),
};
