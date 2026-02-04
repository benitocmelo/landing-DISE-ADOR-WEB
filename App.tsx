import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import NeedsAssessment from './components/NeedsAssessment';
import Comparator from './components/Comparator';
import ValueProp from './components/ValueProp';
import Pricing from './components/Pricing';
import Maintenance from './components/Maintenance';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  // Theme state management
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Apply theme class to html element
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans selection:bg-blue-500 selection:text-white">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        {/* Deliverables */}
        <ValueProp /> 
        {/* Market Comparison */}
        <Comparator /> 
        {/* Needs Assessment (Context) */}
        <NeedsAssessment />
        {/* Investment Options */}
        <Pricing />
        {/* Maintenance Detail */}
        <Maintenance />
        <FAQ />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;