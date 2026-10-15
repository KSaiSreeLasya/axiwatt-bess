import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sliders, BatteryCharging, Zap, Shield, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCapacity?: number;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialCapacity = 20
}) => {
  const [capacity, setCapacity] = useState<number>(initialCapacity);
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('Renewable Energy');
  const [scope, setScope] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  // Real-time calculations based on capacity
  const units40HC = Math.ceil(capacity / 5.2);
  const totalMWh = (units40HC * 5.2).toFixed(1);
  const peakMW = (units40HC * 2.6).toFixed(1);
  const co2Offset = Math.round(capacity * 610);
  const estimatedFootprintSqFt = units40HC * 320;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName('');
    setCompanyName('');
    setEmail('');
    setScope('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191c1e]/70 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="bg-[#ffffff] rounded-2xl border border-[#bbcabe] shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto relative my-8">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#ffffff] border-b border-[#bbcabe]/50 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#52f2a7]/30 flex items-center justify-center text-[#006d44]">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#191c1e]">AxiWatt Formal RFQ & System Estimator</h3>
              <p className="text-xs text-[#3c4a40]">Engineered industrial storage sizing & preliminary commercial pricing</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6c7b70] hover:text-[#191c1e] hover:bg-[#f2f4f6] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#52f2a7] text-[#002111] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-[#006d44]" />
            </div>
            <h4 className="text-2xl font-bold text-[#191c1e]">Inquiry Successfully Dispatched</h4>
            <p className="text-sm text-[#3c4a40] max-w-md mx-auto">
              Thank you, <strong>{fullName || 'Partner'}</strong>. Your specification ticket for{' '}
              <strong>{capacity} MWh</strong> has been routed to our Lead Power Systems Engineer at{' '}
              {sector === 'Renewable Energy' ? 'North America HQ' : 'Global Operations'}. An engineering brief and preliminaries will be sent to <strong>{email || 'your email'}</strong> within 4 business hours.
            </p>
            <div className="bg-[#f2f4f6] p-4 rounded-xl max-w-md mx-auto text-left text-xs space-y-1.5 border border-[#bbcabe]/50">
              <div className="flex justify-between">
                <span className="text-[#6c7b70]">Estimated Configuration:</span>
                <span className="font-semibold text-[#191c1e]">{units40HC}x V-STRUC 40 HC ({totalMWh} MWh)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6c7b70]">Grid Power Capability:</span>
                <span className="font-semibold text-[#191c1e]">{peakMW} MW Peak Discharge</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6c7b70]">Target Timeline:</span>
                <span className="font-semibold text-[#191c1e]">Q3-Q4 Commissioning</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="bg-[#006d44] hover:bg-[#005232] text-white px-6 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-colors"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Live Sizing & Output Card */}
            <div className="bg-[#f7f9fb] border border-[#bbcabe]/60 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3c4a40] flex items-center gap-1.5">
                    <BatteryCharging className="w-4 h-4 text-[#006d44]" />
                    Target System Capacity (MWh)
                  </label>
                  <p className="text-xs text-[#6c7b70]">Scale to model utility or industrial footprint</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-[#006d44]">{capacity}</span>
                  <span className="text-sm font-semibold text-[#3c4a40]"> MWh{capacity >= 100 ? '+' : ''}</span>
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="100"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="w-full h-2.5 bg-[#e0e3e5] rounded-lg appearance-none cursor-pointer accent-[#006d44]"
              />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white p-3 rounded-lg border border-[#bbcabe]/50">
                  <span className="text-[11px] text-[#6c7b70] block">Recommended Units</span>
                  <span className="text-sm font-bold text-[#191c1e]">
                    {units40HC}x V-STRUC 40
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#bbcabe]/50">
                  <span className="text-[11px] text-[#6c7b70] block">Peak Power Rating</span>
                  <span className="text-sm font-bold text-[#006d44]">{peakMW} MW</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#bbcabe]/50">
                  <span className="text-[11px] text-[#6c7b70] block">Estimated Footprint</span>
                  <span className="text-sm font-bold text-[#191c1e]">~{estimatedFootprintSqFt} sq ft</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#bbcabe]/50">
                  <span className="text-[11px] text-[#6c7b70] block">Annual CO2 Offset</span>
                  <span className="text-sm font-bold text-[#006d44]">{co2Offset.toLocaleString()} t/yr</span>
                </div>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#3c4a40] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3c4a40] mb-1.5">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enterprise Energy Ltd"
                  className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3c4a40] mb-1.5">
                  Work Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="j.doe@enterprise.com"
                  className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3c4a40] mb-1.5">
                  Industry Sector
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                >
                  <option>Renewable Energy (Solar / Wind IPP)</option>
                  <option>Data Centers & Hyperscale</option>
                  <option>Heavy Manufacturing & Processing</option>
                  <option>Utility Transmission & Distribution</option>
                  <option>Microgrid & Remote Mining</option>
                  <option>Commercial Real Estate & EV Fleet</option>
                </select>
              </div>
            </div>

            {/* Scope / Notes */}
            <div>
              <label className="block text-xs font-semibold text-[#3c4a40] mb-1.5">
                Project Scope & Technical Requirements
              </label>
              <textarea
                rows={3}
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                placeholder="Detail interconnect voltage (e.g. 13.8kV, 34.5kV), site ambient temperature extremes, microgrid islanding needs, and desired commissioning date..."
                className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
              />
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-[#6c7b70]">
                <Shield className="w-4 h-4 text-[#006d44]" />
                <span>NDA & Enterprise Security Protected</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-medium text-[#3c4a40] hover:bg-[#f2f4f6] rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#006d44] hover:bg-[#005232] text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Calculating Spec...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Formal Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
