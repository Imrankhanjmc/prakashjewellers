import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface StoreInfoProps {
  className?: string;
  variant?: 'card' | 'expanded';
}

export const StoreInfo: React.FC<StoreInfoProps> = ({
  className = '',
  variant = 'card',
}) => {
  return (
    <div className={`bg-white border border-[#E9E1D4] p-6 sm:p-8 ${className}`}>
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A98A50] font-semibold mb-2">
        <MapPin className="w-3.5 h-3.5" />
        <span>Kottivakkam Showroom</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#18372F] mb-4">
        Visit Prakash Jewellers
      </h3>

      <div className="space-y-4 text-sm text-[#282823]/80">
        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#F8F5EF] flex items-center justify-center shrink-0 mt-0.5 border border-[#E9E1D4]">
            <MapPin className="w-4 h-4 text-[#18372F]" />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#A98A50] font-medium">
              Showroom Address
            </span>
            <p className="font-medium text-[#18372F] mt-0.5">
              {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.colony}
            </p>
            <p className="text-xs text-[#282823]/70">
              {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
            </p>
            <p className="text-[11px] text-[#A98A50] mt-1">
              {BUSINESS_INFO.maps.landmarkNotice}
            </p>
          </div>
        </div>

        {/* Telephone */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#F8F5EF] flex items-center justify-center shrink-0 mt-0.5 border border-[#E9E1D4]">
            <Phone className="w-4 h-4 text-[#18372F]" />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#A98A50] font-medium">
              Showroom Telephone
            </span>
            <a
              href={BUSINESS_INFO.phone.telUri}
              className="text-base font-semibold text-[#18372F] hover:text-[#A98A50] transition-colors mt-0.5 inline-block"
            >
              {BUSINESS_INFO.phone.display}
            </a>
            <p className="text-xs text-[#282823]/60">
              {BUSINESS_INFO.phone.note}
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#F8F5EF] flex items-center justify-center shrink-0 mt-0.5 border border-[#E9E1D4]">
            <Clock className="w-4 h-4 text-[#18372F]" />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#A98A50] font-medium">
              Operating Hours
            </span>
            <p className="font-medium text-[#18372F] mt-0.5">
              {BUSINESS_INFO.hours.displayText}
            </p>
            <p className="text-xs text-[#282823]/60">
              {BUSINESS_INFO.hours.note}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 pt-6 border-t border-[#E9E1D4] flex flex-col sm:flex-row gap-3">
        <a
          href={BUSINESS_INFO.maps.searchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#18372F] hover:bg-[#102520] transition-colors flex items-center justify-center gap-2 text-center"
        >
          <Navigation className="w-3.5 h-3.5 text-[#C6A66B]" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
        </a>

        <a
          href={BUSINESS_INFO.phone.telUri}
          className="flex-1 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-[#18372F] bg-[#E9E1D4] hover:bg-[#E9E1D4]/80 transition-colors flex items-center justify-center gap-2 text-center"
        >
          <Phone className="w-3.5 h-3.5 text-[#18372F]" />
          <span>Call Showroom</span>
        </a>
      </div>
    </div>
  );
};
