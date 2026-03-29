import React from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import { Link } from 'react-router-dom';

const outcomes = [
  {
    label: 'Climate',
    title: 'Increased carbon stored in soils',
    desc: 'Through improved grazing practices and land restoration, OMCP measurably increases soil organic carbon across the Mara landscape.',
  },
  {
    label: 'Community',
    title: 'Improved livelihoods and income opportunities',
    desc: 'Carbon revenues flow directly to landowners and conservancies, creating sustainable income alongside improved pasture and livestock productivity.',
  },
  {
    label: 'Biodiversity',
    title: 'Protected habitats and wildlife movement',
    desc: 'Restored grassland corridors reconnect fragmented habitats, supporting the wildlife populations that define the Maasai Mara ecosystem.',
  },
];

export default function ImpactOutcomes() {
  return (
    <section className="py-24 lg:py-32">
      <HorizonLine />
      <div className="px-[5vw] lg:px-[8vw] mt-24 lg:mt-32">
        <SectionReveal>
          <SectionLabel>Climate · Community · Biodiversity</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-6 leading-tight max-w-2xl">
            Three Connected Outcomes
          </h2>
          <p className="font-body text-base text-white/50 leading-relaxed mb-16 max-w-xl">
            The project delivers three connected outcomes that reinforce each other across the Mara landscape.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {outcomes.map((o, i) => (
            <SectionReveal key={o.label} delay={i * 0.1}>
              <div className="border border-white/5 p-8 hover:border-ochre/20 transition-all duration-300 h-full">
                <span className="font-tech text-[9px] tracking-[0.35em] text-ochre uppercase block mb-6">{o.label}</span>
                <h4 className="font-display text-xl text-ether mb-4 leading-snug">{o.title}</h4>
                <p className="font-body text-sm text-white/40 leading-relaxed">{o.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Safeguards + Grievance CTA */}
        <SectionReveal delay={0.2}>
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <SectionLabel>Safeguards & Accountability</SectionLabel>
                <h3 className="font-display text-2xl md:text-3xl text-ether mb-4 leading-tight">
                  A Formal Process for Raising Concerns
                </h3>
                <p className="font-body text-sm text-white/50 leading-relaxed mb-3">
                  OMCP is supported by clear safeguards and accountability systems. Community members 
                  and stakeholders can submit feedback through conservancies or directly to OMCP.
                </p>
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  All grievances are reviewed and addressed within defined timelines.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:items-end">
                <Link
                  to="/grievance"
                  className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors text-center"
                >
                  Learn About the Grievance Process
                </Link>
                <a
                  href="mailto:info@onemaracarbon.org"
                  className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 border border-ether/20 text-ether/70 hover:border-ochre hover:text-ochre transition-all text-center"
                >
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