import React, { useState, useEffect } from 'react';
import { DEFAULTS, saveSiteContent } from '@/hooks/useSiteContent';
import { base44 } from '@/api/base44Client';
import { Save } from 'lucide-react';

const Field = ({ label, value, onChange, multiline }) => (
  <div className="space-y-1.5">
    <label className="font-tech text-[9px] tracking-[0.25em] uppercase text-white/40">{label}</label>
    {multiline ? (
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={3}
        className="w-full bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-2.5 focus:outline-none focus:border-ochre/50 resize-none"
      />
    ) : (
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-2.5 focus:outline-none focus:border-ochre/50"
      />
    )}
  </div>
);

export default function AdminHero() {
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    base44.entities.SiteContent.filter({ section: 'hero' }).then(records => {
      setData(records[0]?.data ?? DEFAULTS.hero);
    });
  }, []);

  if (!data) return <div className="font-tech text-[10px] text-white/30 tracking-widest uppercase">Loading…</div>;

  const set = (key) => (val) => setData({ ...data, [key]: val });

  const save = async () => {
    setSaving(true);
    await saveSiteContent('hero', data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl text-ether mb-1">Hero Section</h2>
        <p className="font-body text-sm text-white/35">Edit the main headline and call-to-action text.</p>
      </div>

      <Field label="Headline Line 1" value={data.headline1} onChange={set('headline1')} />
      <Field label="Headline Line 2 (ochre)" value={data.headline2} onChange={set('headline2')} />
      <Field label="Headline Line 3" value={data.headline3} onChange={set('headline3')} />
      <Field label="Subtext" value={data.subtext} onChange={set('subtext')} multiline />

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/8">
        <div className="space-y-3">
          <h3 className="font-tech text-[10px] tracking-[0.3em] uppercase text-ochre">Primary CTA</h3>
          <Field label="Label" value={data.cta1Label} onChange={set('cta1Label')} />
          <Field label="Path" value={data.cta1Path} onChange={set('cta1Path')} />
        </div>
        <div className="space-y-3">
          <h3 className="font-tech text-[10px] tracking-[0.3em] uppercase text-ochre">Secondary CTA</h3>
          <Field label="Label" value={data.cta2Label} onChange={set('cta2Label')} />
          <Field label="Path" value={data.cta2Path} onChange={set('cta2Path')} />
        </div>
      </div>

      <button onClick={save} disabled={saving} className="flex items-center gap-2 font-tech text-[10px] tracking-[0.2em] uppercase px-6 py-3 bg-ochre text-basalt hover:bg-ochre/90 transition-colors disabled:opacity-50">
        <Save className="w-3.5 h-3.5" />
        {saving ? 'Saving…' : saved ? 'Saved ✓' : 'Save Changes'}
      </button>
    </div>
  );
}