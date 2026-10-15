import React from 'react';
import { ASSETS } from '../data/content';
import { TabType } from '../types';
import {
  Compass,
  Target,
  Wrench,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe2,
  Users
} from 'lucide-react';

interface AboutScreenProps {
  onSelectTab: (tab: TabType) => void;
  onRequestQuote: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onSelectTab, onRequestQuote }) => {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-[#bbcabe]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-3.5 py-1 bg-[#52f2a7]/20 text-[#006d44] font-bold text-xs rounded-full uppercase tracking-wider">
              About AxiWatt
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#191c1e] tracking-tight leading-tight">
              Driving Innovation in <br />
              <span className="text-[#006d44]">Battery Technology</span>
            </h1>
            <p className="text-base sm:text-lg text-[#3c4a40] leading-relaxed">
              AxiWatt is focused on supporting the evolving energy needs of modern industries through
              advanced battery solutions and energy storage technologies. Our areas of focus include
              electric mobility, telecommunications, and energy storage applications.
            </p>
            <div className="p-5 bg-[#f2f4f6] rounded-2xl border border-[#bbcabe]/50 text-sm text-[#191c1e] leading-relaxed font-medium">
              We believe that reliable energy is essential for progress. Our objective is to support
              businesses with practical, efficient, and dependable battery solutions that meet changing
              operational requirements.
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 bg-[#f7f9fb] border-b border-[#bbcabe]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#bbcabe]/60 shadow-xs hover:shadow-md transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-[#52f2a7]/30 text-[#006d44] rounded-2xl flex items-center justify-center">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
                  Guiding Direction
                </span>
                <h2 className="text-3xl font-extrabold text-[#191c1e]">Our Vision</h2>
                <p className="text-sm sm:text-base text-[#3c4a40] leading-relaxed">
                  To contribute to a cleaner and more energy-efficient future through innovative
                  battery technologies and sustainable energy solutions.
                </p>
              </div>
              <div className="pt-4 border-t border-[#bbcabe]/30 text-xs text-[#6c7b70]">
                A sustainable foundation for next-generation clean electrification.
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#bbcabe]/60 shadow-xs hover:shadow-md transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-[#52f2a7]/30 text-[#006d44] rounded-2xl flex items-center justify-center">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
                  Core Purpose
                </span>
                <h2 className="text-3xl font-extrabold text-[#191c1e]">Our Mission</h2>
                <p className="text-sm sm:text-base text-[#3c4a40] leading-relaxed">
                  To support the transition toward efficient energy systems by focusing on product
                  reliability, technological advancement, customer requirements, and responsible energy
                  practices.
                </p>
              </div>
              <div className="pt-4 border-t border-[#bbcabe]/30 text-xs text-[#6c7b70]">
                Bridging operational demands with engineered electrochemical excellence.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
                Operational Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191c1e] tracking-tight">
                Our Approach
              </h2>
              <p className="text-base text-[#3c4a40] leading-relaxed">
                We emphasize quality, performance, application suitability, and continuous
                improvement in delivering battery solutions for a wide range of energy requirements.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <CheckCircle className="w-5 h-5 text-[#006d44] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#191c1e]">Uncompromising Quality</h4>
                    <p className="text-xs text-[#3c4a40] mt-0.5">
                      Sub-micron QA inspections, rigorous cell sorting, and in-line thermal tomography.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle className="w-5 h-5 text-[#006d44] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#191c1e]">Performance Precision</h4>
                    <p className="text-xs text-[#3c4a40] mt-0.5">
                      High round-trip efficiency, wide temperature tolerance, and predictable degradation profiles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle className="w-5 h-5 text-[#006d44] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#191c1e]">Application Suitability</h4>
                    <p className="text-xs text-[#3c4a40] mt-0.5">
                      Designing specifically for duty cycles—whether fast EV charge rates or 24/7 telecom tower loads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle className="w-5 h-5 text-[#006d44] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#191c1e]">Continuous Improvement</h4>
                    <p className="text-xs text-[#3c4a40] mt-0.5">
                      Constant iteration on cell chemistries, firmware algorithms, and closed-loop recyclability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectTab('products')}
                  className="bg-[#006d44] hover:bg-[#005232] text-white px-7 py-3 rounded-lg text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>View Our Products & Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[420px] rounded-2xl overflow-hidden border border-[#bbcabe]/60 shadow-lg">
              <img
                src={ASSETS.factoryHero}
                alt="AxiWatt Giga-Factory and advanced battery systems"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
