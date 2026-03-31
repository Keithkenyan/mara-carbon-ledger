import React, { useState, useEffect } from 'react';
import { DEFAULTS, saveSiteContent } from '@/hooks/useSiteContent';
import { base44 } from '@/api/base44Client';
import { Save, Upload } from 'lucide-react';

const IMAGE_KEYS = [
  { key: 'hero',       label: 'Hero Background' },
  { key: 'woodland',   label: 'Woodland' },
  { key: 'ranger',     label: 'Ranger' },
  { key: 'river',      label: 'Mara River' },
  { key: 'grass',      label: 'Grassland / Challenge BG' },
  { key: 'wildlife',   label: 'Wildlife Strip' },
  { key: 'elder',      label: 'Elder / Community' },
  { key: 'dataRanger', label: 'Data Ranger' },
];

export default function AdminImages() {
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState({});

  useEffect(() => {
    base44.entities.SiteContent.filter({ section: 'images' }).then(records => {
      setData(records[0]?.data ?? DEFAULTS.images);
    });
  }, []);

  if (!data) return <div className="font-tech text-[10px] text-white/30 tracking-widest uppercase">Loading…</div>;

  const handleUpload = async (key, file) => {
    setUploading(u => ({ ...u, [key]: true }));
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setData(d => ({ ...d, [key]: file_url }));
    setUploading(u => ({ ...u, [key]: false }));
  };

  const save = async () => {
    setSaving(true);
    await saveSiteContent('images', data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl text-ether mb-1">Site Images</h2>
        <p className="font-body text-sm text-white/35">Upload new images or paste URLs for each section.</p>
      </div>

      <div className="space-y-6">
        {IMAGE_KEYS.map(({ key, label }) => (
          <div key={key} className="flex gap-4 items-start">
            {/* Preview */}
            <div className="w-20 h-14 shrink-0 bg-white/5 border border-white/10 overflow-hidden">
              {data[key] && <img src={data[key]} alt={label} className="w-full h-full object-cover" />}
            </div>
            <div className="flex-1 space-y-2">
              <label className="font-tech text-[9px] tracking-[0.25em] uppercase text-white/40">{label}</label>
              <input
                value={data[key] || ''}
                onChange={e => setData({ ...data, [key]: e.target.value })}
                placeholder="https://..."
                className="w-full bg-white/5 border border-white/10 text-ether font-tech text-xs px-3 py-2 focus:outline-none focus:border-ochre/50"
              />
              <label className="flex items-center gap-1.5 cursor-pointer font-tech text-[9px] tracking-[0.2em] uppercase text-ochre/60 hover:text-ochre transition-colors">
                <Upload className="w-3 h-3" />
                {uploading[key] ? 'Uploading…' : 'Upload from device'}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={e => e.target.files[0] && handleUpload(key, e.target.files[0])}
                />
              </label>
            </div>
          </div>
        ))}
      </div>

      <button onClick={save} disabled={saving} className="flex items-center gap-2 font-tech text-[10px] tracking-[0.2em] uppercase px-6 py-3 bg-ochre text-basalt hover:bg-ochre/90 transition-colors disabled:opacity-50">
        <Save className="w-3.5 h-3.5" />
        {saving ? 'Saving…' : saved ? 'Saved ✓' : 'Save Changes'}
      </button>
    </div>
  );
}