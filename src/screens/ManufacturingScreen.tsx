import React, { useState } from 'react';
import { ASSETS } from '../data/content';
import { TabType } from '../types';
import {
  Cpu,
  Bot,
  Zap,
  CheckCircle,
  Thermometer,
  ShieldCheck,
  Search,
  Scan,
  FlaskConical,
  Microchip,
  Activity,
  ArrowRight,
  Download
} from 'lucide-react';

interface ManufacturingScreenProps {
  onSelectTab: (tab: TabType) => void;
  onRequestQuote: () => void;
}

export const ManufacturingScreen: React.FC<ManufacturingScreenProps> = ({
  onSelectTab,
  onRequestQuote
}) => {
  const [isScanning, setIsScanning] = useState(true);
  const [thermalTemp, setThermalTemp] = useState(25);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-white border-b border-[#bbcabe]/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="inline-block px-3.5 py-1 bg-[#dae2fd] text-[#38485d] rounded-full text-xs font-bold uppercase tracking-widest">
              Global Operations
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191c1e] tracking-tight leading-tight">
              Precision Engineered <br />
              <span className="text-[#006d44]">Energy Ecosystems</span>
            </h1>
            <p className="text-base sm:text-lg text-[#3c4a40] max-w-xl leading-relaxed">
              Inside the AxiWatt Giga-Factory: Where silicon, software, and solid-state chemistry
              converge to power the next industrial revolution.
            </p>
            <div className="flex gap-8 pt-2">
              <div className="flex flex-col border-l-4 border-[#006d44] pl-4">
                <span className="text-3xl font-extrabold text-[#006d44]">2.4 GW</span>
                <span className="text-xs font-semibold text-[#6c7b70] uppercase tracking-wider">
                  Annual Capacity
                </span>
              </div>
              <div className="flex flex-col border-l-4 border-[#006d44] pl-4">
                <span className="text-3xl font-extrabold text-[#006d44]">99.9%</span>
                <span className="text-xs font-semibold text-[#6c7b70] uppercase tracking-wider">
                  Build Precision
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[380px] sm:h-[460px]">
            <div className="absolute inset-0 bg-[#e0e3e5] rounded-2xl overflow-hidden shadow-xl border border-[#bbcabe]/60">
              <img
                src={ASSETS.factoryHero}
                alt="AxiWatt Giga-Factory interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Active Status Badge */}
            <div className="absolute -bottom-5 left-6 glass-card p-4 rounded-xl shadow-lg border border-white/80 flex flex-col gap-2 min-w-[200px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#006d44] animate-ping"></span>
                <span className="text-xs font-bold text-[#191c1e]">Factory 01: Active</span>
              </div>
              <div className="h-1.5 w-full bg-[#e0e3e5] rounded-full overflow-hidden">
                <div className="h-full bg-[#52f2a7] w-[92%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Assembly Shell Section */}
      <section className="py-20 bg-[#f2f4f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[#191c1e] tracking-tight">
              Automated Assembly Shell
            </h2>
            <div className="h-1 w-20 bg-[#52f2a7] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Robotics */}
            <div className="group bg-white border border-[#bbcabe]/60 p-7 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300">
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
                Our high-speed cinematic robots execute 0.01mm tolerance placements, ensuring every BESS
                module and residential inverter is structurally perfect.
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
            <div className="group bg-white border border-[#bbcabe]/60 p-7 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300">
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
                stress on delicate cell structures and busbar connections.
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

      {/* Quality Assurance / Zero-Defect Protocol */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-[#191c1e] tracking-tight">
                Zero-Defect Protocol
              </h2>
              <p className="text-sm text-[#3c4a40] mt-2 leading-relaxed">
                Multi-spectral analysis ensures every unit leaving the facility meets the AxiWatt
                20-year reliability benchmark.
              </p>
            </div>
            <div className="flex gap-1.5 items-center">
              <span className="w-3 h-3 rounded-full bg-[#52f2a7]"></span>
              <span className="w-3 h-3 rounded-full bg-[#e0e3e5]"></span>
              <span className="w-3 h-3 rounded-full bg-[#e0e3e5]"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* X-Ray Analysis Large Card */}
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-[#bbcabe]/60 bg-[#191c1e] h-88 group shadow-xs">
              <img
                src={ASSETS.xrayTomography}
                alt="In-Line X-Ray Tomography"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-2xl font-bold text-white mb-2">In-Line X-Ray Tomography</h4>
                <p className="text-xs sm:text-sm text-white/85 max-w-lg leading-relaxed">
                  Scanning every cell internal for particulate contamination and electrolyte
                  distribution with sub-micron resolution before pack assembly.
                </p>
              </div>
              <button
                onClick={() => setIsScanning(!isScanning)}
                className="absolute top-6 right-6 bg-[#52f2a7] text-[#002111] px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <Scan className="w-3.5 h-3.5" />
                <span>{isScanning ? 'SCANNING ACTIVE' : 'SYSTEM PAUSED'}</span>
              </button>
            </div>

            {/* Thermal Dynamics Testing */}
            <div className="rounded-2xl border border-[#bbcabe]/60 bg-[#f2f4f6] p-8 flex flex-col justify-between text-center shadow-xs">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center text-[#006d44] shadow-xs mb-5">
                  <Thermometer className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#191c1e] mb-2">Thermal Dynamics</h4>
                <p className="text-xs text-[#3c4a40] leading-relaxed">
                  Accelerated life testing ranging from -40°C to +85°C in continuous environmental
                  chambers simulating 20 years of field stress.
                </p>
              </div>

              <div className="mt-6 bg-white p-4 rounded-xl border border-[#bbcabe]/40 flex justify-between items-center text-xs">
                <span className="font-semibold text-[#3c4a40]">Stability Index</span>
                <span className="text-xl font-extrabold text-[#006d44]">0.998</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Lab: The Innovation Core (Solid-State Frontier) */}
      <section className="py-20 bg-[#191c1e] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
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

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#3be097]/20 flex items-center justify-center text-[#3be097] shrink-0">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Next-Gen Chemistry</h5>
                    <p className="text-xs text-[#e0e3e5]/70 mt-0.5">
                      Transitioning to Cobalt-free cathode structures to ensure ethical supply chains.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#3be097]/20 flex items-center justify-center text-[#3be097] shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">AI-Driven Material Synthesis</h5>
                    <p className="text-xs text-[#e0e3e5]/70 mt-0.5">
                      Machine learning algorithms predicting the next stable molecular configurations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* R&D Visual Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <span className="text-2xl font-extrabold text-[#3be097] block">450 Wh/kg</span>
                  <span className="text-[11px] text-white/60 uppercase tracking-wider">
                    Target Density
                  </span>
                </div>
                <div className="h-60 rounded-xl overflow-hidden border border-white/20">
                  <img
                    src={ASSETS.scientistLab}
                    alt="AxiWatt Materials Scientist in laboratory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-60 rounded-xl overflow-hidden border border-white/20">
                  <img
                    src={ASSETS.molecularStructure}
                    alt="Molecular polymer simulation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <span className="text-2xl font-extrabold text-[#3be097] block">&lt; 15 min</span>
                  <span className="text-[11px] text-white/60 uppercase tracking-wider">
                    Charge Cycle (0-80%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-[#e0e3e5] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8 border border-[#bbcabe]/70">
          <div className="max-w-2xl text-center md:text-left space-y-2">
            <h2 className="text-3xl font-extrabold text-[#191c1e]">Partner with the Pioneers</h2>
            <p className="text-sm text-[#3c4a40]">
              Looking for enterprise-scale BESS solutions or technical collaboration? Our engineering
              team is ready to discuss your specific infrastructure needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={() => {
                alert('Downloading AxiWatt Technical Whitepaper & Giga-Factory Audit Specifications (PDF).');
              }}
              className="px-6 py-3 bg-[#191c1e] text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-black transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Tech Specs</span>
            </button>
            <button
              onClick={onRequestQuote}
              className="px-6 py-3 bg-[#52f2a7] text-[#002111] rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#3be097] transition-all cursor-pointer active:scale-95 shadow-xs"
            >
              Speak to an Engineer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
