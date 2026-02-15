import type React from "react";
import {
  Terminal,
  ExternalLink,
  Github,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  BookOpen,
  GraduationCap,
  Award,
} from "lucide-react";

// Custom Telegram branded icon
function TelegramIcon({
  size = 12,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

// ── Founder photo ─────────────────────────────────────────────
import founderPhoto from "../assets/AV_PIC.jpg";
const FOUNDER_PHOTO = founderPhoto;

// ── Founder data ──────────────────────────────────────────────
const FOUNDER = {
  name: "Yevhen",
  title: "Founder",
  tagline: "Building RLD: fixed-rate layer for DeFi",
  location: "Krakow, Poland",
  email: "yevhen@rld.fi",
  bio: [
    "DeFi builder focused on structured products, liquidity infrastructure, and on-chain derivatives design.",
    "Pioneered impermanent-loss-hedged LP vaults using Squeeth power perpetuals on Uniswap V3 and Uniswap V4 hook-based systems. Received grants and hackathon prizes from the Uniswap Foundation, Morpho DAO, Ethena, Brevis, Encode Club, and Opyn  — spanning security audit funding, accelerator programs, and development grants. VC funding from Synergis Capital.",
    "Now building RLD Protocol — a fixed-rate layer for DeFi that introduces on-chain synthetic bonds and parametric credit-default swaps on Uniswap V4.",
    "Outside of DeFi — love specialty espresso, psychology, and squash.",
  ],
  socials: [
    { label: "TWITTER", href: "https://x.com/yevhenx", Icon: Twitter },
    { label: "GITHUB", href: "https://github.com/leooos33", Icon: Github },
    { label: "TELEGRAM", href: "https://t.me/yevhenx", Icon: TelegramIcon },
  ],
  experience: [
    {
      role: "Founder",
      org: "RLD Protocol",
      period: "2025 — Present",
      description:
        "On-chain synthetic bonds and credit-default swaps on Uniswap V4.",
    },
    {
      role: "Founder",
      org: "Lumis",
      period: "2023 — 2024",
      description: "Structured Liquidity Protocol.",
    },
    {
      role: "Founder",
      org: "Liqui Hedgehog",
      period: "2022 — 2023",
      description:
        "An ETH-vault that provides liquidity on Uniswap V3 and hedges its impermanent loss with power perpetuals.",
    },
    {
      role: "Project Owner",
      org: "Minter",
      period: "2019 — 2020",
      description: "RPC provider infrastructure and node operations.",
    },
    {
      role: "Quant",
      org: "JMT",
      period: "2018 — 2019",
      description:
        "Quantitative strategies for perpetual futures market-making.",
    },
    {
      role: "Analyst",
      org: "JMT",
      period: "2017 — 2018",
      description: "Financial analysis and research.",
    },
  ],
  publications: [
    {
      title: "RLD: Rate-Level Derivatives",
      venue: "Whitepaper",
      date: "2026",
      url: "/RLD.pdf",
      description:
        "On-chain synthetic bonds and credit-default swaps. Introduces a derivative structure that tracks lending pool interest rates, enabling fixed-yield bonds via TWAMM unwinds and parametric CDS insurance — all unified in a single Uniswap V4 liquidity layer.",
    },
    {
      title: "PDLP: Perpetual Demand Lending Pool",
      venue: "Whitepaper",
      date: "2025",
      url: "https://lumisfi.notion.site/pdlp",
      description:
        "A synchronized spot + perpetual futures DEX with built-in dynamic LP hedging and MEV protection. Derives a closed-form mean-variance hedge using Euler lending loops, achieving convex volatility harvesting with constant delta for LPs.",
    },
    {
      title: "Hedging Impermanent Loss with Uniswap V4 Hooks & Euler",
      venue: "Twitter / X",
      date: "2025",
      url: "https://x.com/yevhenx/status/1877623802672058493",
      description:
        "Synthetic ETH vault combining leveraged long 3x and short 2x positions via Euler loops to provide liquidity for ETH-USDC, earning ~3× more trading fees while maintaining 1x net exposure. Backtested 69.8% vs ETH over 2 years.",
    },
    {
      title: "Atomic Derivatives Protocol",
      venue: "Whitepaper",
      date: "2024",
      url: "/Atomic_Derivatives_Protocol.pdf",
      description:
        "Conditional liquidity protocol leveraging intent-centric architecture to target arbitrary portfolio profiles — from leveraged tokens without liquidations to option-like payoffs — across CoW Protocol, Uniswap V4 hooks, and solver networks.",
    },
    {
      title: "Hedgehog V2",
      venue: "Medium",
      date: "2023",
      url: "https://medium.com/@yevhenx/hedgehog-v2-fd3f958af97e",
      description:
        "Refined automated liquidity management and hedging mechanisms based on performance data and learnings from the initial Hedgehog vault implementation.",
    },
    {
      title: "Hedgehog LP Strategy",
      venue: "Medium",
      date: "2022",
      url: "https://medium.com/@yevhenx/hedgehog-lp-strategy-ae43f339beb7",
      description:
        "Automated on-chain vault that replicates an ETH portfolio by providing concentrated liquidity on Uniswap V3 and hedging impermanent loss to target growth in ETH terms.",
    },
    {
      title: "Hedging Uniswap V3 with Squeeth",
      venue: "Medium",
      date: "2022",
      url: "https://medium.com/@yevhenx/hedging-uniswap-v3-with-squeeth-c6c0a8fc5572",
      description:
        "Delta-neutral and IL-hedged LP strategies for Uniswap V3 concentrated liquidity using Squeeth (power perpetuals) to neutralize directional and convexity risk.",
    },
  ],
  skills: [
    "Solidity",
    "DeFi Protocol Design",
    "Uniswap V4 Hooks",
    "TWAMM",
    "Smart Contract Security",
    "Mechanism Design",
    "Quantitative Finance",
    "Rust",
    "React",
    "Python",
  ],
  grants: [
    {
      grantor: "Atrium Academy & Uniswap Foundation",
      title: "Hook Product Accelerator",
      date: "2025",
      url: "https://x.com/lumisfi_/status/1965408833892950449",
      description:
        "Selected as one of 11 teams for a 6-week intensive accelerator focused on deep product development for Uniswap V4, culminating in a Demo Day presentation.",
    },
    {
      grantor: "Encode Club & Ethena",
      title: "Encode x Ethena Accelerator",
      date: "2025",
      url: "https://x.com/lumisfi_/status/1901690855314149402",
      description:
        "Top 2 team in an 8-week accelerator program for the Ethena ecosystem with $15k in milestone-based funding and a $35k prize pool.",
    },
    {
      grantor: "Morpho DAO",
      title: "Morpho DAO Grant",
      date: "2025",
      url: "https://x.com/lumisfi_/status/1891918737315397977",
      description:
        "Ranked #1 by community votes and received a pilot grant for developing an optimized stablecoin yield product powered by Uniswap V4 hooks.",
    },
    {
      grantor: "Uniswap Foundation",
      title: "Uniswap V4 Security Audit Grant — Cohort 1",
      date: "2025",
      url: "https://x.com/lumisfi_/status/1882154946952671418",
      description:
        "One of 9 teams selected to receive a 100% subsidized top-tier security audit for Uniswap V4 hooks ahead of mainnet launch.",
    },
    {
      grantor: "Uniswap Foundation",
      title: "Uniswap Foundation Prize — UniCord",
      date: "2024",
      url: "https://x.com/AtriumAcademy/status/1838997297507574176",
      description:
        "Awarded for UniCord, a NoOp hook that maximizes stablecoin pool yield by deploying idle liquidity to Morpho with on-demand withdrawals for capital-efficient trading.",
    },
    {
      grantor: "Brevis",
      title: "Brevis Prize — Lumis",
      date: "2024",
      url: "https://x.com/AtriumAcademy/status/1803883715279360211",
      description:
        "Awarded at the Atrium Academy Uniswap Hook hackathon for Lumis, featuring hook-based options and Liquidity-as-a-Service leveraging Brevis ZK-proofs for data-driven yield optimization.",
    },
    {
      grantor: "Opyn",
      title: "Opyn Development Grant — Hedgehog",
      date: "2022",
      url: "https://x.com/lumisfi_/status/1540025855476391936",
      description:
        "Development grant to launch Hedgehog — an automated strategy providing liquidity on Uniswap V3 and hedging impermanent loss using Squeeth (power perpetuals).",
    },
    {
      grantor: "Encode Club & Wintermute",
      title: "Hack DeFi with Wintermute — Conditional.fi",
      date: "2021",
      url: "https://www.blog.encode.club/hack-defi-with-wintermute-finale-prizewinners-and-summary-3a5de6e92967",
      description:
        "Runner-up prize ($1,000) for Conditional.fi — a conditional liquidity protocol enabling market makers to set up arbitrary payoff curves.",
    },
  ],
};

// ── Sub-components ────────────────────────────────────────────

function TimelineItem({
  role,
  org,
  period,
  description,
}: {
  role: string;
  org: string;
  period: string;
  description: string;
}) {
  return (
    <div className="relative pl-6 pb-8 last:pb-0 group">
      <div className="absolute left-0 top-1.5 bottom-0 w-px bg-white/10 group-last:bg-transparent" />
      <div className="absolute left-[-3px] top-1.5 w-[7px] h-[7px] bg-pink-500 shadow-[0_0_8px_#ec4899]" />
      <div className="space-y-1">
        <div className="text-xs font-bold text-white uppercase tracking-wide">
          {role}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-pink-400 uppercase tracking-widest font-bold">
            {org}
          </span>
          <span className="text-[10px] text-gray-600">•</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">
            {period}
          </span>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed mt-2 font-mono">
          {description}
        </p>
      </div>
    </div>
  );
}

function PanelHeader({
  icon: Icon,
  title,
  indicator,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  indicator?: boolean;
}) {
  return (
    <div className="p-4 border-b border-white/10 bg-[#0a0a0a] flex justify-between items-center">
      <h3 className="text-xs font-bold tracking-widest text-white uppercase flex items-center gap-2">
        <Icon size={14} className="text-gray-500" />
        {title}
      </h3>
      {indicator && (
        <div className="w-1.5 h-1.5 bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────

export default function Founder() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-pink-500/30 selection:text-white">
      <div className="max-w-[750px] mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* ═══ IDENTITY CARD — photo left, info right ═══ */}
        <div className="border border-white/10 bg-[#080808] mb-8">
          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="md:w-48 lg:w-56 flex-shrink-0 bg-[#0a0a0a] overflow-hidden">
              {FOUNDER_PHOTO ? (
                <img
                  src={FOUNDER_PHOTO}
                  alt={FOUNDER.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full aspect-square flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-gray-600">
                    PHOTO
                  </span>
                </div>
              )}
            </div>

            {/* Identity + Contact + Socials */}
            <div className="flex-1 flex flex-col">
              {/* Name / Title / Tagline */}
              <div className="p-6 pb-4">
                <h1 className="text-3xl font-light text-white tracking-tight">
                  {FOUNDER.name}
                </h1>
                <div className="text-[10px] text-pink-400 uppercase tracking-widest font-bold mt-1">
                  {FOUNDER.title}
                </div>
                <div className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">
                  {FOUNDER.tagline}
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <GraduationCap
                    size={12}
                    className="text-gray-600 flex-shrink-0"
                  />
                  <span className="text-[10px] text-gray-500 tracking-wide">
                    B.A. in Mechanical Engineering, M.A. in Economics
                  </span>
                </div>
              </div>

              {/* Contact row */}
              <div className="border-t border-white/5 px-6 py-3 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-gray-600" />
                  <span className="text-xs font-mono text-[#e0e0e0]">
                    {FOUNDER.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-gray-600" />
                  <span className="text-xs font-mono text-[#e0e0e0]">
                    {FOUNDER.email}
                  </span>
                </div>
              </div>

              {/* Social links row */}
              <div className="border-t border-white/5 px-6 py-3 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {FOUNDER.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                    >
                      <s.Icon
                        size={12}
                        className="text-gray-500 group-hover:text-white transition-colors"
                      />
                      <span className="text-[9px] font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">
                        {s.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ ABOUT ═══ */}
        <div className="border border-white/10 bg-[#080808] mb-8">
          <PanelHeader icon={Terminal} title="ABOUT" indicator />
          <div className="p-6 space-y-4">
            {FOUNDER.bio.map((p, i) => (
              <p
                key={i}
                className="text-sm text-gray-400 leading-relaxed font-mono"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* ═══ EXPERIENCE ═══ */}
        <div className="border border-white/10 bg-[#080808] mb-8">
          <PanelHeader icon={Calendar} title="EXPERIENCE" />
          <div className="p-6 md:p-8">
            {FOUNDER.experience.map((exp, i) => (
              <TimelineItem key={i} {...exp} />
            ))}
          </div>
        </div>

        {/* ═══ GRANTS ═══ */}
        <div className="border border-white/10 bg-[#080808] mb-8">
          <PanelHeader icon={Award} title="GRANTS" />
          <div className="p-6 space-y-4">
            {FOUNDER.grants.map((grant, i) => (
              <a
                key={i}
                href={grant.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/15 transition-all p-4 group"
              >
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white uppercase tracking-wide group-hover:text-pink-400 transition-colors flex items-center gap-2">
                    {grant.title}
                    <ExternalLink
                      size={10}
                      className="text-gray-600 group-hover:text-pink-400 transition-colors"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-pink-400 uppercase tracking-widest font-bold">
                      {grant.grantor}
                    </span>
                    <span className="text-[10px] text-gray-600">•</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                      {grant.date}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-mono leading-relaxed mt-1">
                    {grant.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ═══ PUBLICATIONS ═══ */}
        <div className="border border-white/10 bg-[#080808] mb-8">
          <PanelHeader icon={BookOpen} title="PUBLICATIONS" />
          <div className="p-6 space-y-4">
            {FOUNDER.publications.map((pub, i) => (
              <a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/15 transition-all p-4 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <div className="text-xs font-bold text-white uppercase tracking-wide group-hover:text-pink-400 transition-colors flex items-center gap-2">
                      {pub.title}
                      <ExternalLink
                        size={10}
                        className="text-gray-600 group-hover:text-pink-400 transition-colors"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-pink-400 uppercase tracking-widest font-bold">
                        {pub.venue}
                      </span>
                      <span className="text-[10px] text-gray-600">•</span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                        {pub.date}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 font-mono leading-relaxed mt-1">
                      {pub.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
