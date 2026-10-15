import React, { useState } from 'react';
import { TabType } from '../types';
import { ASSETS } from '../data/content';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onRequestQuote: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onRequestQuote,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products & Solutions' },
    { id: 'industries', label: 'Industries' },
    { id: 'technology', label: 'Technology' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#ffffff] border-b border-[#bbcabe]/50 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo Only - strict shrink-0 and max width */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => {
              onSelectTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group cursor-pointer focus:outline-none shrink-0"
            aria-label="AxiWatt Home"
          >
            <img
              src={ASSETS.logo}
              alt="AxiWatt Logo"
              className="h-9 sm:h-11 w-auto max-w-[150px] sm:max-w-[180px] object-contain transition-transform group-hover:scale-105"
            />
          </button>
        </div>

        {/* Desktop Navigation Links - xl:flex prevents overlap on tablet/medium desktop */}
        <nav className="hidden xl:flex items-center gap-2 2xl:gap-5 shrink-0">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-[13px] 2xl:text-[14px] font-medium transition-all duration-150 py-1.5 px-2.5 rounded whitespace-nowrap cursor-pointer relative ${
                  isActive
                    ? 'text-[#006d44] font-bold border-b-2 border-[#006d44]'
                    : 'text-[#3c4a40] hover:text-[#006d44] hover:bg-[#f2f4f6]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-1.5 text-[#3c4a40] hover:text-[#006d44] hover:bg-[#f2f4f6] p-2 rounded-lg transition-colors cursor-pointer"
            title="Search Products & Specifications"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs font-medium text-[#6c7b70] hidden xl:inline">⌘K</span>
          </button>

          <button
            onClick={onRequestQuote}
            className="bg-[#52f2a7] hover:bg-[#3be097] text-[#002111] font-semibold text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg active:scale-95 transition-all duration-150 shadow-xs hover:shadow-sm cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Mobile menu button (triggers below xl: 1280px to completely avoid overlap) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#191c1e] hover:bg-[#f2f4f6] rounded-lg transition-colors cursor-pointer ml-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#bbcabe]/40 bg-[#ffffff] px-6 py-4 space-y-2 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-base font-medium flex items-center justify-between ${
                currentTab === item.id
                  ? 'bg-[#e6e8ea] text-[#006d44] font-bold'
                  : 'text-[#191c1e] hover:bg-[#f2f4f6]'
              }`}
            >
              <span>{item.label}</span>
              {currentTab === item.id && <span className="w-2 h-2 rounded-full bg-[#006d44]"></span>}
            </button>
          ))}
          <div className="pt-2 border-t border-[#bbcabe]/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full text-left py-2 px-3 text-[#565e74] hover:text-[#006d44] text-sm flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search Documentation & Models</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
