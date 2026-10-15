import React, { useState } from 'react';
import { ASSETS, ESG_REPORTS } from '../data/content';
import { TabType, EsgReport } from '../types';
import {
  Download,
  CheckCircle,
  Leaf,
  Recycle,
  ShieldCheck,
  Users,
  Factory,
  Shield,
  History,
  ArrowRight,
  FileText,
  BatteryCharging,
  Zap,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface SustainabilityScreenProps {
  onSelectTab: (tab: TabType) => void;
  onRequestQuote: () => void;
}

export const SustainabilityScreen: React.FC<SustainabilityScreenProps> = ({
  onSelectTab,
  onRequestQuote
}) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [selectedArchiveYear, setSelectedArchiveYear] = useState('2024');
  const [showFrameworkModal, setShowFrameworkModal] = useState(false);

  const handleDownloadReport = (rep: EsgReport) => {
    setDownloadingId(rep.id);
    setTimeout(() => {
      setDownloadingId(null);
      alert(`Downloaded "${rep.title}" (${rep.size}) conforming to GRI Standard 2024.`);
    }, 1000);
  };

  const sustainabilityPillars = [
    {
      id: 'efficiency',
      title: 'Energy Efficiency',
      desc: 'Supporting solutions designed to make effective use of stored energy.',
      detail: 'Minimizing conversion losses through state-of-the-art power electronics, low internal resistance cells, and optimized thermal loop management.',
      icon: 'electric_bolt'
    },
    {
      id: 'electrification',
      title: 'Electrification',
      desc: 'Contributing to the development of electric mobility and cleaner energy systems.',
      detail: 'Accelerating the displacement of diesel generators, fossil-fuel transportation, and peaking gas plants with agile battery solutions.',
      icon: 'ev_station'
    },
    {
      id: 'lifecycle',
      title: 'Responsible Battery Lifecycle',
      desc: 'Encouraging appropriate battery handling, collection, reuse, and recycling through suitable channels.',
      detail: 'Designing modular packs for rapid disassembly, second-life stationary deployment, and certified hydrometallurgical material recovery.',
      icon: 'autorenew'
    },
    {
      id: 'resources',
      title: 'Resource Responsibility',
      desc: 'Recognizing the importance of responsible material use and waste reduction.',
      detail: 'Eliminating cobalt and conflict minerals, optimizing cathode active material yield, and mandating transparent supply chain audits.',
      icon: 'compost'
    },
    {
      id: 'value',
      title: 'Long-Term Value',
      desc: 'Promoting the selection and use of battery solutions appropriate to their operating requirements.',
      detail: 'Tailoring battery chemistry to specific duty cycles to maximize operational lifespan and deliver lowest total cost of ownership.',
      icon: 'savings'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-[#bbcabe]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-3.5 py-1 bg-[#52f2a7]/20 text-[#006d44] font-bold text-xs rounded-full uppercase tracking-wider">
              Sustainability
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#191c1e] tracking-tight leading-tight">
              Energizing a <br />
              <span className="text-[#006d44]">Sustainable Future</span>
            </h1>
            <p className="text-base sm:text-lg text-[#3c4a40] leading-relaxed">
              At AxiWatt, we believe energy innovation should support a more sustainable future.
              Battery technology plays an important role in electrification, renewable energy
              utilization, and modern energy management.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleDownloadReport(ESG_REPORTS[0])}
                className="bg-[#006d44] hover:bg-[#005232] text-white px-7 py-3.5 rounded-lg text-sm font-bold flex items-center gap-2 cursor-pointer shadow-xs active:scale-95 transition-all"
              >
                <span>Download Impact Report</span>
                <Download className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowFrameworkModal(true)}
                className="bg-transparent border border-[#6c7b70] hover:bg-[#f2f4f6] text-[#191c1e] px-7 py-3.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
              >
                View ESG Framework
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#eceef0] h-[400px] flex items-center shadow-md border border-[#bbcabe]/60">
          <img
            src={ASSETS.sustainabilityHero}
            alt="Industrial clean energy storage facility integrated into landscape"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Our 5 Sustainability Focus Areas */}
      <section className="py-20 bg-[#f7f9fb] border-y border-[#bbcabe]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191c1e] tracking-tight">
              Our Sustainability Focus
            </h2>
            <p className="text-sm text-[#3c4a40]">
              Strategic priorities driving responsible battery innovation and energy conservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sustainabilityPillars.map((item) => (
              <div
                key={item.id}
                className="bg-white p-7 rounded-2xl border border-[#bbcabe]/60 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#52f2a7]/30 text-[#006d44] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1e]">{item.title}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#006d44] leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="text-xs text-[#3c4a40] leading-relaxed">{item.detail}</p>
                </div>
                <div className="pt-4 border-t border-[#bbcabe]/40 text-[11px] text-[#6c7b70] flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#006d44]" />
                  <span>Integrated into AxiWatt standard design</span>
                </div>
              </div>
            ))}

            {/* Net Zero Pledge Card */}
            <div className="bg-[#006d44] text-white p-7 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-[#52f2a7] flex items-center justify-center">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">100% Closed-Loop Vision</h3>
                <p className="text-xs text-white/90 leading-relaxed">
                  We are engineering end-to-end circularity where lithium, iron, and phosphate are
                  recovered and re-introduced into the manufacturing pipeline, reducing cell waste by
                  95%.
                </p>
              </div>
              <button
                onClick={() => setShowFrameworkModal(true)}
                className="w-full py-3 bg-[#52f2a7] hover:bg-[#3be097] text-[#002111] rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Explore Circular Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy: Closed Loop Recycling */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#52f2a7] text-[#002111] text-xs font-bold uppercase tracking-wider">
              <Recycle className="w-3.5 h-3.5" />
              <span>Closed Loop Lifecycle</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#191c1e] tracking-tight">
              Beyond Lifecycle Management
            </h2>
            <p className="text-sm text-[#3c4a40] leading-relaxed">
              We've engineered AxiWatt solutions to be fully modular. At end-of-life, components are
              harvested, not discarded. Our proprietary closed-loop process ensures that critical
              materials are recovered through clean hydrometallurgical recycling.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#006d44] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#191c1e]">Direct Re-manufacturing</h4>
                  <p className="text-xs text-[#6c7b70] mt-0.5">
                    Components designed for disassembly and rapid deployment in second-life microgrids.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#006d44] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#191c1e]">Material Recovery</h4>
                  <p className="text-xs text-[#6c7b70] mt-0.5">
                    98% material recovery rate with zero cobalt and conflict-free supply chains.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-md border border-[#bbcabe]/60 bg-[#e0e3e5] h-[380px]">
            <img
              src={ASSETS.batteryRecycling}
              alt="High-tech robotic arm disassembling battery module for recycling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Leadership & Governance (ESG Reports Section) */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white border border-[#bbcabe]/60 rounded-2xl p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold text-[#191c1e] tracking-tight">
                Leadership & Governance
              </h2>
              <p className="text-sm text-[#3c4a40] mt-1 leading-relaxed">
                Our ESG performance is audited annually by independent third-party agencies to ensure
                compliance with Global Reporting Initiative (GRI) standards.
              </p>
            </div>
            <button
              onClick={() => {
                const years = ['2024', '2023', '2022', '2021'];
                const next = years[(years.indexOf(selectedArchiveYear) + 1) % years.length];
                setSelectedArchiveYear(next);
              }}
              className="bg-[#191c1e] text-white hover:bg-black px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
            >
              <History className="w-4 h-4" />
              <span>Archive ({selectedArchiveYear})</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ESG_REPORTS.map((rep) => (
              <div
                key={rep.id}
                className="group p-6 border border-[#bbcabe]/60 rounded-xl hover:border-[#006d44] hover:shadow-md transition-all duration-300 flex flex-col justify-between bg-[#f7f9fb]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <FileText className="w-8 h-8 text-[#006d44]" />
                    <span className="text-[11px] font-semibold text-[#565e74] bg-[#e0e3e5] px-2.5 py-0.5 rounded-full">
                      {rep.size}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#191c1e] mb-2">{rep.title}</h4>
                  <p className="text-xs text-[#3c4a40] leading-relaxed mb-6">{rep.description}</p>
                </div>
                <button
                  onClick={() => handleDownloadReport(rep)}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#006d44] group-hover:gap-2.5 transition-all cursor-pointer"
                >
                  {downloadingId === rep.id ? (
                    <span>Downloading...</span>
                  ) : (
                    <>
                      <span>Download</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Modal */}
      {showFrameworkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191c1e]/75 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 border border-[#bbcabe] shadow-2xl">
            <div className="flex justify-between items-center border-b border-[#bbcabe]/40 pb-3">
              <h3 className="font-bold text-lg text-[#191c1e]">AxiWatt Sustainability & ESG Policy</h3>
              <button
                onClick={() => setShowFrameworkModal(false)}
                className="text-gray-400 hover:text-black cursor-pointer font-bold"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-[#3c4a40] leading-relaxed">
              Our 2024-2030 roadmap targets absolute scope 1, 2, and 3 emissions neutrality with
              third-party carbon auditing certified by DNV GL. All battery cells adhere to the EU Battery
              Passport regulations with complete life-cycle transparency.
            </p>
            <div className="p-3 bg-[#f2f4f6] rounded-xl text-xs space-y-1">
              <div>✓ 100% On-site Renewable Solar & Geothermal</div>
              <div>✓ Closed-Loop Hydrometallurgical Recycling</div>
              <div>✓ Conflict-Free & Fair-Labor Mine Audits</div>
            </div>
            <button
              onClick={() => setShowFrameworkModal(false)}
              className="w-full py-2.5 bg-[#006d44] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#005232] cursor-pointer"
            >
              Close Framework Overview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
