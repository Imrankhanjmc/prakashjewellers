import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';
import { JewelleryProduct } from '../data/products';

interface EnquiryModalProps {
  product: JewelleryProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F8F5EF] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E9E1D4] relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E9E1D4]">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#A98A50] font-semibold block">
              Prakash Jewellers · Kottivakkam
            </span>
            <h3 className="text-xl font-serif font-medium text-[#18372F] mt-1">
              {product ? `Enquire about ${product.title}` : 'Showroom Enquiry'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="text-[#282823]/60 hover:text-[#18372F] p-1.5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {product && (
          <div className="mt-4 p-3 bg-white border border-[#E9E1D4] flex items-center gap-3">
            <img
              src={product.image}
              alt={product.title}
              referrerPolicy="no-referrer"
              className="w-14 h-14 object-cover border border-[#E9E1D4] shrink-0"
            />
            <div className="text-xs">
              <p className="font-semibold text-[#18372F] line-clamp-1">{product.title}</p>
              <p className="text-[#A98A50] font-medium mt-0.5">SKU: {product.sku}</p>
              <p className="text-[11px] text-[#282823]/60">{product.specifications.purityIndication}</p>
            </div>
          </div>
        )}

        <div className="mt-5">
          <EnquiryForm
            prefilledProduct={product ? { title: product.title, sku: product.sku } : undefined}
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
};
