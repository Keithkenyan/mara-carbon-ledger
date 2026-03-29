import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ImpactStats from '@/components/home/ImpactStats';
import MissionSection from '@/components/home/MissionSection';
import TheChallenge from '@/components/home/TheChallenge';
import HowItWorks from '@/components/home/HowItWorks';
import LandownerSection from '@/components/home/LandownerSection';
import WildlifeStrip from '@/components/home/WildlifeStrip';
import HomeCommunitySnippet from '@/components/home/HomeCommunitySnippet';
import ImpactOutcomes from '@/components/home/ImpactOutcomes';
import CtaBanner from '@/components/home/CtaBanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <MissionSection />
      <TheChallenge />
      <HowItWorks />
      <LandownerSection />
      <WildlifeStrip />
      <HomeCommunitySnippet />
      <ImpactOutcomes />
      <CtaBanner />
    </>
  );
}