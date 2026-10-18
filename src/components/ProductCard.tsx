import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { JewelleryProduct } from '../data/products';

interface ProductCardProps {
  product: JewelleryProduct;
  onEnquire?: (product: JewelleryProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  return (
    <article className="group flex flex-col bg-white border border-[#E9E1D4] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      {/* Product Image on Neutral Solid Backdrop */}
      <Link
        to={`/product/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#F8F5EF]"
      >
        <img
          src={product.image}
          alt={product.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
        />
        {/* Subtle Demonstration Overlay Note */}
        <div className="absolute top-3 left-3 bg-[#18372F]/85 backdrop-blur-xs text-[#F8F5EF] text-[10px] tracking-widest uppercase px-2 py-0.5 font-medium">
          Demonstration Model
        </div>
      </Link>

      {/* Card Content & Metadata */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Clean Unboxed Metadata with Typographic Separator */}
          <div className="flex items-center gap-1.5 text-xs text-[#A98A50] uppercase tracking-wider font-medium mb-1.5">
            <span>{product.categoryName}</span>
            <span aria-hidden="true">·</span>
            <span>{product.sku}</span>
          </div>

          <Link to={`/product/${product.slug}`}>
            <h3 className="font-serif text-lg font-medium text-[#18372F] group-hover:text-[#A98A50] transition-colors leading-snug">
              {product.title}
            </h3>
          </Link>

          <p className="mt-2 text-xs text-[#282823]/70 line-clamp-2 leading-relaxed">
            {product.subheading}
          </p>

          {/* Specifications notice */}
          <div className="mt-3 pt-3 border-t border-[#E9E1D4]/60 flex items-center justify-between text-[11px] text-[#282823]/60">
            <span>{product.specifications.purityIndication}</span>
            <span>{product.specifications.designStyle}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-3 border-t border-[#E9E1D4] flex items-center justify-between gap-3">
          <Link
            to={`/product/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#18372F] hover:text-[#A98A50] transition-colors uppercase tracking-wider py-1.5"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => onEnquire && onEnquire(product)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#F8F5EF] hover:bg-[#E9E1D4] text-[#18372F] border border-[#E9E1D4] transition-colors uppercase tracking-wider"
          >
            <MessageSquare className="w-3 h-3 text-[#A98A50]" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </article>
  );
};
