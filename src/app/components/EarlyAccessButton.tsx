"use client";

import type { ReactNode } from "react";
import { useEarlyAccess } from "./EarlyAccessProvider";

export default function EarlyAccessButton({
  children = "Get Early Access",
  className,
  variant = "primary",
}: {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "hero";
}) {
  const { open } = useEarlyAccess();

  const base =
    "inline-flex items-center justify-center rounded-full bg-brand-500 font-medium text-white shadow-sm transition hover:bg-brand-600";
  const size =
    variant === "hero"
      ? "h-11 px-6 text-base"
      : "h-10 px-5 text-sm";

  return (
    <button type="button" onClick={() => open()} className={`${base} ${size} ${className ?? ""}`}>
      {children}
    </button>
  );
}
