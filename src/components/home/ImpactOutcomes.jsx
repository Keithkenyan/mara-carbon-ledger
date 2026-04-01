import React from 'react';
import { Link } from 'react-router-dom';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import { useSiteContent } from '@/hooks/useSiteContent';

export default function ImpactOutcomes() {
  const c = useSiteContent('home_outcomes');
  const footer = useSiteContent('footer');
  const contactEmail = footer?.email || 'info@onemaracarbon.org';
  const outcomes = [
    { label: c.outcome1Label, title: c.outcome1Title, desc: c.outcome1Desc },
    { label: c.outcome2Label, title: c.outcome2Title, desc: c.outcome2Desc },
    { label: c.outcome3Label, title: c.outcome3Title, desc: c.outcome3Desc },
  ];

  return (
    <section className="py-24 lg:py-32">
      <HorizonLine />
      <div className="px-[5vw] lg:px-[8vw] mt-24 lg:mt-32">
        <SectionReveal>
          <SectionLabel>{c.label}</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-6 leading-tight max-w-2xl">{c.heading}</h2>
          <p className="font-body text-base text-white/50 leading-relaxed mb-16 max-w-xl">{c.subtext}</p>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {outcomes.map((o, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="border border-white/5 p-8 hover:border-ochre/20 transition-all duration-300 h-full">
                <span className="font-tech text-[9px] tracking-[0.35em] text-ochre uppercase block mb-6">{o.label}</span>
                <h4 className="font-display text-xl text-ether mb-4 leading-snug">{o.title}</h4>
                <p className="font-body text-sm text-white/40 leading-relaxed">{o.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal delay={0.2}>
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <SectionLabel>Safeguards & Accountability</SectionLabel>
                <h3 className="font-display text-2xl md:text-3xl text-ether mb-4 leading-tight">{c.safeguardsHeading}</h3>
                <p className="font-body text-sm text-white/50 leading-relaxed mb-3">{c.safeguardsBody1}</p>
                <p className="font-body text-sm text-white/50 leading-relaxed">{c.safeguardsBody2}</p>
              </div>
              <div className="flex flex-col gap-4 md:items-end">
                <Link to="/grievance" className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors text-center">
                  Learn About the Grievance Process
                </Link>
                <a href={`mailto:${contactEmail}`} className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 border border-ether/20 text-ether/70 hover:border-ochre hover:text-ochre transition-all text-center">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}