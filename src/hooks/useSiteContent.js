import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';

// Default values — used as fallback until DB content loads
export const DEFAULTS = {
  home_mission: {
    label: 'About OMCP',
    heading: 'What is One Mara\nCarbon Project?',
    body1: 'The One Mara Carbon Project (OMCP) is a carbon project managed by OMCP Mara Carbon CLG (a company limited by guarantee). The project is working with conservancies across the Maasai Mara to improve how grasslands are managed by supporting sustainable grazing practices, restoration of degraded land, and strengthening wildlife habitats, while generating carbon credits from increased soil carbon.',
    body2: 'Our key partners are MMWCA, Conservation International, and Ahueni.',
    approachLabel: 'The Approach',
    approachHeading: 'Three Activity\nPackages',
    step1Title: 'Rotational Grazing & Herd Management',
    step1Desc: 'We support conservancies to plan, manage, and monitor rotational grazing, building local capacity to restore grasslands, track livestock movement, and address land degradation.',
    step2Title: 'Land Restoration',
    step2Desc: 'We support recovery of severely degraded areas where grazing alone cannot restore the land, using reseeding, erosion control, invasive species management, and other rehabilitation measures.',
    step3Title: 'Strengthening Conservancies',
    step3Desc: 'In partnership with MMWCA, we strengthen conservancy governance by building leadership capacity, supporting formalization, improving management planning, and enabling more transparent and inclusive decision-making.',
  },
  home_stats: {
    label: 'Impact Metrics · 2019–2026',
    heading: 'The Numbers That Cannot Be Disputed',
    stat1Value: '100,000+', stat1Unit: 'Hectares',      stat1Label: 'of ecosystem protected',
    stat2Value: '2.8M',     stat2Unit: 'tCO₂e',         stat2Label: 'sequestered to date',
    stat3Value: '15',       stat3Unit: 'Conservancies',  stat3Label: 'under active management',
    stat4Value: '12,500+',  stat4Unit: 'People',         stat4Label: 'in Maasai communities benefiting',
  },
  home_howitworks: {
    label: 'How the Project Works',
    heading: 'Transforming Land Management\ninto Long-Term Value',
    subtext: 'We transform sustainable land management into long-term value for the Mara landscape through a transparent four-step process.',
    step1Title: 'Grazing Management',   step1Desc: 'OMCP collaborates with conservancies and pastoralists to implement planned rotational grazing.',
    step2Title: 'Data Collection',      step2Desc: 'We monitor grazing compliance and scientifically measure the increase in soil organic carbon.',
    step3Title: 'Credit Issuance & Sales', step3Desc: 'Verified carbon credits are issued every 2–3 years based on measured soil carbon and sold to corporate buyers.',
    step4Title: 'Distribution of Revenues', step4Desc: "Revenues are distributed to landowners and beneficiaries according to the project's Benefit Sharing Agreement.",
  },
  home_landowner: {
    label1: 'For Conservancy Landowners',
    heading1: 'What This Means\nfor You',
    body1: 'Participation in OMCP does not change land ownership.',
    points1: 'Land remains under the full ownership of landowners\nLivestock keeping continues\nNo automatic reduction in cattle is required\nGrazing is improved to match land capacity',
    footnote: 'As land health improves, pasture availability and livestock productivity are expected to increase over time.',
    label2: 'Benefits to Communities',
    heading2: 'Long-Term Value\nin the Mara',
    body2: 'OMCP is designed to deliver long-term value within the Mara landscape through:',
    points2: 'Direct payments to conservancy landowners from carbon revenues\nSupporting conservancy operations\nInvestment in sustainable land management\nRestoration of degraded land to support tourism',
  },
  home_outcomes: {
    label: 'Climate · Community · Biodiversity',
    heading: 'Three Connected Outcomes',
    subtext: 'The project delivers three connected outcomes that reinforce each other across the Mara landscape.',
    outcome1Label: 'Climate',      outcome1Title: 'Increased carbon stored in soils',                    outcome1Desc: 'Through improved grazing practices and land restoration, OMCP measurably increases soil organic carbon across the Mara landscape.',
    outcome2Label: 'Community',    outcome2Title: 'Improved livelihoods and income opportunities',       outcome2Desc: 'Carbon revenues flow directly to landowners and conservancies, creating sustainable income alongside improved pasture and livestock productivity.',
    outcome3Label: 'Biodiversity', outcome3Title: 'Protected habitats and wildlife movement',            outcome3Desc: 'Restored grassland corridors reconnect fragmented habitats, supporting the wildlife populations that define the Maasai Mara ecosystem.',
    safeguardsHeading: 'A Formal Process for Raising Concerns',
    safeguardsBody1: 'OMCP is supported by clear safeguards and accountability systems. Community members and stakeholders can submit feedback through conservancies or directly to OMCP.',
    safeguardsBody2: 'All grievances are reviewed and addressed within defined timelines.',
  },
  home_cta: {
    heading: 'Get in Touch',
    email: 'info@onemaracarbon.org',
    phone: '0715 047047 | 0777 047047',
  },
  page_about: {
    storyLabel: 'About the Project',
    storyHeading: 'One Mara Carbon Project',
    storyBody1: 'The One Mara Carbon Project (OMCP) is a carbon project managed by OMCP Mara Carbon CLG (a company limited by guarantee). The project works with conservancies across the Maasai Mara to improve how grasslands are managed — supporting sustainable grazing practices, restoration of degraded land, and strengthening wildlife habitats, while generating carbon credits from increased soil carbon.',
    storyBody2: 'The Mara landscape is under increasing pressure. Over time, heavy grazing has reduced the movement of livestock, with broken wildlife corridors damaging parts of the landscape. This has reduced soil health and the amount of carbon stored in the soil, threatening both wildlife habitats and the Maasai pastoralist way of life, which depends on healthy grasslands for livestock.',
    storyBody3: "OMCP's theory of change delivers three activity packages: rotational grazing and livestock herd management, land restoration, and strengthening existing conservancies and establishing new ones — in partnership with MMWCA, Conservation International, and Ahueni.",
    card1Title: 'What This Means for Landowners', card1Desc: 'Participation in OMCP does not change land ownership. Land remains under full ownership of landowners, livestock keeping continues, and no automatic reduction in cattle is required. Grazing is improved to match land capacity.',
    card2Title: 'Benefits to Communities',         card2Desc: 'OMCP delivers long-term value through direct payments to conservancy landowners from carbon revenues, supporting conservancy operations, investment in sustainable land management, and restoration of degraded land to support tourism.',
    card3Title: 'Independent Safeguards',          card3Desc: 'An independent Environmental and Social Impact Assessment has been completed, with mitigation measures in place. OMCP is supported by clear safeguards, accountability systems, and a formal grievance process.',
    teamLabel: 'The Team',
    teamHeading: 'Leadership',
    member1Name: 'Dr. Amelia Waweru',  member1Role: 'Executive Director',
    member2Name: 'James Ole Parsitau', member2Role: 'Community Engagement Lead',
    member3Name: 'Sarah Kimani',       member3Role: 'Chief Carbon Scientist',
    member4Name: 'William Nkemdirim', member4Role: 'Finance & Credit Director',
    ctaHeading: 'Join the Mission',
    ctaBody: 'Whether you are a corporation seeking verified offsets, a foundation looking to fund conservation, or an individual committed to the Mara\'s future — there is a place for you here.',
  },
  page_community: {
    heading1: 'Community',
    heading2: 'Pulse',
    subtext: 'Conservation is only as durable as the communities who live with it. These are the voices, faces, and numbers behind One Mara\'s human story.',
    statsLabel: 'Community Impact Data',
    stat1Val: '340',      stat1Unit: 'Rangers',       stat1Sub: 'full-time employed across all conservancies',
    stat2Val: 'KES 2.4B', stat2Unit: 'Total Revenue', stat2Sub: 'returned to communities since 2019',
    stat3Val: '1,200+',   stat3Unit: 'Landowners',    stat3Sub: 'receiving direct lease fee payments',
    stat4Val: '28',       stat4Unit: 'Women Leaders', stat4Sub: 'on community governance boards',
    voicesLabel: 'Voices from the Mara',
    voicesHeading: 'The Guardians of the Atmospheric Ledger',
    story1Name: 'Lekishon Ole Sankok',  story1Role: 'Senior Ranger · Olare Motorogi Conservancy',  story1Category: 'Rangers & Monitoring',    story1Quote: '"For ten years I walked this land with nothing but a spear. Now I carry a radio, data tablet, and a salary that keeps my children in school. The carbon project changed the economics of conservation."',
    story2Name: 'Nashipai Simel',       story2Role: 'Landowner & Community Board Member · Naboisho', story2Category: 'Landowners & Governance', story2Quote: '"We have managed this land for generations. My grandmother knew which grasses returned after fire. The carbon project finally makes that generational knowledge visible to the world — and pays us for it."',
    story3Name: 'Tiampati Ole Ntimama', story3Role: 'Field Data Technician · Mara North Conservancy', story3Category: 'Science & Data',         story3Quote: '"Every transect I walk, every tree I measure — that data becomes a carbon credit. I am now part of the global climate solution. That is something no one can take from the Maasai people."',
    journalLabel: 'Journal & Updates',
    journalHeading: 'Latest from the Field',
  },
  page_careers: {
    label: 'Join the Team',
    heading1: 'Careers at',
    heading2: 'OMCP',
    body1: 'The One Mara Carbon Project works with conservancies, communities, and partners to support sustainable land management across the Maasai Mara.',
    body2: 'We are committed to building a team that reflects our values of integrity, collaboration, and long-term impact.',
    body3: 'Opportunities to work with OMCP will be shared on this page as they become available.',
    openingsHeading: 'No open roles at this time',
    openingsBody: 'Check back here for future opportunities, or get in touch to express your interest.',
    valuesHeading: 'Our Values',
    value1Title: 'Integrity',       value1Desc: 'We operate transparently and hold ourselves accountable to communities, partners, and the land.',
    value2Title: 'Collaboration',   value2Desc: 'We work alongside conservancies, landowners, and international partners — not on their behalf.',
    value3Title: 'Long-Term Impact', value3Desc: 'Every decision is measured against its contribution to lasting ecological and community outcomes.',
  },
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
    logo: 'https://media.base44.com/images/public/69c8e60e62a8be7933ac088c/c0842a476_ONE-MARA-CARBON-LOGO.png',
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