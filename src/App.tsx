import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { DemonstrationBanner } from './components/DemonstrationBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { CollectionDetails } from './pages/CollectionDetails';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { Visit } from './pages/Visit';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

// Scroll to top automatically on route transitions
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F8F5EF] text-[#282823] antialiased selection:bg-[#C6A66B]/30 selection:text-[#18372F]">
        {/* Slim dismissible top notice for demonstration catalogue preview */}
        <DemonstrationBanner />

        {/* 3-zone Header Navigation */}
        <Navbar />

        {/* Main Content Viewport */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:slug" element={<CollectionDetails />} />
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Unified Editorial Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
