import React from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import { useSiteContent } from '@/hooks/useSiteContent';

export default function ImpactStats() {
  const c = useSiteContent('home_stats');
  const stats = [
    { value: c.stat1Value, unit: c.stat1Unit, label: c.stat1Label },
    { value: c.stat2Value, unit: c.stat2Unit, label: c.stat2Label },
    { value: c.stat3Value, unit: c.stat3Unit, label: c.stat3Label },
    { value: c.stat4Value, unit: c.stat4Unit, label: c.stat4Label },
  ];

  return (
    <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
      <SectionReveal>
        <SectionLabel>{c.label}</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-16 max-w-xl">
          {c.heading}
        </h2>
      </SectionReveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
        {stats.map((s, i) => (
          <SectionReveal key={i} delay={i * 0.1}>
            <div className="bg-basalt p-8 lg:p-10">
              <span className="font-tech text-[36px] md:text-[48px] font-light text-ether block leading-none mb-1">{s.value}</span>
              <span className="font-tech text-[9px] tracking-[0.3em] text-ochre uppercase block mb-3">{s.unit}</span>
              <span className="font-body text-sm text-white/40 leading-snug block">{s.label}</span>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}