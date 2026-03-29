import React from 'react';
import { Link } from 'react-router-dom';
import SectionReveal from '@/components/shared/SectionReveal';
import { IMAGES } from '@/lib/images';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40 px-[5vw] lg:px-[8vw]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={IMAGES.grass} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-chlorophyll/80" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <SectionReveal>
          <p className="font-tech text-[9px] tracking-[0.35em] text-ochre uppercase mb-6">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-ether tracking-tight mb-8 leading-tight">
            Get in Touch
          </h2>
          <p className="font-body text-base text-white/55 leading-relaxed mb-4 max-w-xl">
            <strong className="text-ether/70">Email:</strong>{' '}
            <a href="mailto:info@onemaracarbon.org" className="hover:text-ochre transition-colors">info@onemaracarbon.org</a>
          </p>
          <p className="font-body text-base text-white/55 leading-relaxed mb-10 max-w-xl">
            <strong className="text-ether/70">Phone:</strong>{' '}
            <a href="tel:0715047047" className="hover:text-ochre transition-colors">0715 047047 | 0777 047047</a>
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/grievance"
              className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors"
            >
              Grievance &amp; Feedback
            </Link>
            <a
              href="mailto:info@onemaracarbon.org"
              className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 border border-ether/20 text-ether/70 hover:border-ochre hover:text-ochre transition-all"
            >
              Contact Us
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}