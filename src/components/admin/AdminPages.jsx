import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, Save, ChevronDown, ChevronUp, Eye, EyeOff, Upload, ArrowLeft } from 'lucide-react';

const BLOCK_TYPES = [
  { type: 'text',       label: 'Text Block' },
  { type: 'image',      label: 'Image' },
  { type: 'text_image', label: 'Text + Image' },
];

function BlockEditor({ block, onChange, onRemove, onMoveUp, onMoveDown }) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file) => {
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    onChange({ ...block, imageUrl: file_url });
    setUploading(false);
  };

  return (
    <div className="border border-white/10 bg-white/3 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-tech text-[9px] tracking-[0.3em] uppercase text-ochre/70">
          {BLOCK_TYPES.find(b => b.type === block.type)?.label}
        </span>
        <div className="flex items-center gap-1">
          <button onClick={onMoveUp} className="p-1 text-white/25 hover:text-white/60"><ChevronUp className="w-3.5 h-3.5" /></button>
          <button onClick={onMoveDown} className="p-1 text-white/25 hover:text-white/60"><ChevronDown className="w-3.5 h-3.5" /></button>
          <button onClick={onRemove} className="p-1 text-white/25 hover:text-crimson"><Trash2 className="w-3.5 h-3.5" /></button>
        </div>
      </div>

      {(block.type === 'text' || block.type === 'text_image') && (
        <div className="space-y-3">
          <input
            value={block.heading || ''}
            onChange={e => onChange({ ...block, heading: e.target.value })}
            placeholder="Heading (optional)"
            className="w-full bg-white/5 border border-white/10 text-ether font-display text-lg px-4 py-2.5 focus:outline-none focus:border-ochre/50"
          />
          <textarea
            value={block.body || ''}
            onChange={e => onChange({ ...block, body: e.target.value })}
            placeholder="Body text…"
            rows={5}
            className="w-full bg-white/5 border border-white/10 text-ether/80 font-body text-sm px-4 py-3 focus:outline-none focus:border-ochre/50 resize-y"
          />
        </div>
      )}

      {(block.type === 'image' || block.type === 'text_image') && (
        <div className="space-y-2">
          {block.imageUrl && (
            <img src={block.imageUrl} alt="block" className="w-full max-h-64 object-cover border border-white/10" />
          )}
          <input
            value={block.imageUrl || ''}
            onChange={e => onChange({ ...block, imageUrl: e.target.value })}
            placeholder="Image URL…"
            className="w-full bg-white/5 border border-white/10 text-ether font-tech text-xs px-3 py-2 focus:outline-none focus:border-ochre/50"
          />
          <input
            value={block.imageCaption || ''}
            onChange={e => onChange({ ...block, imageCaption: e.target.value })}
            placeholder="Caption (optional)"
            className="w-full bg-white/5 border border-white/10 text-white/50 font-body text-xs px-3 py-2 focus:outline-none focus:border-ochre/50"
          />
          <label className="flex items-center gap-1.5 cursor-pointer font-tech text-[9px] tracking-[0.2em] uppercase text-ochre/60 hover:text-ochre transition-colors">
            <Upload className="w-3 h-3" />
            {uploading ? 'Uploading…' : 'Upload from device'}
            <input type="file" accept="image/*" className="hidden" onChange={e => e.target.files[0] && handleUpload(e.target.files[0])} />
          </label>
        </div>
      )}
    </div>
  );
}

function PageEditor({ page, onSave, onBack }) {
  const [data, setData] = useState({ title: '', slug: '', blocks: [], published: true, ...page });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const addBlock = (type) => setData(d => ({ ...d, blocks: [...(d.blocks || []), { type }] }));

  const updateBlock = (i, block) => setData(d => {
    const blocks = [...d.blocks];
    blocks[i] = block;
    return { ...d, blocks };
  });

  const removeBlock = (i) => setData(d => ({ ...d, blocks: d.blocks.filter((_, idx) => idx !== i) }));

  const moveBlock = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= data.blocks.length) return;
    const blocks = [...data.blocks];
    [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
    setData(d => ({ ...d, blocks }));
  };

  const save = async () => {
    setSaving(true);
    await onSave(data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="flex items-center gap-1.5 font-tech text-[9px] tracking-[0.2em] uppercase text-white/35 hover:text-ochre transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> All Pages
        </button>
      </div>

      <div className="space-y-4">
        <input
          value={data.title}
          onChange={e => setData(d => ({ ...d, title: e.target.value }))}
          placeholder="Page Title"
          className="w-full bg-white/5 border border-white/10 text-ether font-display text-2xl px-4 py-3 focus:outline-none focus:border-ochre/50"
        />
        <div className="flex items-center gap-2">
          <span className="font-tech text-[10px] text-white/30">/</span>
          <input
            value={data.slug}
            onChange={e => setData(d => ({ ...d, slug: e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') }))}
            placeholder="url-slug"
            className="flex-1 bg-white/5 border border-white/10 text-ochre font-tech text-sm px-4 py-2.5 focus:outline-none focus:border-ochre/50"
          />
          <button
            onClick={() => setData(d => ({ ...d, published: !d.published }))}
            className={`flex items-center gap-1.5 font-tech text-[9px] tracking-[0.2em] uppercase px-4 py-2.5 border transition-colors ${
              data.published ? 'border-ochre/40 text-ochre' : 'border-white/10 text-white/30'
            }`}
          >
            {data.published ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
            {data.published ? 'Published' : 'Draft'}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {(data.blocks || []).map((block, i) => (
          <BlockEditor
            key={i}
            block={block}
            onChange={b => updateBlock(i, b)}
            onRemove={() => removeBlock(i)}
            onMoveUp={() => moveBlock(i, -1)}
            onMoveDown={() => moveBlock(i, 1)}
          />
        ))}

        <div className="flex flex-wrap gap-2 pt-2">
          {BLOCK_TYPES.map(bt => (
            <button
              key={bt.type}
              onClick={() => addBlock(bt.type)}
              className="flex items-center gap-1.5 font-tech text-[9px] tracking-[0.2em] uppercase px-4 py-2.5 border border-dashed border-white/15 text-white/35 hover:border-ochre/40 hover:text-ochre transition-colors"
            >
              <Plus className="w-3 h-3" /> {bt.label}
            </button>
          ))}
        </div>
      </div>

      <button onClick={save} disabled={saving} className="flex items-center gap-2 font-tech text-[10px] tracking-[0.2em] uppercase px-6 py-3 bg-ochre text-basalt hover:bg-ochre/90 transition-colors disabled:opacity-50">
        <Save className="w-3.5 h-3.5" />
        {saving ? 'Saving…' : saved ? 'Saved ✓' : 'Save Page'}
      </button>
    </div>
  );
}

export default function AdminPages() {
  const [pages, setPages] = useState(null);
  const [editing, setEditing] = useState(null); // null = list, 'new' = new page, id = existing

  useEffect(() => {
    base44.entities.Page.list().then(setPages);
  }, []);

  const reload = () => base44.entities.Page.list().then(setPages);

  const handleSave = async (data) => {
    if (editing === 'new') {
      await base44.entities.Page.create(data);
    } else {
      await base44.entities.Page.update(editing, data);
    }
    await reload();
    setEditing(null);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this page?')) return;
    await base44.entities.Page.delete(id);
    await reload();
  };

  if (!pages) return <div className="font-tech text-[10px] text-white/30 tracking-widest uppercase">Loading…</div>;

  if (editing !== null) {
    const page = editing === 'new' ? null : pages.find(p => p.id === editing);
    return <PageEditor page={page} onSave={handleSave} onBack={() => setEditing(null)} />;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl text-ether mb-1">Pages</h2>
          <p className="font-body text-sm text-white/35">Create and manage custom pages on your site.</p>
        </div>
        <button
          onClick={() => setEditing('new')}
          className="flex items-center gap-2 font-tech text-[10px] tracking-[0.2em] uppercase px-5 py-3 bg-ochre text-basalt hover:bg-ochre/90 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" /> New Page
        </button>
      </div>

      {pages.length === 0 ? (
        <p className="font-body text-sm text-white/25">No custom pages yet. Click "New Page" to create one.</p>
      ) : (
        <div className="space-y-2">
          {pages.map(page => (
            <div key={page.id} className="flex items-center gap-4 border border-white/8 px-5 py-4 hover:border-white/15 transition-colors">
              <div className="flex-1">
                <span className="font-body text-sm text-ether">{page.title}</span>
                <span className="font-tech text-[9px] text-white/30 ml-3">/{page.slug}</span>
              </div>
              <span className={`font-tech text-[8px] tracking-[0.2em] uppercase px-2.5 py-1 border ${
                page.published ? 'border-ochre/30 text-ochre/70' : 'border-white/10 text-white/25'
              }`}>
                {page.published ? 'Published' : 'Draft'}
              </span>
              <button onClick={() => setEditing(page.id)} className="font-tech text-[9px] tracking-[0.15em] uppercase text-white/35 hover:text-ochre transition-colors px-2">Edit</button>
              <button onClick={() => handleDelete(page.id)} className="text-white/20 hover:text-crimson transition-colors p-1"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}