import React, { useState, useEffect } from 'react';
import { DEFAULTS, saveSiteContent } from '@/hooks/useSiteContent';
import { base44 } from '@/api/base44Client';
import { Save } from 'lucide-react';

const Field = ({ label, value, onChange, multiline, rows = 3 }) => (
  <div className="space-y-1.5">
    <label className="font-tech text-[9px] tracking-[0.25em] uppercase text-white/40">{label}</label>
    {multiline ? (
      <textarea
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        rows={rows}
        className="w-full bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-2.5 focus:outline-none focus:border-ochre/50 resize-y"
      />
    ) : (
      <input
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 text-ether font-body text-sm px-4 py-2.5 focus:outline-none focus:border-ochre/50"
      />
    )}
  </div>
);

export default function AdminContentEditor({ section, title, description, fields }) {
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    base44.entities.SiteContent.filter({ section }).then(records => {
      setData(records[0]?.data ?? DEFAULTS[section] ?? {});
    });
  }, [section]);

  if (!data) return <div className="font-tech text-[10px] text-white/30 tracking-widest uppercase">Loading…</div>;

  const set = (key) => (val) => setData(d => ({ ...d, [key]: val }));

  const save = async () => {
    setSaving(true);
    await saveSiteContent(section, data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl text-ether mb-1">{title}</h2>
        {description && <p className="font-body text-sm text-white/35">{description}</p>}
      </div>

      {fields.map((field, i) => {
        if (field.type === 'divider') return (
          <div key={i} className="pt-4 border-t border-white/8">
            {field.label && <h3 className="font-tech text-[10px] tracking-[0.3em] uppercase text-ochre mb-4">{field.label}</h3>}
          </div>
        );
        return (
          <Field
            key={field.key}
            label={field.label}
            value={data[field.key]}
            onChange={set(field.key)}
            multiline={field.multiline}
            rows={field.rows}
          />
        );
      })}

      <button onClick={save} disabled={saving} className="flex items-center gap-2 font-tech text-[10px] tracking-[0.2em] uppercase px-6 py-3 bg-ochre text-basalt hover:bg-ochre/90 transition-colors disabled:opacity-50">
        <Save className="w-3.5 h-3.5" />
        {saving ? 'Saving…' : saved ? 'Saved ✓' : 'Save Changes'}
      </button>
    </div>
  );
}