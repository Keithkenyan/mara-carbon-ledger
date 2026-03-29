import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BASE   = 2847563;
const RATE   = 0.42; // tonnes per second (annual ~13M / 31.5M sec)

export default function CarbonCounter() {
  const [count, setCount] = useState(BASE);
  const ref = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setCount(c => c + RATE), 1000);
    return () => clearInterval(id);
  }, []);

  const formatted = Math.floor(count).toLocaleString('en-US');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="text-center"
    >
      <p className="font-tech text-[9px] tracking-[0.35em] text-ochre/70 uppercase mb-4">
        Live CO₂ Sequestered — Updated in Real Time
      </p>
      <div className="font-tech text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-light tracking-tight text-ether data-glow tabular-nums leading-none">
        {formatted}
      </div>
      <p className="font-tech text-xs tracking-[0.3em] text-white/40 uppercase mt-3">
        Tonnes CO₂ Equivalent
      </p>
    </motion.div>
  );
}