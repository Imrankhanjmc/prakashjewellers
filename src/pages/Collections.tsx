import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, Info } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { EnquiryModal } from '../components/EnquiryModal';
import { COLLECTIONS_DATA, PRODUCTS_DATA, JewelleryProduct } from '../data/products';
import { BUSINESS_INFO } from '../data/business';

export const Collections: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'title-asc' | 'title-desc'>('default');
  const [modalProduct, setModalProduct] = useState<JewelleryProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS_DATA];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.categorySlug === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.subheading.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'title-asc') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'title-desc') {
      list.sort((a, b) => b.title.localeCompare(a.title));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleEnquire = (product: JewelleryProduct) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <SectionHeading
            kicker="Showroom Showcase"
            title="Jewellery Collections"
            subtitle="Explore traditional South Indian gold jewellery and bridal designs. All pieces shown are demonstration models for showroom discovery."
          />

          {/* Demonstration Notice */}
          <div className="mt-4 max-w-2xl mx-auto p-3.5 bg-white border border-[#E9E1D4] text-xs text-[#282823]/75 flex items-start gap-2.5 text-left">
            <Info className="w-4 h-4 text-[#A98A50] shrink-0 mt-0.5" />
            <p>
              {BUSINESS_INFO.demonstrationDisclaimer}
            </p>
          </div>
        </div>

        {/* Categories Overview Banners */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {COLLECTIONS_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`p-3.5 text-left border transition-all text-xs ${
                selectedCategory === cat.slug
                  ? 'bg-[#18372F] text-white border-[#18372F] shadow-sm'
                  : 'bg-white text-[#282823] border-[#E9E1D4] hover:border-[#C6A66B]'
              }`}
            >
              <span className={`block font-serif text-sm font-medium ${selectedCategory === cat.slug ? 'text-white' : 'text-[#18372F]'}`}>
                {cat.title}
              </span>
              <span className={`text-[11px] mt-1 block ${selectedCategory === cat.slug ? 'text-[#C6A66B]' : 'text-[#282823]/60'}`}>
                {cat.isConfirmed ? 'Confirmed Category' : 'Preview Category'}
              </span>
            </button>
          ))}
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 border border-[#E9E1D4] mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#18372F] text-white'
                  : 'text-[#282823]/70 hover:text-[#18372F] bg-[#F8F5EF]'
              }`}
            >
              All Designs ({PRODUCTS_DATA.length})
            </button>
            {COLLECTIONS_DATA.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.slug)}
                className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === c.slug
                    ? 'bg-[#18372F] text-white'
                    : 'text-[#282823]/70 hover:text-[#18372F] bg-[#F8F5EF]'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-56">
              <Search className="w-3.5 h-3.5 text-[#282823]/50 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search designs or SKU..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#F8F5EF] border border-[#E9E1D4] focus:border-[#C6A66B] focus:ring-1 focus:ring-[#C6A66B] text-[#282823]"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-1.5 px-2.5 text-xs bg-[#F8F5EF] border border-[#E9E1D4] text-[#282823] focus:border-[#C6A66B]"
            >
              <option value="default">Default Order</option>
              <option value="title-asc">Name (A-Z)</option>
              <option value="title-desc">Name (Z-A)</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={handleEnquire}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 bg-white border border-[#E9E1D4] text-center max-w-md mx-auto space-y-4">
            <Filter className="w-8 h-8 text-[#A98A50] mx-auto" />
            <h3 className="font-serif text-lg font-medium text-[#18372F]">
              No Designs Found
            </h3>
            <p className="text-xs text-[#282823]/70">
              We couldn’t find any jewellery designs matching your current filter. Please clear your search or browse all categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#18372F] text-white hover:bg-[#102520] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Consultation Banner */}
        <div className="mt-16 bg-[#18372F] text-white p-8 sm:p-10 border border-[#C6A66B]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-medium text-white">
              Looking for a Specific Design or Custom Piece?
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F5EF]/80 max-w-xl">
              Visit our showroom on East Coast Road, Kottivakkam, to view current physical stock or discuss personalized jewellery requirements with our team.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/visit"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#C6A66B] text-[#18372F] hover:bg-white transition-colors"
            >
              Visit Showroom
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-transparent border border-white text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
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
