import React, { useState } from 'react';
import { ASSETS } from '../data/content';
import { TabType } from '../types';
import { Globe, Share2, Rss, Send, CheckCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onRequestQuote }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="w-full mt-auto bg-[#e0e3e5] border-t border-[#bbcabe]/60 text-[#191c1e]">
      {/* Compliance Ribbon */}
      <div className="bg-[#f2f4f6] border-b border-[#bbcabe]/40 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider text-[#3c4a40]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#006d44]" />
            <span>ISO 9001 Certified Quality Management</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#006d44]" />
            <span>ISO 14001 Certified Quality Management</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#006d44]" />
            <span>In Collaboration with MNRE</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#006d44]" />
            <span>MSME Registered</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col - Keep logo only */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => {
                onSelectTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center group cursor-pointer focus:outline-none"
              aria-label="AxiWatt Home"
            >
              <img
                src={ASSETS.logo}
                alt="AxiWatt Logo"
                className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </button>
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('URL copied to clipboard');
                }}
                className="w-9 h-9 rounded-full bg-white border border-[#bbcabe] flex items-center justify-center text-[#3c4a40] hover:text-[#006d44] hover:border-[#006d44] transition-all cursor-pointer shadow-2xs"
                title="Share AxiWatt Platform"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectTab('contact')}
                className="w-9 h-9 rounded-full bg-white border border-[#bbcabe] flex items-center justify-center text-[#3c4a40] hover:text-[#006d44] hover:border-[#006d44] transition-all cursor-pointer shadow-2xs"
                title="Global Locations"
              >
                <Globe className="w-4 h-4" />
              </button>
              <button
                onClick={() => alert('Subscribed to AxiWatt Operations Feed updates.')}
                className="w-9 h-9 rounded-full bg-white border border-[#bbcabe] flex items-center justify-center text-[#3c4a40] hover:text-[#006d44] hover:border-[#006d44] transition-all cursor-pointer shadow-2xs"
                title="Live Operations RSS"
              >
                <Rss className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Solutions / Products */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#191c1e]">Solutions</h4>
            <ul className="space-y-2 text-sm text-[#3c4a40]">
              <li>
                <button
                  onClick={() => onSelectTab('products')}
                  className="hover:text-[#006d44] hover:underline transition-colors text-left cursor-pointer"
                >
                  Automotive Battery Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('products')}
                  className="hover:text-[#006d44] hover:underline transition-colors text-left cursor-pointer"
                >
                  Telecom Battery Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('products')}
                  className="hover:text-[#006d44] hover:underline transition-colors text-left cursor-pointer"
                >
                  Battery Energy Storage (BESS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('products')}
                  className="hover:text-[#006d44] hover:underline transition-colors text-left cursor-pointer"
                >
                  Lead Replacement Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={onRequestQuote}
                  className="text-[#006d44] font-semibold hover:underline transition-colors text-left cursor-pointer"
                >
                  Request Project Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Industries */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#191c1e]">Company & Markets</h4>
            <ul className="space-y-2 text-sm text-[#3c4a40]">
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-[#006d44] hover:underline transition-colors text-left cursor-pointer"
                >
                  About AxiWatt (Vision & Mission)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('industries')}
                  className="hover:text-[#006d44] hover:underline transition-colors text-left cursor-pointer"
                >
                  Industries We Serve
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('technology')}
                  className="hover:text-[#006d44] hover:underline transition-colors text-left cursor-pointer"
                >
                  Technology & BMS Innovation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('sustainability')}
                  className="hover:text-[#006d44] hover:underline transition-colors text-left cursor-pointer"
                >
                  Sustainability & Lifecycle
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="hover:text-[#006d44] hover:underline transition-colors text-left cursor-pointer"
                >
                  Contact Us & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#191c1e]">Newsletter</h4>
            <p className="text-xs text-[#3c4a40] leading-relaxed">
              Receive the latest engineering briefings in high-density BESS and solid-state cell technology.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@enterprise.com"
                  required
                  className="w-full bg-white border border-[#bbcabe] rounded-lg px-3 py-2 text-xs text-[#191c1e] placeholder-[#6c7b70] focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                />
                <button
                  type="submit"
                  className="bg-[#006d44] hover:bg-[#005232] text-white px-3 py-2 rounded-lg text-xs font-semibold shrink-0 transition-colors flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#006d44]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Subscribed to AxiWatt Tech Briefs</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#bbcabe]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#3c4a40]">
          <p>© 2024 AxiWatt. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => alert('AxiWatt Privacy Policy: We uphold enterprise-grade confidentiality. No client telemetry is shared.')}
              className="hover:text-[#006d44] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => alert('AxiWatt Terms of Service: Commercial warranties and performance guarantees under contractual SLA.')}
              className="hover:text-[#006d44] transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onSelectTab('sustainability')}
              className="hover:text-[#006d44] transition-colors"
            >
              Global Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
