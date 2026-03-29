import React from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';

const steps = [
  {
    n: '01',
    title: 'Grazing Management',
    desc: 'OMCP collaborates with conservancies and pastoralists to implement planned rotational grazing.',
  },
  {
    n: '02',
    title: 'Data Collection',
    desc: 'We monitor grazing compliance and scientifically measure the increase in soil organic carbon.',
  },
  {
    n: '03',
    title: 'Credit Issuance & Sales',
    desc: 'Verified carbon credits are issued every 2–3 years based on measured soil carbon and sold to corporate buyers.',
  },
  {
    n: '04',
    title: 'Distribution of Revenues',
    desc: "Revenues are distributed to landowners and beneficiaries according to the project's Benefit Sharing Agreement.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32">
      <HorizonLine />
      <div className="px-[5vw] lg:px-[8vw] mt-24 lg:mt-32">
        <SectionReveal>
          <SectionLabel>How the Project Works</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-6 leading-tight max-w-2xl">
            Transforming Land Management<br />into Long-Term Value
          </h2>
          <p className="font-body text-base text-white/50 leading-relaxed mb-16 max-w-xl">
            We transform sustainable land management into long-term value for the Mara landscape 
            through a transparent four-step process.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {steps.map((step, i) => (
            <SectionReveal key={step.n} delay={i * 0.1}>
              <div className="bg-basalt p-8 lg:p-10 h-full">
                <span className="font-tech text-[9px] tracking-[0.3em] text-ochre uppercase block mb-6">{step.n}</span>
                <h4 className="font-display text-xl text-ether mb-4 leading-snug">{step.title}</h4>
                <p className="font-body text-sm text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}