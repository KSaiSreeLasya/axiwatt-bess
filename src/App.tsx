/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType, ProductSpec } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CompareModal } from './components/CompareModal';
import { DatasheetModal } from './components/DatasheetModal';
import { SearchModal } from './components/SearchModal';
import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ProductsScreen } from './screens/ProductsScreen';
import { IndustriesScreen } from './screens/IndustriesScreen';
import { TechnologyScreen } from './screens/TechnologyScreen';
import { SustainabilityScreen } from './screens/SustainabilityScreen';
import { ContactScreen } from './screens/ContactScreen';

const TAB_PATHS: Record<TabType, string> = {
  about: '/',
  home: '/home',
  products: '/products',
  industries: '/industries',
  technology: '/technology',
  sustainability: '/sustainability',
  contact: '/contact',
};

const DEFAULT_SEO = {
  title: 'AXIWATT | Premium Solar Energy Solutions',
  description: "Discover AXIWATT's premium solar energy solutions, battery storage systems, solar architecture and EV charging technologies for sustainable living.",
};

const PAGE_SEO: Partial<Record<TabType, { title: string; description: string }>> = {
  about: {
    title: 'About AXIWATT | Renewable Energy Solutions',
    description: "Learn about AXIWATT's innovative approach to solar energy, sustainable architecture, battery storage and intelligent energy management.",
  },
  home: {
    title: 'AXIWATT | Premium Solar Energy Solutions',
    description: "Discover AXIWATT's premium solar energy solutions, battery storage systems, solar architecture and EV charging technologies for sustainable living.",
  },
  sustainability: {
    title: 'Sustainable Energy Solutions & Solar Technology | AXIWATT',
    description: 'Explore sustainable energy technologies that combine solar power, intelligent storage and energy-efficient building design.',
  },
  contact: {
    title: 'Contact AXIWATT | Solar Consultation & Support',
    description: 'Contact AXIWATT to discuss solar installations, battery energy storage, solar architecture and customized renewable energy solutions.',
  },
};

const getTabFromPath = (pathname: string): TabType => {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return (Object.keys(TAB_PATHS) as TabType[]).find((tab) => TAB_PATHS[tab] === normalized) ?? 'home';
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>(() => getTabFromPath(window.location.pathname));

  const navigate = (tab: TabType) => {
    const path = TAB_PATHS[tab];
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setCurrentTab(tab);
  };

  useEffect(() => {
    const seo = PAGE_SEO[currentTab] ?? DEFAULT_SEO;
    document.title = seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', seo.description);
  }, [currentTab]);

  useEffect(() => {
    const handlePopState = () => setCurrentTab(getTabFromPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [datasheetProduct, setDatasheetProduct] = useState<ProductSpec | null>(null);

  // Keyboard shortcut listener for Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e]">
      {/* Top Navbar with the 7 recommended navigation menu items */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={navigate}
        onRequestQuote={() => setIsQuoteOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Screen Views matching user website content specification */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomeScreen
            onSelectTab={navigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenCompare={() => setIsCompareOpen(true)}
          />
        )}

        {currentTab === 'about' && (
          <AboutScreen
            onSelectTab={navigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentTab === 'products' && (
          <ProductsScreen
            onSelectTab={navigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenCompare={() => setIsCompareOpen(true)}
            onOpenDatasheet={(product) => setDatasheetProduct(product)}
          />
        )}

        {currentTab === 'industries' && (
          <IndustriesScreen
            onSelectTab={navigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentTab === 'technology' && (
          <TechnologyScreen
            onSelectTab={navigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentTab === 'sustainability' && (
          <SustainabilityScreen
            onSelectTab={navigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentTab === 'contact' && (
          <ContactScreen onSelectTab={navigate} />
        )}
      </main>

      {/* Shared Footer with links to all sections */}
      <Footer
        onSelectTab={navigate}
        onRequestQuote={() => setIsQuoteOpen(true)}
      />

      {/* Interactive Global Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialCapacity={50}
      />

      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onRequestQuote={() => {
          setIsCompareOpen(false);
          setIsQuoteOpen(true);
        }}
      />

      <DatasheetModal
        product={datasheetProduct}
        isOpen={!!datasheetProduct}
        onClose={() => setDatasheetProduct(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTab={navigate}
      />
    </div>
  );
}
