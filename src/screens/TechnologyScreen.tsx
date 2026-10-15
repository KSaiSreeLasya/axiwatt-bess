import React, { useState } from 'react';
import { ASSETS, TECH_PILLARS } from '../data/content';
import { TabType } from '../types';
import {
  Cpu,
  Bot,
  Zap,
  CheckCircle,
  Thermometer,
  ShieldCheck,
  Scan,
  FlaskConical,
  Microchip,
  Activity,
  ArrowRight,
  Download,
  Layers,
  Settings
} from 'lucide-react';

interface TechnologyScreenProps {
  onSelectTab: (tab: TabType) => void;
  onRequestQuote: () => void;
}

export const TechnologyScreen: React.FC<TechnologyScreenProps> = ({
  onSelectTab,
  onRequestQuote
}) => {
  const [isScanning, setIsScanning] = useState(true);
  const [activePillar, setActivePillar] = useState(TECH_PILLARS[0].id);

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-[#bbcabe]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-3.5 py-1 bg-[#52f2a7]/20 text-[#006d44] font-bold text-xs rounded-full uppercase tracking-wider">
              Technology & Innovation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#191c1e] tracking-tight leading-tight">
              Technology That Moves <br />
              <span className="text-[#006d44]">Energy Forward</span>
            </h1>
            <p className="text-base sm:text-lg text-[#3c4a40] leading-relaxed">
              At AxiWatt, we recognize the importance of technology in developing efficient and
              reliable battery solutions. Our technology focus is guided by evolving industry
              requirements, application suitability, and improvements in energy storage performance.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Core Technology Pillars */}
      <section className="py-20 bg-[#f7f9fb] border-b border-[#bbcabe]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
              Architecture Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191c1e] tracking-tight">
              Our Technological Focus
            </h2>
            <p className="text-sm text-[#3c4a40]">
              Systematic engineering across cell chemistry, telemetry, integration, and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TECH_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-[#bbcabe]/60 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#52f2a7]/30 text-[#006d44] flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-[#f2f4f6] text-[#006d44] px-3 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#191c1e]">{pillar.title}</h3>
                  <p className="text-sm font-medium text-[#191c1e] leading-relaxed">
                    {pillar.description}
                  </p>
                  <p className="text-xs text-[#3c4a40] leading-relaxed">{pillar.detail}</p>
                </div>

                <div className="pt-4 border-t border-[#bbcabe]/40 flex items-center justify-between text-xs">
                  <span className="text-[#6c7b70]">Design Standard:</span>
                  <span className="font-bold text-[#006d44]">{pillar.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automated Assembly & Laser Bonding */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
              High-Precision Manufacturing
            </span>
            <h2 className="text-3xl font-extrabold text-[#191c1e] tracking-tight">
              Automated Assembly Shell
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Robotics */}
            <div className="group bg-[#f7f9fb] border border-[#bbcabe]/60 p-7 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-[#52f2a7]/30 text-[#006d44] rounded-xl">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6c7b70]">
                  Sync-Flow V4
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#191c1e] mb-2">6-Axis Robotics</h3>
              <p className="text-xs sm:text-sm text-[#3c4a40] mb-5 leading-relaxed">
                High-speed cinematic robots execute 0.01mm tolerance placements, ensuring every module
                and pack chassis is structurally uniform and reliable.
              </p>
              <div className="h-52 w-full bg-[#e0e3e5] rounded-xl overflow-hidden relative border border-[#bbcabe]/40">
                <img
                  src={ASSETS.roboticsArm}
                  alt="Industrial robotic arm assembly"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Laser Welding */}
            <div className="group bg-[#f7f9fb] border border-[#bbcabe]/60 p-7 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-[#52f2a7]/30 text-[#006d44] rounded-xl">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6c7b70]">
                  Cold-Beam Tech
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#191c1e] mb-2">Fiber Laser Welding</h3>
              <p className="text-xs sm:text-sm text-[#3c4a40] mb-5 leading-relaxed">
                Integrated laser welding provides zero-contact thermal bonding, eliminating physical
                stress on delicate cell terminals and heavy copper busbars.
              </p>
              <div className="h-52 w-full bg-[#e0e3e5] rounded-xl overflow-hidden relative border border-[#bbcabe]/40">
                <img
                  src={ASSETS.laserWelding}
                  alt="Fiber laser welding battery cells"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Zero Defect Quality Protocol */}
      <section className="py-20 bg-[#f7f9fb] border-y border-[#bbcabe]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
                Quality Assurance
              </span>
              <h2 className="text-3xl font-extrabold text-[#191c1e] tracking-tight mt-1">
                Zero-Defect Safety Protocol
              </h2>
              <p className="text-sm text-[#3c4a40] mt-2 leading-relaxed">
                Multi-spectral analysis ensures every unit meets the AxiWatt 20-year reliability benchmark.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-[#bbcabe]/60 bg-[#191c1e] h-88 group shadow-xs">
              <img
                src={ASSETS.xrayTomography}
                alt="In-Line X-Ray Tomography"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-2xl font-bold text-white mb-2">In-Line X-Ray Tomography</h4>
                <p className="text-xs sm:text-sm text-white/85 max-w-lg leading-relaxed">
                  Sub-micron computerized scanning checks cell internal alignment, separator integrity,
                  and electrolyte distribution prior to module encapsulation.
                </p>
              </div>
              <button
                onClick={() => setIsScanning(!isScanning)}
                className="absolute top-6 right-6 bg-[#52f2a7] text-[#002111] px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <Scan className="w-3.5 h-3.5" />
                <span>{isScanning ? 'SCANNING ACTIVE' : 'SCAN PAUSED'}</span>
              </button>
            </div>

            <div className="rounded-2xl border border-[#bbcabe]/60 bg-white p-8 flex flex-col justify-between text-center shadow-xs">
              <div>
                <div className="w-16 h-16 bg-[#f2f4f6] rounded-2xl mx-auto flex items-center justify-center text-[#006d44] shadow-xs mb-5">
                  <Thermometer className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#191c1e] mb-2">Thermal Dynamics</h4>
                <p className="text-xs text-[#3c4a40] leading-relaxed">
                  Accelerated thermal stress cycling from -40°C to +85°C to simulate 20 years of
                  rigorous field operations and rapid discharge pulses.
                </p>
              </div>

              <div className="mt-6 bg-[#f7f9fb] p-4 rounded-xl border border-[#bbcabe]/40 flex justify-between items-center text-xs">
                <span className="font-semibold text-[#3c4a40]">Stability Index</span>
                <span className="text-xl font-extrabold text-[#006d44]">0.998</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solid-State R&D Frontier */}
      <section className="py-20 bg-[#191c1e] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#52f2a7] text-xs font-bold uppercase tracking-widest">
                The Innovation Core
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Beyond Lithium: The Solid-State Frontier
              </h2>
              <p className="text-sm text-[#e0e3e5] leading-relaxed">
                Our R&D lab is focused on the fundamental chemistry of energy. We are currently
                scaling polymer-based solid-state electrolytes that offer 3x energy density and
                inherent safety against thermal runaway.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-2xl font-extrabold text-[#52f2a7] block">450 Wh/kg</span>
                  <span className="text-[11px] text-white/60 uppercase tracking-wider">
                    Target Density
                  </span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-2xl font-extrabold text-[#52f2a7] block">&lt; 15 min</span>
                  <span className="text-[11px] text-white/60 uppercase tracking-wider">
                    Charge Cycle (0-80%)
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={ASSETS.scientistLab}
                  alt="AxiWatt Materials Scientist in laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={ASSETS.molecularStructure}
                  alt="Molecular polymer simulation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-[#e0e3e5] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8 border border-[#bbcabe]/70">
          <div className="max-w-2xl text-center md:text-left space-y-2">
            <h2 className="text-3xl font-extrabold text-[#191c1e]">Discuss Technical Integration</h2>
            <p className="text-sm text-[#3c4a40]">
              Connect directly with our engineering team to review battery specs, BMS protocols, or
              system integration requirements.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="px-8 py-3.5 bg-[#006d44] hover:bg-[#005232] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-xs shrink-0"
          >
            Speak to an Engineer
          </button>
        </div>
      </section>
    </div>
  );
};
