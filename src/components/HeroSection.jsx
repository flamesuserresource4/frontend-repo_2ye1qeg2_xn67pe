import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';
import PRFlowOverlay from './PRFlowOverlay.jsx';

const HeroSection = ({ onOpenPopup }) => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#F6F6F6]">
      {/* Decorative gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-xl border-4 border-black bg-yellow-300 px-3 py-1 shadow-[6px_6px_0_0_#000]">
            <Star className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Free AI Code Review</span>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-black md:text-6xl">
            Ship better code with a playful, powerful AI reviewer
          </h1>
          <p className="mt-4 max-w-prose text-lg text-neutral-700">
            Get instant feedback on pull requests, catch issues early, and keep your repo clean. Built to match a neo-brutalist, high-contrast vibe.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenPopup}
              className="inline-flex items-center gap-2 rounded-2xl border-4 border-black bg-lime-300 px-6 py-3 text-base font-extrabold shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0_0_#000]"
            >
              <Rocket className="h-5 w-5" />
              Launch Demo Popup
            </button>
            <a
              href="#pr-history"
              className="rounded-2xl border-4 border-black bg-white px-6 py-3 text-base font-extrabold shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0_0_#000]"
            >
              View PR History
            </a>
          </div>
        </div>
        <div className="order-1 h-[420px] w-full md:order-2 md:h-[520px]">
          <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-black bg-white shadow-[10px_10px_0_0_#000]">
            {/* Spline scene */}
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Animated PR flow overlay that doesn't block interactions */}
            <PRFlowOverlay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
