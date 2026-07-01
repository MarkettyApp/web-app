"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { adminLogin, type AdminLoginState } from "../actions";

const INITIAL: AdminLoginState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-11 items-center justify-center rounded-full bg-brand-500 px-6 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Signing in…" : "Sign in"}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useActionState(adminLogin, INITIAL);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <form
        action={formAction}
        className="w-full max-w-sm rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
      >
        <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900">
          Marketty Admin
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Sign in to view waitlist submissions.
        </p>

        <label className="mt-6 flex flex-col gap-1">
          <span className="text-xs font-semibold text-neutral-700">Password</span>
          <input
            name="password"
            type="password"
            required
            autoFocus
            autoComplete="current-password"
            className="h-11 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 focus:border-brand-500 focus:outline-none"
          />
        </label>

        {state.status === "error" && (
          <p role="alert" className="mt-3 text-xs font-medium text-red-600">
            {state.error}
          </p>
        )}

        <div className="mt-6 flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
