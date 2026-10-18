import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Collections', path: '/collections' },
    { label: 'About Us', path: '/about' },
    { label: 'Visit Store', path: '/visit' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#E9E1D4] shadow-xs'
            : 'bg-[#F8F5EF] border-b border-[#E9E1D4]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element brand wordmark */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-serif tracking-[0.18em] text-[#18372F] font-semibold whitespace-nowrap shrink-0 hover:text-[#A98A50] transition-colors"
          >
            PRAKASH JEWELLERS
          </Link>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#282823]/80">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#18372F] ${
                    isActive
                      ? 'text-[#18372F] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#C6A66B]'
                      : 'text-[#282823]/75'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              to="/visit"
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#18372F] hover:bg-[#102520] transition-colors whitespace-nowrap shrink-0 border border-[#18372F]"
            >
              Visit Showroom
            </Link>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.phone.telUri}
              aria-label="Call Showroom"
              className="p-2 text-[#18372F] hover:text-[#A98A50] transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#18372F] hover:text-[#A98A50] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#F8F5EF] p-6 shadow-xl flex flex-col justify-between border-l border-[#E9E1D4]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E9E1D4]">
                <span className="font-serif text-lg tracking-widest text-[#18372F] font-semibold">
                  PRAKASH JEWELLERS
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-[#282823] hover:text-[#18372F]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `py-2 text-base font-medium transition-colors ${
                        isActive ? 'text-[#18372F] font-semibold pl-2 border-l-2 border-[#C6A66B]' : 'text-[#282823]/80'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E9E1D4] space-y-3">
              <Link
                to="/visit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-3 text-xs tracking-wider uppercase font-semibold text-white bg-[#18372F] hover:bg-[#102520] transition-colors"
              >
                Visit Showroom
              </Link>
              <a
                href={BUSINESS_INFO.phone.telUri}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs tracking-wider uppercase font-semibold text-[#18372F] bg-[#E9E1D4] hover:bg-[#E9E1D4]/80 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call: {BUSINESS_INFO.phone.display}
              </a>
              <p className="text-[11px] text-center text-[#282823]/60 pt-2">
                1, 65, East Coast Road, Kottivakkam, Chennai
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
