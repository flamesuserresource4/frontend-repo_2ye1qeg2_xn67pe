import HeroSection from './components/HeroSection.jsx';
import PRHistorySection from './components/PRHistorySection.jsx';
import ReviewSection from './components/ReviewSection.jsx';

function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white px-6 py-6 text-sm text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <div className="font-semibold">Free AI Code Review</div>
        <div className="text-black/70">Built with a neo‑brutalist aesthetic. © {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <HeroSection />
      <PRHistorySection />
      <ReviewSection />
      <Footer />
    </div>
  );
}
