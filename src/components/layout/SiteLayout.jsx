import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CarbonParticles from '@/components/layout/CarbonParticles';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-basalt text-ether overflow-x-hidden">
      <CarbonParticles />
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}