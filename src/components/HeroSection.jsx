import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';
import PRFlowOverlay from './PRFlowOverlay.jsx';

export default function HeroSection() {
  const [toast, setToast] = useState(null);

  const handleAction = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      {/* Full-width Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle grain + vignette overlay that does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-stretch md:gap-12">
        {/* Left: Heading + CTA */}
        <div className="z-10 flex w-full flex-col justify-between md:w-5/12">
          <div>
            <h1 className="font-extrabold tracking-tight text-white [text-wrap:balance] text-4xl md:text-6xl">
              Free AI Code Review
              <span className="block text-red-400">for Pull Requests</span>
            </h1>
            <p className="mt-4 max-w-prose text-white/80">
              Ship better code faster. Automated reviews, inline suggestions, and readable diffs — all inside your PRs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://chromewebstore.google.com/" target="_blank" rel="noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-md border-2 border-white bg-white px-4 py-2 font-semibold text-black shadow-[4px_4px_0_0_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Install Extension
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <button
                onClick={() => handleAction('Opened interactive demo')}
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/60 px-4 py-2 font-semibold text-white backdrop-blur-sm hover:bg-white/10"
              >
                Try a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Right: Interactive PR flow panel layered above Spline */}
        <div className="z-10 w-full md:w-7/12">
          <div className="relative h-[420px] w-full rounded-lg border-4 border-white/90 bg-black/30 p-3 shadow-[8px_8px_0_0_#fff] backdrop-blur-sm">
            {/* Decorative top gradient that shouldn't block interactions */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />

            <PRFlowOverlay onAction={handleAction} />
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className="pointer-events-none fixed bottom-6 left-1/2 z-20 -translate-x-1/2"
          >
            <div className="rounded-md border-2 border-white bg-white px-4 py-2 font-semibold text-black shadow-[4px_4px_0_0_#000]">
              {toast}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
