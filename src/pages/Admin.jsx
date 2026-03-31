import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import AdminNav from '@/components/admin/AdminNav';
import AdminImages from '@/components/admin/AdminImages';
import AdminFooter from '@/components/admin/AdminFooter';
import AdminHero from '@/components/admin/AdminHero';

const TABS = ['Navigation', 'Hero', 'Images', 'Footer'];

export default function Admin() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('Navigation');

  useEffect(() => {
    base44.auth.me().then(u => {
      setUser(u);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="fixed inset-0 bg-basalt flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-white/10 border-t-ochre rounded-full animate-spin" />
    </div>
  );

  if (!user) {
    base44.auth.redirectToLogin('/admin');
    return (
      <div className="fixed inset-0 bg-basalt flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-white/10 border-t-ochre rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-basalt text-ether">
      {/* Header */}
      <div className="border-b border-white/8 px-8 py-5 flex items-center justify-between">
        <div>
          <span className="font-display text-xl text-ether tracking-wide">Site Editor</span>
          <span className="font-tech text-[9px] tracking-[0.3em] uppercase text-ochre ml-4">Admin</span>
        </div>
        <a href="/" className="font-tech text-[9px] tracking-[0.2em] uppercase text-white/30 hover:text-ochre transition-colors">
          ← Back to Site
        </a>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/8 px-8 flex gap-1">
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`font-tech text-[10px] tracking-[0.2em] uppercase px-5 py-4 border-b-2 transition-colors ${
              tab === t ? 'border-ochre text-ochre' : 'border-transparent text-white/35 hover:text-white/60'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="px-8 py-10 max-w-4xl">
        {tab === 'Navigation' && <AdminNav />}
        {tab === 'Hero'       && <AdminHero />}
        {tab === 'Images'     && <AdminImages />}
        {tab === 'Footer'     && <AdminFooter />}
      </div>
    </div>
  );
}