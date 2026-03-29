import React from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';

const points = [
  'Land remains under the full ownership of landowners',
  'Livestock keeping continues',
  'No automatic reduction in cattle is required',
  'Grazing is improved to match land capacity',
];

export default function LandownerSection() {
  return (
    <section className="py-24 lg:py-32">
      <HorizonLine />
      <div className="px-[5vw] lg:px-[8vw] mt-24 lg:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <SectionReveal>
            <SectionLabel>For Conservancy Landowners</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-8 leading-tight">
              What This Means<br />for You
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-8">
              Participation in OMCP does not change land ownership.
            </p>
            <ul className="space-y-4 mb-10">
              {points.map((pt, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ochre flex-shrink-0" />
                  <span className="font-body text-base text-white/55 leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-white/35 leading-relaxed italic">
              As land health improves, pasture availability and livestock productivity are expected to increase over time.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <SectionLabel>Benefits to Communities</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-8 leading-tight">
              Long-Term Value<br />in the Mara
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-8">
              OMCP is designed to deliver long-term value within the Mara landscape through:
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Direct payments to conservancy landowners from carbon revenues',
                'Supporting conservancy operations',
                'Investment in sustainable land management',
                'Restoration of degraded land to support tourism',
              ].map((pt, i) => (
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