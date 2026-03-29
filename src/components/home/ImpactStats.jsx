import React from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';

const stats = [
  { value: '100,000+', unit: 'Hectares',   label: 'of ecosystem protected' },
  { value: '2.8M',     unit: 'tCO₂e',      label: 'sequestered to date' },
  { value: '15',       unit: 'Conservancies', label: 'under active management' },
  { value: '12,500+',  unit: 'People',      label: 'in Maasai communities benefiting' },
];

export default function ImpactStats() {
  return (
    <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
      <SectionReveal>
        <SectionLabel>Impact Metrics · 2019–2026</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-16 max-w-xl">
          The Numbers That Cannot Be Disputed
        </h2>
      </SectionReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
        {stats.map((s, i) => (
          <SectionReveal key={s.unit} delay={i * 0.1}>
            <div className="bg-basalt p-8 lg:p-10">
              <span className="font-tech text-[36px] md:text-[48px] font-light text-ether block leading-none mb-1">
                {s.value}
              </span>
              <span className="font-tech text-[9px] tracking-[0.3em] text-ochre uppercase block mb-3">
                {s.unit}
              </span>
              <span className="font-body text-sm text-white/40 leading-snug block">
                {s.label}
              </span>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}