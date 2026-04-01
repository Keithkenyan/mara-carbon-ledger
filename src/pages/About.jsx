import React from 'react';
import { Link } from 'react-router-dom';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import GeoTag from '@/components/shared/GeoTag';
import { useSiteContent } from '@/hooks/useSiteContent';
import { IMAGES } from '@/lib/images';

const partners = [
  'MMWCA – Maasai Mara Wildlife Conservancies Association',
  'Conservation International',
  'Ahueni',
  'Verra (VCS Registry)',
  'Kenya Wildlife Service',
  'Narok County Government',
];

export default function About() {
  const c = useSiteContent('page_about');

  const team = [
    { name: c.member1Name, role: c.member1Role },
    { name: c.member2Name, role: c.member2Role },
    { name: c.member3Name, role: c.member3Role },
    { name: c.member4Name, role: c.member4Role },
  ];

  const cards = [
    { title: c.card1Title, desc: c.card1Desc },
    { title: c.card2Title, desc: c.card2Desc },
    { title: c.card3Title, desc: c.card3Desc },
  ];

  return (
    <div className="min-h-screen bg-basalt pt-32">
      <section className="relative overflow-hidden min-h-[60vh] flex items-end pb-24">
        <div className="absolute inset-0">
          <img src={IMAGES.wildlife} alt="Mara ecosystem" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(18,20,18,0.4) 0%, rgba(18,20,18,0.95) 100%)' }} />
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

      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <SectionReveal>
            <SectionLabel>{c.storyLabel}</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-ether tracking-tight mb-8 leading-tight">{c.storyHeading}</h2>
            <div className="space-y-5 font-body text-base text-white/45 leading-relaxed">
              <p>{c.storyBody1}</p>
              <p>{c.storyBody2}</p>
              <p>{c.storyBody3}</p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="space-y-8">
              {cards.map((item) => (
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

      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <SectionLabel>{c.teamLabel}</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-16">{c.teamHeading}</h2>
        </SectionReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <div className="group">
                <div className="w-full aspect-square flex items-end p-5 mb-4 transition-all duration-500 group-hover:brightness-125" style={{ background: 'linear-gradient(135deg, #1B3022 0%, #0d1f14 100%)' }}>
                  <div className="w-8 h-8 rounded-full bg-ochre/20 border border-ochre/30 flex items-center justify-center">
                    <span className="font-display text-ochre text-sm">{(member.name || '?')[0]}</span>
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

      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <SectionLabel>Partners & Accreditors</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ether tracking-tight mb-16">Built on Trust</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((p, i) => (
            <SectionReveal key={p} delay={i * 0.07}>
              <div className="border border-white/5 px-8 py-6 font-tech text-sm text-white/40 hover:border-ochre/20 hover:text-white/60 transition-all duration-300">{p}</div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <HorizonLine />

      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32 text-center">
        <SectionReveal>
          <h2 className="font-display text-4xl md:text-6xl text-ether tracking-tight mb-8 leading-tight">{c.ctaHeading}</h2>
          <p className="font-body text-base text-white/45 max-w-xl mx-auto leading-relaxed mb-10">{c.ctaBody}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/credits" className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors">Purchase Credits</Link>
            <Link to="/community" className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 border border-ether/15 text-ether/50 hover:border-ochre hover:text-ochre transition-all">Read Our Stories</Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}