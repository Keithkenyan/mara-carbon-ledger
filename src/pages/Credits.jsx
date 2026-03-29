import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import GeoTag from '@/components/shared/GeoTag';
import { IMAGES } from '@/lib/images';
import { Check, Leaf, Users, Shield } from 'lucide-react';

const PRICE_PER_TONNE = 18.5;

function getImpact(tonnes) {
  if (tonnes < 5)   return { area: (tonnes * 0.45).toFixed(1),  label: 'hectares of acacia woodland protected' };
  if (tonnes < 50)  return { area: (tonnes * 0.45).toFixed(0),  label: 'hectares of savannah ecosystem protected' };
  if (tonnes < 200) return { area: (tonnes * 0.45).toFixed(0),  label: 'hectares — the size of a Maasai group ranch section' };
  if (tonnes < 500) return { area: (tonnes * 0.45).toFixed(0),  label: 'hectares — sustaining a full wildlife corridor' };
  return             { area: (tonnes * 0.45).toFixed(0),         label: 'hectares — a landscape-scale conservation block' };
}

function getRangerYears(tonnes) {
  return (tonnes * 0.08).toFixed(1);
}

export default function Credits() {
  const [tonnes, setTonnes] = useState(10);
  const [form, setForm] = useState({ org: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const impact = getImpact(tonnes);
  const rangerYears = getRangerYears(tonnes);
  const total = (tonnes * PRICE_PER_TONNE).toLocaleString('en-US', { minimumFractionDigits: 2 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-basalt pt-32">
      {/* Hero */}
      <section className="px-[5vw] lg:px-[8vw] pb-20 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
          <img src={IMAGES.woodland} alt="" className="w-full h-full object-cover" />
        </div>
        <SectionReveal>
          <GeoTag lat="−1°30′S" lng="35°00′E" className="block mb-6" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] text-ether tracking-tight leading-[0.92] mb-8">
            Carbon<br /><span className="text-ochre">Credit Portal</span>
          </h1>
          <p className="font-body text-base md:text-lg text-white/45 max-w-2xl leading-relaxed">
            Purchase verified Mara Carbon Units directly. Every credit is independently 
            audited, traceable to a specific conservancy sector, and tied to real 
            community benefit flows.
          </p>
        </SectionReveal>
      </section>

      <HorizonLine />

      {/* Carbon Weight Slider */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Slider side */}
          <SectionReveal>
            <SectionLabel>Configure Your Offset</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-ether tracking-tight mb-12">
              How much carbon<br />will you retire?
            </h2>

            {/* Slider */}
            <div className="mb-10">
              <div className="flex items-end justify-between mb-4">
                <span className="font-tech text-[56px] md:text-[72px] font-light text-ether leading-none data-glow">
                  {tonnes}
                </span>
                <span className="font-tech text-sm tracking-[0.2em] text-ochre/60 uppercase mb-3">Tonnes CO₂e</span>
              </div>
              <input
                type="range"
                min={1}
                max={1000}
                value={tonnes}
                onChange={e => setTonnes(Number(e.target.value))}
                className="w-full h-0.5 appearance-none bg-white/10 rounded-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #D4A276 0%, #D4A276 ${(tonnes/1000)*100}%, rgba(255,255,255,0.1) ${(tonnes/1000)*100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <div className="flex justify-between mt-2 font-tech text-[9px] tracking-[0.2em] text-white/20">
                <span>1 Tonne</span><span>1,000 Tonnes</span>
              </div>
            </div>

            {/* Quick select */}
            <div className="flex flex-wrap gap-2 mb-12">
              {[10, 50, 100, 250, 500, 1000].map(v => (
                <button
                  key={v}
                  onClick={() => setTonnes(v)}
                  className={`font-tech text-[9px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-200 ${
                    tonnes === v
                      ? 'border-ochre text-ochre bg-ochre/10'
                      : 'border-white/10 text-white/30 hover:border-white/30 hover:text-white/60'
                  }`}
                >
                  {v}t
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Receipt card */}
          <SectionReveal delay={0.2}>
            <motion.div
              key={tonnes}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 lg:p-10"
            >
              <p className="font-tech text-[9px] tracking-[0.3em] text-ochre/60 uppercase mb-6">
                Carbon Credit Receipt — Live Preview
              </p>

              <div className="font-tech text-[10px] tracking-[0.15em] text-white/20 uppercase mb-6 pb-6 border-b border-white/5">
                One Mara Carbon Project · VCS ID: VCS-2847
              </div>

              <div className="space-y-5 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-tech text-[10px] tracking-[0.15em] text-white/40 uppercase">Volume</span>
                  <span className="font-tech text-sm text-ether">{tonnes} tCO₂e</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-tech text-[10px] tracking-[0.15em] text-white/40 uppercase">Unit Price</span>
                  <span className="font-tech text-sm text-ether">USD {PRICE_PER_TONNE.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-tech text-[10px] tracking-[0.15em] text-white/40 uppercase">Standard</span>
                  <span className="font-tech text-sm text-ether">VCS + CCBA Gold</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-tech text-[10px] tracking-[0.15em] text-white/40 uppercase">Registry</span>
                  <span className="font-tech text-sm text-ether">Verra (Public)</span>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-tech text-[10px] tracking-[0.2em] text-white/40 uppercase">Total Investment</span>
                  <span className="font-tech text-2xl text-ochre">USD {total}</span>
                </div>
              </div>

              {/* Impact visualisation */}
              <div className="bg-white/3 border border-white/5 p-5 mb-8">
                <p className="font-tech text-[9px] tracking-[0.25em] text-ochre/50 uppercase mb-4">Your Impact</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-tech text-xl text-ether block leading-none mb-1">{impact.area}</span>
                    <span className="font-body text-[11px] text-white/35 leading-snug block">{impact.label}</span>
                  </div>
                  <div>
                    <span className="font-tech text-xl text-ether block leading-none mb-1">{rangerYears}</span>
                    <span className="font-body text-[11px] text-white/35 leading-snug block">ranger-years of employment funded</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('enquiry-form').scrollIntoView({ behavior: 'smooth' })}
                className="w-full font-tech text-[10px] tracking-[0.25em] uppercase py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors"
              >
                Proceed to Enquiry →
              </button>
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      <HorizonLine />

      {/* Trust signals */}
      <section className="px-[5vw] lg:px-[8vw] py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: 'Third-Party Verified', desc: 'Annual independent audits by Bureau Veritas. All VCUs registered on the Verra public registry.' },
            { icon: Leaf,   title: 'Biodiversity Co-Benefits', desc: 'CCBA Gold certified — protecting 340+ wildlife species including the Big Five.' },
            { icon: Users,  title: 'Community First', desc: '80% of net revenue flows directly to Maasai landowners through transparent benefit-sharing agreements.' },
          ].map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.1}>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 border border-ochre/20 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-ochre/60" />
                </div>
                <div>
                  <h4 className="font-tech text-sm text-ether mb-2 tracking-wide">{item.title}</h4>
                  <p className="font-body text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <HorizonLine />

      {/* Enquiry form */}
      <section id="enquiry-form" className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <SectionReveal>
            <SectionLabel>Credit Enquiry</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-6 leading-tight">
              Ready to Act?
            </h2>
            <p className="font-body text-base text-white/45 leading-relaxed max-w-md">
              Submit your credit enquiry and our team will contact you within 24 hours 
              with a formal proposal and registry instructions.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-10 flex flex-col items-center justify-center text-center min-h-[320px]"
              >
                <div className="w-12 h-12 rounded-full bg-ochre/10 border border-ochre/30 flex items-center justify-center mb-6">
                  <Check className="w-5 h-5 text-ochre" />
                </div>
                <h3 className="font-display text-2xl text-ether mb-3">Enquiry Received</h3>
                <p className="font-body text-sm text-white/45">
                  We'll respond within 24 hours with a formal credit proposal.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'org',   label: 'Organisation / Name', type: 'text',  placeholder: 'Acme Corp / Jane Smith' },
                  { id: 'email', label: 'Email Address',       type: 'email', placeholder: 'you@company.com' },
                ].map(f => (
                  <div key={f.id}>
                    <label className="font-tech text-[9px] tracking-[0.25em] text-ochre/50 uppercase block mb-2">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      value={form[f.id]}
                      onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                      placeholder={f.placeholder}
                      required
                      className="w-full bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-3 placeholder-white/20 focus:border-ochre/40 focus:outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-tech text-[9px] tracking-[0.25em] text-ochre/50 uppercase block mb-2">
                    Volume & Notes
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder={`Interested in ${tonnes} tonnes CO₂e...`}
                    className="w-full bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-3 placeholder-white/20 focus:border-ochre/40 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-tech text-[10px] tracking-[0.25em] uppercase py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors mt-2"
                >
                  Submit Enquiry →
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}