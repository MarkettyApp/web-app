"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import EarlyAccessModal from "./EarlyAccessModal";

type Ctx = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const EarlyAccessContext = createContext<Ctx | null>(null);

export function useEarlyAccess(): Ctx {
  const ctx = useContext(EarlyAccessContext);
  if (!ctx) {
    throw new Error("useEarlyAccess must be used inside <EarlyAccessProvider>");
  }
  return ctx;
}

export default function EarlyAccessProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <EarlyAccessContext.Provider value={{ isOpen, open, close }}>
      {children}
      <EarlyAccessModal isOpen={isOpen} onClose={close} />
    </EarlyAccessContext.Provider>
  );
}
