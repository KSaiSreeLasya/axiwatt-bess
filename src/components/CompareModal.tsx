import React from 'react';
import { X, Check, ArrowRight, Zap, Download } from 'lucide-react';
import { PRODUCTS } from '../data/content';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191c1e]/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="bg-[#ffffff] rounded-2xl border border-[#bbcabe] shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto relative my-8">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#ffffff] border-b border-[#bbcabe]/50 px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#006d44]">
              AxiWatt Architecture Matrix
            </span>
            <h3 className="text-xl font-bold text-[#191c1e]">BESS Model Comparison</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6c7b70] hover:text-[#191c1e] hover:bg-[#f2f4f6] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[#bbcabe]/50">
                <th className="p-3 text-xs font-bold uppercase tracking-wider text-[#6c7b70] w-1/5">
                  Specification
                </th>
                {PRODUCTS.slice(0, 4).map((p) => (
                  <th key={p.id} className="p-3 text-left w-1/5">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#f2f4f6] text-[#006d44] uppercase tracking-wider">
                      {p.category.toUpperCase()}
                    </span>
                    <h4 className="font-bold text-sm text-[#191c1e] mt-1">{p.name}</h4>
                    <p className="text-xs text-[#006d44] font-semibold">{p.capacity}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#bbcabe]/30 text-xs">
              <tr className="hover:bg-[#f7f9fb]">
                <td className="p-3 font-semibold text-[#191c1e]">Power Output</td>
                {PRODUCTS.slice(0, 4).map((p) => (
                  <td key={p.id} className="p-3 text-[#3c4a40] font-medium">{p.powerOutput}</td>
                ))}
              </tr>
              <tr className="hover:bg-[#f7f9fb]">
                <td className="p-3 font-semibold text-[#191c1e]">Round-Trip Efficiency</td>
                {PRODUCTS.slice(0, 4).map((p) => (
                  <td key={p.id} className="p-3 text-[#006d44] font-bold">{p.efficiency}</td>
                ))}
              </tr>
              <tr className="hover:bg-[#f7f9fb]">
                <td className="p-3 font-semibold text-[#191c1e]">Cycle Life & DoD</td>
                {PRODUCTS.slice(0, 4).map((p) => (
                  <td key={p.id} className="p-3 text-[#3c4a40]">{p.cycleLife}</td>
                ))}
              </tr>
              <tr className="hover:bg-[#f7f9fb]">
                <td className="p-3 font-semibold text-[#191c1e]">DC Voltage Range</td>
                {PRODUCTS.slice(0, 4).map((p) => (
                  <td key={p.id} className="p-3 text-[#3c4a40]">{p.voltageRange}</td>
                ))}
              </tr>
              <tr className="hover:bg-[#f7f9fb]">
                <td className="p-3 font-semibold text-[#191c1e]">Cooling System</td>
                {PRODUCTS.slice(0, 4).map((p) => (
                  <td key={p.id} className="p-3 text-[#3c4a40]">{p.coolingSystem}</td>
                ))}
              </tr>
              <tr className="hover:bg-[#f7f9fb]">
                <td className="p-3 font-semibold text-[#191c1e]">Dimensions / Enclosure</td>
                {PRODUCTS.slice(0, 4).map((p) => (
                  <td key={p.id} className="p-3 text-[#3c4a40]">{p.dimensions}</td>
                ))}
              </tr>
              <tr className="hover:bg-[#f7f9fb]">
                <td className="p-3 font-semibold text-[#191c1e]">Primary Chemistry</td>
                <td className="p-3 text-[#006d44] font-semibold">Tier-1 LiFePO4</td>
                <td className="p-3 text-[#006d44] font-semibold">Tier-1 LiFePO4</td>
                <td className="p-3 text-[#006d44] font-semibold">Prismatic LFP</td>
                <td className="p-3 text-[#006d44] font-semibold">High-Rate LFP</td>
              </tr>
              <tr className="hover:bg-[#f7f9fb]">
                <td className="p-3 font-semibold text-[#191c1e]">Certifications</td>
                {PRODUCTS.slice(0, 4).map((p) => (
                  <td key={p.id} className="p-3 text-[#6c7b70]">
                    {p.certifications?.join(', ')}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-[#f2f4f6] border-t border-[#bbcabe]/40 p-4 px-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#3c4a40]">
            Custom hybrid topologies with synchronous condensers available upon engineering review.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="bg-[#006d44] hover:bg-[#005232] text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Build Project Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
