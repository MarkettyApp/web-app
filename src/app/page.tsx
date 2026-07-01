import type { ReactNode, SVGProps } from "react";
import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import EarlyAccessButton from "./components/EarlyAccessButton";

/* ------------------------------------------------------------------ */
/* Shared atoms                                                        */
/* ------------------------------------------------------------------ */

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  // On the dark footer the source logo (dark wordmark on transparent bg) would
  // disappear, so we lighten it via a CSS filter until a dedicated light
  // variant exists at /logo-light.png.
  const filter = tone === "light" ? "brightness-0 invert" : "";
  return (
    <Image
      src="/logo.png"
      alt="Marketty"
      width={480}
      height={120}
      className={`h-8 w-auto ${filter}`}
    />
  );
}

function PrimaryButton({
  children,
  className = "",
  as: As = "button",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
} & React.ComponentProps<"button">) {
  return (
    <As
      className={`inline-flex h-10 items-center justify-center rounded-full bg-brand-500 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-600 ${className}`}
      {...(rest as object)}
    >
      {children}
    </As>
  );
}

function GhostButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`inline-flex h-10 items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-5 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 ${className}`}
    >
      {children}
    </button>
  );
}

function SectionEyebrow({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-100">
      {icon}
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Icons (lightweight, monoline)                                       */
/* ------------------------------------------------------------------ */

type IconProps = SVGProps<SVGSVGElement>;

const Icon = {
  Play: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M8 5v14l11-7z" /></svg>
  ),
  Check: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5" /></svg>
  ),
  Shield: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2 4 5v7c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5l-8-3z" /></svg>
  ),
  ShieldCheck: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2 4 5v7c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5l-8-3z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  Star: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="m12 2 3 7 7 .6-5.3 4.6L18.2 22 12 18l-6.2 4 1.5-7.8L2 9.6 9 9z" /></svg>
  ),
  Cart: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /><path d="M3 4h2l2.4 12h11l1.6-8H6" /></svg>
  ),
  Briefcase: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>
  ),
  Users: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1A4 4 0 0 1 16 11" /></svg>
  ),
  Smile: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><path d="M9 9h.01M15 9h.01" /></svg>
  ),
  Coins: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="8" cy="8" r="6" /><path d="M19 22a6 6 0 0 0-5.6-9.5" /><path d="M14 14a6 6 0 1 0 5 8" /></svg>
  ),
  Growth: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m3 17 6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg>
  ),
  HandShake: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M11 17 7 21l-4-4 8-8 4 4" /><path d="m13 13 4-4 4 4-4 4" /><path d="m11 17 4 4 4-4" /></svg>
  ),
  Compass: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10" /><path d="m16 8-3 7-5 1 3-7z" /></svg>
  ),
  Globe: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>
  ),
  Sparkles: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>
  ),
  Gift: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="8" width="18" height="13" rx="1.5" /><path d="M3 12h18M12 8v13M7.5 8a2.5 2.5 0 1 1 0-5C13 3 12 8 12 8s-1-5 4.5-5a2.5 2.5 0 1 1 0 5" /></svg>
  ),
  Flame: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2s4 5 4 9a4 4 0 0 1-8 0c0-1 .5-2 1-3 0 2 1 3 2 3 0-3-2-5 1-9z" /></svg>
  ),
  Leaf: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 21c0-9 6-15 18-15-1 12-8 18-18 15z" /><path d="M3 21c6-6 9-9 15-15" /></svg>
  ),
  Wrench: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14.7 6.3a5 5 0 0 0-7 7L3 18l3 3 4.7-4.7a5 5 0 0 0 7-7l-2.6 2.6-2.4-2.4z" /></svg>
  ),
  ArrowRight: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
  ),
  X: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18 2h3l-7 8 8 12h-6l-5-7-6 7H2l8-9L2 2h6l4 6 6-6z" /></svg>
  ),
  Instagram: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
  ),
  Linkedin: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2 6h4v13H2zM9 9h4v2c.7-1.3 2.2-2.3 4.3-2.3 4 0 4.7 2.6 4.7 6V22h-4v-6c0-1.6-.4-2.9-2.2-2.9S13 14.4 13 16v6H9z" /></svg>
  ),
  YouTube: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M23 12c0-3-.3-4.7-.5-5.5a3 3 0 0 0-2-2C18.6 4 12 4 12 4s-6.6 0-8.5.5a3 3 0 0 0-2 2C1.3 7.3 1 9 1 12s.3 4.7.5 5.5a3 3 0 0 0 2 2C5.4 20 12 20 12 20s6.6 0 8.5-.5a3 3 0 0 0 2-2c.2-.8.5-2.5.5-5.5zM10 15V9l5 3-5 3z" /></svg>
  ),
  TikTok: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M21 8.5a7.5 7.5 0 0 1-4.6-1.6V16a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.3a2.7 2.7 0 1 0 1.9 2.6V2h3c.3 2.4 2 4.3 4.7 4.6z" /></svg>
  ),
};

/* ------------------------------------------------------------------ */
/* Phone mockup (used in hero + signup)                                */
/* ------------------------------------------------------------------ */

function PhoneFrame({
  children,
  className = "",
  width = 260,
  height = 540,
}: {
  children?: ReactNode;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className={`relative rounded-[2.4rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-2xl ${className}`}
      style={{ width, height }}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-900" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-white">
        {children}
      </div>
    </div>
  );
}

function HeroPhone() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute -right-10 top-6 -z-10 h-[520px] w-[520px] rounded-full bg-neutral-100" aria-hidden />
      <Image
        src="/hero-phone.png"
        alt="Marketty creator livestream on phone"
        width={520}
        height={760}
        priority
        className="h-auto w-[300px] md:w-[360px] lg:w-[400px] drop-shadow-xl"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */


function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="grid items-center gap-10 py-12 md:grid-cols-2 md:gap-12 md:py-24">
        <div>
          <p className="text-xl font-bold leading-tight text-neutral-900 sm:text-2xl md:text-3xl">
            Commerce Already Happens On
          </p>
          <p className="text-xl font-bold leading-tight text-brand-500 sm:text-2xl md:text-3xl">
            Social Media<span className="text-neutral-900">.</span>
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            MARKETTY Simply<br />Structures It.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-neutral-600">
            Creators influence buying decisions. Businesses search for customers.
            Manufacturers seek distribution. MARKETTY brings them together in
            one trusted ecosystem.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <GhostButton>
              <Icon.Play className="h-3.5 w-3.5 text-brand-600" />
              Watch Demo
            </GhostButton>
            <EarlyAccessButton variant="hero">Get Early Access</EarlyAccessButton>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <HeroPhone />
        </div>
      </Container>
    </section>
  );
}

function ProblemSection() {
  const flows = [
    { from: "Creator", to: "Audience" },
    { from: "Business", to: "Customers" },
    { from: "Manufacturer", to: "Retailers" },
    { from: "Community", to: "Supporters" },
  ];
  const cards = [
    {
      emoji: "🎨",
      title: "Creators struggle to monetize.",
      body: "Influence doesn't automatically translate to income without the right infrastructure.",
    },
    {
      emoji: "🏢",
      title: "Businesses struggle to scale.",
      body: "Finding reliable distribution partners, creators, and customers remains fragmented.",
    },
    {
      emoji: "🛡️",
      title: "Customers struggle to trust.",
      body: "Without verified sellers and transparent transactions, trust is nearly impossible to establish.",
    },
    {
      emoji: "🌟",
      title: "Talented people can't find opportunities.",
      body: "Skills go undiscovered without structured channels to connect expertise with real demand.",
    },
    {
      emoji: "🤝",
      title: "Communities struggle to coordinate.",
      body: "Collective buying power and community advocacy lack a structured, trusted platform.",
    },
  ];
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Social Platforms Created Connection.
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-brand-500 sm:text-4xl md:text-5xl">
            They Didn't Create Opportunity.
          </p>
          <p className="mt-5 max-w-2xl text-base text-neutral-500">
            The value chain already exists. It remains fragmented, disconnected
            and unstructured.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {flows.map((f) => (
            <div
              key={f.from}
              className="flex flex-col items-center gap-3 rounded-2xl bg-neutral-100/80 px-4 py-7"
            >
              <div className="text-sm font-bold text-neutral-900">{f.from}</div>
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
              <div className="text-sm text-neutral-600">{f.to}</div>
              <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-700 ring-1 ring-brand-100">
                Isolated
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="text-2xl leading-none">{c.emoji}</div>
              <h3 className="mt-6 text-base font-bold text-neutral-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-500">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function EcosystemDiagram() {
  /* 8 labels evenly around a circle. Angle 0 = top, going clockwise. */
  const labels = [
    "Products",
    "Services",
    "Events",
    "Creators",
    "Businesses",
    "Communities",
    "Experts",
    "Missions",
  ];
  const cx = 200;
  const cy = 200;
  const nodeR = 110;   // node placement radius
  const labelR = 150;  // text placement radius
  const positions = labels.map((_, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / labels.length;
    return {
      nx: cx + nodeR * Math.cos(angle),
      ny: cy + nodeR * Math.sin(angle),
      lx: cx + labelR * Math.cos(angle),
      ly: cy + labelR * Math.sin(angle),
      angle,
    };
  });
  return (
    <svg viewBox="0 0 400 400" className="h-[360px] w-[360px]">
      {/* faint background disk */}
      <circle cx={cx} cy={cy} r="170" fill="#e6efd6" opacity="0.55" />
      <circle cx={cx} cy={cy} r={nodeR} fill="none" stroke="#cfe2a8" strokeWidth="1" />
      {/* spokes */}
      {positions.map((p, i) => (
        <line key={`l${i}`} x1={cx} y1={cy} x2={p.nx} y2={p.ny} stroke="#cfe2a8" strokeWidth="1" />
      ))}
      {/* nodes */}
      {positions.map((p, i) => (
        <g key={`n${i}`}>
          <circle cx={p.nx} cy={p.ny} r="10" fill="#9ec25a" />
          <circle cx={p.nx} cy={p.ny} r="13" fill="none" stroke="#9ec25a" strokeOpacity="0.35" strokeWidth="2" />
        </g>
      ))}
      {/* labels */}
      {positions.map((p, i) => {
        // Anchor based on angle so labels don't overlap nodes
        const cos = Math.cos(p.angle);
        const anchor = Math.abs(cos) < 0.2 ? "middle" : cos > 0 ? "start" : "end";
        const dy = p.ly > cy + 5 ? 12 : p.ly < cy - 5 ? -4 : 4;
        return (
          <text
            key={`t${i}`}
            x={p.lx}
            y={p.ly + dy}
            textAnchor={anchor}
            fontSize="13"
            fontWeight="600"
            fill="#1a1a1a"
          >
            {labels[i]}
          </text>
        );
      })}
      {/* center node */}
      <circle cx={cx} cy={cy} r="34" fill="#7eb02a" />
      <text x={cx} y={cy - 2} textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
        MARKET
      </text>
      <text x={cx} y={cy + 11} textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
        TY
      </text>
    </svg>
  );
}

function EcosystemSection() {
  const chips = ["Build.", "Collaborate.", "Sell.", "Support.", "Grow."];
  return (
    <section className="bg-neutral-100/70 py-14 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center">
            <EcosystemDiagram />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              One Ecosystem.{" "}
              <span className="text-brand-500">Multiple Opportunities.</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-neutral-500">
              MARKETTY transforms social interactions into economic opportunities.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-neutral-200"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-neutral-500">All within one trusted ecosystem.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustSection() {
  const cards = [
    {
      emoji: "🪪",
      title: "Verified Identity",
      sub: "Know who you're dealing with.",
      body: "Identity verification ensures accountability and traceability across every transaction and interaction on the platform.",
    },
    {
      emoji: "✅",
      title: "Verified Capability",
      sub: "Know what they can actually do.",
      body: "Businesses, experts and opportunities are reviewed for quality and competence before they reach you.",
    },
    {
      emoji: "⭐",
      title: "Verified Reputation",
      sub: "Know how they've performed.",
      body: "Trust is built through history, reviews and contribution — a living record of reliability that follows every participant.",
    },
  ];
  return (
    <section className="bg-white py-14 md:py-24">
      <Container>
        <div className="text-center">
          <SectionEyebrow icon={<Icon.Shield className="h-3.5 w-3.5" />}>The MARKETTY Moat</SectionEyebrow>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Trust Is The Missing Layer.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl bg-neutral-100/80 p-8">
              <div className="text-3xl leading-none">{c.emoji}</div>
              <h3 className="mt-8 text-2xl font-bold text-neutral-900">{c.title}</h3>
              <p className="mt-3 text-sm font-semibold text-brand-700">{c.sub}</p>
              <p className="mt-4 text-sm leading-6 text-neutral-500">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-lg text-neutral-400">
          We don't only verify people.{" "}
          <span className="font-bold text-neutral-900">We verify opportunities.</span>
        </p>
      </Container>
    </section>
  );
}

function OpportunitiesSection() {
  const items = [
    {
      emoji: "💰",
      title: "CoSell",
      body: "Earn by helping products sell. Share your network and get rewarded for every successful referral.",
    },
    {
      emoji: "🛠️",
      title: "CoCreate",
      body: "Build products and opportunities together. Collaborate with makers, designers, and market experts.",
    },
    {
      emoji: "🎯",
      title: "Missions",
      body: "Support verified people and meaningful causes. Make your impact count with full transparency.",
    },
    {
      emoji: "🎁",
      title: "Grants & Discounts",
      body: "Make opportunities more accessible with subsidized access for deserving creators and businesses.",
    },
    {
      emoji: "🏠",
      title: "CoHub",
      body: "Access tools, resources and operational support — your base within the MARKETTY ecosystem.",
    },
    {
      emoji: "🌱",
      title: "Creator Fund",
      body: "Help creators grow sustainably. Structured support for content creators at every stage.",
    },
    {
      emoji: "📦",
      title: "Parcelzz",
      body: "Trusted logistics and fulfilment infrastructure. Reliable end-to-end delivery across Africa.",
    },
  ];
  return (
    <section className="bg-brand-50 py-14 md:py-24" id="ecosystem">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Designed Around Real Opportunities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-500">
            Every tool in the MARKETTY ecosystem was built to solve a real
            problem in commerce.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-2xl leading-none">{i.emoji}</div>
              <h3 className="mt-6 text-base font-bold text-neutral-900">{i.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-500">{i.body}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-500 hover:text-brand-600"
              >
                Learn More <Icon.ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ChoosePathSection() {
  const paths = [
    {
      emoji: "🎨",
      title: "Creator",
      tags: ["Create.", "Collaborate.", "Earn.", "Grow."],
      body: "Turn your influence into a structured income stream. Partner with brands, sell your creations, and build your community.",
      cta: "Start Creating",
    },
    {
      emoji: "🏢",
      title: "Business",
      tags: ["Sell.", "Partner.", "Scale.", "Distribute."],
      body: "Access a verified network of creators, manufacturers, and customers. Scale across Africa's growing commerce ecosystem.",
      cta: "Grow Your Business",
    },
    {
      emoji: "🤝",
      title: "Community",
      tags: ["Support.", "Organize.", "Impact."],
      body: "Coordinate collective buying power, back meaningful missions, and create real economic impact for your members.",
      cta: "Build Community",
    },
    {
      emoji: "🛍️",
      title: "Customer",
      tags: ["Discover.", "Shop.", "Participate.", "Benefit."],
      body: "Shop from verified sellers, discover authentic products, and participate in a commerce ecosystem that rewards loyalty.",
      cta: "Start Shopping",
    },
  ];
  return (
    <section className="bg-white py-14 md:py-24" id="solutions">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Choose Your Path
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-500">
            MARKETTY is built for every participant in the commerce ecosystem.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {paths.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-3xl bg-brand-50 p-7"
            >
              <div className="text-3xl leading-none">{p.emoji}</div>
              <h3 className="mt-8 text-2xl font-bold text-brand-800">{p.title}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand-800 px-3 py-1 text-xs font-semibold text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-neutral-500">{p.body}</p>
              <button className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-800 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-900">
                {p.cta} <Icon.ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CollaborativeSection() {
  type Column = {
    title: string;
    labelClass: string;
    nodes: string[];
    pillRing: string;
    connector: "arrow" | "dot";
    footer?: ReactNode;
  };
  const columns: Column[] = [
    {
      title: "Traditional Commerce",
      labelClass: "text-neutral-400",
      nodes: ["Manufacturer", "Distributor", "Retailer", "Customer"],
      pillRing: "ring-neutral-500/60",
      connector: "arrow",
    },
    {
      title: "Social Commerce",
      labelClass: "text-amber-400",
      nodes: ["Creator", "Business", "Community", "Customer"],
      pillRing: "ring-amber-400/70",
      connector: "arrow",
    },
    {
      title: "MARKETTY Commerce",
      labelClass: "text-brand-300",
      nodes: ["Creator", "Business", "Manufacturer", "Community", "Customer", "Opportunities"],
      pillRing: "ring-brand-400/80",
      connector: "dot",
      footer: (
        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-950/60 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-amber-400/40">
          ✦ All connected
        </span>
      ),
    },
  ];
  return (
    <section className="bg-brand-900 py-14 text-white md:py-24">
      <Container>
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          The Future Of Commerce{" "}
          <span className="text-brand-300">Is Collaborative.</span>
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {columns.map((c) => (
            <div key={c.title} className="flex flex-col items-center">
              <div className={`text-xs font-semibold uppercase tracking-widest ${c.labelClass}`}>
                {c.title}
              </div>
              <div className="mt-6 flex flex-col items-center">
                {c.nodes.map((n, idx) => (
                  <div key={n} className="flex flex-col items-center">
                    <div
                      className={`rounded-full bg-brand-950/40 px-5 py-2 text-sm font-medium text-white ring-1 ${c.pillRing}`}
                    >
                      {n}
                    </div>
                    {idx < c.nodes.length - 1 &&
                      (c.connector === "arrow" ? (
                        <svg viewBox="0 0 24 24" className="my-1 h-4 w-4 text-white/50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 4v16M6 14l6 6 6-6" />
                        </svg>
                      ) : (
                        <span className="my-1 inline-block h-2 w-2 rounded-full bg-brand-400" />
                      ))}
                  </div>
                ))}
                {c.footer}
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-16 max-w-2xl text-center text-base text-brand-100/70">
          The future belongs to open, collaborative and trusted commerce.
        </p>
      </Container>
    </section>
  );
}

function TimelineSection() {
  const Check = () => (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  );

  type Row = {
    year: string;
    side: "left" | "right"; // which side the year label is on
    content: ReactNode;
  };

  const rows: Row[] = [
    {
      year: "2017",
      side: "left",
      content: (
        <div className="flex items-start gap-2 text-base text-neutral-800">
          <Check />
          <span>Started as Shopstantly.</span>
        </div>
      ),
    },
    {
      year: "2018+",
      side: "right",
      content: (
        <ul className="space-y-3 text-base text-neutral-800">
          {[
            "Served real customers.",
            "Expanded into logistics.",
            "Expanded into customization and printing.",
            "Processed thousands of orders.",
            "Built trusted relationships.",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      year: "2025+",
      side: "left",
      content: (
        <div className="flex items-start gap-2 text-base text-neutral-800">
          <Check />
          <span>Evolved into MARKETTY.</span>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white py-14 md:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Built Before MARKETTY Existed
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-neutral-400">
            MARKETTY was not born from an idea alone. It was built from years of
            real commerce experience.
          </p>
        </div>

        {/* Mobile: left-rail layout */}
        <div className="relative mx-auto mt-12 max-w-xl md:hidden">
          <div className="pointer-events-none absolute inset-y-0 left-3 w-px bg-orange-200" aria-hidden />
          <div className="space-y-10">
            {rows.map((r) => (
              <div key={r.year} className="relative pl-10">
                <span className="absolute left-3 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-orange-500 ring-4 ring-orange-100" />
                <div className="text-2xl font-extrabold text-orange-500">{r.year}</div>
                <div className="mt-3">{r.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: zigzag layout */}
        <div className="relative mx-auto mt-16 hidden max-w-4xl md:block">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-orange-200" aria-hidden />
          <div className="space-y-16">
            {rows.map((r) => (
              <div key={r.year} className="relative grid grid-cols-[1fr_24px_1fr] items-start gap-8">
                <div className={r.side === "left" ? "text-right" : ""}>
                  {r.side === "left" ? (
                    <div className="text-4xl font-extrabold text-orange-500">{r.year}</div>
                  ) : (
                    <div>{r.content}</div>
                  )}
                </div>
                <div className="flex justify-center">
                  <span className="mt-2 inline-block h-3 w-3 rounded-full bg-orange-500 ring-4 ring-orange-100" />
                </div>
                <div>
                  {r.side === "left" ? (
                    <div>{r.content}</div>
                  ) : (
                    <div className="text-right text-4xl font-extrabold text-orange-500">
                      {r.year}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function BeyondSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Beyond Social Commerce
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-400">
            The next generation of platforms will not simply capture attention.
            They will create opportunities. MARKETTY is building infrastructure
            where commerce, collaboration, talent and community thrive together.
          </p>
          <div className="mx-auto mt-10 inline-flex max-w-md flex-col items-start gap-1 rounded-2xl border-l-4 border-brand-500 bg-white px-6 py-5 text-left shadow-[0_8px_30px_rgba(126,176,42,0.15)]">
            <p className="text-base font-bold text-neutral-900">Social media connected people.</p>
            <p className="text-base font-bold text-brand-500">MARKETTY connects opportunities.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StatsPhone({
  pose = "front",
}: {
  pose?: "front" | "back";
}) {
  const offset = pose === "back" ? "scale-95 -rotate-6 opacity-95" : "";
  return (
    <div className={`relative ${offset}`}>
      <PhoneFrame width={220} height={460}>
        <div className="h-full w-full bg-white p-3">
          {/* status bar */}
          <div className="flex items-center justify-between text-[9px] font-semibold text-neutral-900">
            <span>9:41</span>
            <span className="flex items-center gap-1">●●● <span className="rounded-sm border border-neutral-900 px-1 text-[7px]">100</span></span>
          </div>
          {/* app header */}
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-5 w-5 rounded-full bg-violet-500" />
              <span className="text-[10px] font-semibold text-neutral-900">Untitled UI</span>
            </div>
            <span className="text-neutral-700">≡</span>
          </div>
          <div className="mt-3 text-[12px] font-bold text-neutral-900">Stats for Olivia Rhye</div>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-medium text-neutral-700 ring-1 ring-neutral-200">
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 align-middle" />
              Messages
            </span>
            <span className="rounded-md bg-violet-500 px-2 py-0.5 text-[9px] font-semibold text-white">Edit</span>
          </div>
          <hr className="my-3 border-neutral-200" />
          <div className="text-[11px] font-semibold text-neutral-900">Profile views</div>
          <div className="mt-2 inline-flex rounded-md bg-neutral-100 p-0.5 text-[9px] font-medium text-neutral-600">
            <span className="rounded bg-white px-2 py-0.5 text-neutral-900 shadow-sm">12 months</span>
            <span className="px-2 py-0.5">30 days</span>
            <span className="px-2 py-0.5">7 days</span>
          </div>
          <div className="mt-3 h-44 w-full">
            <svg viewBox="0 0 200 120" className="h-full w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="fillA" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 L8,90 L16,95 L24,80 L32,88 L40,70 L48,78 L56,55 L64,72 L72,48 L80,65 L88,40 L96,58 L104,35 L112,55 L120,42 L128,30 L136,48 L144,25 L152,40 L160,22 L168,38 L176,18 L184,32 L192,15 L200,28 L200,120 L0,120 Z"
                fill="url(#fillA)"
              />
              <polyline
                fill="none"
                stroke="#a78bfa"
                strokeWidth="1.4"
                points="0,100 8,90 16,95 24,80 32,88 40,70 48,78 56,55 64,72 72,48 80,65 88,40 96,58 104,35 112,55 120,42 128,30 136,48 144,25 152,40 160,22 168,38 176,18 184,32 192,15 200,28"
              />
              <polyline
                fill="none"
                stroke="#6d28d9"
                strokeWidth="1.4"
                points="0,110 10,95 20,100 30,85 40,95 50,80 60,90 70,68 80,82 90,60 100,75 110,55 120,68 130,50 140,62 150,46 160,55 170,40 180,52 190,35 200,42"
              />
            </svg>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function SignupSection() {
  return (
    <section className="bg-white py-14 md:py-20" id="about">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Be Among The First
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-neutral-500">
              Join creators, businesses, manufacturers and communities preparing
              for a new era of commerce.
            </p>
            <form className="mt-8 flex max-w-md items-center gap-3">
              <input
                type="email"
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
          </div>

          {/* Mobile: single phone, no absolute positioning */}
          <div className="relative flex justify-center md:hidden">
            <div className="absolute inset-x-0 top-4 bottom-4 -z-10 rounded-3xl bg-neutral-100/70" aria-hidden />
            <div className="py-6">
              <StatsPhone />
            </div>
          </div>

          {/* Desktop: overlapping phones */}
          <div className="relative hidden min-h-[480px] items-center justify-center md:flex">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-neutral-100/70" aria-hidden />
            <div className="absolute left-6 top-10">
              <StatsPhone pose="back" />
            </div>
            <div className="absolute right-6 top-2">
              <StatsPhone />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const columns: { title: string; links: string[] }[] = [
    {
      title: "Platform",
      links: ["CoSell", "CoCreate", "Missions", "Parcelzz", "CoHub", "Creator Fund"],
    },
    { title: "Company", links: ["About", "Vision", "Careers", "Contact"] },
    { title: "Community", links: ["Creators", "Businesses", "Partners", "Supporters"] },
  ];

  const Twitter = (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.9-2.6 1A4 4 0 0 0 12 9.4a11.4 11.4 0 0 1-8.3-4.2 4 4 0 0 0 1.2 5.4c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.7 3.3 4.1-.7.2-1.4.2-2.1.1.6 1.8 2.3 3.1 4.3 3.2A8 8 0 0 1 2 18.5 11.4 11.4 0 0 0 8.3 20c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2.1z" />
    </svg>
  );
  const Facebook = (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M22 12a10 10 0 1 0-11.5 9.9V15h-2.5v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12z" />
    </svg>
  );
  const Github = (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
    </svg>
  );
  const Peace = (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 12c0-3 2-5 4-5s4 2 4 5-2 5-4 5-4-2-4-5z" />
      <path d="M14 7c1-1 2-1.5 3-1.5M14 17c1 1 2 1.5 3 1.5" />
    </svg>
  );
  const Dribbble = (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M8 2.5c3 4 5 9 6 19M3 9c5 0 12 1 17 6M21 8c-4 1-10 1-16-1" />
    </svg>
  );

  return (
    <footer className="bg-brand-900 text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-4 md:py-16">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-6 text-brand-100/80">
            One trusted ecosystem connecting commerce, collaboration, trust and opportunity.
          </p>
          <div className="mt-6 flex items-center gap-4 text-brand-100/90">
            <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn"><Icon.Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Peace"><Peace className="h-5 w-5" /></a>
            <a href="#" aria-label="Dribbble"><Dribbble className="h-5 w-5" /></a>
          </div>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <div className="text-sm font-bold text-white">{c.title}</div>
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-brand-100/85 hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="bg-brand-950">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-brand-100/70 md:flex-row">
          <div>© 2026 MARKETTY. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <EcosystemSection />
        <TrustSection />
        <OpportunitiesSection />
        <ChoosePathSection />
        <CollaborativeSection />
        <TimelineSection />
        <BeyondSection />
        <SignupSection />
      </main>
      <Footer />
    </>
  );
}
