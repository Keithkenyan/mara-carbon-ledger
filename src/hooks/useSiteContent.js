import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';

// Default values — used as fallback until DB content loads
export const DEFAULTS = {
  nav: {
    links: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Community', path: '/community' },
      { label: 'Grievance & Feedback', path: '/grievance' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Careers', path: '/careers' },
    ],
    ctaLabel: 'Offset Now',
    ctaPath: '/credits',
  },
  footer: {
    tagline: 'Protecting the Greater Mara Ecosystem through verified carbon sequestration, community land stewardship, and transparent climate finance.',
    email: 'info@onemaracarbon.org',
    phone: '0715 047047 | 0777 047047',
    location: 'Narok County, Kenya',
    copyright: '© 2026 One Mara Carbon Project · All Rights Reserved',
    bottomTagline: 'Building resilient Mara ecosystems for sustainable livelihoods',
    badges: ['MMWCA', 'Conservation International', 'Ahueni'],
    links: [
      { label: 'Home', path: '/' },
      { label: 'About OMCP', path: '/about' },
      { label: 'Community', path: '/community' },
      { label: 'Grievance & Feedback', path: '/grievance' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Careers', path: '/careers' },
    ],
  },
  hero: {
    headline1: 'Building a resilient',
    headline2: 'Mara ecosystem',
    headline3: 'for sustainable livelihoods.',
    subtext: 'We are a locally-led carbon project working with Maasai Mara conservancies and landowners to improve grasslands, support livelihoods, and generate long-term value to the community.',
    cta1Label: 'Learn More',
    cta1Path: '/about',
    cta2Label: 'Grievance & Feedback',
    cta2Path: '/grievance',
  },
  images: {
    hero: 'https://media.base44.com/images/public/69c8e60e62a8be7933ac088c/b40c6d4c3_generated_image.png',
    woodland: 'https://media.base44.com/images/public/69c8e60e62a8be7933ac088c/41376192a_generated_image.png',
    ranger: 'https://media.base44.com/images/public/69c8e60e62a8be7933ac088c/127763587_generated_image.png',
    river: 'https://media.base44.com/images/public/69c8e60e62a8be7933ac088c/178844b3c_generated_image.png',
    grass: 'https://media.base44.com/images/public/69c8e60e62a8be7933ac088c/722aaed11_generated_image.png',
    wildlife: 'https://media.base44.com/images/public/69c8e60e62a8be7933ac088c/635e4ef1a_generated_image.png',
    elder: 'https://media.base44.com/images/public/69c8e60e62a8be7933ac088c/eaa7256d1_generated_image.png',
    dataRanger: 'https://media.base44.com/images/public/69c8e60e62a8be7933ac088c/221a49273_generated_image.png',
  },
};

// Cache so all components share the same fetch
let cache = null;
let listeners = [];

function notifyListeners() {
  listeners.forEach(fn => fn(cache));
}

async function loadContent() {
  const records = await base44.entities.SiteContent.list();
  const merged = { ...DEFAULTS };
  records.forEach(r => {
    if (r.section && r.data) merged[r.section] = { ...DEFAULTS[r.section], ...r.data };
  });
  cache = merged;
  notifyListeners();
  return merged;
}

export function useSiteContent(section) {
  const [content, setContent] = useState(cache ? cache[section] : DEFAULTS[section]);

  useEffect(() => {
    const handler = (newCache) => setContent(newCache[section] ?? DEFAULTS[section]);
    listeners.push(handler);

    if (!cache) loadContent();

    return () => { listeners = listeners.filter(l => l !== handler); };
  }, [section]);

  return content;
}

export async function saveSiteContent(section, data) {
  const records = await base44.entities.SiteContent.filter({ section });
  if (records.length > 0) {
    await base44.entities.SiteContent.update(records[0].id, { section, data });
  } else {
    await base44.entities.SiteContent.create({ section, data });
  }
  // Refresh cache
  cache = null;
  await loadContent();
}