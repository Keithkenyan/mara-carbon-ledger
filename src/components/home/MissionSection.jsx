import React from 'react';
import { Link } from 'react-router-dom';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import GeoTag from '@/components/shared/GeoTag';
import HorizonLine from '@/components/shared/HorizonLine';
import { useSiteContent } from '@/hooks/useSiteContent';
import { IMAGES } from '@/lib/images';

export default function MissionSection() {
  const c = useSiteContent('home_mission');
  const steps = [
    { n: '01', title: c.step1Title, desc: c.step1Desc },
    { n: '02', title: c.step2Title, desc: c.step2Desc },
    { n: '03', title: c.step3Title, desc: c.step3Desc },
  ];
  const [h1, h2] = (c.heading || '').split('\n');
  const [a1, a2] = (c.approachHeading || '').split('\n');

  return (
    <section className="py-24 lg:py-32">
      <HorizonLine />
      <div className="px-[5vw] lg:px-[8vw] mt-24 lg:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <SectionReveal>
            <SectionLabel>{c.label}</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-8 leading-tight">
              {h1}<br />{h2}
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-5">{c.body1}</p>
            <p className="font-body text-base text-white/50 leading-relaxed mb-10">{c.body2}</p>
            <Link to="/about" className="font-tech text-[10px] tracking-[0.2em] uppercase text-ochre border-b border-ochre/30 pb-1 hover:border-ochre transition-colors">
              Our Story →
            </Link>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="relative group">
              <img src={IMAGES.woodland} alt="Aerial view of Mara woodland canopy" className="w-full aspect-[4/3] object-cover" />
              <GeoTag lat="−1°28′S" lng="35°08′E" className="absolute bottom-4 left-4" />
            </div>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-24 lg:mt-32">
          <SectionReveal className="order-2 lg:order-1">
            <div className="relative">
              <img src={IMAGES.river} alt="Mara River at dawn" className="w-full aspect-video object-cover" />
              <GeoTag lat="−1°32′S" lng="35°02′E" className="absolute bottom-4 left-4" />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2} className="order-1 lg:order-2">
            <SectionLabel>{c.approachLabel}</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-10 leading-tight">
              {a1}<br />{a2}
            </h2>
            <div className="flex flex-col gap-8">
              {steps.map(item => (
                <div key={item.n} className="grid grid-cols-[32px_1fr] gap-6 items-start">
                  <span className="font-tech text-[9px] tracking-[0.2em] text-ochre/50 mt-1">{item.n}</span>
                  <div>
                    <h4 className="font-tech text-sm text-ether mb-2 tracking-wide">{item.title}</h4>
                    <p className="font-body text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}