import React, { useState } from 'react';
import { Phone, CheckCircle2, AlertCircle, Send, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface EnquiryFormProps {
  prefilledProduct?: {
    title: string;
    sku: string;
  };
  onSuccess?: () => void;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  prefilledProduct,
  className = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    interest: prefilledProduct ? `${prefilledProduct.title} (${prefilledProduct.sku})` : 'Gold Jewellery Consultation',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please provide a valid contact telephone or mobile number.';
    } else if (cleanPhone.length < 8) {
      newErrors.phone = 'Please enter a complete phone number.';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select your area of jewellery interest.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent to be contacted regarding this enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic client-side submission with persistence to localStorage
    setTimeout(() => {
      const storedEnquiries = JSON.parse(localStorage.getItem('prakash_jewellers_enquiries') || '[]');
      const newEntry = {
        id: 'ENQ-' + Date.now(),
        date: new Date().toISOString(),
        ...formData,
      };
      localStorage.setItem('prakash_jewellers_enquiries', JSON.stringify([newEntry, ...storedEnquiries]));

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 650);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white p-6 sm:p-8 border border-[#E9E1D4] text-center ${className}`}>
        <div className="w-12 h-12 bg-[#18372F]/10 text-[#18372F] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6 text-[#18372F]" />
        </div>
        <h3 className="text-xl font-serif font-medium text-[#18372F]">
          Enquiry Received
        </h3>
        <p className="mt-2 text-sm text-[#282823]/75 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="font-semibold text-[#18372F]">{formData.fullName}</strong>. Your enquiry regarding <span className="text-[#A98A50] font-medium">{formData.interest}</span> has been logged.
        </p>

        {/* Clear transparent notice about showroom forwarding */}
        <div className="mt-4 p-3.5 bg-[#F8F5EF] border border-[#E9E1D4] text-xs text-[#282823]/80 text-left space-y-1">
          <p className="font-medium text-[#18372F]">Direct Showroom Communication Note:</p>
          <p className="text-[11px] leading-relaxed">
            In this demonstration version, customer requests are recorded locally. For immediate assistance with pricing, weights, or showroom viewings in Kottivakkam, please contact our showroom desk directly:
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={BUSINESS_INFO.phone.telUri}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#18372F] text-white hover:bg-[#102520] transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" /> Call Showroom: {BUSINESS_INFO.phone.display}
          </a>
          <a
            href={BUSINESS_INFO.maps.searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#E9E1D4] text-[#18372F] hover:bg-[#E9E1D4]/80 transition-colors flex items-center justify-center gap-2"
          >
            <MapPin className="w-3.5 h-3.5" /> Get Directions
          </a>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              phone: '',
              interest: 'Gold Jewellery Consultation',
              message: '',
              consent: false,
            });
          }}
          className="mt-5 text-xs text-[#A98A50] hover:text-[#18372F] underline transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-4 ${className}`}>
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-medium text-[#18372F] uppercase tracking-wider mb-1">
          Full Name <span className="text-[#A98A50]">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="e.g. Meenakshi Sundaram"
          className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
            errors.fullName ? 'border-red-500' : 'border-[#E9E1D4]'
          } text-[#282823] focus:border-[#C6A66B] focus:ring-1 focus:ring-[#C6A66B] transition-colors`}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.fullName}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-xs font-medium text-[#18372F] uppercase tracking-wider mb-1">
          Telephone / Mobile Number <span className="text-[#A98A50]">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="e.g. 98401 XXXXX or 044 XXXX XXXX"
          className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
            errors.phone ? 'border-red-500' : 'border-[#E9E1D4]'
          } text-[#282823] focus:border-[#C6A66B] focus:ring-1 focus:ring-[#C6A66B] transition-colors`}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.phone}
          </p>
        )}
      </div>

      {/* Jewellery Interest */}
      <div>
        <label htmlFor="interest" className="block text-xs font-medium text-[#18372F] uppercase tracking-wider mb-1">
          Jewellery Interest <span className="text-[#A98A50]">*</span>
        </label>
        <select
          id="interest"
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
            errors.interest ? 'border-red-500' : 'border-[#E9E1D4]'
          } text-[#282823] focus:border-[#C6A66B] focus:ring-1 focus:ring-[#C6A66B] transition-colors`}
        >
          <option value="Gold Jewellery Consultation">General Gold Jewellery Consultation</option>
          <option value="Bridal Jewellery Planning">Bridal Jewellery & Trousseau Planning</option>
          <option value="Traditional Temple Necklaces">Traditional Temple Necklaces & Haarams</option>
          <option value="Gold Bangles & Kadas">Gold Bangles & Kadas</option>
          <option value="Jhumkas & Ear Ornaments">Jhumkas & Traditional Earrings</option>
          <option value="Showroom Visit Appointment">Showroom Visit Appointment (Kottivakkam)</option>
          {prefilledProduct && (
            <option value={`${prefilledProduct.title} (${prefilledProduct.sku})`}>
              Inquiring about: {prefilledProduct.title}
            </option>
          )}
        </select>
        {errors.interest && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.interest}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#18372F] uppercase tracking-wider mb-1">
          Message or Specific Request (Optional)
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Feel free to mention preferred visit timings, weight range, or design style..."
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E9E1D4] text-[#282823] focus:border-[#C6A66B] focus:ring-1 focus:ring-[#C6A66B] transition-colors"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 text-[#18372F] focus:ring-[#C6A66B] border-[#E9E1D4] rounded-xs"
          />
          <span className="text-xs text-[#282823]/75 leading-relaxed">
            I agree to allow Prakash Jewellers to contact me regarding this enquiry. (No spam, communications strictly for showroom service).
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.consent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#18372F] hover:bg-[#102520] transition-colors flex items-center justify-center gap-2 disabled:opacity-75"
      >
        {isSubmitting ? (
          <span>Logging enquiry...</span>
        ) : (
          <>
            <Send className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>Submit Showroom Enquiry</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-[#282823]/60 pt-1">
        Or reach the showroom directly at{' '}
        <a href={BUSINESS_INFO.phone.telUri} className="text-[#18372F] font-semibold underline">
          {BUSINESS_INFO.phone.display}
        </a>
      </p>
    </form>
  );
};
