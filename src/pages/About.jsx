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
  'MMWCA – Maasai Mara Wildlife Conservancies Association',
  'Conservation International',
  'Ahueni',
  'Verra (VCS Registry)',
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
            <SectionLabel>About the Project</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-ether tracking-tight mb-8 leading-tight">
              One Mara Carbon Project
            </h2>
            <div className="space-y-5 font-body text-base text-white/45 leading-relaxed">
              <p>
                The One Mara Carbon Project (OMCP) is a carbon project managed by OMCP Mara Carbon CLG 
                (a company limited by guarantee). The project works with conservancies across the Maasai 
                Mara to improve how grasslands are managed — supporting sustainable grazing practices, 
                restoration of degraded land, and strengthening wildlife habitats, while generating 
                carbon credits from increased soil carbon.
              </p>
              <p>
                The Mara landscape is under increasing pressure. Over time, heavy grazing has reduced 
                the movement of livestock, with broken wildlife corridors damaging parts of the landscape. 
                This has reduced soil health and the amount of carbon stored in the soil, threatening 
                both wildlife habitats and the Maasai pastoralist way of life, which depends on healthy 
                grasslands for livestock.
              </p>
              <p>
                OMCP's theory of change delivers three activity packages: rotational grazing and 
                livestock herd management, land restoration, and strengthening existing conservancies 
                and establishing new ones — in partnership with MMWCA, Conservation International, 
                and Ahueni.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-8">
              {[
                { title: 'What This Means for Landowners', desc: 'Participation in OMCP does not change land ownership. Land remains under full ownership of landowners, livestock keeping continues, and no automatic reduction in cattle is required. Grazing is improved to match land capacity.' },
                { title: 'Benefits to Communities',       desc: 'OMCP delivers long-term value through direct payments to conservancy landowners from carbon revenues, supporting conservancy operations, investment in sustainable land management, and restoration of degraded land to support tourism.' },
                { title: 'Independent Safeguards',        desc: 'An independent Environmental and Social Impact Assessment has been completed, with mitigation measures in place. OMCP is supported by clear safeguards, accountability systems, and a formal grievance process.' },
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