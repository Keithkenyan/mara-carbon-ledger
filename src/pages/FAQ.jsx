import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';

const faqs = [
  {
    category: 'About the Project',
    items: [
      {
        q: 'What does OMCP do?',
        a: 'OMCP supports sustainable grassland management through improved grazing, restoration, and conservation practices across the Maasai Mara.',
      },
      {
        q: 'Does the project reduce livestock numbers?',
        a: 'No. The project does not require automatic reduction of livestock. It supports better grazing practices aligned with land capacity.',
      },
    ],
  },
  {
    category: 'Land & Rights',
    items: [
      {
        q: 'Do I lose ownership of my land?',
        a: 'No. Landowners retain full ownership of their land.',
      },
      {
        q: 'Does the project restrict land use?',
        a: 'The project supports improved grazing practices but does not take control of the land.',
      },
    ],
  },
  {
    category: 'Carbon & Payments',
    items: [
      {
        q: 'How is carbon measured?',
        a: 'Carbon is measured through soil sampling and remote sensing, with independent verification.',
      },
      {
        q: 'When will payments begin?',
        a: 'Payments are expected after the first issuance of carbon credits, subject to verification.',
      },
      {
        q: 'Are payments fixed?',
        a: 'No. Payments depend on verified results and carbon market conditions.',
      },
    ],
  },
  {
    category: 'Community & Benefits',
    items: [
      {
        q: 'Who benefits from the project?',
        a: 'Landowners are the primary beneficiaries, alongside conservancies and community groups.',
      },
    ],
  },
  {
    category: 'Safeguards',
    items: [
      {
        q: 'Has the project assessed its impacts?',
        a: 'Yes. An independent Environmental and Social Impact Assessment has been completed, with mitigation measures in place.',
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-start justify-between py-6 text-left gap-6"
      >
        <span className="font-body text-base text-ether/80 leading-snug">{q}</span>
        <span className="mt-1 flex-shrink-0 text-ochre">
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-white/45 leading-relaxed pb-6 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-basalt pt-32">
      {/* Hero */}
      <section className="px-[5vw] lg:px-[8vw] pb-16">
        <SectionReveal>
          <SectionLabel>Common Questions</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl text-ether tracking-tight leading-[0.92] mb-8">
            Frequently<br /><span className="text-ochre">Asked Questions</span>
          </h1>
          <p className="font-body text-base text-white/50 max-w-xl leading-relaxed">
            Find answers to common questions about the One Mara Carbon Project, land rights, 
            payments, and how the project works with conservancy landowners.
          </p>
        </SectionReveal>
      </section>

      <HorizonLine />

      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <div className="max-w-3xl">
          {faqs.map((group, gi) => (
            <SectionReveal key={group.category} delay={gi * 0.05}>
              <div className="mb-16">
                <h2 className="font-tech text-[10px] tracking-[0.3em] text-ochre uppercase mb-8">
                  {group.category}
                </h2>
                {group.items.map(item => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </SectionReveal>
          ))}
        </div>

        <HorizonLine />

        <SectionReveal delay={0.2}>
          <div className="mt-16 glass-card p-8 max-w-xl">
            <h3 className="font-display text-2xl text-ether mb-4">Still have questions?</h3>
            <p className="font-body text-sm text-white/45 leading-relaxed mb-6">
              Reach out to us directly or visit your nearest member conservancy office.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@onemaracarbon.org"
                className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors"
              >
                Email Us
              </a>
              <a
                href="/grievance"
                className="font-tech text-[10px] tracking-[0.2em] uppercase px-8 py-4 border border-ether/20 text-ether/70 hover:border-ochre hover:text-ochre transition-all"
              >
                Grievance Process
              </a>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}