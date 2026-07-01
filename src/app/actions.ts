"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase";
import { env } from "@/lib/env";
import {
  setAdminCookie,
  clearAdminCookie,
} from "@/lib/admin-auth";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export type WaitlistState =
  | { status: "idle" }
  | { status: "error"; error: string }
  | { status: "success" };

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const country = String(formData.get("country") ?? "").trim();

  if (name.length < 2) return { status: "error", error: "Please enter your name." };
  if (!EMAIL_RE.test(email)) return { status: "error", error: "Enter a valid email address." };
  if (country.length < 2) return { status: "error", error: "Please enter your country." };

  try {
    const client = supabaseAdmin();
    const { error } = await client
      .from("waitlist")
      .insert({ name, email, country });

    if (error) {
      if (error.code === "23505") {
        return { status: "error", error: "You're already on the waitlist — thanks!" };
      }
      console.error("[joinWaitlist] supabase error", error);
      return { status: "error", error: "Something went wrong. Please try again." };
    }
  } catch (e) {
    console.error("[joinWaitlist] unexpected error", e);
    return { status: "error", error: "Something went wrong. Please try again." };
  }

  return { status: "success" };
}

export type AdminLoginState = { status: "idle" } | { status: "error"; error: string };

export async function adminLogin(
  _prev: AdminLoginState,
  formData: FormData,
): Promise<AdminLoginState> {
  const password = String(formData.get("password") ?? "");
  if (password !== env.adminPassword()) {
    return { status: "error", error: "Incorrect password." };
  }
  await setAdminCookie();
  revalidatePath("/admin");
  redirect("/admin");
}

export async function adminLogout(): Promise<void> {
  await clearAdminCookie();
  revalidatePath("/admin");
  redirect("/admin");
}
