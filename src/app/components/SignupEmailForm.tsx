"use client";

import { useState, type FormEvent } from "react";
import { useEarlyAccess } from "./EarlyAccessProvider";

export default function SignupEmailForm() {
  const { open } = useEarlyAccess();
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    open(email.trim());
  }

  return (
    <>
      <form onSubmit={onSubmit} className="mt-8 flex max-w-md items-center gap-3">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="h-12 flex-1 rounded-lg border border-neutral-300 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none"
        />
        <button
          type="submit"
          className="h-12 rounded-lg bg-brand-500 px-5 text-sm font-semibold text-white hover:bg-brand-600"
        >
          Join Waitlist
        </button>
      </form>
      <p className="mt-3 text-xs text-neutral-400">
        We care about your data in our{" "}
        <a href="#" className="text-neutral-500 underline">privacy policy</a>.
      </p>
    </>
  );
}
