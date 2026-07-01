"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { joinWaitlist, type WaitlistState } from "../actions";

const INITIAL: WaitlistState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-11 items-center justify-center rounded-full bg-brand-500 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Submitting…" : "Join the Waitlist"}
    </button>
  );
}

export default function EarlyAccessModal({
  isOpen,
  onClose,
  prefillEmail = "",
}: {
  isOpen: boolean;
  onClose: () => void;
  prefillEmail?: string;
}) {
  const [state, formAction] = useActionState(joinWaitlist, INITIAL);
  const nameRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Focus: if email was prefilled, focus name (next field to fill). Otherwise
  // focus name too — it's the first field either way.
  useEffect(() => {
    if (isOpen && state.status !== "success") {
      const t = setTimeout(() => nameRef.current?.focus(), 30);
      return () => clearTimeout(t);
    }
  }, [isOpen, state.status]);

  // When the user closes the modal after success, reset the form so the next
  // open shows the empty form again.
  useEffect(() => {
    if (!isOpen && state.status === "success") {
      formRef.current?.reset();
    }
  }, [isOpen, state.status]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="early-access-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-neutral-900/50 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {state.status === "success" ? (
          <div className="px-8 py-10 text-center">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-bold text-neutral-900">You're on the list.</h3>
            <p className="mt-2 text-sm text-neutral-500">
              We'll reach out with early access details soon.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-neutral-200 bg-white px-5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            action={formAction}
            key={prefillEmail || "blank"}
            className="flex flex-col gap-4 px-6 py-6 sm:px-8 sm:py-8"
          >
            <div>
              <h3 id="early-access-title" className="text-2xl font-extrabold tracking-tight text-neutral-900">
                Get Early Access
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                Join the waitlist. We'll email you when Marketty opens.
              </p>
            </div>

            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-neutral-700">Name</span>
              <input
                ref={nameRef}
                name="name"
                type="text"
                required
                autoComplete="name"
                minLength={2}
                maxLength={100}
                placeholder="Jane Doe"
                className="h-11 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-neutral-700">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                defaultValue={prefillEmail}
                placeholder="you@company.com"
                className="h-11 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-neutral-700">Country</span>
              <input
                name="country"
                type="text"
                required
                autoComplete="country-name"
                minLength={2}
                maxLength={80}
                placeholder="Nigeria"
                className="h-11 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none"
              />
            </label>

            {state.status === "error" && (
              <p role="alert" className="text-xs font-medium text-red-600">
                {state.error}
              </p>
            )}

            <div className="mt-2 flex flex-col gap-2 sm:flex-row-reverse sm:items-center sm:justify-between">
              <SubmitButton />
              <p className="text-[11px] text-neutral-400">
                By joining, you agree to occasional product updates. Unsubscribe anytime.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
