import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/shared/SectionReveal';
import GeoTag from '@/components/shared/GeoTag';
import { IMAGES } from '@/lib/images';

const species = [
  { name: 'Wildebeest', count: '1.5M+', label: 'annual migration' },
  { name: 'Lion',       count: '800+',  label: 'resident population' },
  { name: 'Elephant',   count: '2,000+', label: 'within the ecosystem' },
  { name: 'Cheetah',    count: '50+',   label: 'breeding individuals' },
];

export default function WildlifeStrip() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Full-bleed image */}
      <div className="relative h-[55vh] md:h-[70vh] overflow-hidden">
        <motion.img
          src={IMAGES.wildlife}
          alt="Wildebeest herd at sunset, Masai Mara"
          className="w-full h-full object-cover object-center"
          style={{ willChange: 'transform' }}
          whileInView={{ scale: 1.04 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(18,20,18,0.3) 0%, rgba(18,20,18,0.1) 40%, rgba(18,20,18,0.85) 100%)'
        }} />
        <GeoTag lat="−1°35′S" lng="35°10′E" className="absolute top-6 left-[5vw] lg:left-[8vw]" />
      </div>

      {/* Wildlife stats over image */}
      <div className="px-[5vw] lg:px-[8vw] py-16 bg-basalt">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {species.map((s, i) => (
            <SectionReveal key={s.name} delay={i * 0.08}>
              <div>
                <span className="font-tech text-[28px] md:text-[36px] font-light text-ether block leading-none mb-1">
                  {s.count}
                </span>
                <span className="font-tech text-[9px] tracking-[0.25em] text-ochre uppercase block mb-1">
                  {s.name}
                </span>
                <span className="font-body text-xs text-white/35">{s.label}</span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}