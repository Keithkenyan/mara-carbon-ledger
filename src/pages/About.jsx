import React from 'react';
import { Link } from 'react-router-dom';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import GeoTag from '@/components/shared/GeoTag';
import { IMAGES } from '@/lib/images';

const team = [
  { name: 'Dr. Amelia Waweru',    role: 'Executive Director',         bg: '#1B3022' },
  { name: 'James Ole Parsitau',   role: 'Community Engagement Lead',  bg: '#1B3022' },
  { name: 'Sarah Kimani',         role: 'Chief Carbon Scientist',     bg: '#1B3022' },
  { name: 'William Nkemdirim',    role: 'Finance & Credit Director',  bg: '#1B3022' },
];

const partners = [
  'Verra (Verified Carbon Standard)',
  'Wildlife Works Carbon',
  'Frankfurt Zoological Society',
  'African Wildlife Foundation',
  'Kenya Wildlife Service',
  'Narok County Government',
];

export default function About() {
  return (
    <div className="min-h-screen bg-basalt pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-end pb-24">
        <div className="absolute inset-0">
          <img src={IMAGES.wildlife} alt="Mara ecosystem" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(18,20,18,0.4) 0%, rgba(18,20,18,0.95) 100%)'
          }} />
        </div>
        <div className="relative z-10 px-[5vw] lg:px-[8vw]">
          <SectionReveal>
            <GeoTag lat="−1°30′S" lng="35°00′E" className="block mb-6" />
            <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] text-ether tracking-tight leading-[0.92] mb-8">
              About<br /><span className="text-ochre">One Mara</span>
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Story */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <SectionReveal>
            <SectionLabel>Our Origin</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-ether tracking-tight mb-8 leading-tight">
              Born from a Crisis,<br />Built for Permanence
            </h2>
            <div className="space-y-5 font-body text-base text-white/45 leading-relaxed">
              <p>
                One Mara Carbon Project was founded in 2019 in direct response to the collapse 
                of tourism revenue that had long subsidised conservation in the Greater Mara 
                Ecosystem. As conservancies faced insolvency, a new financial model was needed — 
                one that did not depend on visitors arriving from distant continents.
              </p>
              <p>
                The answer was carbon. The Mara's vast grasslands, riverine forests, and acacia 
                woodlands had been quietly sequestering enormous quantities of CO₂ for millennia. 
                One Mara was established to measure, verify, and monetise that sequestration — 
                with the Maasai communities who own the land as primary beneficiaries.
              </p>
              <p>
                What began as an emergency revenue bridge has evolved into one of Africa's 
                most rigorous and transparent carbon programmes, now protecting 112,000 hectares 
                across 15 conservancies and generating over KES 580M in community revenue.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-8">
              {[
                { title: 'Additionality',  desc: 'Without carbon finance, conservancy land faces conversion pressure from agriculture and settlement. Our credits are genuinely additional — the protection would not occur without the revenue.' },
                { title: 'Permanence',     desc: 'Long-term legally binding land-use agreements with Maasai group ranches, registered with Narok County Government, ensure that sequestration is permanent and enforceable.' },
                { title: 'No Leakage',     desc: 'Annual satellite monitoring tracks displacement of any pressure to adjacent non-project areas. Three consecutive audits have returned zero leakage findings.' },
              ].map((item, i) => (
                <div key={item.title} className="glass-card p-6">
                  <h4 className="font-tech text-xs tracking-[0.2em] text-ochre uppercase mb-3">{item.title}</h4>
                  <p className="font-body text-sm text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <HorizonLine />

      {/* Team */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <SectionLabel>The Team</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-16">
            Leadership
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <SectionReveal key={member.name} delay={i * 0.08}>
              <div className="group">
                <div
                  className="w-full aspect-square flex items-end p-5 mb-4 transition-all duration-500 group-hover:brightness-125"
                  style={{ background: `linear-gradient(135deg, ${member.bg} 0%, #0d1f14 100%)` }}
                >
                  <div className="w-8 h-8 rounded-full bg-ochre/20 border border-ochre/30 flex items-center justify-center">
                    <span className="font-display text-ochre text-sm">{member.name[0]}</span>
                  </div>
                </div>
                <h4 className="font-tech text-[10px] tracking-[0.15em] text-ether uppercase">{member.name}</h4>
                <p className="font-body text-xs text-white/35 mt-1">{member.role}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <HorizonLine />

      {/* Partners */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <SectionLabel>Partners & Accreditors</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ether tracking-tight mb-16">
            Built on Trust
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((p, i) => (
            <SectionReveal key={p} delay={i * 0.07}>
              <div className="border border-white/5 px-8 py-6 font-tech text-sm text-white/40 hover:border-ochre/20 hover:text-white/60 transition-all duration-300">
                {p}
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <HorizonLine />

      {/* CTA */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32 text-center">
        <SectionReveal>
          <h2 className="font-display text-4xl md:text-6xl text-ether tracking-tight mb-8 leading-tight">
            Join the Mission
          </h2>
          <p className="font-body text-base text-white/45 max-w-xl mx-auto leading-relaxed mb-10">
            Whether you are a corporation seeking verified offsets, a foundation looking 
            to fund conservation, or an individual committed to the Mara's future — 
            there is a place for you here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/credits" className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors">
              Purchase Credits
            </Link>
            <Link to="/community" className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 border border-ether/15 text-ether/50 hover:border-ochre hover:text-ochre transition-all">
              Read Our Stories
            </Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}