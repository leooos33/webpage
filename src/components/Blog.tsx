import { Link } from "react-router-dom";
import {
  Terminal,
  Clock,
  ArrowLeft,
  Brain,
  TrendingUp,
  Zap,
  Target,
  Lightbulb,
  Activity,
} from "lucide-react";

// ── Category config ───────────────────────────────────────────
const CATEGORIES: Record<string, { color: string; bg: string }> = {
  "COGNITIVE BIAS": { color: "#f472b6", bg: "rgba(244,114,182,0.08)" },
  NEUROSCIENCE: { color: "#818cf8", bg: "rgba(129,140,248,0.08)" },
  "HABIT FORMATION": { color: "#34d399", bg: "rgba(52,211,153,0.08)" },
  "BEHAVIORAL ECONOMICS": { color: "#fbbf24", bg: "rgba(251,191,36,0.08)" },
  "MARKET PSYCHOLOGY": { color: "#f87171", bg: "rgba(248,113,113,0.08)" },
  PERFORMANCE: { color: "#38bdf8", bg: "rgba(56,189,248,0.08)" },
};

// ── Blog data ─────────────────────────────────────────────────
interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

import type React from "react";

const POSTS: BlogPost[] = [
  {
    id: "brain-sabotages-trades",
    category: "COGNITIVE BIAS",
    title: "Why Your Brain Sabotages Your Best Trades",
    excerpt:
      "Anchoring bias, confirmation loops, and the illusion of control — how cognitive shortcuts turn disciplined traders into pattern-matching machines that optimize for feeling right instead of being right.",
    readTime: "8 MIN",
    date: "2026.02.10",
    featured: true,
    icon: Brain,
  },
  {
    id: "dopamine-loop",
    category: "NEUROSCIENCE",
    title: "The Dopamine Loop: From Espresso to DeFi",
    excerpt:
      "Your morning cortado and your yield farm check trigger the same neural pathway. Mapping the reward circuitry that keeps builders shipping at 3am.",
    readTime: "6 MIN",
    date: "2026.02.03",
    icon: Zap,
  },
  {
    id: "atomic-habits-builders",
    category: "HABIT FORMATION",
    title: "Atomic Habits for Protocol Builders",
    excerpt:
      "Deconstructing James Clear's methodology through a DeFi lens. The compound interest of 1% daily improvements applied to smart contract shipping velocity.",
    readTime: "7 MIN",
    date: "2026.01.28",
    icon: Target,
  },
  {
    id: "loss-aversion-lp",
    category: "BEHAVIORAL ECONOMICS",
    title: "Loss Aversion in Liquidity Provision",
    excerpt:
      "Why LPs hold underwater positions 2.5x longer than profitable ones. Kahneman's prospect theory applied to AMM impermanent loss psychology.",
    readTime: "9 MIN",
    date: "2026.01.20",
    icon: TrendingUp,
  },
  {
    id: "diamond-hands-psychology",
    category: "MARKET PSYCHOLOGY",
    title: "The Psychology of Diamond Hands",
    excerpt:
      "Identity-based investing, tribal reinforcement, and the sunk cost escalation that transforms a position into a personality trait.",
    readTime: "5 MIN",
    date: "2026.01.15",
    icon: Lightbulb,
  },
  {
    id: "flow-states-solidity",
    category: "PERFORMANCE",
    title: "Flow States in Deep Solidity Sessions",
    excerpt:
      "Csikszentmihalyi's flow model mapped to smart contract development. Why the EVM's determinism creates ideal conditions for deep work.",
    readTime: "7 MIN",
    date: "2026.01.08",
    icon: Activity,
  },
];

// ── Filter tags ───────────────────────────────────────────────
const ALL_CATEGORIES = Object.keys(CATEGORIES);

// ── Sub-components ────────────────────────────────────────────

function CategoryTag({ category }: { category: string }) {
  const style = CATEGORIES[category] || {
    color: "#9ca3af",
    bg: "rgba(156,163,175,0.08)",
  };
  return (
    <span
      className="inline-block text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 border"
      style={{
        color: style.color,
        backgroundColor: style.bg,
        borderColor: `${style.color}33`,
      }}
    >
      {category}
    </span>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  const PostIcon = post.icon;
  return (
    <article className="border border-pink-500/30 bg-[#080808] hover:border-pink-500/60 transition-all group cursor-pointer">
      <div className="flex flex-col md:flex-row">
        {/* Visual panel */}
        <div className="md:w-72 flex-shrink-0 bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/5">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500/10 blur-3xl rounded-full" />
            <PostIcon
              size={80}
              className="text-pink-500/40 group-hover:text-pink-500/60 transition-colors relative z-10"
            />
          </div>
          <div className="absolute top-3 left-3">
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-green-500 font-bold">
              <span className="w-1.5 h-1.5 bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e] inline-block" />
              FEATURED
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <CategoryTag category={post.category} />
            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide mt-3 group-hover:text-pink-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-gray-400 font-mono leading-relaxed mt-3">
              {post.excerpt}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5">
            <span className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest">
              <Clock size={10} /> {post.readTime}
            </span>
            <span className="text-[10px] text-gray-600">•</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
              {post.date}
            </span>
            <span className="ml-auto text-[10px] text-pink-400 uppercase tracking-widest font-bold group-hover:text-pink-300 transition-colors">
              ACCESS_FILE →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const PostIcon = post.icon;
  return (
    <article className="border border-white/5 bg-[#080808] hover:bg-[#0a0a0a] hover:border-white/15 transition-all group cursor-pointer flex flex-col">
      {/* Icon header */}
      <div className="h-28 bg-[#060606] border-b border-white/5 flex items-center justify-center relative overflow-hidden">
        <PostIcon
          size={40}
          className="text-gray-700 group-hover:text-gray-500 transition-colors"
        />
        <div className="absolute top-2 right-2">
          <CategoryTag category={post.category} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xs font-bold text-white uppercase tracking-wide group-hover:text-pink-400 transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-[11px] text-gray-500 font-mono leading-relaxed mt-2 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/5">
          <span className="flex items-center gap-1 text-[9px] text-gray-600 uppercase tracking-widest">
            <Clock size={9} /> {post.readTime}
          </span>
          <span className="text-[9px] text-gray-700">•</span>
          <span className="text-[9px] text-gray-600 uppercase tracking-widest font-mono">
            {post.date}
          </span>
        </div>
      </div>
    </article>
  );
}

// ── Main Component ────────────────────────────────────────────

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-pink-500/30 selection:text-white">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* ═══ HEADER BAR ═══ */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3 text-[10px] text-gray-600 uppercase tracking-widest font-mono">
            <span className="text-pink-500">PSYCH://0.8.1.4</span>
            <span>■ SYS_ONLINE</span>
          </div>
          <div className="text-[10px] text-gray-600 uppercase tracking-widest font-mono">
            SERVER_TIME: {new Date().toISOString().slice(0, 10)}
          </div>
        </div>

        {/* ═══ NAV ═══ */}
        <div className="border border-white/10 bg-[#080808] mb-8">
          <div className="flex items-center justify-between px-4 py-3">
            <Link
              to="/"
              className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
            >
              <ArrowLeft size={12} />
              FOUNDER
            </Link>
            <div className="flex items-center gap-4">
              {ALL_CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="hidden lg:block text-[9px] text-gray-600 uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ═══ TITLE ═══ */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Terminal size={16} className="text-pink-500" />
            <h1 className="text-2xl md:text-3xl font-light text-white tracking-tight">
              {">"} INDEX_FEED
            </h1>
          </div>
          <p className="text-xs text-gray-600 font-mono mt-2 ml-7 max-w-lg">
            Decentralized psychology repository for the modern digital native.
            Analyzing human behavior through data-driven methodologies.
          </p>
        </div>

        {/* ═══ FEATURED ═══ */}
        <div className="mb-8">
          <FeaturedCard post={POSTS[0]} />
        </div>

        {/* ═══ RECENT LOGS ═══ */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-bold tracking-widest text-white uppercase flex items-center gap-2">
              <span className="text-gray-500">{">"}</span>
              RECENT_LOGS
            </h2>
            <span className="text-[9px] text-gray-600 uppercase tracking-widest font-mono">
              DISPLAYING 1–5 OF {POSTS.length - 1} ENTRIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {POSTS.slice(1).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* ═══ LOAD MORE ═══ */}
        <div className="flex justify-center mb-12">
          <button className="border border-white/10 bg-[#080808] hover:bg-white/[0.04] hover:border-white/20 transition-all px-8 py-3 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            [ LOAD_MORE_DATA ] ↓
          </button>
        </div>

        {/* ═══ FOOTER ═══ */}
        <div className="border-t border-white/5 pt-6 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[10px] text-gray-700 uppercase tracking-widest font-mono">
            PSYCH://LOG — Behavioral analysis for builders
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-[10px] text-gray-600 uppercase tracking-widest hover:text-white transition-colors"
            >
              /FOUNDER
            </Link>
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">
              /ARCHIVE
            </span>
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">
              /MANIFESTO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
