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
            <SectionLabel>About OMCP</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-8 leading-tight">
              What is One Mara<br />Carbon Project?
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-5">
              The One Mara Carbon Project (OMCP) is a carbon project managed by OMCP Mara Carbon CLG 
              (a company limited by guarantee). The project is working with conservancies across the 
              Maasai Mara to improve how grasslands are managed by supporting sustainable grazing 
              practices, restoration of degraded land, and strengthening wildlife habitats, while 
              generating carbon credits from increased soil carbon.
            </p>
            <p className="font-body text-base text-white/50 leading-relaxed mb-10">
              Our key partners are MMWCA, Conservation International, and Ahueni.
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
              Three Activity<br />Packages
            </h2>
            <div className="flex flex-col gap-8">
              {[
                { n: '01', title: 'Rotational Grazing & Herd Management', desc: 'We support conservancies to plan, manage, and monitor rotational grazing, building local capacity to restore grasslands, track livestock movement, and address land degradation.' },
                { n: '02', title: 'Land Restoration', desc: 'We support recovery of severely degraded areas where grazing alone cannot restore the land, using reseeding, erosion control, invasive species management, and other rehabilitation measures.' },
                { n: '03', title: 'Strengthening Conservancies', desc: 'In partnership with MMWCA, we strengthen conservancy governance by building leadership capacity, supporting formalization, improving management planning, and enabling more transparent and inclusive decision-making.' },
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