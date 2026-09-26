"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <div className="h-full bg-slate-800 animate-pulse" />,
});

type TranscriptMessage = {
  id: string;
  speaker: "Interviewer" | "Candidate";
  text: string;
  timestamp: number;
};

type InterviewState = "setup" | "in_progress" | "completed";

const SAMPLE_CODE = `function twoSum(nums, target) {
  // TODO: Implement solution
  // Time: O(n) | Space: O(n)
  
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  
  return [];
}`;

export default function InterviewPage() {
  const [state, setState] = useState<InterviewState>("setup");
  const [code, setCode] = useState(SAMPLE_CODE);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([
    {
      id: "1",
      speaker: "Interviewer",
      text: "Hi! Today we'll work on a classic problem. Given an array of integers and a target, find the two numbers that add up to the target.",
      timestamp: Date.now() - 5000,
    },
  ]);
  const [answerText, setAnswerText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  // Timer
  useEffect(() => {
    if (state !== "in_progress") return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [state]);

  // Auto-scroll to latest transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcript]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStartInterview = () => {
    setState("in_progress");
    addTranscript("Interviewer", "Great! Let's begin. Take your time and think through the problem.");
  };

  const handleSubmitAnswer = async () => {
    if (!answerText.trim()) return;

    setIsSubmitting(true);

    // Add user's answer to transcript
    addTranscript("Candidate", answerText);
    setAnswerText("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Add follow-up question
    addTranscript(
      "Interviewer",
      "Good approach! Now, what if the array contains duplicate values? How would you handle that? And can you analyze the time and space complexity?"
    );

    setIsSubmitting(false);
  };

  const addTranscript = (speaker: "Interviewer" | "Candidate", text: string) => {
    setTranscript((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        speaker,
        text,
        timestamp: Date.now(),
      },
    ]);
  };

  const handleEndInterview = () => {
    setState("completed");
  };

  return (
    <main className="min-h-screen bg-slate-950 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-violet-400">PrepOS Interview</p>
            <h1 className="text-3xl font-bold">Live Coding Interview</h1>
          </div>

          {state === "in_progress" && (
            <div className="flex gap-4">
              <div className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2">
                <p className="text-xs text-slate-400">TIME REMAINING</p>
                <p className="text-xl font-mono font-bold text-sky-400">{formatTime(timeLeft)}</p>
              </div>
              <button
                onClick={handleEndInterview}
                className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600 transition"
              >
                End Interview
              </button>
            </div>
          )}
        </header>

        {/* Setup Screen */}
        {state === "setup" && (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
            <h2 className="mb-6 text-2xl font-semibold">Interview Setup</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Select Difficulty
                </label>
                <div className="grid gap-3 md:grid-cols-3">
                  {(["easy", "medium", "hard"] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setDifficulty(level)}
                      className={`rounded-lg px-4 py-2 font-medium transition ${
                        difficulty === level
                          ? "bg-sky-500 text-white"
                          : "border border-slate-700 bg-slate-800 text-slate-100 hover:border-slate-600"
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                <h3 className="font-medium mb-2">Interview Details</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Topic: Data Structures & Algorithms</li>
                  <li>• Duration: 45 minutes</li>
                  <li>• Questions: 3-5 dynamic questions</li>
                  <li>• You'll receive follow-ups based on your answers</li>
                </ul>
              </div>

              <button
                onClick={handleStartInterview}
                className="w-full rounded-lg bg-sky-500 px-4 py-3 font-semibold text-white hover:bg-sky-400 transition"
              >
                Start Interview
              </button>
            </div>
          </div>
        )}

        {/* Interview Screen */}
        {(state === "in_progress" || state === "completed") && (
          <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
            {/* Code Editor Section */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 overflow-hidden backdrop-blur">
              <div className="border-b border-slate-800 bg-slate-800/50 px-6 py-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">Problem: Two Sum</h2>
                  <button
                    onClick={() => setCode(SAMPLE_CODE)}
                    className="text-xs text-slate-400 hover:text-slate-200 transition"
                  >
                    Reset
                  </button>
                </div>
                <p className="text-sm text-slate-400">
                  Given an array of integers, find two numbers that add up to a target value.
                </p>
              </div>

              <div className="h-[500px] bg-slate-950">
                <MonacoEditor
                  height="100%"
                  defaultLanguage="javascript"
                  theme="vs-dark"
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 13,
                    fontFamily: "Fira Code, monospace",
                    roundedSelection: true,
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    padding: { top: 16 },
                  }}
                />
              </div>

              {/* Answer & Controls */}
              <div className="border-t border-slate-800 bg-slate-800/50 p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Explain Your Approach (Optional)
                  </label>
                  <textarea
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                    placeholder="Describe your algorithm, time/space complexity, and any edge cases you're considering..."
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none transition"
                    rows={3}
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={isSubmitting || !code.trim()}
                    className="flex-1 rounded-lg bg-sky-500 px-4 py-3 font-medium text-white hover:bg-sky-400 disabled:bg-slate-700 disabled:cursor-not-allowed transition"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Answer"}
                  </button>
                  <button
                    onClick={handleEndInterview}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 font-medium text-slate-100 hover:border-slate-600 transition"
                  >
                    Skip
                  </button>
                </div>
              </div>
            </div>

            {/* Transcript Panel */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 flex flex-col overflow-hidden backdrop-blur h-[620px]">
              <div className="border-b border-slate-800 bg-slate-800/50 px-6 py-4">
                <h2 className="text-lg font-semibold">Interview Transcript</h2>
                <p className="text-xs text-slate-400 mt-1">
                  {transcript.length} message{transcript.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                {transcript.map((msg) => (
                  <div key={msg.id} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          msg.speaker === "Interviewer"
                            ? "text-sky-400"
                            : "text-violet-400"
                        }`}
                      >
                        {msg.speaker}
                      </span>
                      <span className="text-xs text-slate-500">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <div
                      className={`rounded-lg p-3 text-sm leading-relaxed ${
                        msg.speaker === "Interviewer"
                          ? "bg-slate-800 text-slate-100"
                          : "bg-violet-500/10 text-violet-100 border border-violet-500/20"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={transcriptEndRef} />
              </div>

              {state === "completed" && (
                <div className="border-t border-slate-800 bg-slate-800/50 p-4">
                  <button
                    onClick={() => (window.location.href = "/analytics")}
                    className="w-full rounded-lg bg-sky-500 px-4 py-3 font-medium text-white hover:bg-sky-400 transition"
                  >
                    View Scorecard
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}