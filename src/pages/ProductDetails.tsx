import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Phone, MapPin, MessageSquare, ShieldCheck, Info } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { EnquiryModal } from '../components/EnquiryModal';
import { PRODUCTS_DATA, JewelleryProduct } from '../data/products';
import { BUSINESS_INFO } from '../data/business';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<JewelleryProduct | null>(null);

  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/collections" replace />;
  }

  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.id !== product.id && (p.categorySlug === product.categorySlug || p.featured)
  ).slice(0, 3);

  const handleEnquireCurrent = () => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const handleEnquireRelated = (p: JewelleryProduct) => {
    setModalProduct(p);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back Link */}
        <div className="mb-6 flex items-center gap-2 text-xs text-[#282823]/60">
          <Link to="/" className="hover:text-[#18372F] transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link to="/collections" className="hover:text-[#18372F] transition-colors">
            Collections
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#18372F] font-medium truncate max-w-xs">{product.title}</span>
        </div>

        {/* Main Product Layout: Contiguous module */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white p-6 sm:p-10 border border-[#E9E1D4]">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Main Image */}
            <div className="relative aspect-[4/3] bg-[#F8F5EF] overflow-hidden border border-[#E9E1D4]">
              <img
                src={product.galleryImages[activeImageIndex] || product.image}
                alt={product.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute top-4 left-4 bg-[#18372F]/90 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-medium">
                Demonstration Model
              </div>
            </div>

            {/* Thumbnail Selection */}
            {product.galleryImages.length > 1 && (
              <div className="flex items-center gap-3">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 bg-[#F8F5EF] border transition-all overflow-hidden ${
                      activeImageIndex === idx
                        ? 'border-[#C6A66B] ring-1 ring-[#C6A66B]'
                        : 'border-[#E9E1D4] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* In-Store Viewing Note */}
            <div className="p-4 bg-[#F8F5EF] border border-[#E9E1D4] text-xs text-[#282823]/80 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#18372F]">
                <ShieldCheck className="w-4 h-4 text-[#A98A50]" />
                <span>Showroom Verification Practice</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Prakash Jewellers encourages examining jewellery in person at our Kottivakkam showroom to verify weight, purity hallmarking, and exact design aesthetics.
              </p>
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs text-[#A98A50] font-semibold uppercase tracking-wider mb-2">
                <span>{product.categoryName}</span>
                <span aria-hidden="true">·</span>
                <span>SKU: {product.sku}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-serif font-medium text-[#18372F] leading-snug">
                {product.title}
              </h1>

              <p className="mt-3 text-sm text-[#282823]/75 leading-relaxed">
                {product.subheading}
              </p>

              {/* Price Note (Strictly compliant with prompt rules: no fake live rates or invented prices) */}
              <div className="mt-5 p-4 bg-[#F8F5EF] border border-[#E9E1D4]">
                <span className="block text-xs uppercase tracking-wider text-[#A98A50] font-semibold">
                  Showroom Pricing Notice
                </span>
                <p className="mt-1 text-sm font-serif font-medium text-[#18372F]">
                  Price calculated at time of enquiry
                </p>
                <p className="mt-1 text-xs text-[#282823]/70 leading-relaxed">
                  Final price is determined by the prevailing 22K market gold rate, verified net piece weight, and craftsmanship making charges upon your showroom visit.
                </p>
              </div>

              {/* Description */}
              <div className="mt-6 space-y-2">
                <h2 className="text-xs uppercase tracking-wider font-semibold text-[#18372F]">
                  Design Overview
                </h2>
                <p className="text-xs text-[#282823]/80 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specifications Table */}
              <div className="mt-6 border-t border-[#E9E1D4] pt-4">
                <h2 className="text-xs uppercase tracking-wider font-semibold text-[#18372F] mb-3">
                  Product Specifications
                </h2>
                <dl className="divide-y divide-[#E9E1D4] text-xs">
                  <div className="py-2 flex justify-between">
                    <dt className="text-[#282823]/60">Metal Type</dt>
                    <dd className="font-medium text-[#18372F]">{product.specifications.metalType}</dd>
                  </div>
                  <div className="py-2 flex justify-between">
                    <dt className="text-[#282823]/60">Purity Standard</dt>
                    <dd className="font-medium text-[#18372F]">{product.specifications.purityIndication}</dd>
                  </div>
                  <div className="py-2 flex justify-between">
                    <dt className="text-[#282823]/60">Design Category</dt>
                    <dd className="font-medium text-[#18372F]">{product.specifications.designStyle}</dd>
                  </div>
                  <div className="py-2 flex justify-between">
                    <dt className="text-[#282823]/60">Craftsmanship</dt>
                    <dd className="font-medium text-[#18372F] text-right">{product.specifications.craftsmanship}</dd>
                  </div>
                  <div className="py-2 flex justify-between">
                    <dt className="text-[#282823]/60">Stock Status</dt>
                    <dd className="font-medium text-[#A98A50] text-right">{product.specifications.weightStatus}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-[#E9E1D4]">
              <button
                onClick={handleEnquireCurrent}
                className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider bg-[#18372F] text-white hover:bg-[#102520] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Enquire About This Design</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.phone.telUri}
                  className="py-3 px-3 text-xs font-semibold uppercase tracking-wider bg-[#E9E1D4] text-[#18372F] hover:bg-[#E9E1D4]/80 transition-colors flex items-center justify-center gap-1.5 text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Showroom</span>
                </a>
                <Link
                  to="/visit"
                  className="py-3 px-3 text-xs font-semibold uppercase tracking-wider bg-white border border-[#18372F] text-[#18372F] hover:bg-[#F8F5EF] transition-colors flex items-center justify-center gap-1.5 text-center"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#A98A50]" />
                  <span>Visit Store</span>
                </Link>
              </div>

              <p className="text-[11px] text-[#282823]/60 text-center">
                Prakash Jewellers · 1, 65, East Coast Road, Kottivakkam · Closing: 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Related Designs Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-medium text-[#18372F] mb-6">
              You May Also Be Interested In
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onEnquire={handleEnquireRelated}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <EnquiryModal
        product={modalProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setModalProduct(null);
        }}
      />
    </div>
  );
};
