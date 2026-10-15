import React, { useState } from 'react';
import { Search, X, ArrowRight, Battery, Factory, Leaf, PhoneCall, Cpu } from 'lucide-react';
import { TabType } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: TabType) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTab
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchItems = [
    {
      title: 'Automotive Battery Solutions (EV Mobility)',
      category: 'Product',
      tab: 'products' as TabType,
      desc: 'High-rate fast charging and performance packs for electric vehicles and commercial delivery fleets.'
    },
    {
      title: 'Telecom Battery Solutions (48V Backup)',
      category: 'Product',
      tab: 'products' as TabType,
      desc: 'Reliable 48V rack-mounted backup power for telecom towers and communication infrastructure.'
    },
    {
      title: 'Battery Energy Storage Systems (BESS)',
      category: 'Product',
      tab: 'products' as TabType,
      desc: 'Flexible containerized energy storage for renewable integration, grid firming, and peak demand.'
    },
    {
      title: 'Lead Replacement Solutions (Lithium Drop-In)',
      category: 'Product',
      tab: 'products' as TabType,
      desc: 'Modern, maintenance-free lithium battery alternatives for industrial and backup power applications.'
    },
    {
      title: 'About AxiWatt: Vision, Mission & Approach',
      category: 'About',
      tab: 'about' as TabType,
      desc: 'Driving innovation in battery technology to contribute to a cleaner and more energy-efficient future.'
    },
    {
      title: 'Industries: Electric Mobility, Telecom, Renewables',
      category: 'Industries',
      tab: 'industries' as TabType,
      desc: 'Tailored energy architectures for EV fleets, telecom towers, renewable solar farms, and infrastructure.'
    },
    {
      title: 'Technology: BMS, Cell Chemistry & Safety',
      category: 'Technology',
      tab: 'technology' as TabType,
      desc: 'Advanced cell technologies, intelligent battery management systems, and sub-micron X-ray inspection.'
    },
    {
      title: 'Sustainability & Responsible Lifecycle',
      category: 'Sustainability',
      tab: 'sustainability' as TabType,
      desc: 'Closed-loop hydrometallurgical recycling, cobalt-free chemistry, and ESG impact reports.'
    },
    {
      title: 'Contact Us & Send Us an Enquiry',
      category: 'Contact',
      tab: 'contact' as TabType,
      desc: 'Connect with AxiWatt engineering and commercial teams for application-specific project sizing.'
    }
  ];

  const filtered = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-[#191c1e]/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#ffffff] rounded-2xl border border-[#bbcabe] shadow-2xl max-w-2xl w-full overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#bbcabe]/50 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#6c7b70]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, technologies, facilities, or reports..."
            className="w-full text-base bg-transparent border-none focus:outline-none text-[#191c1e] placeholder-[#6c7b70]"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#6c7b70] hover:text-[#191c1e] hover:bg-[#f2f4f6] rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelectTab(item.tab);
                  onClose();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full text-left p-3 rounded-xl hover:bg-[#f2f4f6] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#e6e8ea] text-[#006d44] rounded">
                      {item.category}
                    </span>
                    <h5 className="text-sm font-bold text-[#191c1e] group-hover:text-[#006d44] transition-colors">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-xs text-[#3c4a40] line-clamp-1">{item.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#6c7b70] group-hover:text-[#006d44] group-hover:translate-x-1 transition-all" />
              </button>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-[#6c7b70]">
              No results found for "{query}". Try searching for "V-STRUC", "Battery", "Recycling", or "Factory".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
