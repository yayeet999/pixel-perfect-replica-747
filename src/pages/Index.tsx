import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { DashboardMockup } from '@/components/DashboardMockup';

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="bg-[rgba(12,17,29,1)] flex w-full flex-col items-center max-md:max-w-full">
        <Header />
        <main className="flex w-full flex-col items-center">
          <HeroSection />
          <DashboardMockup />
        </main>
      </div>
    </div>
  );
};

export default Index;
