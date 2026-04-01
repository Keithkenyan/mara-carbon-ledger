import React from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import { useSiteContent } from '@/hooks/useSiteContent';

export default function HowItWorks() {
  const c = useSiteContent('home_howitworks');
  const steps = [
    { n: '01', title: c.step1Title, desc: c.step1Desc },
    { n: '02', title: c.step2Title, desc: c.step2Desc },
    { n: '03', title: c.step3Title, desc: c.step3Desc },
    { n: '04', title: c.step4Title, desc: c.step4Desc },
  ];
  const [h1, h2] = (c.heading || '').split('\n');

  return (
    <section className="py-24 lg:py-32">
      <HorizonLine />
      <div className="px-[5vw] lg:px-[8vw] mt-24 lg:mt-32">
        <SectionReveal>
          <SectionLabel>{c.label}</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-6 leading-tight max-w-2xl">
            {h1}<br />{h2}
          </h2>
          <p className="font-body text-base text-white/50 leading-relaxed mb-16 max-w-xl">{c.subtext}</p>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {steps.map((step, i) => (
            <SectionReveal key={step.n} delay={i * 0.1}>
              <div className="bg-basalt p-8 lg:p-10 h-full">
                <span className="font-tech text-[9px] tracking-[0.3em] text-ochre uppercase block mb-6">{step.n}</span>
                <h4 className="font-display text-xl text-ether mb-4 leading-snug">{step.title}</h4>
                <p className="font-body text-sm text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}