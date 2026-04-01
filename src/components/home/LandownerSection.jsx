import React from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import { useSiteContent } from '@/hooks/useSiteContent';

export default function LandownerSection() {
  const c = useSiteContent('home_landowner');
  const [h1a, h1b] = (c.heading1 || '').split('\n');
  const [h2a, h2b] = (c.heading2 || '').split('\n');
  const points1 = (c.points1 || '').split('\n').filter(Boolean);
  const points2 = (c.points2 || '').split('\n').filter(Boolean);

  return (
    <section className="py-24 lg:py-32">
      <HorizonLine />
      <div className="px-[5vw] lg:px-[8vw] mt-24 lg:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <SectionReveal>
            <SectionLabel>{c.label1}</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-8 leading-tight">
              {h1a}<br />{h1b}
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-8">{c.body1}</p>
            <ul className="space-y-4 mb-10">
              {points1.map((pt, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ochre flex-shrink-0" />
                  <span className="font-body text-base text-white/55 leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-white/35 leading-relaxed italic">{c.footnote}</p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <SectionLabel>{c.label2}</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-8 leading-tight">
              {h2a}<br />{h2b}
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-8">{c.body2}</p>
            <ul className="space-y-4 mb-10">
              {points2.map((pt, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ochre flex-shrink-0" />
                  <span className="font-body text-base text-white/55 leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}