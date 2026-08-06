/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { CalendarPage } from './pages/CalendarPage';
import { FaqPage } from './pages/FaqPage';
import { AdminPage } from './pages/AdminPage';
import { PROPERTY_INFO } from './data/propertyData';
import { PageTab } from './types';

export default function App() {
  const [ambiance, setAmbiance] = useState<'day' | 'sunset'>('day');
  const [activeTab, setActiveTab] = useState<PageTab>(() => window.location.hash === '#admin' ? 'admin' : 'home');

  useEffect(() => {
    const onHashChange = () => setActiveTab(window.location.hash === '#admin' ? 'admin' : 'home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleOpenAirbnb = () => {
    window.open(PROPERTY_INFO.airbnbUrl, '_blank', 'noopener,noreferrer');
  };

  const handleNavigate = (tab: PageTab) => {
    if (tab === 'admin') window.location.hash = 'admin';
    else if (window.location.hash === '#admin') history.replaceState(null, '', window.location.pathname);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activeTab === 'admin') {
    return <AdminPage onExit={() => handleNavigate('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#091726] text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <Navbar
          onOpenAirbnb={handleOpenAirbnb}
          ambiance={ambiance}
          setAmbiance={setAmbiance}
          activeTab={activeTab}
          onNavigate={handleNavigate}
        />

        {/* Dynamic Page Content */}
        <main className="min-h-screen">
          {activeTab === 'home' && (
            <HomePage
              onOpenAirbnb={handleOpenAirbnb}
              ambiance={ambiance}
              onNavigate={handleNavigate}
            />
          )}

          {activeTab === 'about' && (
            <AboutPage onOpenAirbnb={handleOpenAirbnb} />
          )}

          {activeTab === 'gallery' && (
            <GalleryPage onOpenAirbnb={handleOpenAirbnb} />
          )}

          {activeTab === 'reviews' && (
            <ReviewsPage onOpenAirbnb={handleOpenAirbnb} />
          )}

          {activeTab === 'calendar' && (
            <CalendarPage onOpenAirbnb={handleOpenAirbnb} />
          )}

          {activeTab === 'faq' && (
            <FaqPage onOpenAirbnb={handleOpenAirbnb} />
          )}
        </main>
      </div>

      {/* Footer with Page Navigation & W.O.R.D. Permit Info */}
      <Footer onOpenAirbnb={handleOpenAirbnb} onNavigate={handleNavigate} />
    </div>
  );
}
