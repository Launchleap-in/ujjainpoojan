import { container, sectionSpace } from "./design";

export function ArticleLoading() {
  return (
    <div className={`${container} ${sectionSpace}`} role="status" aria-live="polite">
      <p className="font-heading text-xl text-wine">विस्तृत जानकारी लोड हो रही है…</p>
      <div aria-hidden="true" className="mt-8 space-y-5 motion-safe:animate-pulse">
        <div className="h-10 w-2/3 rounded-lg bg-secondary" />
        <div className="h-5 w-full rounded-lg bg-secondary" />
        <div className="h-5 w-4/5 rounded-lg bg-secondary" />
        <div className="mt-10 h-72 rounded-2xl bg-secondary" />
      </div>
    </div>
  );
}
