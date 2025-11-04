import React from 'react';
import { X, CheckCircle, Github } from 'lucide-react';

const PopupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-2xl border-4 border-black bg-white p-6 shadow-[10px_10px_0_0_#000]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold">Free AI Code Review</h3>
            <p className="mt-1 text-sm text-neutral-700">
              A friendly, fast reviewer for your pull requests. Get inline suggestions, complexity hints, and security notes — all for free.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-xl border-2 border-black bg-neutral-100 p-2 shadow-[4px_4px_0_0_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="mt-5 space-y-2">
          {[
            'AI summaries for diffs and file changes',
            'Actionable suggestions with quick-fix tips',
            'Understands popular frameworks and patterns',
            'Works with your existing PR flow',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#review"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-xl border-4 border-black bg-lime-300 px-5 py-2.5 text-sm font-extrabold shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0_0_#000]"
          >
            Try Review Flow
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border-4 border-black bg-white px-5 py-2.5 text-sm font-extrabold shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0_0_#000]"
          >
            <Github className="h-4 w-4" />
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
