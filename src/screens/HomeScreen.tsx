import React, { useEffect, useRef } from 'react';
import { ASSETS, PRODUCTS, WHY_AXIWATT } from '../data/content';
import { TabType } from '../types';
import {
  ArrowRight,
  CheckCircle,
  Car,
  Radio,
  Layers,
  BatteryCharging,
  Zap,
  Activity,
  ShieldCheck,
  Award,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface HomeScreenProps {
  onSelectTab: (tab: TabType) => void;
  onRequestQuote: () => void;
  onOpenCompare: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectTab,
  onRequestQuote,
  onOpenCompare
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Live micro-graph for System Health in Hero
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let offset = 0;
    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = '#006d44';
      ctx.lineWidth = 2.5;

      const width = canvas.width;
      const height = canvas.height;
      const mid = height / 2;

      for (let x = 0; x < width; x++) {
        const y = mid + Math.sin((x + offset) * 0.12) * (height * 0.28);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      offset += 1.8;
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white border-b border-[#bbcabe]/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-16 lg:py-24">
          <div className="z-10 space-y-6">
            <div className="inline-flex items-center bg-[#dae2fd] text-[#0b1c30] px-4 py-1.5 rounded-full">
              <span className="text-xs font-bold uppercase tracking-widest">
                Powering Progress. Energizing the Future.
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#191c1e] leading-[1.12]">
              Advanced Battery Solutions for a <br />
              <span className="text-[#006d44]">Sustainable World</span>
            </h1>

            <p className="text-base sm:text-lg text-[#3c4a40] max-w-xl leading-relaxed">
              At AxiWatt, we are focused on delivering innovative battery and energy storage
              solutions for electric mobility, telecommunications, and modern power infrastructure.
              Our approach combines reliable performance, efficient energy management, and
              sustainability to meet the evolving needs of industries.
            </p>

            <div className="p-4 bg-[#f2f4f6] rounded-xl border border-[#bbcabe]/50 text-xs font-semibold text-[#006d44] max-w-xl">
              Powering mobility. Strengthening connectivity. Enabling a cleaner energy future.
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => {
                  onSelectTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#006d44] hover:bg-[#005232] text-white px-7 py-3.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  onSelectTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-[#6c7b70] hover:bg-[#f2f4f6] text-[#191c1e] px-7 py-3.5 rounded-lg text-sm font-semibold transition-all cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="relative h-[420px] lg:h-[520px] w-full group">
            <div className="absolute inset-0 bg-[#52f2a7]/20 rounded-2xl -rotate-2 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden border border-[#bbcabe]/60 shadow-xl">
              <img
                src={ASSETS.homeHero}
                alt="AxiWatt state-of-the-art battery storage facility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Telemetry Microcard */}
              <div className="absolute bottom-5 right-5 glass-card p-3.5 rounded-xl border border-white/80 shadow-md flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#6c7b70]">
                    System Health
                  </span>
                  <span className="text-xs font-extrabold text-[#006d44] tracking-wide">
                    OPTIMIZED
                  </span>
                </div>
                <div className="w-16 h-8 bg-[#f2f4f6] rounded border border-[#bbcabe]/40 p-0.5">
                  <canvas ref={canvasRef} width={64} height={32} className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Solutions Section */}
      <section className="py-20 bg-white border-b border-[#bbcabe]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
              Comprehensive Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191c1e] tracking-tight">
              Our Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#3c4a40]">
              Engineered battery and energy storage systems delivering consistent power, safety, and
              long-term operating value across global applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Automotive Batteries */}
            <div
              onClick={() => onSelectTab('products')}
              className="p-7 bg-[#f7f9fb] border border-[#bbcabe]/60 rounded-2xl hover:border-[#006d44] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#52f2a7]/30 text-[#006d44] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#191c1e]">Automotive Batteries</h3>
                <p className="text-xs text-[#3c4a40] leading-relaxed">
                  Supporting the evolution of electric mobility with battery solutions designed for
                  performance, reliability, and efficient energy utilization.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-xs font-bold text-[#006d44] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                  Explore Automotive →
                </span>
              </div>
            </div>

            {/* Telecom Batteries */}
            <div
              onClick={() => onSelectTab('products')}
              className="p-7 bg-[#f7f9fb] border border-[#bbcabe]/60 rounded-2xl hover:border-[#006d44] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#52f2a7]/30 text-[#006d44] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Radio className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#191c1e]">Telecom Batteries</h3>
                <p className="text-xs text-[#3c4a40] leading-relaxed">
                  Reliable backup power solutions designed to support telecom infrastructure,
                  network continuity, and uninterrupted connectivity.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-xs font-bold text-[#006d44] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                  Explore Telecom →
                </span>
              </div>
            </div>

            {/* Battery Energy Storage Systems (BESS) */}
            <div
              onClick={() => onSelectTab('products')}
              className="p-7 bg-[#f7f9fb] border border-[#bbcabe]/60 rounded-2xl hover:border-[#006d44] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#52f2a7]/30 text-[#006d44] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#191c1e]">
                  Battery Energy Storage Systems
                </h3>
                <p className="text-xs text-[#3c4a40] leading-relaxed">
                  Flexible energy storage solutions designed to help manage power demand, support
                  renewable energy integration, and improve energy utilization.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-xs font-bold text-[#006d44] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                  Explore BESS →
                </span>
              </div>
            </div>

            {/* Lead Replacement Solutions */}
            <div
              onClick={() => onSelectTab('products')}
              className="p-7 bg-[#f7f9fb] border border-[#bbcabe]/60 rounded-2xl hover:border-[#006d44] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#52f2a7]/30 text-[#006d44] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#191c1e]">Lead Replacement Solutions</h3>
                <p className="text-xs text-[#3c4a40] leading-relaxed">
                  Modern battery alternatives for suitable applications, designed to support
                  dependable performance and reduced maintenance requirements.
                </p>
              </div>
              <div className="pt-6">
                <span className="text-xs font-bold text-[#006d44] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                  Explore Drop-In →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why AxiWatt? Section */}
      <section className="py-20 bg-[#f2f4f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
              Our Competitive Edge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191c1e] tracking-tight">
              Why AxiWatt?
            </h2>
            <p className="text-sm text-[#3c4a40]">
              Built upon industrial precision, technical discipline, and uncompromising accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_AXIWATT.map((item) => (
              <div
                key={item.id}
                className="bg-white p-7 rounded-2xl border border-[#bbcabe]/60 shadow-2xs hover:shadow-md transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#006d44] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#191c1e]">{item.title}</h3>
                  <span className="text-[11px] font-semibold text-[#006d44] block mt-0.5">
                    {item.subtitle}
                  </span>
                </div>
                <p className="text-xs text-[#3c4a40] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Building a Smarter Energy Future Section */}
      <section className="py-20 bg-white border-t border-[#bbcabe]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#006d44] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="bg-[#52f2a7] text-[#002111] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                Transformation in Motion
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Building a Smarter Energy Future
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                As industries transition toward electrification and renewable energy, AxiWatt aims to
                support this transformation with battery technologies that enable reliable,
                efficient, and sustainable power.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button
                  onClick={onRequestQuote}
                  className="bg-white hover:bg-[#f2f4f6] text-[#006d44] px-8 py-3.5 rounded-lg text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Let's power the future together.
                </button>
                <button
                  onClick={() => {
                    onSelectTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="border border-white/80 hover:bg-white/10 text-white px-7 py-3.5 rounded-lg text-sm font-semibold transition-all cursor-pointer"
                >
                  Learn About AxiWatt
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
