import React, { useState } from 'react';
import { ASSETS, PRODUCTS } from '../data/content';
import { ProductSpec, TabType } from '../types';
import { downloadProductDatasheet } from '../utils/downloadPdf';
import {
  ArrowRight,
  CheckCircle,
  Download,
  BarChart2,
  Sliders,
  ExternalLink,
  Shield,
  Zap,
  Car,
  Radio,
  Layers,
  BatteryCharging,
  Gauge
} from 'lucide-react';

interface ProductsScreenProps {
  onSelectTab: (tab: TabType) => void;
  onRequestQuote: () => void;
  onOpenCompare: () => void;
  onOpenDatasheet: (product: ProductSpec) => void;
}

export const ProductsScreen: React.FC<ProductsScreenProps> = ({
  onSelectTab,
  onRequestQuote,
  onOpenCompare,
  onOpenDatasheet
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory || p.id === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 px-6 overflow-hidden bg-white border-b border-[#bbcabe]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="inline-block bg-[#52f2a7] text-[#002111] px-3.5 py-1 rounded text-xs font-bold uppercase tracking-wider">
              AxiWatt Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191c1e] tracking-tight leading-tight">
              Products & Solutions
            </h1>
            <p className="text-base sm:text-lg text-[#3c4a40] max-w-xl leading-relaxed">
              Tailored battery and energy storage systems engineered for electric mobility, critical
              telecom towers, utility-scale BESS, and modern lead-acid replacements.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('solutions-catalog');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#006d44] hover:bg-[#005232] text-white px-7 py-3 rounded-lg text-sm font-bold flex items-center gap-2 shadow-xs cursor-pointer transition-all"
              >
                <span>Browse Product Lines</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenCompare}
                className="border border-[#6c7b70] hover:bg-[#f2f4f6] text-[#191c1e] px-7 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer"
              >
                Compare Specifications
              </button>
            </div>
          </div>

          <div className="relative h-[380px] lg:h-[440px] rounded-2xl overflow-hidden shadow-xl border border-[#bbcabe]/60">
            <img
              src={ASSETS.productsHero}
              alt="AxiWatt Battery energy storage systems"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4 Core Solutions Catalog */}
      <section id="solutions-catalog" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
              Hardware Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191c1e] tracking-tight mt-1">
              Core Battery Solutions
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCompare}
              className="bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#006d44] border border-[#bbcabe]/60 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <BarChart2 className="w-4 h-4" />
              <span>Full Comparison Matrix</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => {
            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-[#bbcabe]/60 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 relative overflow-hidden bg-[#e0e3e5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = ASSETS.heavyManufacturing;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute top-4 left-4 ${product.badgeColor || 'bg-[#006d44] text-white'} px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-xs`}
                    >
                      {product.badge || 'PRO GRADE'}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-[#191c1e]">{product.name}</h3>
                        <p className="text-sm font-semibold text-[#006d44]">{product.subtitle}</p>
                      </div>
                      <span className="text-[#191c1e] font-extrabold text-sm bg-[#f2f4f6] px-3 py-1 rounded-lg border border-[#bbcabe]/40">
                        {product.capacity}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#3c4a40] leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Applications Block */}
                    <div className="mb-6 p-4 bg-[#f7f9fb] rounded-xl border border-[#bbcabe]/40">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#6c7b70] block mb-2">
                        Applications
                      </span>
                      {product.id === 'automotive-battery' && (
                        <p className="text-xs font-medium text-[#191c1e]">
                          Electric vehicles, mobility platforms, and automotive energy systems.
                        </p>
                      )}
                      {product.id === 'telecom-battery' && (
                        <p className="text-xs font-medium text-[#191c1e]">
                          Telecom towers, network equipment, and backup power systems.
                        </p>
                      )}
                      {product.id === 'bess-utility' && (
                        <p className="text-xs font-medium text-[#191c1e]">
                          Commercial facilities, industrial sites, and renewable energy projects.
                        </p>
                      )}
                      {product.id === 'lead-replacement' && (
                        <p className="text-xs font-medium text-[#191c1e]">
                          Backup power, industrial equipment, and selected energy storage systems.
                        </p>
                      )}
                    </div>

                    <ul className="space-y-2 mb-6">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#3c4a40]">
                          <CheckCircle className="w-4 h-4 text-[#006d44] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-7 pt-0 flex gap-3">
                  <button
                    onClick={() => {
                      downloadProductDatasheet(product);
                      onOpenDatasheet(product);
                    }}
                    className="flex-1 py-3 border border-[#6c7b70] rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#006d44] hover:text-white hover:border-[#006d44] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Datasheet</span>
                  </button>
                  <button
                    onClick={onRequestQuote}
                    className="flex-1 py-3 bg-[#52f2a7] hover:bg-[#3be097] text-[#002111] rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technical Specifications Benchmark */}
      <section className="py-16 bg-[#f2f4f6] px-6 border-y border-[#bbcabe]/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
              Engineering Specifications
            </h2>
            <p className="text-sm text-[#3c4a40] mt-1">
              Performance benchmarks across AxiWatt solution categories
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#bbcabe]/70 bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="bg-[#e6e8ea]">
                <tr>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#3c4a40] border-b border-[#bbcabe]">
                    Solution
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#006d44] border-b border-[#bbcabe]">
                    Nominal Capacity
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#006d44] border-b border-[#bbcabe]">
                    Power Output
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#006d44] border-b border-[#bbcabe]">
                    Cycle Life
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#006d44] border-b border-[#bbcabe]">
                    Efficiency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#bbcabe]/40 text-xs">
                {PRODUCTS.map((p) => (
                  <tr key={p.id} className="hover:bg-[#f7f9fb] transition-colors">
                    <td className="p-4 font-bold text-[#191c1e]">{p.name}</td>
                    <td className="p-4 text-[#3c4a40] font-semibold">{p.capacity}</td>
                    <td className="p-4 text-[#3c4a40]">{p.powerOutput}</td>
                    <td className="p-4 text-[#3c4a40]">{p.cycleLife}</td>
                    <td className="p-4 text-[#006d44] font-bold">{p.efficiency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-[#e6e8ea] rounded-3xl p-8 sm:p-12 text-center border border-[#bbcabe]/70 shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-[#191c1e]">
            Need a Tailored Battery Configuration?
          </h2>
          <p className="text-sm text-[#3c4a40] max-w-lg mx-auto">
            Our power systems engineering team works directly with OEMs, developers, and operators to
            configure solutions for exact duty cycles and site conditions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={onRequestQuote}
              className="bg-[#006d44] hover:bg-[#005232] text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider shadow-sm cursor-pointer transition-all active:scale-95"
            >
              Contact Engineering
            </button>
            <button
              onClick={() => onSelectTab('contact')}
              className="bg-white hover:bg-[#f2f4f6] text-[#006d44] border border-[#006d44] px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider cursor-pointer transition-all"
            >
              Submit Project Specs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
