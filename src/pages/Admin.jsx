import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import AdminNav from '@/components/admin/AdminNav';
import AdminImages from '@/components/admin/AdminImages';
import AdminFooter from '@/components/admin/AdminFooter';
import AdminHero from '@/components/admin/AdminHero';
import AdminPages from '@/components/admin/AdminPages';
import AdminContentEditor from '@/components/admin/AdminContentEditor';

const TABS = [
  { id: 'Navigation', label: 'Navigation' },
  { id: 'Hero',       label: 'Hero' },
  { id: 'Images',     label: 'Images' },
  { id: 'Footer',     label: 'Footer' },
  { id: 'Pages',      label: 'Pages' },
  { id: 'sep', label: '—' },
  { id: 'home_mission',   label: 'Home: Mission' },
  { id: 'home_stats',     label: 'Home: Stats' },
  { id: 'home_howitworks',label: 'Home: How It Works' },
  { id: 'home_landowner', label: 'Home: Landowner' },
  { id: 'home_outcomes',  label: 'Home: Outcomes' },
  { id: 'home_cta',       label: 'Home: CTA' },
  { id: 'sep2', label: '—' },
  { id: 'page_about',     label: 'About Page' },
  { id: 'page_community', label: 'Community Page' },
  { id: 'page_careers',   label: 'Careers Page' },
];

const CONTENT_CONFIGS = {
  home_mission: {
    title: 'Mission Section', description: 'Home page "About OMCP" and "Three Activity Packages" sections.',
    fields: [
      { key: 'label',          label: 'Section Label' },
      { key: 'heading',        label: 'Heading (use \\n for line break)' },
      { key: 'body1',          label: 'Body paragraph 1', multiline: true },
      { key: 'body2',          label: 'Body paragraph 2', multiline: true },
      { type: 'divider', label: 'Approach Section' },
      { key: 'approachLabel',   label: 'Approach Label' },
      { key: 'approachHeading', label: 'Approach Heading (use \\n for line break)' },
      { key: 'step1Title', label: 'Step 1 Title' }, { key: 'step1Desc', label: 'Step 1 Description', multiline: true },
      { key: 'step2Title', label: 'Step 2 Title' }, { key: 'step2Desc', label: 'Step 2 Description', multiline: true },
      { key: 'step3Title', label: 'Step 3 Title' }, { key: 'step3Desc', label: 'Step 3 Description', multiline: true },
    ],
  },
  home_stats: {
    title: 'Impact Statistics', description: 'The four big numbers on the home page.',
    fields: [
      { key: 'label',   label: 'Section Label' },
      { key: 'heading', label: 'Section Heading' },
      { type: 'divider', label: 'Stat 1' }, { key: 'stat1Value', label: 'Value' }, { key: 'stat1Unit', label: 'Unit' }, { key: 'stat1Label', label: 'Label' },
      { type: 'divider', label: 'Stat 2' }, { key: 'stat2Value', label: 'Value' }, { key: 'stat2Unit', label: 'Unit' }, { key: 'stat2Label', label: 'Label' },
      { type: 'divider', label: 'Stat 3' }, { key: 'stat3Value', label: 'Value' }, { key: 'stat3Unit', label: 'Unit' }, { key: 'stat3Label', label: 'Label' },
      { type: 'divider', label: 'Stat 4' }, { key: 'stat4Value', label: 'Value' }, { key: 'stat4Unit', label: 'Unit' }, { key: 'stat4Label', label: 'Label' },
    ],
  },
  home_howitworks: {
    title: 'How It Works', description: 'The four-step process section on the home page.',
    fields: [
      { key: 'label',   label: 'Section Label' },
      { key: 'heading', label: 'Heading (use \\n for line break)' },
      { key: 'subtext', label: 'Intro text', multiline: true },
      { type: 'divider', label: 'Step 1' }, { key: 'step1Title', label: 'Title' }, { key: 'step1Desc', label: 'Description', multiline: true },
      { type: 'divider', label: 'Step 2' }, { key: 'step2Title', label: 'Title' }, { key: 'step2Desc', label: 'Description', multiline: true },
      { type: 'divider', label: 'Step 3' }, { key: 'step3Title', label: 'Title' }, { key: 'step3Desc', label: 'Description', multiline: true },
      { type: 'divider', label: 'Step 4' }, { key: 'step4Title', label: 'Title' }, { key: 'step4Desc', label: 'Description', multiline: true },
    ],
  },
  home_landowner: {
    title: 'Landowner & Community', description: 'Home page section about landowners and community benefits.',
    fields: [
      { key: 'label1',   label: 'Left Column Label' },
      { key: 'heading1', label: 'Left Heading (use \\n)' },
      { key: 'body1',    label: 'Left Body', multiline: true },
      { key: 'points1',  label: 'Left Bullet Points (one per line)', multiline: true, rows: 5 },
      { key: 'footnote', label: 'Footnote (italic)', multiline: true },
      { type: 'divider', label: 'Right Column' },
      { key: 'label2',   label: 'Right Column Label' },
      { key: 'heading2', label: 'Right Heading (use \\n)' },
      { key: 'body2',    label: 'Right Body', multiline: true },
      { key: 'points2',  label: 'Right Bullet Points (one per line)', multiline: true, rows: 5 },
    ],
  },
  home_outcomes: {
    title: 'Impact Outcomes', description: 'Climate, Community, Biodiversity section plus safeguards card.',
    fields: [
      { key: 'label',   label: 'Section Label' },
      { key: 'heading', label: 'Heading' },
      { key: 'subtext', label: 'Subtext', multiline: true },
      { type: 'divider', label: 'Outcome 1' }, { key: 'outcome1Label', label: 'Label' }, { key: 'outcome1Title', label: 'Title' }, { key: 'outcome1Desc', label: 'Description', multiline: true },
      { type: 'divider', label: 'Outcome 2' }, { key: 'outcome2Label', label: 'Label' }, { key: 'outcome2Title', label: 'Title' }, { key: 'outcome2Desc', label: 'Description', multiline: true },
      { type: 'divider', label: 'Outcome 3' }, { key: 'outcome3Label', label: 'Label' }, { key: 'outcome3Title', label: 'Title' }, { key: 'outcome3Desc', label: 'Description', multiline: true },
      { type: 'divider', label: 'Safeguards Card' },
      { key: 'safeguardsHeading', label: 'Heading' },
      { key: 'safeguardsBody1',   label: 'Paragraph 1', multiline: true },
      { key: 'safeguardsBody2',   label: 'Paragraph 2', multiline: true },
    ],
  },
  home_cta: {
    title: 'CTA Banner', description: 'The "Get in Touch" banner at the bottom of the home page.',
    fields: [
      { key: 'heading', label: 'Heading' },
      { key: 'email',   label: 'Email Address' },
      { key: 'phone',   label: 'Phone Number' },
    ],
  },
  page_about: {
    title: 'About Page', description: 'Text content for the About page.',
    fields: [
      { key: 'storyLabel',   label: 'Story Section Label' },
      { key: 'storyHeading', label: 'Story Heading' },
      { key: 'storyBody1',   label: 'Story Paragraph 1', multiline: true, rows: 4 },
      { key: 'storyBody2',   label: 'Story Paragraph 2', multiline: true, rows: 4 },
      { key: 'storyBody3',   label: 'Story Paragraph 3', multiline: true, rows: 4 },
      { type: 'divider', label: 'Info Cards' },
      { key: 'card1Title', label: 'Card 1 Title' }, { key: 'card1Desc', label: 'Card 1 Text', multiline: true },
      { key: 'card2Title', label: 'Card 2 Title' }, { key: 'card2Desc', label: 'Card 2 Text', multiline: true },
      { key: 'card3Title', label: 'Card 3 Title' }, { key: 'card3Desc', label: 'Card 3 Text', multiline: true },
      { type: 'divider', label: 'Team Section' },
      { key: 'teamLabel',   label: 'Team Label' },
      { key: 'teamHeading', label: 'Team Heading' },
      { key: 'member1Name', label: 'Member 1 Name' }, { key: 'member1Role', label: 'Member 1 Role' },
      { key: 'member2Name', label: 'Member 2 Name' }, { key: 'member2Role', label: 'Member 2 Role' },
      { key: 'member3Name', label: 'Member 3 Name' }, { key: 'member3Role', label: 'Member 3 Role' },
      { key: 'member4Name', label: 'Member 4 Name' }, { key: 'member4Role', label: 'Member 4 Role' },
      { type: 'divider', label: 'CTA Section' },
      { key: 'ctaHeading', label: 'CTA Heading' },
      { key: 'ctaBody',    label: 'CTA Body', multiline: true },
    ],
  },
  page_community: {
    title: 'Community Page', description: 'Text content for the Community Pulse page.',
    fields: [
      { key: 'heading1', label: 'Heading Line 1' },
      { key: 'heading2', label: 'Heading Line 2 (ochre)' },
      { key: 'subtext',  label: 'Intro subtext', multiline: true },
      { type: 'divider', label: 'Stats' },
      { key: 'statsLabel', label: 'Stats Label' },
      { key: 'stat1Val', label: 'Stat 1 Value' }, { key: 'stat1Unit', label: 'Unit' }, { key: 'stat1Sub', label: 'Sub-label' },
      { key: 'stat2Val', label: 'Stat 2 Value' }, { key: 'stat2Unit', label: 'Unit' }, { key: 'stat2Sub', label: 'Sub-label' },
      { key: 'stat3Val', label: 'Stat 3 Value' }, { key: 'stat3Unit', label: 'Unit' }, { key: 'stat3Sub', label: 'Sub-label' },
      { key: 'stat4Val', label: 'Stat 4 Value' }, { key: 'stat4Unit', label: 'Unit' }, { key: 'stat4Sub', label: 'Sub-label' },
      { type: 'divider', label: 'Voices Section' },
      { key: 'voicesLabel',   label: 'Section Label' },
      { key: 'voicesHeading', label: 'Heading' },
      { key: 'story1Name', label: 'Story 1 Name' }, { key: 'story1Role', label: 'Role' }, { key: 'story1Category', label: 'Category' }, { key: 'story1Quote', label: 'Quote', multiline: true },
      { key: 'story2Name', label: 'Story 2 Name' }, { key: 'story2Role', label: 'Role' }, { key: 'story2Category', label: 'Category' }, { key: 'story2Quote', label: 'Quote', multiline: true },
      { key: 'story3Name', label: 'Story 3 Name' }, { key: 'story3Role', label: 'Role' }, { key: 'story3Category', label: 'Category' }, { key: 'story3Quote', label: 'Quote', multiline: true },
      { type: 'divider', label: 'Journal Section' },
      { key: 'journalLabel',   label: 'Section Label' },
      { key: 'journalHeading', label: 'Heading' },
    ],
  },
  page_careers: {
    title: 'Careers Page', description: 'Text content for the Careers page.',
    fields: [
      { key: 'label',    label: 'Page Label' },
      { key: 'heading1', label: 'Heading Line 1' },
      { key: 'heading2', label: 'Heading Line 2 (ochre)' },
      { key: 'body1',    label: 'Paragraph 1', multiline: true },
      { key: 'body2',    label: 'Paragraph 2', multiline: true },
      { key: 'body3',    label: 'Paragraph 3', multiline: true },
      { type: 'divider', label: 'Current Openings Card' },
      { key: 'openingsHeading', label: 'Heading' },
      { key: 'openingsBody',    label: 'Body', multiline: true },
      { type: 'divider', label: 'Values Section' },
      { key: 'valuesHeading', label: 'Section Heading' },
      { key: 'value1Title', label: 'Value 1 Title' }, { key: 'value1Desc', label: 'Value 1 Description', multiline: true },
      { key: 'value2Title', label: 'Value 2 Title' }, { key: 'value2Desc', label: 'Value 2 Description', multiline: true },
      { key: 'value3Title', label: 'Value 3 Title' }, { key: 'value3Desc', label: 'Value 3 Description', multiline: true },
    ],
  },
};

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
    <div className="min-h-screen bg-basalt text-ether flex flex-col">
      {/* Header */}
      <div className="border-b border-white/8 px-8 py-5 flex items-center justify-between shrink-0">
        <div>
          <span className="font-display text-xl text-ether tracking-wide">Site Editor</span>
          <span className="font-tech text-[9px] tracking-[0.3em] uppercase text-ochre ml-4">Admin</span>
        </div>
        <a href="/" className="font-tech text-[9px] tracking-[0.2em] uppercase text-white/30 hover:text-ochre transition-colors">← Back to Site</a>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar nav */}
        <aside className="w-52 shrink-0 border-r border-white/8 overflow-y-auto py-4">
          {TABS.map(t => {
            if (t.id === 'sep' || t.id === 'sep2') return (
              <div key={t.id} className="mx-5 my-3 border-t border-white/8" />
            );
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`w-full text-left font-tech text-[10px] tracking-[0.15em] uppercase px-5 py-3 transition-colors ${
                  tab === t.id ? 'text-ochre bg-ochre/5' : 'text-white/35 hover:text-white/60'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </aside>

        {/* Panel */}
        <main className="flex-1 overflow-y-auto px-10 py-10 max-w-3xl">
          {tab === 'Navigation' && <AdminNav />}
          {tab === 'Hero'       && <AdminHero />}
          {tab === 'Images'     && <AdminImages />}
          {tab === 'Footer'     && <AdminFooter />}
          {tab === 'Pages'      && <AdminPages />}
          {CONTENT_CONFIGS[tab] && (
            <AdminContentEditor
              key={tab}
              section={tab}
              title={CONTENT_CONFIGS[tab].title}
              description={CONTENT_CONFIGS[tab].description}
              fields={CONTENT_CONFIGS[tab].fields}
            />
          )}
        </main>
      </div>
    </div>
  );
}