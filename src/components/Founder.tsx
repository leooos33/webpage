import { useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  Twitter,
  Mail,
  MapPin,
  GraduationCap,
} from "lucide-react";
import useInView from "../hooks/useInView";
import founderPhoto from "../assets/AV.png";

// ── Grain overlay ─────────────────────────────────────────────
const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`;
const Grain = () => (
  <div
    className="pointer-events-none absolute inset-0 opacity-25"
    style={{ backgroundImage: GRAIN_SVG, backgroundSize: "192px 192px" }}
  />
);

// ── Telegram icon ─────────────────────────────────────────────
function TelegramIcon({ size = 12, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

// ── Section label ─────────────────────────────────────────────
function SectionLabel({ title, inView }: { title: string; inView: boolean }) {
  return (
    <div
      className="flex items-center gap-3 mb-6 transition-all duration-500"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(10px)" }}
    >
      <span className="font-jbm text-[#333] text-[11px]">|—</span>
      <span className="font-jbm text-[12px] tracking-[0.28em] uppercase text-[#333]">{title}</span>
      <span className="flex-1 h-px bg-[#141414]" />
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────
const FOUNDER = {
  name: "Yevhen",
  tagline: "Building RLD: On-chain interest rate derivatives.",
  location: "Krakow, Poland",
  email: "yevhen@rld.fi",
  bio: [
    "DeFi builder focused on on-chain mechanism design and autonomous R&D.",
    "Currently building RLD — non-custodial protocol for interest-rate swaps, synthetic bonds and parametric credit defaults swaps.",
    "Passionate about analytical psychology, specialty coffee, and cooking."

  ],
  socials: [
    { label: "TWITTER", href: "https://x.com/yevhenx", Icon: Twitter },
    { label: "GITHUB", href: "https://github.com/yevhenx33", Icon: Github },
    { label: "TELEGRAM", href: "https://t.me/yevhenx", Icon: TelegramIcon },
  ],
  experience: [
    { role: "Founder", org: "RLD Protocol", period: "2025 — Present", description: "On-chain synthetic bonds and credit-default swaps on Uniswap V4." },
    { role: "Founder", org: "Lumis", period: "2022 — 2024", description: "Structured Liquidity Protocol - IL-hedged LP vaults on Uniswap V3 with Squeeth power perpetuals." },
    { role: "Project Owner", org: "Minter", period: "2019 — 2020", description: "RPC provider infrastructure and node operations." },
    { role: "Quant", org: "JMT", period: "2018 — 2019", description: "Quantitative strategies for perpetual futures market-making." },
    { role: "Analyst", org: "JMT", period: "2017 — 2018", description: "Financial analysis and research." },
  ],
  publications: [
    { title: "RLD: Rate-Level Derivatives", venue: "Whitepaper", date: "2026", url: "https://docs.rld.fi/research/executive-summary" },
    { title: "PDLP: Perpetual Demand Lending Pool", venue: "Whitepaper", date: "2025", url: "https://secretive-glass-533.notion.site/PDLP-Perpetual-Demand-Lending-Pool-fc7c2f1bc76a827b8259817ab6c88c4b?pvs=73" },
    { title: "Hedging IL with Uniswap V4 Hooks & Euler", venue: "Twitter / X", date: "2025", url: "https://x.com/yevhenx/status/1877623802672058493" },
    { title: "Atomic Derivatives Protocol", venue: "Whitepaper", date: "2024", url: "https://drive.google.com/file/d/1Iy9P8Mm0cGkNz4I9I8VLSVptVHNyUzXe" },
    { title: "Hedgehog V2", venue: "Medium", date: "2023", url: "https://medium.com/@yevhenx/hedgehog-v2-fd3f958af97e" },
    { title: "Hedgehog LP Strategy", venue: "Medium", date: "2022", url: "https://medium.com/@yevhenx/hedgehog-lp-strategy-ae43f339beb7" },
    { title: "Hedging Uniswap V3 with Squeeth", venue: "Medium", date: "2022", url: "https://medium.com/@yevhenx/hedging-uniswap-v3-with-squeeth-c6c0a8fc5572" },
  ],
  grants: [
    { title: "Hook Product Accelerator", grantor: "Atrium Academy & Uniswap Foundation", date: "2025", url: "https://x.com/lumisfi_/status/1965408833892950449" },
    { title: "Encode x Ethena Accelerator", grantor: "Encode Club & Ethena", date: "2025", url: "https://x.com/lumisfi_/status/1901690855314149402" },
    { title: "Morpho DAO Grant", grantor: "Morpho DAO", date: "2025", url: "https://x.com/lumisfi_/status/1891918737315397977" },
    { title: "Uniswap V4 Audit Grant — Cohort 1", grantor: "Uniswap Foundation", date: "2025", url: "https://x.com/lumisfi_/status/1882154946952671418" },
    { title: "Uniswap Foundation Prize — UniCord", grantor: "Uniswap Foundation", date: "2024", url: "https://x.com/AtriumAcademy/status/1838997297507574176" },
    { title: "Brevis Prize — Lumis", grantor: "Brevis", date: "2024", url: "https://x.com/AtriumAcademy/status/1803883715279360211" },
    { title: "Opyn Dev Grant — Hedgehog", grantor: "Opyn", date: "2022", url: "https://x.com/lumisfi_/status/1540025855476391936" },
    { title: "Hack DeFi with Wintermute", grantor: "Encode Club & Wintermute", date: "2021", url: "https://www.blog.encode.club/hack-defi-with-wintermute-finale-prizewinners-and-summary-3a5de6e92967" },
  ],
};

// ── Main Component ────────────────────────────────────────────
export default function Founder() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);

  const [expRef, expIn] = useInView(0.05);
  const [pubsRef, pubsIn] = useInView(0.05);

  return (
    <div className="h-full w-full bg-[#050505] font-jbm selection:bg-white/10 selection:text-white">

      <div className="relative z-10 max-w-[1100px] bg-[#050505] w-full h-full mx-auto px-6 md:px-10 pt-12 md:pt-20">

        {/* ═══ ROW 1: IDENTITY (left) + ABOUT (right) ═══ */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 mb-6 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          {/* ── Identity Card ── */}
          <div className="border border-[#141414] bg-[#080808] flex flex-col">
            <div className="bg-[#0a0a0a] overflow-hidden">
              <img src={founderPhoto} alt={FOUNDER.name} className="w-full object-cover" />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h1
                className="font-sg font-light text-white tracking-[-0.02em] mb-1"
                style={{ fontSize: "clamp(26px, 3vw, 34px)" }}
              >
                {FOUNDER.name}
              </h1>
              <div className="font-jbm text-[12px] text-[#666]  uppercase mt-0.5 mb-3">
                {FOUNDER.tagline}
              </div>

              <div className="space-y-1.5 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap size={11} className="text-[#333] flex-shrink-0" />
                  <span className="font-jbm text-[12px] text-[#444]">B.A. Mechanical Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={11} className="text-[#333] flex-shrink-0" />
                  <span className="font-jbm text-[12px] text-[#444]">M.A. Economics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={11} className="text-[#333] flex-shrink-0" />
                  <span className="font-jbm text-[12px] text-[#444]">{FOUNDER.email}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[#141414]">
                {FOUNDER.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-2.5 py-1 border border-[#1e1e1e]
                               hover:border-[#444] transition-all group"
                  >
                    <s.Icon size={11} className="text-[#444] group-hover:text-white transition-colors" />
                    <span className="font-jbm text-[9px] font-bold tracking-[0.2em] uppercase text-[#444] group-hover:text-white transition-colors">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── About ── */}
          <div className="border border-[#141414] bg-[#080808] p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-jbm text-[#333] text-[11px]">|—</span>
              <span className="font-jbm text-[12px] tracking-[0.28em] uppercase text-[#333]">About</span>
              <span className="flex-1 h-px bg-[#141414]" />
            </div>
            <div className="space-y-5 flex-1 py-2">
              {FOUNDER.bio.map((p, i) => (
                <p key={i} className="font-jbm text-[12px] text-[#888] leading-[1.85]">{p}</p>
              ))}
            </div>

            {/* Grants as compact list inside About */}
            <div className="mt-6 pt-5 border-t border-[#141414]">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-jbm text-[#333] text-[11px]">|—</span>
                <span className="font-jbm text-[11px] tracking-[0.28em] uppercase text-[#333]">Grants & Awards</span>
              </div>
              <div className="space-y-0 divide-y divide-[#111]">
                {FOUNDER.grants.map((g, i) => (
                  <a
                    key={i}
                    href={g.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-baseline justify-between gap-4 py-2 group"
                  >
                    <div className="flex items-baseline gap-3 min-w-0">
                      <span className="font-jbm text-[9px] text-[#2a2a2a] tracking-widest flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-jbm text-[11px] text-[#888] group-hover:text-white transition-colors truncate">
                        {g.title}
                      </span>
                    </div>
                    <span className="font-jbm text-[10px] text-[#333] flex-shrink-0">{g.date}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══ ROW 2: EXPERIENCE ═══ */}
        <section className="mb-6" ref={expRef}>
          <SectionLabel title="Experience" inView={expIn} />
          <div
            className="border border-[#141414] bg-[#080808] divide-y divide-[#111] transition-all duration-[600ms]"
            style={{ opacity: expIn ? 1 : 0, transform: expIn ? "translateY(0)" : "translateY(16px)" }}
          >
            {FOUNDER.experience.map((exp, i) => (
              <div key={i} className="flex items-baseline gap-6 px-6 py-4">
                <span className="font-jbm text-[10px] text-[#2a2a2a] tracking-widest flex-shrink-0 w-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-sg font-light text-white/90 text-[13px] tracking-[-0.01em]">
                      {exp.role}
                    </span>
                    <span className="font-jbm text-[10px] text-[#444] tracking-[0.12em] uppercase">
                      {exp.org}
                    </span>
                  </div>
                  <p className="font-jbm text-[11px] text-[#555] leading-[1.7] mt-0.5">{exp.description}</p>
                </div>
                <span className="font-jbm text-[10px] text-[#333] tracking-[0.1em] flex-shrink-0 hidden sm:block">
                  {exp.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ ROW 3: PUBLICATIONS ═══ */}
        <section className="mb-16" ref={pubsRef}>
          <SectionLabel title="Publications" inView={pubsIn} />
          <div
            className="border border-[#141414] bg-[#080808] divide-y divide-[#111] transition-all duration-[600ms]"
            style={{ opacity: pubsIn ? 1 : 0, transform: pubsIn ? "translateY(0)" : "translateY(16px)" }}
          >
            {FOUNDER.publications.map((pub, i) => (
              <a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline gap-6 px-6 py-4 group"
              >
                <span className="font-jbm text-[10px] text-[#2a2a2a] tracking-widest flex-shrink-0 w-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 flex items-baseline gap-3 min-w-0 flex-wrap">
                  <span className="font-sg font-light text-white/90 text-[13px] tracking-[-0.01em] group-hover:text-[#ccc] transition-colors">
                    {pub.title}
                  </span>
                  <span className="font-jbm text-[9px] text-[#444] tracking-[0.18em] uppercase">
                    {pub.venue}
                  </span>
                  <ExternalLink size={10} className="text-[#222] group-hover:text-[#555] transition-colors" />
                </div>
                <span className="font-jbm text-[10px] text-[#333] tracking-[0.1em] flex-shrink-0 hidden sm:block">
                  {pub.date}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* ═══ FOOTER ═══ */}
      <div className="relative z-10 border-t border-[#111]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-jbm text-[11px] tracking-[0.3em] uppercase text-white font-bold">RLD</span>
            <span className="font-jbm text-[9px] tracking-[0.18em] uppercase text-[#444]">Founder Page</span>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: "X/Twitter", href: "https://x.com/yevhenx" },
              { label: "GitHub", href: "https://github.com/yevhenx33" },
              { label: "Protocol", href: "https://rld.fi" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-jbm text-[10px] tracking-[0.15em] uppercase text-[#444] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
