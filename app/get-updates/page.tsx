"use client";

import { useState } from "react";

export default function GetUpdatesPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/updates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const body = await response.json();
        throw new Error(body?.error ?? "Unable to subscribe");
      }

      setStatus("success");
      setMessage("You're on the list. Expect curated updates soon.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-20">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent/70">Get Updates</p>
        <h1 className="text-4xl font-semibold text-primary">Stay close to the frontier</h1>
        <p className="text-base leading-relaxed text-slate-600">
          Subscribe for a distilled feed of XField opportunities, research breakthroughs, and product launches.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@team.com"
            className="w-full rounded-2xl border border-slate-300 bg-neutral px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Joining..." : "Subscribe"}
        </button>
        {status !== "idle" && (
          <p
            className={`rounded-2xl px-4 py-3 text-sm font-medium ${
              status === "success"
                ? "bg-emerald-50 text-emerald-700"
                : status === "error"
                ? "bg-rose-50 text-rose-600"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
