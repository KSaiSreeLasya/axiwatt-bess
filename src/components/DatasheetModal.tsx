import React, { useState } from 'react';
import { X, Download, Check, FileText, Printer, ShieldCheck } from 'lucide-react';
import { ProductSpec } from '../types';
import { downloadProductDatasheet } from '../utils/downloadPdf';

interface DatasheetModalProps {
  product: ProductSpec | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DatasheetModal: React.FC<DatasheetModalProps> = ({
  product,
  isOpen,
  onClose
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen || !product) return null;

  const handleDownload = () => {
    downloadProductDatasheet(product);
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191c1e]/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="bg-[#ffffff] rounded-2xl border border-[#bbcabe] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative my-8">
        {/* Header */}
        <div className="bg-[#f7f9fb] border-b border-[#bbcabe]/50 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#006d44] text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#006d44]">
                Technical Datasheet · Rev 2.4 (Official)
              </span>
              <h3 className="text-lg font-bold text-[#191c1e]">{product.name} Specification</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6c7b70] hover:text-[#191c1e] hover:bg-[#e0e3e5] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center bg-[#f2f4f6] p-4 rounded-xl border border-[#bbcabe]/40">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000';
              }}
              className="w-full sm:w-44 h-28 object-cover rounded-lg border border-[#bbcabe]/60"
            />
            <div className="space-y-1 text-sm">
              <span className="text-xs font-semibold text-[#006d44] uppercase tracking-wider">
                {product.subtitle}
              </span>
              <h4 className="text-xl font-bold text-[#191c1e]">{product.name}</h4>
              <p className="text-xs text-[#3c4a40]">{product.description}</p>
            </div>
          </div>

          {/* Key Electrical & Mechanical Ratings */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-[#f7f9fb] border border-[#bbcabe]/40 rounded-lg">
              <span className="text-[#6c7b70] block font-medium">Nominal Energy</span>
              <span className="text-sm font-bold text-[#006d44]">{product.capacity}</span>
            </div>
            <div className="p-3 bg-[#f7f9fb] border border-[#bbcabe]/40 rounded-lg">
              <span className="text-[#6c7b70] block font-medium">Continuous Power</span>
              <span className="text-sm font-bold text-[#191c1e]">{product.powerOutput || 'Adaptive'}</span>
            </div>
            <div className="p-3 bg-[#f7f9fb] border border-[#bbcabe]/40 rounded-lg">
              <span className="text-[#6c7b70] block font-medium">Round-Trip Efficiency</span>
              <span className="text-sm font-bold text-[#006d44]">{product.efficiency || '94%'}</span>
            </div>
            <div className="p-3 bg-[#f7f9fb] border border-[#bbcabe]/40 rounded-lg">
              <span className="text-[#6c7b70] block font-medium">Operational Voltage</span>
              <span className="text-sm font-bold text-[#191c1e]">{product.voltageRange || '1000V DC'}</span>
            </div>
            <div className="p-3 bg-[#f7f9fb] border border-[#bbcabe]/40 rounded-lg">
              <span className="text-[#6c7b70] block font-medium">Design Life</span>
              <span className="text-sm font-bold text-[#191c1e]">{product.cycleLife || '20 Years'}</span>
            </div>
            <div className="p-3 bg-[#f7f9fb] border border-[#bbcabe]/40 rounded-lg">
              <span className="text-[#6c7b70] block font-medium">Cooling Mode</span>
              <span className="text-sm font-bold text-[#191c1e]">{product.coolingSystem || 'Liquid'}</span>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#191c1e]">
              Engineering Specifications & Features
            </h5>
            <ul className="space-y-1.5 text-xs text-[#3c4a40]">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#006d44] mt-0.5 font-bold">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#e6e8ea]/50 p-3 rounded-lg text-[11px] text-[#565e74] flex items-center justify-between">
            <span>Certifications: {product.certifications?.join(' · ') || 'UL 9540, CE, RoHS'}</span>
            <span className="font-semibold text-[#006d44]">ISO 9001 Compliant</span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f2f4f6] border-t border-[#bbcabe]/40 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-[#6c7b70]">Document: AX-DS-{product.id.toUpperCase()}-2024.pdf</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="bg-[#006d44] hover:bg-[#005232] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors shadow-xs"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-[#52f2a7]" />
                  <span>Datasheet Downloaded & Opened</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Official PDF / Print</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
