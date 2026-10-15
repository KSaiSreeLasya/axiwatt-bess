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

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
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
        onSelectTab={setCurrentTab}
        onRequestQuote={() => setIsQuoteOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Screen Views matching user website content specification */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomeScreen
            onSelectTab={setCurrentTab}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenCompare={() => setIsCompareOpen(true)}
          />
        )}

        {currentTab === 'about' && (
          <AboutScreen
            onSelectTab={setCurrentTab}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentTab === 'products' && (
          <ProductsScreen
            onSelectTab={setCurrentTab}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenCompare={() => setIsCompareOpen(true)}
            onOpenDatasheet={(product) => setDatasheetProduct(product)}
          />
        )}

        {currentTab === 'industries' && (
          <IndustriesScreen
            onSelectTab={setCurrentTab}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentTab === 'technology' && (
          <TechnologyScreen
            onSelectTab={setCurrentTab}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentTab === 'sustainability' && (
          <SustainabilityScreen
            onSelectTab={setCurrentTab}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentTab === 'contact' && (
          <ContactScreen onSelectTab={setCurrentTab} />
        )}
      </main>

      {/* Shared Footer with links to all sections */}
      <Footer
        onSelectTab={setCurrentTab}
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
        onSelectTab={setCurrentTab}
      />
    </div>
  );
}
