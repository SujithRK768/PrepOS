"use client";

import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";

const mockReadinessData = [
  { subject: "DSA", score: 88, fullMark: 100 },
  { subject: "System Design", score: 76, fullMark: 100 },
  { subject: "Communication", score: 90, fullMark: 100 },
  { subject: "Code Speed", score: 71, fullMark: 100 },
  { subject: "CS Fundamentals", score: 84, fullMark: 100 },
];

const mockCompanyTierScores = [
  { tier: "FAANG", score: 82 },
  { tier: "Fintech", score: 85 },
  { tier: "Product", score: 88 },
  { tier: "Service", score: 92 },
];

const tierColors: Record<string, string> = {
  FAANG: "#ef4444",
  Fintech: "#f59e0b",
  Product: "#3b82f6",
  Service: "#10b981",
};

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [readinessData, setReadinessData] = useState(mockReadinessData);
  const [tierScores, setTierScores] = useState(mockCompanyTierScores);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => setLoading(false), 500);
  }, []);

  const overallScore =
    readinessData.reduce((sum, item) => sum + item.score, 0) / readinessData.length;

  const getReadinessLabel = (score: number): string => {
    if (score >= 85) return "Excellent";
    if (score >= 75) return "Strong";
    if (score >= 60) return "Moderate";
    if (score >= 45) return "Developing";
    return "Needs Work";
  };

  const getReadinessColor = (score: number): string => {
    if (score >= 85) return "bg-emerald-500";
    if (score >= 75) return "bg-sky-500";
    if (score >= 60) return "bg-amber-500";
    return "bg-red-500";
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 p-8 text-white">
        <div className="mx-auto max-w-7xl animate-pulse space-y-4">
          <div className="h-10 w-64 rounded-lg bg-slate-800" />
          <div className="h-96 rounded-lg bg-slate-800" />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-sky-400">PrepOS</p>
            <h1 className="text-4xl font-bold tracking-tight">Placement Readiness Dashboard</h1>
          </div>

          <div className={`rounded-2xl px-6 py-3 text-center ${getReadinessColor(overallScore)}`}>
            <p className="text-xs uppercase tracking-widest font-medium">Overall Score</p>
            <p className="text-3xl font-bold">{overallScore.toFixed(1)}</p>
            <p className="text-xs font-medium mt-1">{getReadinessLabel(overallScore)}</p>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Skill Radar Chart */}
          <div className="lg:col-span-2 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <h2 className="mb-6 text-xl font-semibold">Skill Benchmarks</h2>
            <div className="h-[420px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={readinessData}>
                  <PolarGrid stroke="#334155" strokeDasharray="0" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#cbd5e1", fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fill: "#64748b", fontSize: 10 }}
                  />
                  <Radar
                    name="Your Score"
                    dataKey="score"
                    stroke="#38bdf8"
                    fill="#38bdf8"
                    fillOpacity={0.4}
                    dot={{ fill: "#38bdf8", r: 4 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                    formatter={(value) => `${value}/100`}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Strengths */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <h3 className="mb-4 text-lg font-semibold">Top Strengths</h3>
              <ul className="space-y-3">
                {[
                  "Strong communication",
                  "Excellent DSA skills",
                  "Quick problem solver",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus Areas */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <h3 className="mb-4 text-lg font-semibold">Focus Areas</h3>
              <ul className="space-y-3">
                {[
                  "System design depth",
                  "Coding speed under pressure",
                  "Edge case handling",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-xs text-amber-400">
                      !
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Company Tier Scores */}
        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
          <h2 className="mb-6 text-xl font-semibold">Company Tier Readiness</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockCompanyTierScores}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="tier" tick={{ fill: "#cbd5e1" }} />
                <YAxis domain={[0, 100]} tick={{ fill: "#64748b" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                  formatter={(value) => `${value}/100`}
                />
                <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                  {mockCompanyTierScores.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={tierColors[entry.tier] || "#38bdf8"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Tier Cards */}
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {mockCompanyTierScores.map((tier) => (
              <div
                key={tier.tier}
                className="rounded-2xl border border-slate-800 bg-slate-800/50 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-200">{tier.tier}</span>
                  <span className={`rounded-lg ${getReadinessColor(tier.score)} px-2 py-1 text-xs font-bold`}>
                    {tier.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="/interview"
            className="rounded-lg bg-sky-500 px-6 py-3 font-medium text-white hover:bg-sky-400 transition"
          >
            Start Mock Interview
          </a>
          <a
            href="/analytics"
            className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-slate-100 hover:bg-slate-700 transition"
          >
            View Analytics
          </a>
        </div>
      </div>
    </main>
  );
}