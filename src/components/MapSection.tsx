import React, { useState } from 'react';
import { ExternalLink, Navigation, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface MapSectionProps {
  className?: string;
}

export const MapSection: React.FC<MapSectionProps> = ({ className = '' }) => {
  const [mapError, setMapError] = useState(false);

  // Google Maps embed URL using the verified location query
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Prakash Jewellers, 1, 65, East Coast Road, New Colony, Kottivakkam, Chennai, Tamil Nadu 600041'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`relative w-full h-[380px] sm:h-[450px] bg-[#E9E1D4] overflow-hidden border border-[#E9E1D4] ${className}`}>
      {!mapError ? (
        <iframe
          title="Prakash Jewellers Showroom Map Location"
          src={embedUrl}
          className="w-full h-full border-0 grayscale-[20%] contrast-[105%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onError={() => setMapError(true)}
        />
      ) : (
        /* Graceful fallback if map iframe cannot load in sandbox */
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#F8F5EF] text-center">
          <MapPin className="w-10 h-10 text-[#C6A66B] mb-3" />
          <h4 className="font-serif text-lg font-medium text-[#18372F]">
            Prakash Jewellers Location Map
          </h4>
          <p className="mt-1 text-xs text-[#282823]/70 max-w-sm">
            {BUSINESS_INFO.address.fullFormatted}
          </p>
          <a
            href={BUSINESS_INFO.maps.searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#18372F] text-white flex items-center gap-1.5"
          >
            <Navigation className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>Open in Google Maps</span>
          </a>
        </div>
      )}

      {/* Floating Card Overlay on Desktop */}
      <div className="hidden sm:block absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs p-4 border border-[#E9E1D4] shadow-md max-w-xs text-xs">
        <p className="font-serif font-medium text-sm text-[#18372F]">Prakash Jewellers</p>
        <p className="text-[#282823]/75 mt-0.5 line-clamp-2">
          1, 65, East Coast Road, New Colony, Kottivakkam, Chennai
        </p>
        <div className="mt-2 pt-2 border-t border-[#E9E1D4] flex items-center justify-between">
          <span className="text-[11px] text-[#A98A50] font-medium">Open until 9:00 PM</span>
          <a
            href={BUSINESS_INFO.maps.searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-[#18372F] hover:text-[#A98A50] flex items-center gap-1"
          >
            <span>Directions</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
