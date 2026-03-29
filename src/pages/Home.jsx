import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ImpactStats from '@/components/home/ImpactStats';
import MissionSection from '@/components/home/MissionSection';
import WildlifeStrip from '@/components/home/WildlifeStrip';
import HomeCommunitySnippet from '@/components/home/HomeCommunitySnippet';
import CtaBanner from '@/components/home/CtaBanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <MissionSection />
      <WildlifeStrip />
      <HomeCommunitySnippet />
      <CtaBanner />
    </>
  );
}