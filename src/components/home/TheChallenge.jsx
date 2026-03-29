import React from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';

export default function TheChallenge() {
  return (
    <section className="py-24 lg:py-32">
      <HorizonLine />
      <div className="px-[5vw] lg:px-[8vw] mt-24 lg:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <SectionReveal>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-8 leading-tight">
              The Mara Landscape is Under<br />Increasing Pressure
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-white/50 leading-relaxed mb-6">
              Over time, heavy grazing has reduced the movement of livestock, with broken wildlife 
              corridors damaging parts of the landscape. This has reduced soil health and the amount 
              of carbon stored in the soil, threatening both wildlife habitats and the Maasai 
              pastoralist way of life, which depends on healthy grasslands for livestock.
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}