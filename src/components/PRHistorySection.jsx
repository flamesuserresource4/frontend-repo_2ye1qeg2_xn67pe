import React from 'react';
import { GitBranch, GitPullRequest, Clock } from 'lucide-react';

const mockPRs = [
  {
    id: 1342,
    title: 'Refactor auth middleware and add rate limiting',
    author: 'jane-dev',
    status: 'Merged',
    time: '2h ago',
    comments: 8,
  },
  {
    id: 1341,
    title: 'Fix race condition in websocket reconnect',
    author: 'matthew',
    status: 'Open',
    time: '5h ago',
    comments: 3,
  },
  {
    id: 1339,
    title: 'Upgrade to React 18 + strict mode fixes',
    author: 'sana',
    status: 'Closed',
    time: '1d ago',
    comments: 10,
  },
];

const PRCard = ({ pr }) => {
  const statusColor =
    pr.status === 'Merged'
      ? 'bg-emerald-300'
      : pr.status === 'Open'
      ? 'bg-yellow-300'
      : 'bg-rose-300';

  return (
    <div className="rounded-2xl border-4 border-black bg-white p-5 shadow-[8px_8px_0_0_#000]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GitPullRequest className="h-5 w-5" />
          <span className="font-extrabold">#{pr.id}</span>
        </div>
        <div className={`rounded-full px-3 py-1 text-xs font-bold ${statusColor} border-2 border-black`}>
          {pr.status}
        </div>
      </div>
      <h4 className="mt-3 text-lg font-bold">{pr.title}</h4>
      <div className="mt-2 flex items-center gap-4 text-sm text-neutral-700">
        <span className="flex items-center gap-1"><GitBranch className="h-4 w-4" /> {pr.author}</span>
        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {pr.time}</span>
        <span className="rounded-lg border-2 border-black bg-neutral-100 px-2 py-0.5 text-xs font-bold shadow-[3px_3px_0_0_#000]">{pr.comments} comments</span>
      </div>
    </div>
  );
};

const PRHistorySection = () => {
  return (
    <section id="pr-history" className="bg-[#F6F6F6] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-xl border-4 border-black bg-cyan-300 px-3 py-1 shadow-[6px_6px_0_0_#000] text-sm font-extrabold">
            PR History
          </div>
          <p className="text-sm text-neutral-600">A snapshot of recent activity the extension can summarize.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockPRs.map((pr) => (
            <PRCard key={pr.id} pr={pr} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PRHistorySection;
