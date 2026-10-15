import React, { useState } from 'react';
import { ASSETS } from '../data/content';
import { TabType } from '../types';
import {
  Send,
  CheckCircle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Building,
  Activity
} from 'lucide-react';

interface ContactScreenProps {
  onSelectTab: (tab: TabType) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onSelectTab }) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [application, setApplication] = useState('Electric Mobility');
  const [capacity, setCapacity] = useState('50 kWh - 500 kWh');
  const [conditions, setConditions] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const officialEmail = 'contact@axiwatt.com';
  const officialPhone = '+91 95530 29624';
  const officialAddress =
    'Plot no.102, 103 Sri Krishna Vihar, Temple Lane, Mythri Nagar Phase-2, Serilingampally, Miyapur Sub Post Office, Hyderabad, Rangareddy, Telangana, 500049';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFullName('');
        setCompanyName('');
        setEmail('');
        setPhone('');
        setConditions('');
        setProjectDetails('');
      }, 6000);
    }, 1200);
  };

  const handleCopy = (text: string, type: 'email' | 'phone' | 'address') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-white border-b border-[#bbcabe]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-3.5 py-1 bg-[#52f2a7]/20 text-[#006d44] font-bold text-xs rounded-full uppercase tracking-wider">
              Let's Connect
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#191c1e] tracking-tight leading-tight">
              Find the Right Energy Solution <br />
              <span className="text-[#006d44]">for Your Business</span>
            </h1>
            <p className="text-base sm:text-lg text-[#3c4a40] leading-relaxed">
              Looking for battery solutions for electric mobility, telecom backup power, or energy
              storage? Connect with AxiWatt to discuss your application, technical requirements, and
              business needs.
            </p>
            <div className="p-4 bg-[#f2f4f6] rounded-xl border border-[#bbcabe]/50 text-xs sm:text-sm text-[#006d44] font-medium leading-relaxed">
              Our team welcomes enquiries from businesses, project developers, technology partners,
              and organizations seeking battery and energy storage solutions.
            </div>
          </div>
        </div>
      </section>

      {/* Main Section: Contact Info + Send Us an Enquiry */}
      <section className="py-20 bg-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Official Contact Info Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#bbcabe]/60 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
                    Official Contact Information
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#191c1e] mt-1">Get in Touch</h2>
                  <p className="text-xs text-[#3c4a40] mt-1">
                    Connect directly with our corporate headquarters and technical sales team.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Email Box */}
                  <div className="p-4 bg-[#f7f9fb] rounded-2xl border border-[#bbcabe]/50 flex items-start justify-between gap-3 group hover:border-[#006d44] transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#52f2a7]/30 text-[#006d44] flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#6c7b70]">
                          Official Email
                        </span>
                        <a
                          href={`mailto:${officialEmail}`}
                          className="text-sm font-bold text-[#191c1e] hover:text-[#006d44] block transition-colors"
                        >
                          {officialEmail}
                        </a>
                        <span className="text-[11px] text-[#6c7b70]">Direct corporate inquiries</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(officialEmail, 'email')}
                      className="p-2 text-[#6c7b70] hover:text-[#006d44] hover:bg-white rounded-lg transition-colors cursor-pointer shrink-0"
                      title="Copy email address"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-[#006d44]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Phone Box */}
                  <div className="p-4 bg-[#f7f9fb] rounded-2xl border border-[#bbcabe]/50 flex items-start justify-between gap-3 group hover:border-[#006d44] transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#52f2a7]/30 text-[#006d44] flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#6c7b70]">
                          Phone Number
                        </span>
                        <a
                          href="tel:+919553029624"
                          className="text-sm font-bold text-[#191c1e] hover:text-[#006d44] block transition-colors"
                        >
                          {officialPhone}
                        </a>
                        <span className="text-[11px] text-[#6c7b70]">Direct customer & sales support</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(officialPhone, 'phone')}
                      className="p-2 text-[#6c7b70] hover:text-[#006d44] hover:bg-white rounded-lg transition-colors cursor-pointer shrink-0"
                      title="Copy phone number"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 text-[#006d44]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Address Box */}
                  <div className="p-4 bg-[#f7f9fb] rounded-2xl border border-[#bbcabe]/50 flex items-start justify-between gap-3 group hover:border-[#006d44] transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#52f2a7]/30 text-[#006d44] flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#6c7b70]">
                          Registered Office Address
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-[#191c1e] leading-relaxed mt-0.5">
                          Plot no.102, 103 Sri Krishna Vihar, Temple Lane, Mythri Nagar Phase-2,
                          Serilingampally, Miyapur Sub Post Office, Hyderabad, Rangareddy, Telangana,
                          500049
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(officialAddress, 'address')}
                      className="p-2 text-[#6c7b70] hover:text-[#006d44] hover:bg-white rounded-lg transition-colors cursor-pointer shrink-0"
                      title="Copy complete address"
                    >
                      {copiedAddress ? (
                        <Check className="w-4 h-4 text-[#006d44]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs font-bold text-[#006d44] border-t border-[#bbcabe]/40">
                  AxiWatt — Powering Progress. Energizing the Future.
                </div>
              </div>

              {/* Technical Documentation Helper Card */}
              <div className="bg-[#c8d8f2]/30 p-6 rounded-3xl border border-[#c8d8f2] shadow-2xs space-y-2.5">
                <h4 className="text-sm font-bold text-[#4e5e74] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006d44]">engineering</span>
                  <span>Looking for Technical Datasheets?</span>
                </h4>
                <p className="text-xs text-[#4e5e74]/90 leading-relaxed">
                  Browse our complete product catalog for electrical specifications and engineering
                  benchmarks.
                </p>
                <button
                  onClick={() => onSelectTab('products')}
                  className="w-full py-2.5 bg-white text-[#191c1e] hover:text-[#006d44] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-[#c8d8f2] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Products & Solutions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Send Us an Enquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-[#bbcabe]/60 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#006d44]">
                  Project Sizing & Discussion
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e] mt-1">
                  Send Us an Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-[#3c4a40] mt-1 leading-relaxed">
                  Tell us about your project, required battery capacity, application, and expected
                  operating conditions so that the appropriate solution can be discussed.
                </p>
              </div>

              {isSuccess ? (
                <div className="p-8 text-center bg-[#f2f4f6] rounded-2xl border border-[#006d44]/30 space-y-4 animate-fadeIn">
                  <CheckCircle className="w-14 h-14 text-[#006d44] mx-auto" />
                  <h3 className="text-2xl font-bold text-[#191c1e]">Enquiry Received</h3>
                  <p className="text-xs text-[#3c4a40] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{fullName || 'Partner'}</strong>. Your inquiry regarding{' '}
                    <strong>{application}</strong> ({capacity}) has been assigned to our Application
                    Engineering team. We will review your operating parameters and contact you
                    promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3c4a40]">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3c4a40]">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Enterprise Systems Ltd"
                        className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3c4a40]">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="j.doe@enterprise.com"
                        className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3c4a40]">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 95530 29624"
                        className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3c4a40]">Target Application *</label>
                      <select
                        value={application}
                        onChange={(e) => setApplication(e.target.value)}
                        className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                      >
                        <option>Automotive / Electric Mobility</option>
                        <option>Telecom Tower & Network Backup</option>
                        <option>Battery Energy Storage Systems (BESS)</option>
                        <option>Lead Replacement Solutions</option>
                        <option>Renewable Energy Integration</option>
                        <option>Industrial Microgrid / Critical Infrastructure</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3c4a40]">Required Capacity</label>
                      <select
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                      >
                        <option>Under 50 kWh (Drop-in / Telecom)</option>
                        <option>50 kWh - 500 kWh (Commercial / Fleet)</option>
                        <option>500 kWh - 2.5 MWh (Industrial BESS)</option>
                        <option>2.5 MWh - 10+ MWh (Utility Grid Scale)</option>
                        <option>Custom / To Be Determined</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#3c4a40]">
                      Expected Operating Conditions (Temperature, duty cycle, environment)
                    </label>
                    <input
                      type="text"
                      value={conditions}
                      onChange={(e) => setConditions(e.target.value)}
                      placeholder="e.g. Ambient temperatures 15°C to 45°C, daily cycling, IP65 enclosure"
                      className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#3c4a40]">
                      Project Scope & Business Needs
                    </label>
                    <textarea
                      rows={4}
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      placeholder="Detail your storage needs, timeline, site conditions, and specific technical requirements..."
                      className="w-full bg-white border border-[#bbcabe] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006d44]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#006d44] hover:bg-[#005232] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl shadow-sm hover:shadow-md active:scale-95 transition-all flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Submitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Ribbon */}
      <section className="py-8 bg-[#e0e3e5]/50 border-t border-b border-[#bbcabe]/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10 opacity-75">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3c4a40]">
            <ShieldCheck className="w-4 h-4 text-[#006d44]" />
            <span>ISO 9001 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3c4a40]">
            <ShieldCheck className="w-4 h-4 text-[#006d44]" />
            <span>ISO 14001 Certified Quality Management</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3c4a40]">
            <ShieldCheck className="w-4 h-4 text-[#006d44]" />
            <span>In Collaboration with MNRE</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3c4a40]">
            <ShieldCheck className="w-4 h-4 text-[#006d44]" />
            <span>MSME Registered</span>
          </div>
        </div>
      </section>
    </div>
  );
};
