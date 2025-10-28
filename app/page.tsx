"use client";

import { useMemo, useState } from "react";
import { OpportunityCard } from "../components/OpportunityCard";
import { opportunities, type OpportunityType } from "../data/opportunities";

const filters: OpportunityType[] = ["Jobs", "Research", "Open Source", "Co-Founder"];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<OpportunityType | "All">("All");
  const [formState, setFormState] = useState({
    type: "Jobs",
    title: "",
    name: "",
    organization: "",
    description: "",
    link: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredOpportunities = useMemo(() => {
    if (activeFilter === "All") return opportunities;
    return opportunities.filter((opportunity) => opportunity.type === activeFilter);
  }, [activeFilter]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-10">
      <section className="flex flex-col gap-12 rounded-3xl bg-white px-8 py-12 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
            Discover today's top opportunities
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-primary md:text-5xl">
            A curated gallery of ventures, collaborators, and ideas shaping the future.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Filter by focus area, surface new requests, and stay on top of XField's internal newsfeed.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-accent/90">
              Explore Opportunities
            </button>
            <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary">
              Publish a Request
            </button>
          </div>
        </div>
        <div className="grid flex-1 gap-4">
          <div className="flex items-center justify-end gap-3 text-sm text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Recently added
          </div>
          <div className="grid gap-3 rounded-3xl border border-slate-200 bg-neutral p-6">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-slate-600">Latest</div>
              <div className="text-sm text-slate-500">Updated today</div>
            </div>
            <div className="grid gap-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                <span>Quantum simulation residency</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">Research</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                <span>ML systems co-founder</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">Co-Founder</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                <span>Orbital robotics PM</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">Jobs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-primary">Opportunities</h2>
            <p className="text-sm text-slate-600">
              Browse handpicked roles, collaborations, and open calls from across the XField network.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveFilter("All")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeFilter === "All"
                  ? "bg-primary text-white shadow"
                  : "bg-white text-slate-600 shadow-sm hover:bg-slate-100"
              }`}
            >
              All
            </button>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow"
                    : "bg-white text-slate-600 shadow-sm hover:bg-slate-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>
        <div className="grid gap-6 sm:grid-cols-2">
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </section>

      <section className="grid gap-12 rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-primary">Publish a Request</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Share opportunities with the XField community. Requests appear after an admin review.
          </p>
          <ul className="space-y-2 text-sm text-slate-500">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Highlight collaboration, hiring, funding, or research needs.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Provide a clear description, timeline, and point of contact.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Submissions are vetted before being published to the Opportunities feed.
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">Type</label>
            <select
              value={formState.type}
              onChange={(event) => setFormState((prev) => ({ ...prev, type: event.target.value }))}
              className="w-full rounded-2xl border border-slate-300 bg-neutral px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {filters.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">Title</label>
            <input
              type="text"
              required
              value={formState.title}
              onChange={(event) => setFormState((prev) => ({ ...prev, title: event.target.value }))}
              className="w-full rounded-2xl border border-slate-300 bg-neutral px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Describe the opportunity succinctly"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">Full Name</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded-2xl border border-slate-300 bg-neutral px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">Organization</label>
              <input
                type="text"
                value={formState.organization}
                onChange={(event) => setFormState((prev) => ({ ...prev, organization: event.target.value }))}
                className="w-full rounded-2xl border border-slate-300 bg-neutral px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Organization or team"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">Description</label>
            <textarea
              rows={4}
              required
              value={formState.description}
              onChange={(event) => setFormState((prev) => ({ ...prev, description: event.target.value }))}
              className="w-full rounded-2xl border border-slate-300 bg-neutral px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="What are you looking for? Include timelines and outcomes."
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">Link</label>
            <input
              type="url"
              value={formState.link}
              onChange={(event) => setFormState((prev) => ({ ...prev, link: event.target.value }))}
              className="w-full rounded-2xl border border-slate-300 bg-neutral px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Optional: application or info link"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90"
          >
            Submit for Review
          </button>
          {submitted && (
            <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              Request received. An administrator will review your submission before publishing.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
