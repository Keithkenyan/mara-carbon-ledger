import React from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import { useSiteContent } from '@/hooks/useSiteContent';

export default function Careers() {
  const c = useSiteContent('page_careers');
  const values = [
    { title: c.value1Title, desc: c.value1Desc },
    { title: c.value2Title, desc: c.value2Desc },
    { title: c.value3Title, desc: c.value3Desc },
  ];

  return (
    <div className="min-h-screen bg-basalt pt-32">
      <section className="px-[5vw] lg:px-[8vw] pb-16">
        <SectionReveal>
          <SectionLabel>{c.label}</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl text-ether tracking-tight leading-[0.92] mb-8">
            {c.heading1}<br /><span className="text-ochre">{c.heading2}</span>
          </h1>
        </SectionReveal>
      </section>

      <HorizonLine />

      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <SectionReveal>
            <div className="space-y-6 font-body text-base text-white/50 leading-relaxed">
              <p>{c.body1}</p>
              <p>{c.body2}</p>
              <p>{c.body3}</p>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="mailto:info@onemaracarbon.org" className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors">
                Contact Us
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="glass-card p-10">
              <span className="font-tech text-[9px] tracking-[0.35em] text-ochre uppercase block mb-6">Current Openings</span>
              <div className="border border-white/5 px-6 py-8 text-center">
                <h3 className="font-display text-2xl text-ether mb-3">{c.openingsHeading}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed mb-6">{c.openingsBody}</p>
                <a href="mailto:info@onemaracarbon.org" className="font-tech text-[10px] tracking-[0.2em] uppercase text-ochre border-b border-ochre/30 pb-1 hover:border-ochre transition-colors">
                  Express Interest →
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <HorizonLine />

      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-10 leading-tight">{c.valuesHeading}</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="border border-white/5 p-8 hover:border-ochre/20 transition-all duration-300 h-full">
                <h4 className="font-tech text-xs tracking-[0.2em] text-ochre uppercase mb-4">{v.title}</h4>
                <p className="font-body text-sm text-white/40 leading-relaxed">{v.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
}