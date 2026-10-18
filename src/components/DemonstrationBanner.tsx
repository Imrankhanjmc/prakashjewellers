import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';

export const DemonstrationBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-[#102520] text-[#E9E1D4] text-xs py-2 px-4 border-b border-[#C6A66B]/30 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <MapPin className="w-3.5 h-3.5 text-[#C6A66B] shrink-0" />
          <span className="truncate">
            Prakash Jewellers · East Coast Road, Kottivakkam, Chennai · Catalog designs represent demonstration showcase
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0 text-xs">
          <a
            href="tel:+914424511625"
            className="text-[#C6A66B] hover:text-white font-medium transition-colors hidden sm:inline"
          >
            Call: 044 2451 1625
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss preview notice"
            className="text-[#E9E1D4]/60 hover:text-white p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
