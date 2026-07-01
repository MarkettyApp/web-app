"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EarlyAccessButton from "./EarlyAccessButton";

const LINKS = ["Solutions", "Ecosystem", "Businesses", "Creators", "About"];

function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Marketty home">
      <Image
        src="/logo.png"
        alt="Marketty"
        width={480}
        height={120}
        priority
        className="h-8 w-auto"
      />
    </Link>
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
          <div className="hidden md:block">
            <EarlyAccessButton>Get Early Access</EarlyAccessButton>
          </div>

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
            <div className="mt-2" onClick={() => setOpen(false)}>
              <EarlyAccessButton className="w-full">Get Early Access</EarlyAccessButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
