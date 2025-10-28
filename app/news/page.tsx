import { ArticleCard } from "../../components/ArticleCard";
import { articles } from "../../data/news";

export default function NewsPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16">
      <header className="space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/70">News</p>
        <h1 className="text-4xl font-semibold text-primary">Latest from the XField studio</h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
          Internal briefings, behind-the-scenes updates, and stories from teams building the future with XField.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
