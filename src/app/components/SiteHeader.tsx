"use client";

import { useState } from "react";

const LINKS = ["Solutions", "Ecosystem", "Businesses", "Creators", "About"];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <path
          d="M11 11 Q11 6 16 6 Q21 6 21 11"
          stroke="var(--brand-500)"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        <rect x="6" y="10" width="20" height="19" rx="3.5" fill="var(--brand-500)" />
        <circle cx="13" cy="19" r="1.6" fill="#ffffff" />
        <circle cx="19" cy="19" r="1.6" fill="#ffffff" />
      </svg>
      <span className="text-lg font-bold tracking-tight text-neutral-900">
        Marketty<span className="text-brand-500">.</span>
      </span>
    </div>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-neutral-600 hover:text-neutral-900">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-10 items-center justify-center rounded-full bg-brand-500 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-600 md:inline-flex"
          >
            Get Early Access
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-900 md:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* mobile panel */}
      {open && (
        <div className="border-t border-neutral-100 bg-white md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4">
            {LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-50"
              >
                {l}
              </a>
            ))}
            <button
              type="button"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-brand-500 px-5 text-sm font-semibold text-white"
            >
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
