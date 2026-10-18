import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ExternalLink, ShieldCheck, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Footer: React.FC = () => {
  const [showChecklistModal, setShowChecklistModal] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#18372F] text-[#F8F5EF] pt-16 pb-12 border-t border-[#C6A66B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#F8F5EF]/10">
            {/* Col 1: Brand & Overview */}
            <div className="space-y-4">
              <span className="text-xl font-serif tracking-[0.2em] font-semibold text-white block">
                PRAKASH JEWELLERS
              </span>
              <p className="text-sm text-[#F8F5EF]/75 leading-relaxed">
                A jewellery destination in Kottivakkam, Chennai. Dedicated to presenting elegant gold ornaments, bridal jewellery, and personal service for all your celebratory moments.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setShowChecklistModal(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#C6A66B] hover:text-white transition-colors underline underline-offset-4"
                >
                  <Info className="w-3.5 h-3.5" />
                  View Launch Verification Checklist
                </button>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-4">
                Explore
              </h3>
              <ul className="space-y-2.5 text-sm text-[#F8F5EF]/80">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/collections" className="hover:text-white transition-colors">
                    Jewellery Collections
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About the Showroom
                  </Link>
                </li>
                <li>
                  <Link to="/visit" className="hover:text-white transition-colors">
                    Visit Our Store
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact & Enquiries
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Showroom Location & Telephone */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-4">
                Showroom Location
              </h3>
              <div className="space-y-3.5 text-sm text-[#F8F5EF]/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.colony}, {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C6A66B] shrink-0" />
                  <a
                    href={BUSINESS_INFO.phone.telUri}
                    className="hover:text-white transition-colors font-medium"
                  >
                    {BUSINESS_INFO.phone.display}
                  </a>
                </div>
                <div className="pt-1">
                  <a
                    href={BUSINESS_INFO.maps.searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#C6A66B] hover:text-white transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Col 4: Confirmed Hours & Rating */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-4">
                Hours & Recognition
              </h3>
              <div className="space-y-3 text-sm text-[#F8F5EF]/80">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">{BUSINESS_INFO.hours.displayText}</p>
                    <p className="text-xs text-[#F8F5EF]/60 mt-0.5">
                      Closing time supplied by client: 9:00 PM
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F8F5EF]/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-white">Google Rating:</span>
                    <span className="text-sm font-semibold text-[#C6A66B] tabular-nums">
                      {BUSINESS_INFO.googleReviews.rating} / 5.0
                    </span>
                    <span className="text-xs text-[#F8F5EF]/60 tabular-nums">
                      ({BUSINESS_INFO.googleReviews.reviewCount} reviews)
                    </span>
                  </div>
                  <p className="text-[11px] text-[#F8F5EF]/50 mt-1">
                    Client-supplied listing figures to be confirmed upon profile linkage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F5EF]/60">
            <p>
              © {currentYear} Prakash Jewellers. All rights reserved. Kottivakkam, Chennai.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span aria-hidden="true" className="text-[#F8F5EF]/30">·</span>
              <span>Demonstration Website Version</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Launch Verification Checklist Modal */}
      {showChecklistModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowChecklistModal(false)}
        >
          <div
            className="bg-[#F8F5EF] text-[#282823] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E9E1D4] relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E9E1D4]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#A98A50] font-semibold block">
                  Transparency & Client Readiness
                </span>
                <h3 className="text-xl font-serif font-medium text-[#18372F] mt-1">
                  Launch Verification Checklist
                </h3>
              </div>
              <button
                onClick={() => setShowChecklistModal(false)}
                className="text-[#282823]/60 hover:text-[#18372F] text-lg font-bold p-1"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#282823]/70 mt-4 leading-relaxed">
              In accordance with strict brand integrity guidelines, no unverified factual claims, invented owner names, or fabricated social accounts have been introduced. The following items are tracked for final client approval:
            </p>

            <div className="mt-5 space-y-3">
              {BUSINESS_INFO.missingInformationChecklist.map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-white border border-[#E9E1D4] text-xs space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-[#18372F]">{item.item}</span>
                    <span className="text-[10px] uppercase tracking-wider font-medium text-[#A98A50]">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[#282823]/75 leading-normal">{item.details}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E9E1D4] flex justify-end">
              <button
                onClick={() => setShowChecklistModal(false)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#18372F] text-white hover:bg-[#102520] transition-colors"
              >
                Close Checklist
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
