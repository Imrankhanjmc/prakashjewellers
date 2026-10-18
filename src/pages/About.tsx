import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ShieldCheck, Heart, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { BUSINESS_INFO } from '../data/business';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <SectionHeading
            kicker="Our Showroom"
            title="About Prakash Jewellers"
            subtitle="A trusted destination for fine gold jewellery and bridal ornaments, conveniently located on East Coast Road in Kottivakkam, Chennai."
          />
        </div>

        {/* Main Editorial Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-white p-6 sm:p-12 border border-[#E9E1D4]">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A98A50] font-semibold block">
              Welcoming Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#18372F] leading-tight">
              A Personal Approach to Fine Jewellery
            </h2>
            <p className="text-sm sm:text-base text-[#282823]/80 leading-relaxed">
              At Prakash Jewellers, our showroom was established with a clear purpose: to provide our local Chennai community with an inviting, transparent, and refined setting to choose jewellery for weddings, festivals, and daily adornment.
            </p>
            <p className="text-sm sm:text-base text-[#282823]/80 leading-relaxed">
              We understand that purchasing fine jewellery in India is both an emotional milestone and an enduring family investment. We prioritize unhurried consultations, giving you the time and guidance needed to inspect weight, hallmarking, design motifs, and comfortable sizing in person.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#282823]/60">
              <span className="font-semibold text-[#18372F]">Showroom Address:</span>
              <span>1, 65, East Coast Road, Kottivakkam, Chennai</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-[#F8F5EF] border border-[#E9E1D4] overflow-hidden shadow-xs">
              <img
                src="/src/assets/images/showroom_boutique_interior_1792309472275.jpg"
                alt="Prakash Jewellers Showroom Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 text-[11px] text-[#18372F] border border-[#E9E1D4] font-medium">
                Kottivakkam Showroom Interior
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <SectionHeading
            kicker="Guiding Principles"
            title="What We Stand For"
            subtitle="Our commitment to every customer who walks through our doors."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-[#E9E1D4] space-y-4">
              <div className="w-12 h-12 bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center text-[#18372F]">
                <ShieldCheck className="w-6 h-6 text-[#A98A50]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#18372F]">
                Integrity & Transparency
              </h3>
              <p className="text-xs sm:text-sm text-[#282823]/75 leading-relaxed">
                Clear communication regarding metal purity, daily bullion benchmarks, making charges, and billing. We believe lasting relationships are built on honest advice.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E9E1D4] space-y-4">
              <div className="w-12 h-12 bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center text-[#18372F]">
                <Sparkles className="w-6 h-6 text-[#A98A50]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#18372F]">
                Curated Craftsmanship
              </h3>
              <p className="text-xs sm:text-sm text-[#282823]/75 leading-relaxed">
                Respecting the rich heritage of South Indian jewellery artistry—from classical temple embossing to contemporary lightweight everyday bangles.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E9E1D4] space-y-4">
              <div className="w-12 h-12 bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center text-[#18372F]">
                <Heart className="w-6 h-6 text-[#A98A50]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#18372F]">
                Welcoming Hospitality
              </h3>
              <p className="text-xs sm:text-sm text-[#282823]/75 leading-relaxed">
                A warm, patient atmosphere where families can comfortably discuss trousseau selections or find the ideal gift for an auspicious celebration.
              </p>
            </div>
          </div>
        </div>

        {/* Note on Heritage & Client Editorial Notice */}
        <div className="p-6 bg-[#F8F5EF] border border-[#E9E1D4] max-w-3xl mx-auto mb-16 text-center space-y-2">
          <span className="text-xs uppercase tracking-wider text-[#A98A50] font-semibold">
            Brand Profile & Authenticity
          </span>
          <p className="text-xs text-[#282823]/70 leading-relaxed">
            In keeping with our commitment to factual representation, all details regarding founder history, proprietary heritage, and certifications will be published directly upon client confirmation.
          </p>
        </div>

        {/* Visit CTA Strip */}
        <div className="bg-[#18372F] text-white p-8 sm:p-12 border border-[#C6A66B]/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
              We Invite You to Visit the Showroom
            </h3>
            <p className="text-sm text-[#F8F5EF]/80 max-w-xl">
              Experience our jewellery collection in person at New Colony, Kottivakkam, Chennai. Open daily until 9:00 PM.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/visit"
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#C6A66B] text-[#18372F] hover:bg-white transition-colors text-center"
            >
              Get Store Directions
            </Link>
            <a
              href={BUSINESS_INFO.phone.telUri}
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-transparent border border-white text-white hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: 044 2451 1625</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
