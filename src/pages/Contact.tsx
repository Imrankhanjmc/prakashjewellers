import React from 'react';
import { Phone, MapPin, Clock, Navigation, ExternalLink, ShieldCheck, Mail } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { EnquiryForm } from '../components/EnquiryForm';
import { BUSINESS_INFO } from '../data/business';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <SectionHeading
            kicker="Connect With Us"
            title="Contact Prakash Jewellers"
            subtitle="Reach our showroom desk in Kottivakkam, Chennai, for jewellery enquiries, appointments, and location guidance."
          />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Verified Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 border border-[#E9E1D4] space-y-6">
              <h2 className="font-serif text-xl font-medium text-[#18372F] pb-3 border-b border-[#E9E1D4]">
                Showroom Direct Contacts
              </h2>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center shrink-0 text-[#18372F]">
                  <Phone className="w-5 h-5 text-[#A98A50]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#A98A50] font-semibold">
                    Showroom Telephone
                  </span>
                  <a
                    href={BUSINESS_INFO.phone.telUri}
                    className="text-lg font-semibold text-[#18372F] hover:text-[#A98A50] transition-colors mt-0.5 inline-block"
                  >
                    {BUSINESS_INFO.phone.display}
                  </a>
                  <p className="text-xs text-[#282823]/60 mt-1">
                    Click to call for immediate assistance from our team.
                  </p>
                </div>
              </div>

              {/* Showroom Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center shrink-0 text-[#18372F]">
                  <MapPin className="w-5 h-5 text-[#A98A50]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#A98A50] font-semibold">
                    Physical Address
                  </span>
                  <p className="text-sm font-medium text-[#18372F] mt-0.5">
                    {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.colony}
                  </p>
                  <p className="text-xs text-[#282823]/70">
                    {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                  </p>
                  <div className="pt-2">
                    <a
                      href={BUSINESS_INFO.maps.searchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#18372F] hover:text-[#A98A50] font-semibold uppercase tracking-wider transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#C6A66B]" />
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center shrink-0 text-[#18372F]">
                  <Clock className="w-5 h-5 text-[#A98A50]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#A98A50] font-semibold">
                    Showroom Hours
                  </span>
                  <p className="text-sm font-medium text-[#18372F] mt-0.5">
                    {BUSINESS_INFO.hours.displayText}
                  </p>
                  <p className="text-xs text-[#282823]/60 mt-0.5">
                    Closing time supplied by client: 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Verification Notice Card */}
            <div className="p-5 bg-[#F8F5EF] border border-[#E9E1D4] text-xs text-[#282823]/80 space-y-2">
              <div className="flex items-center gap-2 text-[#18372F] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#A98A50]" />
                <span>Client Verification Protocol</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Only verified business telephone and physical address details are listed. Additional channels (such as dedicated customer support email or WhatsApp concierge) will be added upon client confirmation.
              </p>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#E9E1D4]">
            <h2 className="font-serif text-2xl font-medium text-[#18372F] mb-1">
              Send an Enquiry
            </h2>
            <p className="text-xs text-[#282823]/70 mb-6">
              Please share your name, telephone number, and jewellery interest. Our showroom will be happy to connect with you.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};
