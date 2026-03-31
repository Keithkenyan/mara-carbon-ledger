import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteContent } from '@/hooks/useSiteContent';

export default function Footer() {
  const f = useSiteContent('footer');
  return (
    <footer className="relative px-[5vw] lg:px-[8vw] py-16 lg:py-24 bg-basalt">
      <div className="horizon-line mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        {/* Brand */}
        <div className="md:col-span-5">
          <span className="font-display text-ether text-2xl tracking-[0.12em] uppercase block mb-1">One Mara</span>
          <span className="font-tech text-ochre text-[9px] tracking-[0.35em] uppercase block mb-6">Carbon Project</span>
          <p className="font-body text-sm text-white/40 max-w-sm leading-relaxed">
            {f.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {f.badges.map(badge => (
              <span key={badge} className="font-tech text-[8px] tracking-[0.2em] uppercase border border-white/10 text-white/30 px-3 py-1.5">
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a href="https://www.linkedin.com/company/one-mara-carbon-project/" target="_blank" rel="noopener noreferrer" className="font-tech text-[9px] tracking-[0.2em] uppercase text-white/30 hover:text-ochre transition-colors">LinkedIn</a>
            <a href="https://facebook.com/onemaracarbonproject/" target="_blank" rel="noopener noreferrer" className="font-tech text-[9px] tracking-[0.2em] uppercase text-white/30 hover:text-ochre transition-colors">Facebook</a>
          </div>
        </div>

        {/* Nav */}
        <div className="md:col-span-3">
          <h4 className="font-tech text-[9px] tracking-[0.3em] text-ochre uppercase mb-6">Navigate</h4>
          <nav className="flex flex-col gap-3">
            {f.links.map(l => (
              <Link key={l.path} to={l.path} className="font-body text-sm text-white/40 hover:text-ochre transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact + Resources */}
        <div className="md:col-span-4">
          <h4 className="font-tech text-[9px] tracking-[0.3em] text-ochre uppercase mb-6">Contact</h4>
          <div className="flex flex-col gap-3 font-body text-sm text-white/40">
            <a href={`mailto:${f.email}`} className="hover:text-ochre transition-colors">{f.email}</a>
            <a href={`tel:${f.phone.replace(/\s/g,'')}`} className="hover:text-ochre transition-colors">{f.phone}</a>
            <span>{f.location}</span>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <h4 className="font-tech text-[9px] tracking-[0.3em] text-ochre uppercase mb-4">Resources</h4>
            <div className="flex flex-col gap-2 font-body text-sm text-white/35">
              {[
                'Project Design Document (PD)',
                'ESIA',
                'ESMP',
                'Labour Policy',
                'Independent ESIA',
                'Independent Carbon Verification',
              ].map(doc => (
                <span key={doc} className="hover:text-ochre transition-colors cursor-default">{doc}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="horizon-line mt-16 mb-8" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-tech text-[9px] tracking-[0.15em] text-white/20 uppercase">{f.copyright}</p>
        <p className="font-tech text-[9px] tracking-[0.15em] text-white/20 uppercase">{f.bottomTagline}</p>
      </div>
    </footer>
  );
}