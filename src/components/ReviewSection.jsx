import { Shield, Sparkles } from 'lucide-react';

export default function ReviewSection() {
  const features = [
    { icon: <Shield className="h-5 w-5" />, title: 'Security-aware checks', desc: 'Detects insecure patterns and flags risky code paths.' },
    { icon: <Sparkles className="h-5 w-5" />, title: 'Readable suggestions', desc: 'Inline diffs with minimal noise and clear context.' },
    { icon: <span className="block h-5 w-5 rounded-sm bg-black" />, title: 'Neo‑brutalist UI', desc: 'Bold borders, offset shadows, and high contrast visuals.' },
  ];

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-extrabold">How reviews feel</h2>
        <p className="mt-2 max-w-prose text-black/70">Fast, focused, and practical. The assistant comments only when it matters, summarizes risks, and proposes fixes you can apply in one click.</p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#000]">
              <div className="mb-2 flex items-center gap-2 text-black/80">{f.icon}<span className="font-semibold">{f.title}</span></div>
              <div className="text-sm text-black/70">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
