import React from 'react';
import { Link } from 'react-router-dom';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import { IMAGES } from '@/lib/images';

const stories = [
  {
    img:   IMAGES.ranger,
    quote: '"The conservancy gives our land a future. Every tree that stands is income for my family."',
    name:  'Lekishon Ole Sankok',
    role:  'Ranger, Olare Motorogi Conservancy',
  },
  {
    img:   IMAGES.elder,
    quote: '"We have managed this land for generations. The carbon project finally makes that work visible to the world."',
    name:  'Nashipai Simel',
    role:  'Landowner, Naboisho Conservancy',
  },
  {
    img:   IMAGES.dataRanger,
    quote: '"The data we collect tells the story of the Mara\'s recovery. Every measurement matters."',
    name:  'Tiampati Ole Ntimama',
    role:  'Field Monitor & Data Technician',
  },
];

export default function HomeCommunitySnippet() {
  return (
    <section className="py-24 lg:py-32">
      <HorizonLine />
      <div className="px-[5vw] lg:px-[8vw] mt-24 lg:mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionReveal>
              <SectionLabel>Community Pulse</SectionLabel>
              <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight max-w-lg leading-tight">
                The Mara's Guardians Speak
              </h2>
            </SectionReveal>
          </div>
          <SectionReveal delay={0.2}>
            <Link
              to="/community"
              className="font-tech text-[10px] tracking-[0.2em] uppercase text-ochre border-b border-ochre/30 pb-1 hover:border-ochre transition-colors whitespace-nowrap"
            >
              All Stories →
            </Link>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <SectionReveal key={s.name} delay={i * 0.12}>
              <div className="relative overflow-hidden group">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-basalt/95 via-basalt/40 to-transparent flex flex-col justify-end p-6">
                  <blockquote className="font-body text-sm text-ether/85 italic leading-relaxed mb-4">
                    {s.quote}
                  </blockquote>
                  <cite className="not-italic">
                    <span className="font-tech text-[10px] tracking-[0.15em] text-ochre uppercase block">{s.name}</span>
                    <span className="font-body text-[11px] text-white/40 block mt-0.5">{s.role}</span>
                  </cite>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}