import React from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import GeoTag from '@/components/shared/GeoTag';
import { IMAGES } from '@/lib/images';

const stories = [
  {
    img:     IMAGES.ranger,
    name:    'Lekishon Ole Sankok',
    role:    'Senior Ranger · Olare Motorogi Conservancy',
    coords:  '−1°26′S 35°03′E',
    quote:   '"For ten years I walked this land with nothing but a spear. Now I carry a radio, data tablet, and a salary that keeps my children in school. The carbon project changed the economics of conservation."',
    category: 'Rangers & Monitoring',
  },
  {
    img:     IMAGES.elder,
    name:    'Nashipai Simel',
    role:    'Landowner & Community Board Member · Naboisho',
    coords:  '−1°22′S 35°07′E',
    quote:   '"We have managed this land for generations. My grandmother knew which grasses returned after fire. The carbon project finally makes that generational knowledge visible to the world — and pays us for it."',
    category: 'Landowners & Governance',
  },
  {
    img:     IMAGES.dataRanger,
    name:    'Tiampati Ole Ntimama',
    role:    'Field Data Technician · Mara North Conservancy',
    coords:  '−1°18′S 35°00′E',
    quote:   '"Every transect I walk, every tree I measure — that data becomes a carbon credit. I am now part of the global climate solution. That is something no one can take from the Maasai people."',
    category: 'Science & Data',
  },
];

const employmentStats = [
  { val: '340',    unit: 'Rangers',       sub: 'full-time employed across all conservancies' },
  { val: 'KES 2.4B', unit: 'Total Revenue', sub: 'returned to communities since 2019' },
  { val: '1,200+', unit: 'Landowners',    sub: 'receiving direct lease fee payments' },
  { val: '28',     unit: 'Women Leaders', sub: 'on community governance boards' },
];

const journal = [
  { date: 'March 2026', title: 'The Great Migration Returns: Data from the Mara Crossing', category: 'Wildlife' },
  { date: 'January 2026', title: "Community Bursary Programme Funds 480 Students' Fees", category: 'Education' },
  { date: 'November 2025', title: 'Third Annual Verification Complete — No Leakage Detected', category: 'Science' },
  { date: 'September 2025', title: 'Naboisho Conservancy Expands Women\'s Ranger Programme', category: 'Community' },
  { date: 'July 2025', title: 'Atmospheric Ledger: Six Years of Carbon Transparency', category: 'Transparency' },
  { date: 'April 2025', title: 'Remote Sensing Update: Biomass Up 12% in Northern Sectors', category: 'Science' },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-basalt pt-32">
      {/* Hero */}
      <section className="px-[5vw] lg:px-[8vw] pb-20">
        <SectionReveal>
          <GeoTag lat="−1°30′S" lng="35°00′E" className="block mb-6" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] text-ether tracking-tight leading-[0.92] mb-8">
            Community<br /><span className="text-ochre">Pulse</span>
          </h1>
          <p className="font-body text-base md:text-lg text-white/45 max-w-2xl leading-relaxed">
            Conservation is only as durable as the communities who live with it. 
            These are the voices, faces, and numbers behind One Mara's human story.
          </p>
        </SectionReveal>
      </section>

      <HorizonLine />

      {/* Employment stats */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <SectionLabel>Community Impact Data</SectionLabel>
        </SectionReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mt-10">
          {employmentStats.map((s, i) => (
            <SectionReveal key={s.unit} delay={i * 0.1}>
              <div className="bg-basalt p-8 lg:p-10">
                <span className="font-tech text-[32px] md:text-[40px] font-light text-ether block leading-none mb-1">
                  {s.val}
                </span>
                <span className="font-tech text-[9px] tracking-[0.3em] text-ochre uppercase block mb-2">
                  {s.unit}
                </span>
                <span className="font-body text-xs text-white/35 leading-snug">{s.sub}</span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <HorizonLine />

      {/* Portrait stories — masonry-style gallery */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <SectionLabel>Voices from the Mara</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-16 max-w-xl leading-tight">
            The Guardians of the Atmospheric Ledger
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <SectionReveal key={s.name} delay={i * 0.1}>
              <article className="relative overflow-hidden group">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-basalt/98 via-basalt/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <span className="font-tech text-[8px] tracking-[0.3em] text-ochre/60 uppercase mb-4 block">
                    {s.category} · {s.coords}
                  </span>
                  <blockquote className="font-body text-sm text-ether/80 italic leading-relaxed mb-5">
                    {s.quote}
                  </blockquote>
                  <cite className="not-italic">
                    <span className="font-tech text-[10px] tracking-[0.15em] text-ochre uppercase block">
                      {s.name}
                    </span>
                    <span className="font-body text-[11px] text-white/35 block mt-0.5">{s.role}</span>
                  </cite>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>

      <HorizonLine />

      {/* Journal */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <SectionLabel>Journal & Updates</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-16">
            Latest from the Field
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {journal.map((j, i) => (
            <SectionReveal key={j.title} delay={(i % 2) * 0.1}>
              <div className="bg-basalt p-8 lg:p-10 group cursor-pointer hover:bg-chlorophyll/20 transition-colors duration-300">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="font-tech text-[8px] tracking-[0.25em] text-ochre/50 uppercase">
                    {j.category}
                  </span>
                  <span className="font-tech text-[8px] tracking-[0.15em] text-white/25 uppercase shrink-0">
                    {j.date}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl text-ether group-hover:text-ochre transition-colors leading-snug">
                  {j.title}
                </h3>
                <span className="font-tech text-[9px] tracking-[0.2em] text-ochre/40 uppercase mt-6 block group-hover:text-ochre transition-colors">
                  Read →
                </span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
}