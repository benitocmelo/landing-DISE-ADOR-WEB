import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PathSelection from './components/PathSelection';
import PainPoints from './components/PainPoints';
import MainServices from './components/MainServices';
import WhatIsIncluded from './components/WhatIsIncluded';
import WorkProcess from './components/WorkProcess';
import AuditOrBeforeAfter from './components/AuditOrBeforeAfter';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  useEffect(() => {
    // Force dark mode as per requirements
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans selection:bg-blue-500 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <TrustBar />
        <PathSelection />
        <PainPoints />
        <MainServices />
        <WhatIsIncluded />
        <WorkProcess />
        <AuditOrBeforeAfter />
        <Pricing />
        <WhyChooseUs />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;