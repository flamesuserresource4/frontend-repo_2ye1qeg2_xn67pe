import { History, GitPullRequest, CheckCircle } from 'lucide-react';

const PRCard = ({ id, title, status, reviews }) => (
  <div className="rounded-lg border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
    <div className="mb-2 flex items-center gap-2 text-sm text-black/60">
      <GitPullRequest className="h-4 w-4" />
      <span className="font-semibold">PR #{id}</span>
      <span className="ml-auto inline-flex items-center gap-1 rounded border border-black/20 px-2 py-0.5 text-xs">
        {status === 'merged' ? <CheckCircle className="h-3.5 w-3.5 text-emerald-600" /> : null}
        {status}
      </span>
    </div>
    <div className="font-semibold">{title}</div>
    <div className="mt-2 text-sm text-black/70">AI Reviews: {reviews}</div>
  </div>
);

export default function PRHistorySection() {
  const items = [
    { id: 142, title: 'Refactor auth middleware', status: 'merged', reviews: 3 },
    { id: 143, title: 'Improve dashboard charts', status: 'open', reviews: 2 },
    { id: 144, title: 'Fix rate limiting bug', status: 'open', reviews: 1 },
  ];

  return (
    <section className="bg-red-50 px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-2">
          <History className="h-5 w-5" />
          <h2 className="text-2xl font-extrabold">Recent PRs</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it) => (
            <PRCard key={it.id} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
