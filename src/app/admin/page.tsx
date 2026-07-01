import type { Metadata } from "next";
import { isAdmin } from "@/lib/admin-auth";
import { supabaseAdmin, type WaitlistRow } from "@/lib/supabase";
import LoginForm from "./LoginForm";
import SubmissionsTable from "./SubmissionsTable";
import { adminLogout } from "../actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin — Marketty App",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!(await isAdmin())) {
    return (
      <main className="flex-1 bg-neutral-50">
        <LoginForm />
      </main>
    );
  }

  const client = supabaseAdmin();
  const { data, error } = await client
    .from("waitlist")
    .select("id, name, email, country, created_at")
    .order("created_at", { ascending: false });

  const rows = (data ?? []) as WaitlistRow[];

  return (
    <main className="flex-1 bg-neutral-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">
              Waitlist
            </h1>
            <p className="mt-1 text-sm text-neutral-500">
              {rows.length} {rows.length === 1 ? "submission" : "submissions"}
              {error ? " · (loaded with an error, check server logs)" : ""}
            </p>
          </div>
          <form action={adminLogout}>
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-full border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Sign out
            </button>
          </form>
        </div>

        <div className="mt-8">
          <SubmissionsTable rows={rows} />
        </div>
      </div>
    </main>
  );
}
