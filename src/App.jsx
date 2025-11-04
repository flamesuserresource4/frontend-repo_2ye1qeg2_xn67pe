import React, { useState } from 'react';
import HeroSection from './components/HeroSection.jsx';
import PopupModal from './components/PopupModal.jsx';
import PRHistorySection from './components/PRHistorySection.jsx';
import ReviewSection from './components/ReviewSection.jsx';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-40 border-b-4 border-black bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="inline-flex items-center gap-2 rounded-xl border-4 border-black bg-black px-3 py-1 text-white shadow-[6px_6px_0_0_#000]">
            <span className="text-xs font-extrabold tracking-wider">Free AI Code Review</span>
          </div>
          <nav className="flex items-center gap-3 text-sm font-extrabold">
            <a href="#pr-history" className="rounded-xl border-4 border-black bg-yellow-300 px-3 py-1 shadow-[4px_4px_0_0_#000]">PRs</a>
            <a href="#review" className="rounded-xl border-4 border-black bg-lime-300 px-3 py-1 shadow-[4px_4px_0_0_#000]">Review</a>
            <button onClick={() => setOpen(true)} className="rounded-xl border-4 border-black bg-white px-3 py-1 shadow-[4px_4px_0_0_#000]">Open Popup</button>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection onOpenPopup={() => setOpen(true)} />
        <PRHistorySection />
        <ReviewSection />
      </main>

      <footer className="border-t-4 border-black bg-[#F6F6F6] py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-sm text-neutral-700">
              Built with a neo‑brutalist aesthetic. Free to use, feedback welcome.
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-lg border-2 border-black bg-white px-2 py-1 font-extrabold shadow-[3px_3px_0_0_#000]">v1.0</span>
              <a href="#" className="rounded-lg border-2 border-black bg-yellow-200 px-2 py-1 font-extrabold shadow-[3px_3px_0_0_#000]">Docs</a>
            </div>
          </div>
        </div>
      </footer>

      <PopupModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App;
