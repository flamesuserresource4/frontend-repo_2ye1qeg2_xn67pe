import React from 'react';
import { ShieldCheck, Sparkles, ListChecks } from 'lucide-react';

const ReviewSection = () => {
  return (
    <section id="review" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid items-start gap-8 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl border-4 border-black bg-pink-300 px-3 py-1 text-xs font-extrabold shadow-[6px_6px_0_0_#000]">
              Review Flow
            </div>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Smarter reviews in three friendly steps</h2>
            <p className="mt-2 max-w-prose text-neutral-700">
              The extension reads your diff, highlights risky changes, and offers inline suggestions that match your stack.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-2 font-bold"><ListChecks className="h-5 w-5" /> Analyze</div>
                <p className="mt-1 text-sm text-neutral-700">We parse the diff and classify changes by complexity and impact.</p>
              </div>
              <div className="rounded-2xl border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-2 font-bold"><ShieldCheck className="h-5 w-5" /> Validate</div>
                <p className="mt-1 text-sm text-neutral-700">Security and performance heuristics flag potential issues before merge.</p>
              </div>
              <div className="rounded-2xl border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-2 font-bold"><Sparkles className="h-5 w-5" /> Suggest</div>
                <p className="mt-1 text-sm text-neutral-700">Concise comments provide fixes, tests to add, and links to docs.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-4 border-black bg-neutral-50 p-4 shadow-[10px_10px_0_0_#000]">
            <div className="rounded-xl border-2 border-black bg-white p-4 font-mono text-xs leading-relaxed">
{`diff --git a/hooks/useAuth.ts b/hooks/useAuth.ts
@@ -24,7 +24,9 @@ export function useAuth() {
-  const token = localStorage.getItem('token')
+  // Avoid SSR localStorage access
+  const token = typeof window !== 'undefined'
+    ? localStorage.getItem('token') : null
 
   if (!token) {
-    throw new Error('Missing token')
+    // REVIEW: Prefer returning null and handling upstream
+    return null
   }
 }`}
            </div>
            <div className="mt-3 rounded-xl border-2 border-black bg-lime-200 p-3 text-sm font-bold">
              AI Note: Prevent SSR crashes by guarding window access and handle missing token gracefully.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
