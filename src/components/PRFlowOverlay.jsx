import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitPullRequest, Play, CheckCircle, XCircle, GitBranch } from 'lucide-react';

export default function PRFlowOverlay({ onAction }) {
  const [stage, setStage] = useState('idle');
  const [log, setLog] = useState([]);

  const pushLog = (msg) => setLog((l) => [msg, ...l].slice(0, 5));

  const runReview = () => {
    setStage('running');
    onAction?.('Running AI review…');
    pushLog('Review started');
    // Simulate async steps
    setTimeout(() => {
      setStage('comments');
      pushLog('Found 3 suggestions');
    }, 900);
    setTimeout(() => {
      setStage('ready');
      pushLog('Review ready to apply');
    }, 1900);
  };

  const apply = () => {
    setStage('applied');
    onAction?.('Applied suggestions');
    pushLog('Changes applied');
  };

  const reset = () => {
    setStage('idle');
    pushLog('Reset flow');
  };

  const steps = [
    { key: 'open', label: 'Open PR', active: true },
    { key: 'review', label: 'Run Review', active: stage === 'running' || stage === 'comments' || stage === 'ready' || stage === 'applied' },
    { key: 'apply', label: 'Apply Suggestions', active: stage === 'ready' || stage === 'applied' },
    { key: 'merge', label: 'Merge', active: stage === 'applied' },
  ];

  return (
    <div className="relative grid h-full w-full grid-cols-12 gap-3">
      {/* Left: Flow + actions */}
      <div className="col-span-12 flex flex-col gap-3 md:col-span-6">
        <div className="rounded-md border-2 border-white/90 bg-black/60 p-3 text-white shadow-[4px_4px_0_0_#fff]">
          <div className="mb-2 flex items-center gap-2 text-white">
            <GitPullRequest className="h-5 w-5" />
            <span className="font-bold">PR #142</span>
            <span className="ml-auto inline-flex items-center gap-1 rounded border border-white/30 px-2 py-0.5 text-xs text-white/80">
              <GitBranch className="h-3.5 w-3.5" /> feature/refactor
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {steps.map((s, i) => (
              <motion.div
                key={s.key}
                initial={false}
                animate={{ backgroundColor: s.active ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0)', x: s.active ? 4 : 0 }}
                className="flex items-center justify-between rounded border border-white/20 px-2 py-1"
              >
                <span className="text-sm font-medium">{i + 1}. {s.label}</span>
                {s.active && <span className="text-xs text-white/60">active</span>}
              </motion.div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={runReview}
              disabled={stage === 'running' || stage === 'comments' || stage === 'ready' || stage === 'applied'}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md border-2 border-white bg-white px-3 py-1.5 font-semibold text-black shadow-[3px_3px_0_0_#000] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Play className="h-4 w-4" /> Run Review
            </button>
            <button
              onClick={apply}
              disabled={stage !== 'ready'}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md border-2 border-emerald-300/80 bg-emerald-300 text-black px-3 py-1.5 font-semibold shadow-[3px_3px_0_0_#052] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <CheckCircle className="h-4 w-4" /> Apply
            </button>
            <button
              onClick={reset}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md border-2 border-white/60 px-3 py-1.5 font-semibold text-white hover:bg-white/10"
            >
              <XCircle className="h-4 w-4" /> Reset
            </button>
          </div>
        </div>

        {/* Activity log */}
        <div className="rounded-md border-2 border-white/70 bg-black/50 p-3 text-white/90 shadow-[3px_3px_0_0_#fff]">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-white/60">Activity</div>
          <ul className="space-y-1 text-sm">
            {log.length === 0 && <li className="text-white/50">No activity yet</li>}
            {log.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Diff preview that animates with states */}
      <div className="col-span-12 md:col-span-6">
        <div className="h-full rounded-md border-2 border-white/90 bg-black/60 p-3 text-white shadow-[4px_4px_0_0_#fff]">
          <div className="mb-2 text-sm font-semibold text-white/80">Suggested Changes</div>
          <div className="overflow-hidden rounded border border-white/20 text-sm">
            <CodeDiff stage={stage} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeDiff({ stage }) {
  return (
    <div className="font-mono">
      <Line n={1} code="export function add(a, b) {" />
      <Line n={2} code="  // naive implementation" />
      <Line n={3} code="  return a + b;" />
      <Line n={4} code="}" />

      <AnimatePresence initial={false}>
        {(stage === 'comments' || stage === 'ready' || stage === 'applied') && (
          <motion.div
            initial={{ backgroundColor: 'rgba(220, 38, 38, 0.15)', opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Line type="del" n={6} code="// Lint: missing input validation" />
            <Line type="del" n={7} code="// Suggestion: handle NaN" />
          </motion.div>
        )}

        {(stage === 'ready' || stage === 'applied') && (
          <motion.div
            initial={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Line type="add" n={9} code="export function add(a, b) {" />
            <Line type="add" n={10} code="  if (Number.isNaN(a) || Number.isNaN(b)) return 0;" />
            <Line type="add" n={11} code="  return a + b;" />
            <Line type="add" n={12} code="}" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Line({ n, code, type }) {
  const colors = type === 'add' ? 'bg-emerald-500/10 text-emerald-200' : type === 'del' ? 'bg-rose-500/10 text-rose-200' : 'text-white/90';
  const sign = type === 'add' ? '+' : type === 'del' ? '-' : ' ';
  return (
    <div className={`flex items-center gap-3 border-b border-white/10 px-3 py-1 ${colors}`}>
      <span className="select-none text-xs text-white/50 w-8 text-right">{n}</span>
      <span className="select-none text-xs w-3">{sign}</span>
      <code className="whitespace-pre">{code}</code>
    </div>
  );
}
