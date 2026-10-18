import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { BUSINESS_INFO } from '../data/business';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#A98A50] hover:text-[#18372F] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="bg-white p-8 sm:p-12 border border-[#E9E1D4] space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#A98A50] font-semibold block mb-2">
              Website Governance
            </span>
            <h1 className="text-3xl font-serif font-medium text-[#18372F]">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-[#282823]/60">
              Last updated: October 2026 · Prakash Jewellers, Kottivakkam, Chennai
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#282823]/80 leading-relaxed border-t border-[#E9E1D4] pt-6">
            <section className="space-y-2">
              <h2 className="text-lg font-serif font-medium text-[#18372F]">
                1. Overview & Scope
              </h2>
              <p>
                This Privacy Policy explains how <strong className="text-[#18372F]">Prakash Jewellers</strong> ("we", "our", or "the showroom"), located at 1, 65, East Coast Road, New Colony, Kottivakkam, Chennai 600041, handles customer information collected through this showroom discovery website.
              </p>
              <p>
                This website is dedicated to showcasing jewellery collections and providing showroom location and contact details. It is not an e-commerce platform and does not conduct online checkout or financial transactions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-medium text-[#18372F]">
                2. Information We Collect
              </h2>
              <p>
                We only collect personal information that you voluntarily choose to provide when interacting with our showroom enquiry forms or telephone services:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs text-[#282823]/75">
                <li>Your full name</li>
                <li>Your telephone or mobile number</li>
                <li>Your jewellery interests (e.g. bridal sets, necklaces, bangles, or custom designs)</li>
                <li>Any personal messages or visit scheduling requests you submit</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-medium text-[#18372F]">
                3. How Your Information Is Used
              </h2>
              <p>
                Information collected via enquiry forms is used solely to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs text-[#282823]/75">
                <li>Respond to your jewellery questions or product inquiries</li>
                <li>Coordinate showroom visit appointments in Kottivakkam</li>
                <li>Provide accurate information regarding jewellery designs, availability, or pricing guidelines</li>
              </ul>
              <p>
                We do not sell, rent, or distribute your personal contact information to third-party marketing brokers or advertisers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-medium text-[#18372F]">
                4. No Online Payments or Financial Data Collection
              </h2>
              <p>
                Prakash Jewellers does not process online payments, debit/credit cards, or net banking transactions on this website. All financial purchases, bullion transactions, and formal invoicing occur in person at our physical showroom in compliance with applicable Indian jewellery sales and tax regulations.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-medium text-[#18372F]">
                5. Cookies & Local Storage
              </h2>
              <p>
                This website uses browser storage solely for necessary site operations, such as recording enquiry draft status and maintaining user preference settings. We do not deploy intrusive third-party cross-site advertising trackers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-medium text-[#18372F]">
                6. Third-Party Links & Map Services
              </h2>
              <p>
                Our website includes external links to Google Maps to help visitors navigate to our Kottivakkam showroom. Interacting with Google Maps is governed by Google’s respective privacy policy and terms of service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-medium text-[#18372F]">
                7. Contacting Us Regarding Your Privacy
              </h2>
              <p>
                If you have questions regarding this policy or wish to update or remove contact information you have shared with our showroom, please contact us:
              </p>
              <div className="p-4 bg-[#F8F5EF] border border-[#E9E1D4] text-xs space-y-1">
                <p className="font-semibold text-[#18372F]">Prakash Jewellers</p>
                <p>1, 65, East Coast Road, New Colony, Kottivakkam, Chennai, Tamil Nadu 600041, India</p>
                <p>Telephone: 044 2451 1625</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
