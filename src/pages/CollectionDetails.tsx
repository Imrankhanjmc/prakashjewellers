import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Info } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { EnquiryModal } from '../components/EnquiryModal';
import { COLLECTIONS_DATA, PRODUCTS_DATA, JewelleryProduct } from '../data/products';
import { BUSINESS_INFO } from '../data/business';

export const CollectionDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [modalProduct, setModalProduct] = useState<JewelleryProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const collection = COLLECTIONS_DATA.find((c) => c.slug === slug);

  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  const categoryProducts = PRODUCTS_DATA.filter((p) => p.categorySlug === collection.slug);

  const handleEnquire = (product: JewelleryProduct) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/collections"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#A98A50] hover:text-[#18372F] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Collections</span>
          </Link>
        </div>

        {/* Collection Hero Header */}
        <div className="bg-white p-6 sm:p-10 border border-[#E9E1D4] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A98A50] font-semibold block">
                {collection.isConfirmed ? 'Verified Category' : 'Preview Category'}
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-medium text-[#18372F]">
                {collection.title}
              </h1>
              <p className="text-base text-[#282823]/80 leading-relaxed max-w-2xl">
                {collection.editorialNote}
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-[#282823]/60">
                <span>{categoryProducts.length} Sample Designs</span>
                <span aria-hidden="true">·</span>
                <span>Prakash Jewellers · Kottivakkam</span>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative aspect-[4/3] bg-[#F8F5EF] border border-[#E9E1D4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-serif font-medium text-[#18372F] mb-6">
            Designs in this Collection
          </h2>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEnquire={handleEnquire}
                />
              ))}
            </div>
          ) : (
            <div className="p-8 bg-white border border-[#E9E1D4] text-center max-w-md mx-auto space-y-3">
              <Info className="w-6 h-6 text-[#A98A50] mx-auto" />
              <p className="text-sm font-medium text-[#18372F]">
                More designs arriving for this category
              </p>
              <p className="text-xs text-[#282823]/70">
                Please visit our showroom or contact us at 044 2451 1625 to inquire about specific styles in this collection.
              </p>
            </div>
          )}
        </div>

        {/* Direct Action Card */}
        <div className="mt-12 p-6 bg-[#F8F5EF] border border-[#E9E1D4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg font-medium text-[#18372F]">
              Have questions regarding {collection.title}?
            </h3>
            <p className="text-xs text-[#282823]/70 mt-1">
              Call our showroom directly or visit us in Kottivakkam, Chennai.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phone.telUri}
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#18372F] text-white hover:bg-[#102520] transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Showroom</span>
            </a>
            <Link
              to="/visit"
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-white border border-[#E9E1D4] text-[#18372F] hover:bg-[#E9E1D4]/60 transition-colors flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#A98A50]" />
              <span>Visit Us</span>
            </Link>
          </div>
        </div>
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
