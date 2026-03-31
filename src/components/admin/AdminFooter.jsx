import React, { useState, useEffect } from 'react';
import { DEFAULTS, saveSiteContent } from '@/hooks/useSiteContent';
import { base44 } from '@/api/base44Client';
import { Save, Plus, Trash2 } from 'lucide-react';

const Field = ({ label, value, onChange, multiline }) => (
  <div className="space-y-1.5">
    <label className="font-tech text-[9px] tracking-[0.25em] uppercase text-white/40">{label}</label>
    {multiline ? (
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={2}
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

export default function AdminFooter() {
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    base44.entities.SiteContent.filter({ section: 'footer' }).then(records => {
      setData(records[0]?.data ?? DEFAULTS.footer);
    });
  }, []);

  if (!data) return <div className="font-tech text-[10px] text-white/30 tracking-widest uppercase">Loading…</div>;

  const set = (key) => (val) => setData({ ...data, [key]: val });

  const updateLink = (i, field, val) => {
    const links = [...data.links];
    links[i] = { ...links[i], [field]: val };
    setData({ ...data, links });
  };

  const addLink = () => setData({ ...data, links: [...data.links, { label: '', path: '/' }] });
  const removeLink = (i) => setData({ ...data, links: data.links.filter((_, idx) => idx !== i) });

  const save = async () => {
    setSaving(true);
    await saveSiteContent('footer', data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl text-ether mb-1">Footer</h2>
        <p className="font-body text-sm text-white/35">Edit contact info, taglines, and footer navigation.</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-tech text-[10px] tracking-[0.3em] uppercase text-ochre">Brand Text</h3>
        <Field label="Tagline" value={data.tagline} onChange={set('tagline')} multiline />
        <Field label="Copyright" value={data.copyright} onChange={set('copyright')} />
        <Field label="Bottom Tagline" value={data.bottomTagline} onChange={set('bottomTagline')} />
      </div>

      <div className="space-y-4 pt-4 border-t border-white/8">
        <h3 className="font-tech text-[10px] tracking-[0.3em] uppercase text-ochre">Contact</h3>
        <Field label="Email" value={data.email} onChange={set('email')} />
        <Field label="Phone" value={data.phone} onChange={set('phone')} />
        <Field label="Location" value={data.location} onChange={set('location')} />
      </div>

      <div className="space-y-4 pt-4 border-t border-white/8">
        <h3 className="font-tech text-[10px] tracking-[0.3em] uppercase text-ochre">Footer Navigation</h3>
        {data.links.map((link, i) => (
          <div key={i} className="flex gap-3 items-center">
            <input
              value={link.label}
              onChange={e => updateLink(i, 'label', e.target.value)}
              placeholder="Label"
              className="flex-1 bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-2.5 focus:outline-none focus:border-ochre/50"
            />
            <input
              value={link.path}
              onChange={e => updateLink(i, 'path', e.target.value)}
              placeholder="/path"
              className="w-40 bg-white/5 border border-white/10 text-ether font-tech text-sm px-4 py-2.5 focus:outline-none focus:border-ochre/50"
            />
            <button onClick={() => removeLink(i)} className="text-white/25 hover:text-crimson transition-colors p-1">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button onClick={addLink} className="flex items-center gap-2 font-tech text-[10px] tracking-[0.2em] uppercase text-ochre/60 hover:text-ochre transition-colors">
          <Plus className="w-3.5 h-3.5" /> Add Link
        </button>
      </div>

      <button onClick={save} disabled={saving} className="flex items-center gap-2 font-tech text-[10px] tracking-[0.2em] uppercase px-6 py-3 bg-ochre text-basalt hover:bg-ochre/90 transition-colors disabled:opacity-50">
        <Save className="w-3.5 h-3.5" />
        {saving ? 'Saving…' : saved ? 'Saved ✓' : 'Save Changes'}
      </button>
    </div>
  );
}