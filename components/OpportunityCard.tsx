import type { Opportunity } from "../data/opportunities";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <article className="group flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
          {opportunity.type}
        </span>
        <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden />
        <span>{opportunity.organization}</span>
      </div>
      <h3 className="text-xl font-semibold text-primary">{opportunity.title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{opportunity.description}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {opportunity.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
