import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Sparkles, HeartHandshake, Eye, Shield, Star, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { StoreInfo } from '../components/StoreInfo';
import { MapSection } from '../components/MapSection';
import { EnquiryForm } from '../components/EnquiryForm';
import { EnquiryModal } from '../components/EnquiryModal';
import { BUSINESS_INFO } from '../data/business';
import { COLLECTIONS_DATA, PRODUCTS_DATA, JewelleryProduct } from '../data/products';

export const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<JewelleryProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnquire = (product: JewelleryProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const featuredProducts = PRODUCTS_DATA.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative bg-[#F8F5EF] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E9E1D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Editorial Headline & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A98A50] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Kottivakkam · East Coast Road, Chennai</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-medium text-[#18372F] leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                Jewellery for Every Beautiful Moment.
              </h1>

              <p
                className="text-base sm:text-lg text-[#282823]/80 leading-relaxed max-w-xl"
                style={{ textWrap: 'balance' }}
              >
                Discover the beauty of fine jewellery and find something special for the moments that matter. Welcome to Prakash Jewellers, your local destination on East Coast Road.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/collections"
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#18372F] hover:bg-[#102520] transition-colors text-center inline-flex items-center justify-center gap-2 border border-[#18372F]"
                >
                  <span>Explore Collections</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/visit"
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#18372F] bg-transparent hover:bg-[#E9E1D4]/60 transition-colors text-center inline-flex items-center justify-center gap-2 border border-[#18372F]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#A98A50]" />
                  <span>Visit Our Showroom</span>
                </Link>
              </div>

              {/* Quiet Micro Trust Details */}
              <div className="pt-4 border-t border-[#E9E1D4] flex flex-wrap items-center gap-6 text-xs text-[#282823]/70">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#18372F]">Location:</span>
                  <span>Kottivakkam, ECR</span>
                </div>
                <span aria-hidden="true" className="text-[#E9E1D4]">·</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#18372F]">Phone:</span>
                  <a href={BUSINESS_INFO.phone.telUri} className="hover:text-[#18372F] underline underline-offset-2">
                    {BUSINESS_INFO.phone.display}
                  </a>
                </div>
                <span aria-hidden="true" className="text-[#E9E1D4]">·</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#18372F]">Closing:</span>
                  <span>{BUSINESS_INFO.hours.closingTime}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Large Editorial Jewellery Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] sm:aspect-[4/3] bg-white p-2 sm:p-3 border border-[#E9E1D4] shadow-sm">
                <img
                  src="/src/assets/images/hero_prakash_jewellery_1792309471726.jpg"
                  alt="Traditional South Indian 22k gold necklace showcasing intricate filigree workmanship"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-xs px-3 py-1.5 text-[11px] text-[#282823]/75 border border-[#E9E1D4] tracking-wider uppercase font-medium">
                  Artisanal Gold Jewellery Showcase
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BRAND INTRODUCTION */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E9E1D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Supporting Showroom Imagery */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] bg-[#F8F5EF] p-2 border border-[#E9E1D4]">
                <img
                  src="/src/assets/images/showroom_boutique_interior_1792309472275.jpg"
                  alt="Prakash Jewellers boutique showroom interior in Kottivakkam Chennai"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-[11px] text-[#282823]/60 text-center">
                Representative showroom environment · Dedicated to welcoming customer experiences
              </p>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <SectionHeading
                kicker="About the Showroom"
                title="A Closer Look at Prakash Jewellers"
                alignment="left"
                className="mb-4"
              />

              <p className="text-base text-[#282823]/80 leading-relaxed">
                Located on East Coast Road in New Colony, Kottivakkam, <strong className="text-[#18372F] font-semibold">Prakash Jewellers</strong> is a welcoming jewellery destination serving Chennai residents and visitors seeking exquisite craftsmanship.
              </p>

              <p className="text-base text-[#282823]/80 leading-relaxed">
                We believe that selecting jewellery should be an enjoyable, transparent, and memorable experience. Whether you are searching for everyday gold ornaments, festive haaram sets, classic kadas, or bridal pieces for upcoming family occasions, our showroom provides a comfortable setting to view designs in detail.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider">
                <Link
                  to="/about"
                  className="text-[#18372F] hover:text-[#A98A50] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Learn more about our showroom</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span aria-hidden="true" className="text-[#E9E1D4]">·</span>
                <Link
                  to="/visit"
                  className="text-[#A98A50] hover:text-[#18372F] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Directions to Kottivakkam</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPLORE JEWELLERY COLLECTIONS */}
      <section className="py-16 lg:py-24 bg-[#F8F5EF] border-b border-[#E9E1D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Curated Categories"
            title="Explore Our Collections"
            subtitle="Browse signature categories of fine Indian jewellery designs. Select a collection to explore demonstration pieces and showroom options."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLECTIONS_DATA.map((cat) => (
              <Link
                key={cat.id}
                to={`/collections/${cat.slug}`}
                className="group flex flex-col bg-white border border-[#E9E1D4] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F5EF]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-[#18372F]/80 text-[#F8F5EF] text-[10px] tracking-widest uppercase px-2 py-0.5 font-medium">
                    {cat.isConfirmed ? 'Featured Category' : 'Showroom Preview'}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#18372F] group-hover:text-[#A98A50] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#282823]/70 leading-relaxed line-clamp-2">
                      {cat.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E9E1D4] flex items-center justify-between text-xs text-[#A98A50] font-semibold uppercase tracking-wider">
                    <span>Explore Designs</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED JEWELLERY */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E9E1D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <SectionHeading
              kicker="Handcrafted Selection"
              title="Discover Beautiful Designs"
              subtitle="Sample showcase highlighting traditional temple motifs, filigree antique bangles, and festive jhumkas."
              alignment="left"
              className="mb-0"
            />
            <Link
              to="/collections"
              className="text-xs font-semibold uppercase tracking-wider text-[#18372F] hover:text-[#A98A50] transition-colors inline-flex items-center gap-1.5 self-start md:self-end pb-2 whitespace-nowrap"
            >
              <span>View All Catalogue Items</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={handleEnquire}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: JEWELLERY INSPIRATION */}
      <section className="relative py-20 lg:py-28 bg-[#18372F] text-white overflow-hidden border-b border-[#C6A66B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C6A66B] font-semibold block">
                Occasions & Celebrations
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-4xl font-serif font-medium leading-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                Jewellery Created for Life’s Memorable Milestones.
              </h2>
              <p className="text-sm sm:text-base text-[#F8F5EF]/80 leading-relaxed">
                From South Indian weddings and auspicious festivals to birthdays, anniversaries, and personal milestones, fine jewellery marks the moments we hold closest. Visit our Kottivakkam showroom to discuss your occasion and find a piece that honours the celebration.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-[#F8F5EF]/90">
                <div className="p-3 bg-white/5 border border-white/10">
                  <span className="block font-semibold text-[#C6A66B] mb-0.5">Weddings & Bridal</span>
                  <span className="text-xs text-[#F8F5EF]/70">Haarams, chokers & kadas</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10">
                  <span className="block font-semibold text-[#C6A66B] mb-0.5">Festive Celebrations</span>
                  <span className="text-xs text-[#F8F5EF]/70">Diwali, Pongal & Akshaya Tritiya</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10">
                  <span className="block font-semibold text-[#C6A66B] mb-0.5">Daily Elegance</span>
                  <span className="text-xs text-[#F8F5EF]/70">Lightweight bangles & studs</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10">
                  <span className="block font-semibold text-[#C6A66B] mb-0.5">Gifting Moments</span>
                  <span className="text-xs text-[#F8F5EF]/70">Coins, pendants & keepsakes</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/collections"
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#18372F] bg-[#C6A66B] hover:bg-white transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Themes & Designs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-[#102520] p-3 border border-[#C6A66B]/30 shadow-xl">
                <img
                  src="/src/assets/images/gold_necklace_temple_1792309472783.jpg"
                  alt="Intricate South Indian temple gold necklace"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY VISIT THE SHOWROOM? */}
      <section className="py-16 lg:py-24 bg-[#F8F5EF] border-b border-[#E9E1D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="In-Store Experience"
            title="Experience Jewellery in Person"
            subtitle="There is no substitute for holding fine gold jewellery, examining the intricacy of hand-tooling, and receiving thoughtful personal guidance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-[#E9E1D4] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center text-[#18372F]">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#18372F]">
                Examine Details Closely
              </h3>
              <p className="text-xs text-[#282823]/70 leading-relaxed">
                Appreciate the texture, weight, filigree wirework, and stone settings under proper showroom lighting before making a decision.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E9E1D4] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center text-[#18372F]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#18372F]">
                Personal Attention
              </h3>
              <p className="text-xs text-[#282823]/70 leading-relaxed">
                Receive unhurried, respectful assistance tailored to your personal aesthetic preferences, sizing requirements, and budget.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E9E1D4] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center text-[#18372F]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#18372F]">
                Transparent Discussion
              </h3>
              <p className="text-xs text-[#282823]/70 leading-relaxed">
                Discuss metal purity, daily gold market rates, making charges, and hallmarking details openly with our showroom staff.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E9E1D4] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F8F5EF] border border-[#E9E1D4] flex items-center justify-center text-[#18372F]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#18372F]">
                Kottivakkam Location
              </h3>
              <p className="text-xs text-[#282823]/70 leading-relaxed">
                Conveniently situated on East Coast Road in Chennai, easily reachable for residents of Thiruvanmiyur, Adyar, and the ECR corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: VISIT OUR STORE (Address, phone, hours, Google Maps) */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E9E1D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Showroom Location"
            title="Visit Prakash Jewellers"
            subtitle="Plan your visit to our Kottivakkam showroom. We look forward to welcoming you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <StoreInfo />
            </div>

            <div className="lg:col-span-7 h-full min-h-[380px]">
              <MapSection className="h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CUSTOMER REVIEWS (Transparent client listing data) */}
      <section className="py-16 lg:py-20 bg-[#F8F5EF] border-b border-[#E9E1D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#A98A50] font-semibold block">
            Verified Listing
          </span>

          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#18372F]">
            Customer Experiences
          </h2>

          <div className="p-8 bg-white border border-[#E9E1D4] max-w-xl mx-auto shadow-xs space-y-4">
            <div className="flex items-center justify-center gap-1.5 text-[#C6A66B]">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <Star className="w-5 h-5 fill-current opacity-60" />
            </div>

            <div className="space-y-1">
              <p className="text-3xl font-serif font-medium text-[#18372F] tabular-nums">
                {BUSINESS_INFO.googleReviews.rating} <span className="text-base text-[#282823]/60">/ 5.0</span>
              </p>
              <p className="text-xs text-[#282823]/70">
                Based on {BUSINESS_INFO.googleReviews.reviewCount} customer ratings on Google Business
              </p>
            </div>

            <p className="text-xs text-[#282823]/60 italic max-w-sm mx-auto leading-relaxed pt-2 border-t border-[#E9E1D4]">
              "{BUSINESS_INFO.googleReviews.sourceNotice}"
            </p>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.maps.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#18372F] text-white hover:bg-[#102520] transition-colors"
              >
                <span>Read Google Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CONTACT AND ENQUIRY CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A98A50] font-semibold block">
                Get In Touch
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#18372F] leading-tight">
                Looking for Something Special?
              </h2>

              <p className="text-base text-[#282823]/80 leading-relaxed">
                Get in touch with Prakash Jewellers or visit our showroom in Kottivakkam, Chennai. Whether you have inquiries regarding design styles, purity verification, or showroom timings, we are here to assist.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={BUSINESS_INFO.phone.telUri}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#18372F] hover:bg-[#102520] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call the Showroom: {BUSINESS_INFO.phone.display}</span>
                </a>
                <br />
                <a
                  href={BUSINESS_INFO.maps.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#18372F] bg-[#E9E1D4] hover:bg-[#E9E1D4]/80 transition-colors inline-flex items-center justify-center gap-2 mt-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions to Kottivakkam</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F8F5EF] p-6 sm:p-8 border border-[#E9E1D4]">
              <h3 className="text-lg font-serif font-medium text-[#18372F] mb-1">
                Send an Enquiry
              </h3>
              <p className="text-xs text-[#282823]/70 mb-5">
                Submit your contact details and jewellery interests. Enquiries are recorded for showroom follow-up.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Product Enquiry Modal */}
      <EnquiryModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
};
