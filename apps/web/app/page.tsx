"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-sky-400 mb-4">Welcome to</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            PrepOS
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            AI-powered placement preparation platform with adaptive learning and dynamic mock interviews
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/dashboard"
              className="rounded-lg bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-400 transition"
            >
              View Dashboard
            </Link>
            <Link
              href="/interview"
              className="rounded-lg border border-slate-700 bg-slate-800 px-8 py-3 font-semibold text-slate-100 hover:bg-slate-700 transition"
            >
              Start Interview
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-32 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
            <div className="mb-4 text-3xl">📊</div>
            <h3 className="mb-2 text-lg font-semibold">Readiness Dashboard</h3>
            <p className="text-slate-400">
              Benchmark your skills against company tiers with interactive radar charts and performance analytics.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
            <div className="mb-4 text-3xl">🤖</div>
            <h3 className="mb-2 text-lg font-semibold">AI Mock Interviews</h3>
            <p className="text-slate-400">
              Practice with AI-generated dynamic questions and receive real-time feedback on your performance.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
            <div className="mb-4 text-3xl">💡</div>
            <h3 className="mb-2 text-lg font-semibold">Actionable Insights</h3>
            <p className="text-slate-400">
              Get detailed scorecards and personalized recommendations for continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}