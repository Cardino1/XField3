import type { Article } from "../data/news";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-xs font-semibold uppercase tracking-wide text-accent/80">
        {article.publishedAt}
      </div>
      <h3 className="text-xl font-semibold text-primary">{article.title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{article.summary}</p>
      <button className="self-start text-sm font-semibold text-accent transition hover:text-accent/80">
        Read more
      </button>
    </article>
  );
}
