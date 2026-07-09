import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// Run at request time, never cache. Also mark as Node so we can use env + supabase-js.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Keep-alive ping for Supabase.
 *
 * Vercel Cron invokes this daily. Supabase pauses free-tier projects after
 * 7 days of no database activity, so any read against the DB resets the timer.
 *
 * When CRON_SECRET is set in Vercel, cron invocations arrive with
 * `Authorization: Bearer <CRON_SECRET>`. We reject any request without it so
 * this endpoint isn't publicly abusable.
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "CRON_SECRET is not configured on the server." },
      { status: 500 },
    );
  }

  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  try {
    const client = supabaseAdmin();
    // Cheap read — just enough to count as DB activity.
    const { error, count } = await client
      .from("waitlist")
      .select("id", { count: "exact", head: true });

    if (error) {
      console.error("[api/ping] supabase error", error);
      return NextResponse.json(
        { ok: false, error: "supabase query failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      pingedAt: new Date().toISOString(),
      waitlistCount: count ?? 0,
    });
  } catch (e) {
    console.error("[api/ping] unexpected error", e);
    return NextResponse.json({ ok: false, error: "unexpected" }, { status: 500 });
  }
}
