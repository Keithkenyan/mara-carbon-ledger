import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CarbonCounter from '@/components/home/CarbonCounter';
import GeoTag from '@/components/shared/GeoTag';
import { ArrowDown } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';

export default function HeroSection() {
  const hero = useSiteContent('hero');
  const images = useSiteContent('images');
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Aerial — Masai Mara savannah, Kenya"
          className="w-full h-full object-cover object-center"
        />
        {/* Atmospheric gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(18,20,18,0.55) 0%, rgba(18,20,18,0.25) 40%, rgba(18,20,18,0.75) 75%, rgba(18,20,18,1) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-[5vw] lg:px-[8vw] pt-36 pb-20">
        {/* Geo label */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
          <GeoTag lat="−1°30′S" lng="35°00′E" alt="1,520m ASL" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] leading-[0.92] tracking-[-0.02em] text-ether mt-8 max-w-5xl"
        >
          {hero.headline1}<br />
          <span className="text-ochre">{hero.headline2}</span><br />
          {hero.headline3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-body text-base md:text-lg text-white/55 max-w-lg mt-8 leading-relaxed"
        >
          {hero.subtext}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to={hero.cta1Path}
            className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors duration-300"
          >
            {hero.cta1Label}
          </Link>
          <Link
            to={hero.cta2Path}
            className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 border border-ether/20 text-ether/70 hover:border-ochre hover:text-ochre transition-all duration-300"
          >
            {hero.cta2Label}
          </Link>
        </motion.div>

        {/* Carbon counter — floats forward as you scroll */}
        <div className="mt-auto pt-20">
          <CarbonCounter />
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex justify-center mt-12"
        >
          <ArrowDown className="w-5 h-5 text-white/30 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}