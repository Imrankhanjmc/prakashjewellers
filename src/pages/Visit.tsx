import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Car, Compass, CalendarCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { StoreInfo } from '../components/StoreInfo';
import { MapSection } from '../components/MapSection';
import { BUSINESS_INFO } from '../data/business';

export const Visit: React.FC = () => {
  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionHeading
            kicker="Showroom Location"
            title="Visit Prakash Jewellers"
            subtitle="We welcome you to visit our showroom on East Coast Road in Kottivakkam, Chennai, to explore fine jewellery in a tranquil, hospitable setting."
          />
        </div>

        {/* Primary Store Details & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <StoreInfo />
          </div>

          <div className="lg:col-span-7 h-full min-h-[420px]">
            <MapSection className="h-full shadow-sm" />
          </div>
        </div>

        {/* Practical Visitor Guide */}
        <div className="bg-white p-8 sm:p-12 border border-[#E9E1D4] mb-16">
          <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#18372F] mb-6">
            Visitor Information & Directions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center text-[#18372F]">
                <Compass className="w-5 h-5 text-[#A98A50]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#18372F]">
                Landmark & Route
              </h3>
              <p className="text-xs sm:text-sm text-[#282823]/75 leading-relaxed">
                Located right along East Coast Road (ECR) in New Colony, Kottivakkam. Situated just south of Thiruvanmiyur and easily accessible from Adyar, Besant Nagar, and Palavakkam.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center text-[#18372F]">
                <Car className="w-5 h-5 text-[#A98A50]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#18372F]">
                Transit & Arrival
              </h3>
              <p className="text-xs sm:text-sm text-[#282823]/75 leading-relaxed">
                Street-level showroom entrance with frontage along ECR. Public buses and auto-rickshaws frequently connect from Thiruvanmiyur bus terminus and MRTS railway stations.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center text-[#18372F]">
                <CalendarCheck className="w-5 h-5 text-[#A98A50]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#18372F]">
                Showroom Timings
              </h3>
              <p className="text-xs sm:text-sm text-[#282823]/75 leading-relaxed">
                Open through the evening until 9:00 PM. For bridal trousseau consultations or dedicated family viewings, an advance phone call helps us serve you best.
              </p>
            </div>
          </div>
        </div>

        {/* Immediate Call Notice */}
        <div className="bg-[#18372F] text-[#F8F5EF] p-8 border border-[#C6A66B]/20 text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-medium text-white">
            Need Guidance on the Way?
          </h3>
          <p className="text-xs sm:text-sm text-[#F8F5EF]/80">
            Our showroom team is happy to assist with landmarks and parking directions as you arrive in Kottivakkam.
          </p>
          <div className="pt-2">
            <a
              href={BUSINESS_INFO.phone.telUri}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#C6A66B] text-[#18372F] hover:bg-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {BUSINESS_INFO.phone.display}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
