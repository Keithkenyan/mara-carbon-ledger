import React from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import { IMAGES } from '@/lib/images';

export default function TheChallenge() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={IMAGES.grass} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(18,20,18,0.92) 0%, rgba(18,20,18,0.75) 60%, rgba(18,20,18,0.5) 100%)'
        }} />
      </div>
      <div className="relative z-10 px-[5vw] lg:px-[8vw]">
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