import React, { useState } from 'react';
import { INDUSTRIES, ASSETS } from '../data/content';
import { TabType } from '../types';
import {
  Car,
  Radio,
  Sun,
  Factory,
  Network,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface IndustriesScreenProps {
  onSelectTab: (tab: TabType) => void;
  onRequestQuote: () => void;
}

export const IndustriesScreen: React.FC<IndustriesScreenProps> = ({
  onSelectTab,
  onRequestQuote
}) => {
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0].id);

  const selected = INDUSTRIES.find((i) => i.id === activeIndustry) || INDUSTRIES[0];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-[#bbcabe]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-3.5 py-1 bg-[#52f2a7]/20 text-[#006d44] font-bold text-xs rounded-full uppercase tracking-wider">
              Industries We Serve
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#191c1e] tracking-tight leading-tight">
              Energy Solutions <br />
              <span className="text-[#006d44]">Across Industries</span>
            </h1>
            <p className="text-base sm:text-lg text-[#3c4a40] leading-relaxed">
              From high-rate EV mobility demands to 24/7 telecom network continuity and multi-megawatt
              grid storage, AxiWatt provides mission-critical energy architectures for key industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Industry Showcase - Balanced equal-height columns */}
      <section className="py-16 lg:py-20 bg-[#f7f9fb] border-b border-[#bbcabe]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: 5 Nav items stretched equally to match the right card's height */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3 h-full">
              {INDUSTRIES.map((ind) => {
                const isActive = activeIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustry(ind.id)}
                    className={`w-full flex-1 text-left p-4 sm:p-5 rounded-2xl transition-all cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? 'bg-white border-2 border-[#006d44] shadow-sm'
                        : 'bg-white hover:bg-white/90 border border-[#bbcabe]/60'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0 pr-2">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#006d44] text-white'
                            : 'bg-[#f2f4f6] text-[#3c4a40] group-hover:bg-[#52f2a7]/30 group-hover:text-[#006d44]'
                        }`}
                      >
                        <span className="material-symbols-outlined text-2xl">{ind.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-base text-[#191c1e] truncate">{ind.name}</h3>
                        <p className="text-xs text-[#6c7b70] line-clamp-1 leading-relaxed">
                          {ind.shortDesc}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive
                          ? 'text-[#006d44] translate-x-1'
                          : 'text-[#bbcabe] group-hover:text-[#6c7b70]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Showcase Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#bbcabe]/60 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
              {/* Header Image Banner */}
              <div className="h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#bbcabe]/40 shadow-xs relative bg-[#191c1e]">
                <img
                  src={
                    selected.id === 'electric-mobility'
                      ? ASSETS.heavyManufacturing
                      : selected.image
                  }
                  alt={selected.name}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = ASSETS.heavyManufacturing;
                  }}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#006d44] text-white px-2.5 py-1 rounded inline-block mb-1">
                    SELECTED SECTOR
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{selected.name}</h3>
                </div>
              </div>

              {/* Title & Short Description */}
              <div className="space-y-3">
                <h4 className="text-lg sm:text-xl font-bold text-[#191c1e] leading-snug">
                  {selected.shortDesc}
                </h4>
                <div className="p-3.5 bg-[#f2f4f6] rounded-xl border border-[#bbcabe]/40 text-xs font-semibold text-[#006d44]">
                  Key Advantage: {selected.highlight}
                </div>
              </div>

              {/* Target Applications Grid */}
              <div className="space-y-3">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#6c7b70]">
                  TARGET APPLICATIONS
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selected.keyApplications.map((app, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3.5 bg-white rounded-xl border border-[#bbcabe]/60 text-xs font-semibold text-[#191c1e]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#006d44] shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#bbcabe]/40">
                <span className="text-xs text-[#6c7b70]">
                  Pre-engineered configurations ready for deployment.
                </span>
                <button
                  onClick={onRequestQuote}
                  className="w-full sm:w-auto bg-[#006d44] hover:bg-[#005232] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-95"
                >
                  <span>REQUEST SOLUTION BRIEF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of all 5 Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold text-[#191c1e] tracking-tight">
              Sector Specializations
            </h2>
            <p className="text-sm text-[#3c4a40]">
              Explore how AxiWatt addresses the unique operational profiles of modern infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="bg-[#f7f9fb] border border-[#bbcabe]/60 rounded-2xl p-7 flex flex-col justify-between h-full space-y-4 hover:border-[#006d44] transition-all"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#52f2a7]/30 text-[#006d44] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">{ind.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1e]">{ind.name}</h3>
                  <p className="text-xs text-[#3c4a40] leading-relaxed">{ind.shortDesc}</p>
                </div>
                <div className="pt-4 border-t border-[#bbcabe]/40">
                  <button
                    onClick={() => {
                      setActiveIndustry(ind.id);
                      window.scrollTo({ top: 350, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#006d44] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View {ind.name} Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Custom Consultation Card */}
            <div className="bg-[#006d44] text-white rounded-2xl p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-[#52f2a7] flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Have a Specialized Application?</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  We engineer custom voltage levels, enclosure form factors, and telemetry protocols
                  for unique industrial duty cycles.
                </p>
              </div>
              <button
                onClick={onRequestQuote}
                className="w-full py-3 bg-[#52f2a7] hover:bg-[#3be097] text-[#002111] rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Speak with Application Engineers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
