"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

// Mock scorecard data
const mockScorecard = {
  sessionId: "sess_xyz123",
  candidateId: "cand_456",
  duration: 28,
  questionsAsked: 3,
  overallScore: 84.5,
  technicalAccuracy: {
    correctness: 88,
    approach: 82,
    codeQuality: 86,
    edgeCaseHandling: 76,
    timeComplexity: 90,
    spaceComplexity: 78,
  },
  communication: {
    clarity: 87,
    problemUnderstanding: 89,
    articulation: 84,
    collaboration: 82,
  },
  strengths: [
    "Excellent problem decomposition skills",
    "Strong algorithmic thinking",
    "Clear verbal communication",
    "Efficient coding patterns",
  ],
  improvements: [
    "Edge case analysis needs deeper consideration",
    "Explain trade-offs between time and space more explicitly",
    "Practice under stricter time constraints",
  ],
  feedback:
    "The candidate demonstrated strong foundational knowledge and good communication. Their approach to the problem was systematic and well-explained. To improve for FAANG interviews, focus on edge cases and complexity analysis.",
  recommendations: [
    "Continue with DSA sets focusing on arrays, trees, and graphs.",
    "Practice explaining complexity trade-offs during coding.",
    "Run 3 mock interviews per week to build confidence.",
    "Review system design fundamentals for next level preparation.",
  ],
};

const technicalMetrics = [
  { metric: "Correctness", score: 88 },
  { metric: "Approach", score: 82 },
  { metric: "Code Quality", score: 86 },
  { metric: "Edge Cases", score: 76 },
  { metric: "Time Complexity", score: 90 },
  { metric: "Space Complexity", score: 78 },
];

const communicationMetrics = [
  { metric: "Clarity", score: 87 },
  { metric: "Understanding", score: 89 },
  { metric: "Articulation", score: 84 },
  { metric: "Collaboration", score: 82 },
];

const performanceHistory = [
  { interview: "Interview 1", score: 72 },
  { interview: "Interview 2", score: 78 },
  { interview: "Interview 3", score: 81 },
  { interview: "Interview 4", score: 84.5 },
];

export default function AnalyticsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const getScoreColor = (score: number): string => {
    if (score >= 85) return "text-emerald-400";
    if (score >= 75) return "text-sky-400";
    if (score >= 60) return "text-amber-400";
    return "text-red-400";
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 85) return "bg-emerald-500/10 border-emerald-500/30";
    if (score >= 75) return "bg-sky-500/10 border-sky-500/30";
    if (score >= 60) return "bg-amber-500/10 border-amber-500/30";
    return "bg-red-500/10 border-red-500/30";
  };

  return (
    <main className="min-h-screen bg-slate-950 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-emerald-400">PrepOS Analytics</p>
            <h1 className="text-4xl font-bold tracking-tight">Post-Interview Report</h1>
          </div>

          <div className={`rounded-2xl px-8 py-4 border ${getScoreBgColor(mockScorecard.overallScore)}`}>
            <p className="text-xs uppercase tracking-widest font-medium text-slate-300">
              Overall Score
            </p>
            <p className={`text-4xl font-bold ${getScoreColor(mockScorecard.overallScore)}`}>
              {mockScorecard.overallScore}
            </p>
            <p className="text-xs text-slate-400 mt-1">Strong Performance</p>
          </div>
        </header>

        {/* Quick Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <p className="text-slate-400 text-sm">Interview Duration</p>
            <p className="text-2xl font-bold mt-2">{mockScorecard.duration} min</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <p className="text-slate-400 text-sm">Questions Attempted</p>
            <p className="text-2xl font-bold mt-2">{mockScorecard.questionsAsked} / 3</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
            <p className="text-slate-400 text-sm">Performance Trend</p>
            <p className="text-2xl font-bold mt-2">+12.5%</p>
            <p className="text-xs text-emerald-400">vs. last interview</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Technical Accuracy Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Technical Metrics Chart */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <h2 className="mb-6 text-xl font-semibold">Technical Accuracy Breakdown</h2>

              <div className="grid gap-3 mb-6">
                {technicalMetrics.map((item) => (
                  <div key={item.metric}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{item.metric}</span>
                      <span className={`font-bold ${getScoreColor(item.score)}`}>
                        {item.score}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          item.score >= 85
                            ? "bg-emerald-500"
                            : item.score >= 75
                            ? "bg-sky-500"
                            : item.score >= 60
                            ? "bg-amber-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={technicalMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis
                      dataKey="metric"
                      tick={{ fill: "#cbd5e1", fontSize: 11 }}
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis domain={[0, 100]} tick={{ fill: "#64748b" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0f172a",
                        border: "1px solid #334155",
                        borderRadius: "12px",
                      }}
                      formatter={(value) => `${value}/100`}
                    />
                    <Bar dataKey="score" fill="#38bdf8" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Communication Skills */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <h2 className="mb-6 text-xl font-semibold">Communication Skills</h2>

              <div className="grid gap-3 mb-6 md:grid-cols-2">
                {communicationMetrics.map((item) => (
                  <div key={item.metric} className="rounded-lg border border-slate-800 bg-slate-800/50 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{item.metric}</span>
                      <span className={`font-bold ${getScoreColor(item.score)}`}>
                        {item.score}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-violet-500"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Trend */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <h2 className="mb-6 text-xl font-semibold">Performance Trend</h2>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="interview" tick={{ fill: "#cbd5e1" }} />
                    <YAxis domain={[60, 100]} tick={{ fill: "#64748b" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0f172a",
                        border: "1px solid #334155",
                        borderRadius: "12px",
                      }}
                      formatter={(value) => `${value}/100`}
                    />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ fill: "#10b981", r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Strengths */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
                  ✓
                </span>
                Strengths
              </h3>
              <ul className="space-y-3">
                {mockScorecard.strengths.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-200 leading-relaxed border-l-2 border-emerald-500/30 pl-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas for Improvement */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-xs text-amber-400">
                  ⚠
                </span>
                Improvements
              </h3>
              <ul className="space-y-3">
                {mockScorecard.improvements.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-200 leading-relaxed border-l-2 border-amber-500/30 pl-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Feedback */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <h3 className="mb-3 text-lg font-semibold">Interview Feedback</h3>
              <p className="text-sm leading-relaxed text-slate-300">{mockScorecard.feedback}</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
          <h2 className="mb-6 text-xl font-semibold flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-xs text-sky-400">
              💡
            </span>
            Personalized Recommendations
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {mockScorecard.recommendations.map((rec, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-800 bg-slate-800/50 p-4 hover:border-sky-500/50 transition"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 font-bold text-xs text-sky-400 flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">{rec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="/interview"
            className="rounded-lg bg-sky-500 px-6 py-3 font-medium text-white hover:bg-sky-400 transition"
          >
            Start Another Interview
          </a>
          <a
            href="/dashboard"
            className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-slate-100 hover:bg-slate-700 transition"
          >
            Back to Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}