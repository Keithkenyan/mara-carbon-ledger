import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import GeoTag from '@/components/shared/GeoTag';
import { IMAGES } from '@/lib/images';
import { ChevronDown, ChevronUp } from 'lucide-react';

const timeline = [
  { year: '2019', title: 'Project Inception', desc: 'One Mara Carbon Project formally established with 8 founding conservancies. Baseline carbon stock assessment commissioned with SCS Global Services.' },
  { year: '2020', title: 'Verra VCS Registration', desc: 'Project registered under the Verified Carbon Standard (VCS, ID: VCS-2847). First independent audit completed. Methodology: VM0032 REDD+ Jurisdictional and Nested REDD+ Framework.' },
  { year: '2021', title: 'First Credit Issuance', desc: '320,000 Verified Carbon Units (VCUs) issued. Revenue distributed to 12 Maasai group ranches. Community benefit-sharing plan activated.' },
  { year: '2022', title: 'CCBA Gold Status', desc: 'Project achieves Climate, Community & Biodiversity Alliance Gold Level designation — recognising exceptional co-benefits for biodiversity and livelihoods.' },
  { year: '2023', title: 'Expansion to 15 Conservancies', desc: 'Three additional conservancies join the project. Total protected area reaches 112,000 hectares. Annual sequestration rate confirmed at 1.4M tCO₂e/yr.' },
  { year: '2024', title: 'Digital Monitoring Platform', desc: 'Real-time satellite monitoring system launched. Integration with NASA GEDI lidar data for sub-metre-accuracy carbon mapping.' },
  { year: '2025', title: 'Third Issuance Cycle', desc: '2.8M total VCUs issued since inception. Independent audit by Bureau Veritas completed. Community revenue surpasses KES 580M (approx. USD 4.5M).' },
  { year: '2026', title: 'Atmospheric Ledger Launch', desc: 'Public transparency portal launched providing real-time carbon sequestration data, community employment figures, and biodiversity indicators.' },
];

const sectors = [
  { id: 'A', name: 'Naboisho',      area: '20,000 ha', trees: '340 per ha', co2: '280,000 tCO₂e/yr', coords: '−1°22′S 35°07′E' },
  { id: 'B', name: 'Olare Motorogi', area: '33,000 ha', trees: '290 per ha', co2: '420,000 tCO₂e/yr', coords: '−1°26′S 35°03′E' },
  { id: 'C', name: 'Mara North',    area: '19,000 ha', trees: '260 per ha', co2: '195,000 tCO₂e/yr', coords: '−1°18′S 35°00′E' },
  { id: 'D', name: 'Lemek',         area: '12,000 ha', trees: '310 per ha', co2: '140,000 tCO₂e/yr', coords: '−1°20′S 34°55′E' },
  { id: 'E', name: 'Ol Chorro',     area: '15,000 ha', trees: '320 per ha', co2: '175,000 tCO₂e/yr', coords: '−1°24′S 34°58′E' },
];

function TimelineItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <SectionReveal delay={index * 0.05}>
      <div
        className="border-b border-white/5 py-8 cursor-pointer group"
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-start justify-between gap-8">
          <div className="flex items-start gap-8 md:gap-16 flex-1">
            <span className="font-tech text-[11px] tracking-[0.25em] text-ochre/60 uppercase min-w-[48px] mt-1">
              {item.year}
            </span>
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl text-ether group-hover:text-ochre transition-colors">
                {item.title}
              </h3>
              {open && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="font-body text-sm text-white/45 leading-relaxed mt-4 max-w-2xl"
                >
                  {item.desc}
                </motion.p>
              )}
            </div>
          </div>
          <div className="text-white/30 group-hover:text-ochre transition-colors mt-1">
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default function Ledger() {
  const [activeSector, setActiveSector] = useState(null);

  return (
    <div className="min-h-screen bg-basalt pt-32">
      {/* Hero */}
      <section className="px-[5vw] lg:px-[8vw] pb-24">
        <SectionReveal>
          <GeoTag lat="−1°30′S" lng="35°00′E" className="block mb-6" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] text-ether tracking-tight leading-[0.92] mb-8">
            The Mara<br /><span className="text-ochre">Ledger</span>
          </h1>
          <p className="font-body text-base md:text-lg text-white/45 max-w-2xl leading-relaxed">
            Full transparency is not a marketing choice — it is our scientific obligation. 
            Every hectare, every tonne, every community payment is recorded here and 
            independently verified.
          </p>
        </SectionReveal>
      </section>

      <HorizonLine />

      {/* Timeline */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <SectionLabel>Project Timeline</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-16">
            Seven Years of Proof
          </h2>
        </SectionReveal>
        <div>
          {timeline.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </section>

      <HorizonLine />

      {/* Topographic Map Sectors */}
      <section className="py-24 lg:py-32">
        <div className="px-[5vw] lg:px-[8vw] mb-16">
          <SectionReveal>
            <SectionLabel>Sector-Level Data</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-4">
              Explore by Conservancy
            </h2>
            <p className="font-body text-sm text-white/40 max-w-xl leading-relaxed">
              Click a sector below to reveal real-time carbon, biodiversity and community data 
              for each conservancy.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Map placeholder */}
          <div className="relative min-h-[480px] overflow-hidden">
            <img
              src={IMAGES.woodland}
              alt="Topographic map of Mara ecosystem"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-basalt/60" />
            {/* Sector hotspots */}
            {[
              { id: 'A', top: '20%', left: '65%' },
              { id: 'B', top: '45%', left: '50%' },
              { id: 'C', top: '15%', left: '40%' },
              { id: 'D', top: '35%', left: '22%' },
              { id: 'E', top: '55%', left: '30%' },
            ].map(dot => (
              <button
                key={dot.id}
                onClick={() => setActiveSector(dot.id === activeSector ? null : dot.id)}
                className="absolute w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ top: dot.top, left: dot.left, transform: 'translate(-50%,-50%)' }}
              >
                <span className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSector === dot.id ? 'bg-ochre scale-150' : 'bg-ochre/60 hover:bg-ochre hover:scale-125'
                }`} />
                <span className="absolute -top-6 font-tech text-[9px] tracking-[0.2em] text-ochre uppercase">
                  {dot.id}
                </span>
              </button>
            ))}
            <GeoTag lat="−1°30′S" lng="35°00′E" className="absolute bottom-4 left-4" />
          </div>

          {/* Sector data panel */}
          <div className="bg-chlorophyll/20 border-l border-white/5 p-8 lg:p-12">
            {activeSector ? (
              <motion.div
                key={activeSector}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {sectors.filter(s => s.id === activeSector).map(s => (
                  <div key={s.id}>
                    <span className="font-tech text-[9px] tracking-[0.3em] text-ochre uppercase block mb-2">
                      Sector {s.id}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-ether mb-8">{s.name}</h3>
                    <div className="grid grid-cols-2 gap-8">
                      {[
                        { label: 'Total Area',       val: s.area },
                        { label: 'Tree Density',     val: s.trees },
                        { label: 'Annual CO₂ Seq.',  val: s.co2 },
                        { label: 'Coordinates',      val: s.coords },
                      ].map(row => (
                        <div key={row.label}>
                          <span className="font-tech text-[9px] tracking-[0.2em] text-ochre/50 uppercase block mb-1">
                            {row.label}
                          </span>
                          <span className="font-tech text-sm text-ether">{row.val}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-10 p-6 bg-white/5 border border-white/5">
                      <p className="font-tech text-[9px] tracking-[0.2em] text-ochre/50 uppercase mb-3">
                        Last Verification
                      </p>
                      <p className="font-body text-sm text-white/50 leading-relaxed">
                        Verified by Bureau Veritas, November 2025. Next audit scheduled Q4 2026.
                        All data cross-referenced with Landsat-9 and Sentinel-2 imagery.
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-10 h-10 rounded-full border border-ochre/20 flex items-center justify-center mb-6">
                  <span className="w-2 h-2 rounded-full bg-ochre/40" />
                </div>
                <p className="font-tech text-[10px] tracking-[0.25em] text-white/25 uppercase">
                  Select a sector hotspot<br />to reveal its data
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <HorizonLine />

      {/* Methodology summary */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {[
            { label: 'Standard',    val: 'VCS / Verra',          sub: 'VM0032 — REDD+ Nested Framework' },
            { label: 'Co-Benefits', val: 'CCBA Gold',            sub: 'Climate, Community & Biodiversity Alliance' },
            { label: 'Audit Cycle', val: 'Annual',               sub: 'Independent third-party verification' },
          ].map((item, i) => (
            <SectionReveal key={item.label} delay={i * 0.1}>
              <div className="bg-basalt p-8 lg:p-10">
                <span className="font-tech text-[9px] tracking-[0.3em] text-ochre/50 uppercase block mb-3">
                  {item.label}
                </span>
                <span className="font-display text-2xl text-ether block mb-2">{item.val}</span>
                <span className="font-body text-xs text-white/35">{item.sub}</span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
}