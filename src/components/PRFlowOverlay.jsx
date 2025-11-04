import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, ShieldCheck, GitMerge } from 'lucide-react';

const items = [
  { id: 'commit', label: 'Commit', Icon: GitCommit, color: 'bg-yellow-300' },
  { id: 'pr', label: 'PR Opened', Icon: GitPullRequest, color: 'bg-lime-300' },
  { id: 'checks', label: 'Checks', Icon: ShieldCheck, color: 'bg-cyan-300' },
  { id: 'merge', label: 'Merged', Icon: GitMerge, color: 'bg-pink-300' },
];

const floatKeyframes = {
  animate: {
    y: [0, -8, 0],
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 3.6,
      ease: 'easeInOut',
    },
  },
};

const connectorVariants = {
  initial: { width: 0 },
  animate: (i) => ({
    width: i,
    transition: { delay: 0.6, duration: 0.8, ease: 'easeOut' },
  }),
};

const PRFlowOverlay = () => {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
      <div className="w-[88%] max-w-xl">
        <div className="relative mx-auto flex w-full flex-col items-center md:flex-row md:justify-between">
          {items.map(({ id, label, Icon, color }, idx) => (
            <React.Fragment key={id}>
              <motion.div
                variants={floatKeyframes}
                animate="animate"
                transition={{ delay: idx * 0.25 }}
                className={`rounded-2xl border-4 border-black ${color} px-3 py-2 shadow-[6px_6px_0_0_#000]`}
              >
                <div className="flex items-center gap-2 text-sm font-extrabold">
                  <Icon className="h-4 w-4" /> {label}
                </div>
              </motion.div>
              {idx < items.length - 1 && (
                <motion.div
                  className="hidden h-1 grow rounded-full border-2 border-black bg-black md:block"
                  variants={connectorVariants}
                  initial="initial"
                  animate="animate"
                  custom={80}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Caption card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-4 w-max rounded-xl border-4 border-black bg-white px-3 py-1 text-xs font-extrabold shadow-[5px_5px_0_0_#000]"
        >
          AI Review: summaries • checks • suggestions
        </motion.div>
      </div>
    </div>
  );
};

export default PRFlowOverlay;
