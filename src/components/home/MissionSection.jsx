import React from 'react';
import { Link } from 'react-router-dom';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import GeoTag from '@/components/shared/GeoTag';
import HorizonLine from '@/components/shared/HorizonLine';
import { IMAGES } from '@/lib/images';

export default function MissionSection() {
  return (
    <section className="py-24 lg:py-32">
      <HorizonLine />

      <div className="px-[5vw] lg:px-[8vw] mt-24 lg:mt-32">
        {/* Row 1 — text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <SectionReveal>
            <SectionLabel>The Mission</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-8 leading-tight">
              A Living Carbon Sink<br />of Global Significance
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-5">
              The Greater Mara Ecosystem is one of Africa's last great wilderness areas — 
              a vast mosaic of open grasslands, riverine forests, and ancient acacia woodland 
              that sequesters millions of tonnes of CO₂ annually while sustaining one of the 
              planet's most biodiverse landscapes.
            </p>
            <p className="font-body text-base text-white/50 leading-relaxed mb-10">
              One Mara Carbon Project works in direct partnership with Maasai landowners and 
              conservancies to protect this critical biome through rigorously verified carbon 
              credits and transparent climate finance that flows directly to the ecosystem's 
              rightful guardians.
            </p>
            <Link
              to="/about"
              className="font-tech text-[10px] tracking-[0.2em] uppercase text-ochre border-b border-ochre/30 pb-1 hover:border-ochre transition-colors"
            >
              Our Story →
            </Link>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="relative group">
              <img
                src={IMAGES.woodland}
                alt="Aerial view of Mara woodland canopy"
                className="w-full aspect-[4/3] object-cover"
              />
              <GeoTag lat="−1°28′S" lng="35°08′E" className="absolute bottom-4 left-4" />
            </div>
          </SectionReveal>
        </div>

        {/* Row 2 — image + pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-24 lg:mt-32">
          <SectionReveal className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={IMAGES.river}
                alt="Mara River at dawn"
                className="w-full aspect-video object-cover"
              />
              <GeoTag lat="−1°32′S" lng="35°02′E" className="absolute bottom-4 left-4" />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="order-1 lg:order-2">
            <SectionLabel>The Approach</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-10 leading-tight">
              Science Meets<br />Stewardship
            </h2>
            <div className="flex flex-col gap-8">
              {[
                { n: '01', title: 'Remote Sensing',       desc: 'Satellite-monitored biomass and carbon-stock measurement across the entire project area, audited annually.' },
                { n: '02', title: 'Community Governance', desc: 'Revenue sharing with 15 Maasai group ranches and conservancies, with community-led decision-making on land use.' },
                { n: '03', title: 'Third-Party Verification', desc: 'Independently audited under VCS (Verra) and CCBA protocols with annual public disclosure of all methodology.' },
              ].map(item => (
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