import React from 'react';
import { Link } from 'react-router-dom';
import SectionReveal from '@/components/shared/SectionReveal';
import { IMAGES } from '@/lib/images';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40 px-[5vw] lg:px-[8vw]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={IMAGES.grass} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-chlorophyll/80" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <SectionReveal>
          <p className="font-tech text-[9px] tracking-[0.35em] text-ochre uppercase mb-6">
            Take Action Today
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-ether tracking-tight mb-8 leading-tight">
            Your Carbon Footprint.<br />Our Carbon Commitment.
          </h2>
          <p className="font-body text-base text-white/55 leading-relaxed mb-10 max-w-xl">
            Every tonne you offset directly funds ranger salaries, community land leases, 
            and the monitoring infrastructure that keeps the Mara intact. This is not a 
            transaction — it is a long-term relationship with a living landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/credits"
              className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors"
            >
              Purchase Credits
            </Link>
            <Link
              to="/ledger"
              className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 border border-ether/20 text-ether/70 hover:border-ochre hover:text-ochre transition-all"
            >
              Read the Methodology
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}