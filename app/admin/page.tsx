"use client";

import { useMemo, useState } from "react";
import { articles } from "../../data/news";
import { opportunities } from "../../data/opportunities";

type Tab = "overview" | "articles" | "opportunities" | "users";

const credentials = {
  username: "Admin",
  password: "Team11**",
};

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [tab, setTab] = useState<Tab>("overview");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === credentials.username && password === credentials.password) {
      setAuthenticated(true);
      setError(null);
    } else {
      setError("Invalid credentials");
    }
  };

  const pendingRequests = useMemo(() => 4, []);
  const activeOpportunities = opportunities.length;
  const totalSubscribers = 1280;

  if (!authenticated) {
    return (
      <div className="mx-auto flex max-w-md flex-col gap-8 px-6 py-20">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold text-primary">Admin Dashboard</h1>
          <p className="text-sm text-slate-600">Sign in to manage Articles, Opportunities, and Users.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-2">
            <label htmlFor="username" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Username
            </label>
            <input
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-neutral px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Admin"
              autoComplete="username"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-neutral px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90"
          >
            Sign in
          </button>
          {error && <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/70">Dashboard</p>
          <h1 className="text-4xl font-semibold text-primary">Welcome back, {credentials.username}</h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setAuthenticated(false)}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-600 transition hover:border-primary hover:text-primary"
          >
            Log out
          </button>
          <button className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-accent/90">
            New Article
          </button>
        </div>
      </header>
      <section className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pending Requests</p>
          <p className="mt-3 text-3xl font-semibold text-primary">{pendingRequests}</p>
          <p className="mt-2 text-xs text-slate-500">Awaiting validation before publishing</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Active Opportunities</p>
          <p className="mt-3 text-3xl font-semibold text-primary">{activeOpportunities}</p>
          <p className="mt-2 text-xs text-slate-500">Live across Jobs, Research, and more</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Subscribers</p>
          <p className="mt-3 text-3xl font-semibold text-primary">{totalSubscribers.toLocaleString()}</p>
          <p className="mt-2 text-xs text-slate-500">Users stored in the User table</p>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex flex-wrap gap-3">
          {(
            [
              { id: "overview", label: "Overview" },
              { id: "articles", label: "Articles" },
              { id: "opportunities", label: "Opportunities" },
              { id: "users", label: "Users" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === item.id
                  ? "bg-primary text-white shadow"
                  : "bg-white text-slate-600 shadow-sm hover:bg-slate-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          {tab === "overview" && (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-primary">Validation queue</h2>
                <p className="mt-2 text-sm text-slate-600">Review incoming publish requests before they go live.</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-500">
                  <li className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-primary">Co-founder | Orbital Propulsion Lab</p>
                      <p>Needs review by tomorrow 12:00</p>
                    </div>
                    <button className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white">Review</button>
                  </li>
                  <li className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-primary">Research | Carbon capture pilot</p>
                      <p>Requested supporting documents</p>
                    </div>
                    <button className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600">
                      Remind
                    </button>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-primary">Editorial calendar</h2>
                <p className="mt-2 text-sm text-slate-600">Coordinate article drafts and scheduled publish dates.</p>
                <div className="mt-4 space-y-3 text-sm text-slate-500">
                  <div className="rounded-xl bg-neutral px-4 py-3">
                    <p className="font-medium text-primary">Founder spotlight: Biofabrication</p>
                    <p>Draft due October 20</p>
                  </div>
                  <div className="rounded-xl bg-neutral px-4 py-3">
                    <p className="font-medium text-primary">Playbook: early validation loops</p>
                    <p>Publish October 27</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tab === "articles" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-primary">Articles</h2>
              <p className="text-sm text-slate-600">Manage internal stories and launch updates.</p>
              <table className="w-full overflow-hidden rounded-2xl border border-slate-200 text-sm">
                <thead className="bg-neutral text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Published</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-medium text-primary">{article.title}</td>
                      <td className="px-4 py-3 text-slate-500">{article.publishedAt}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                          Published
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {tab === "opportunities" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-primary">Opportunities</h2>
              <p className="text-sm text-slate-600">Approve, edit, or archive community submissions.</p>
              <table className="w-full overflow-hidden rounded-2xl border border-slate-200 text-sm">
                <thead className="bg-neutral text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Organization</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {opportunities.map((opportunity) => (
                    <tr key={opportunity.id} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-medium text-primary">{opportunity.title}</td>
                      <td className="px-4 py-3 text-slate-500">{opportunity.type}</td>
                      <td className="px-4 py-3 text-slate-500">{opportunity.organization}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">Approve</button>
                          <button className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                            Archive
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {tab === "users" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-primary">Users</h2>
              <p className="text-sm text-slate-600">View the latest subscribers captured via the Get Updates form.</p>
              <div className="space-y-3 text-sm text-slate-500">
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                  <div>
                    <p className="font-medium text-primary">alex@fusioncore.io</p>
                    <p>Joined 2h ago</p>
                  </div>
                  <button className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600">
                    Message
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                  <div>
                    <p className="font-medium text-primary">li@biofabricate.org</p>
                    <p>Joined yesterday</p>
                  </div>
                  <button className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600">
                    Message
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                  <div>
                    <p className="font-medium text-primary">samira@orbitalops.com</p>
                    <p>Joined this week</p>
                  </div>
                  <button className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600">
                    Message
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
