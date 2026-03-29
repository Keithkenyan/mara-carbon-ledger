import React, { useState } from 'react';
import SectionReveal from '@/components/shared/SectionReveal';
import SectionLabel from '@/components/shared/SectionLabel';
import HorizonLine from '@/components/shared/HorizonLine';
import GeoTag from '@/components/shared/GeoTag';

const channels = [
  {
    title: 'In Person',
    detail: 'MMWCA Offices in Aitong, Narok County, or through your member conservancy office.',
  },
  {
    title: 'Email',
    detail: 'grievance@onemaracarbon.org',
    href: 'mailto:grievance@onemaracarbon.org',
  },
  {
    title: 'Phone, SMS & WhatsApp',
    detail: '0715 047047 | 0777 047047',
    href: 'tel:0715047047',
  },
];

const alternativeChannels = [
  {
    org: 'Conservation International',
    label: 'CI Grievance Mechanism',
    href: 'https://www.conservation.org/about/accountability',
    email: 'AccountabilityCIKenya@conservation.org',
  },
  {
    org: 'Ahueni AG',
    email: 'Grievance@ahueni.net',
  },
  {
    org: 'VERRA',
    label: 'Submit public comment',
    href: 'https://registry.verra.org/app/projectDetail/VCS/4659',
    email: 'secretariat@verra.org',
  },
];

export default function Grievance() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', conservancy: '', message: '', consent: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-basalt pt-32">
      {/* Hero */}
      <section className="px-[5vw] lg:px-[8vw] pb-16">
        <SectionReveal>
          <GeoTag lat="−1°30′S" lng="35°00′E" className="block mb-6" />
          <SectionLabel>Transparency &amp; Accountability</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl text-ether tracking-tight leading-[0.92] mb-8">
            Grievance &amp;<br /><span className="text-ochre">Feedback</span>
          </h1>
          <p className="font-body text-base text-white/50 max-w-2xl leading-relaxed mb-4">
            The One Mara Carbon Project (OMCP) welcomes your feedback and concerns through our 
            grievance and feedback platform. This mechanism enables us to respond to issues promptly 
            and supports transparent and accountable project implementation.
          </p>
          <p className="font-body text-base text-white/50 max-w-2xl leading-relaxed">
            We recognise that even well-designed projects can have unexpected impacts. By sharing your 
            experience with us, you help OMCP strengthen its work and address any challenges that may arise.
          </p>
        </SectionReveal>
      </section>

      <HorizonLine />

      {/* How to submit */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <SectionLabel>Primary Channels</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-16 leading-tight">
            How to Submit Your<br />Grievance or Feedback
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {channels.map((c, i) => (
            <SectionReveal key={c.title} delay={i * 0.1}>
              <div className="glass-card p-8 h-full">
                <span className="font-tech text-[9px] tracking-[0.3em] text-ochre uppercase block mb-4">{c.title}</span>
                {c.href ? (
                  <a href={c.href} className="font-body text-base text-white/60 hover:text-ochre transition-colors leading-relaxed">
                    {c.detail}
                  </a>
                ) : (
                  <p className="font-body text-base text-white/60 leading-relaxed">{c.detail}</p>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.2}>
          <p className="font-body text-sm text-white/40 mb-2">
            For gender-related grievances, contact the gender lead:{' '}
            <a href="mailto:angela@maraconservancies.org" className="text-ochre hover:underline">
              angela@maraconservancies.org
            </a>
          </p>
        </SectionReveal>
      </section>

      <HorizonLine />

      {/* Alternative channels */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <SectionLabel>Alternative Channels</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ether tracking-tight mb-16">
            Other Ways to Raise a Concern
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {alternativeChannels.map((c, i) => (
            <SectionReveal key={c.org} delay={i * 0.1}>
              <div className="border border-white/5 p-8 hover:border-ochre/20 transition-all duration-300">
                <h4 className="font-tech text-xs tracking-[0.2em] text-ether uppercase mb-4">{c.org}</h4>
                {c.href && (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-ochre hover:underline block mb-2">
                    {c.label}
                  </a>
                )}
                {c.email && (
                  <a href={`mailto:${c.email}`} className="font-body text-sm text-white/40 hover:text-ochre transition-colors block">
                    {c.email}
                  </a>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal delay={0.3}>
          <p className="font-body text-sm text-white/35 italic">
            All concerns and feedback are handled confidentially and processed according to OMCP's grievance and feedback procedures.
          </p>
        </SectionReveal>
      </section>

      <HorizonLine />

      {/* Form */}
      <section className="px-[5vw] lg:px-[8vw] py-24 lg:py-32">
        <SectionReveal>
          <SectionLabel>Submit a Grievance</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl text-ether tracking-tight mb-6 leading-tight">
            Share Your Feedback
          </h2>
          <p className="font-body text-base text-white/45 mb-16 max-w-xl">
            Please fill out the form below. You will receive an acknowledgement once your submission has been received.
          </p>
        </SectionReveal>

        {submitted ? (
          <SectionReveal>
            <div className="glass-card p-12 max-w-xl">
              <span className="font-tech text-[9px] tracking-[0.3em] text-ochre uppercase block mb-4">Submission Received</span>
              <h3 className="font-display text-2xl text-ether mb-4">Thank you for reaching out.</h3>
              <p className="font-body text-sm text-white/45 leading-relaxed">
                We have received your feedback and will acknowledge your submission shortly. 
                OMCP is committed to reviewing all grievances within defined timelines.
              </p>
            </div>
          </SectionReveal>
        ) : (
          <SectionReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-tech text-[9px] tracking-[0.25em] text-ochre uppercase block mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-3 focus:border-ochre/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-tech text-[9px] tracking-[0.25em] text-ochre uppercase block mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-3 focus:border-ochre/50 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-tech text-[9px] tracking-[0.25em] text-ochre uppercase block mb-2">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-3 focus:border-ochre/50 focus:outline-none transition-colors"
                    placeholder="0715 047047"
                  />
                </div>
                <div>
                  <label className="font-tech text-[9px] tracking-[0.25em] text-ochre uppercase block mb-2">Conservancy (if applicable)</label>
                  <input
                    type="text"
                    value={form.conservancy}
                    onChange={e => setForm({ ...form, conservancy: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-3 focus:border-ochre/50 focus:outline-none transition-colors"
                    placeholder="e.g. Olare Motorogi"
                  />
                </div>
              </div>
              <div>
                <label className="font-tech text-[9px] tracking-[0.25em] text-ochre uppercase block mb-2">Your Feedback or Concern</label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-3 focus:border-ochre/50 focus:outline-none transition-colors resize-none"
                  placeholder="Please describe your concern or feedback in as much detail as possible..."
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={form.consent}
                  onChange={e => setForm({ ...form, consent: e.target.checked })}
                  className="mt-1 accent-ochre"
                  required
                />
                <label htmlFor="consent" className="font-body text-sm text-white/40 leading-relaxed cursor-pointer">
                  I understand that my submission will be handled confidentially and processed according to OMCP's grievance and feedback procedures.
                </label>
              </div>
              <button
                type="submit"
                className="font-tech text-[10px] tracking-[0.2em] uppercase px-10 py-4 bg-ochre text-basalt hover:bg-ochre/90 transition-colors duration-300"
              >
                Submit Grievance
              </button>
            </form>
          </SectionReveal>
        )}
      </section>
    </div>
  );
}