# Prakash Jewellers — Premium Jewellery Showroom Website

A modern, elegant, responsive website designed and developed for **Prakash Jewellers**, located on East Coast Road in Kottivakkam, Chennai, Tamil Nadu, India.

Built with React, Vite, Tailwind CSS, and React Router.

---

## 1. Verified Business Information (Source of Truth)

- **Business Name:** PRAKASH JEWELLERS
- **Category:** Jewellery Store
- **Showroom Address:** 1, 65, East Coast Road, New Colony, Kottivakkam, Chennai, Tamil Nadu 600041, India
- **Telephone (Verified):** 044 2451 1625 (`tel:+914424511625`)
- **Closing Time (Client-supplied):** 9:00 PM
- **Google Reviews (Client-supplied):** 4.1 / 5.0 (13 reviews)
- **Primary Purpose:** Establish a polished digital showroom presence, display handcrafted jewellery designs, and drive physical showroom visits and telephone enquiries. No e-commerce or online checkout.

---

## 2. Launch Verification Checklist (Missing Information Required Before Launch)

In compliance with strict truth-in-advertising guidelines, no claims regarding years of operation, proprietary manufacturing facilities, customer volume, owner biographies, or unconfirmed certifications were fabricated.

Before official publication and connecting to a live custom domain, the client should review and verify the following items:

| # | Information Item | Current Status | Action Required |
|---|------------------|----------------|-----------------|
| 1 | **Exact Daily Opening Hours** | Tentative (`10:30 AM`) | Confirm Monday–Sunday opening times to complement the confirmed 9:00 PM closing time. |
| 2 | **Actual Inventory & Photography** | Demonstration Models | Replace demonstration showcase pieces with high-resolution photographs of actual showroom inventory and verified hallmark details. |
| 3 | **Google Business Profile URL** | Search fallback query | Link the "Read Google Reviews" CTA directly to the verified Google Business Place ID/Profile URL. |
| 4 | **Official Customer Email** | Placeholder / Not assumed | Provide official customer support email if email enquiries are to be accepted. |
| 5 | **WhatsApp Concierge Number** | Not assumed from landline | Confirm if a dedicated WhatsApp Business number exists for customer inquiries. |
| 6 | **Owner Profile / Heritage** | Neutral editorial copy | Provide authentic founder background, year established, and showroom story if desired. |

---

## 3. Website Architecture & Routes

```
src/
├── assets/
│   └── images/              # High-fidelity jewellery & showroom photographs
├── components/
│   ├── DemonstrationBanner.tsx  # Slim preview notice for catalogue models
│   ├── EnquiryForm.tsx          # Accessible form with client-side validation & local persistence
│   ├── EnquiryModal.tsx         # Contextual modal for direct product inquiries
│   ├── Footer.tsx               # Editorial footer with business details & checklist modal
│   ├── MapSection.tsx           # Google Maps embed with fallback directions card
│   ├── Navbar.tsx               # 3-zone Top Bar Contract with mobile drawer
│   ├── ProductCard.tsx          # Zero-pill product card with unboxed metadata
│   ├── SectionHeading.tsx       # Serif display heading with balanced text wrap
│   └── StoreInfo.tsx            # Confirmed showroom address, phone, and hours card
├── data/
│   ├── business.ts          # Central source of truth for business information
│   └── products.ts          # Demonstration jewellery items and collection categories
├── pages/
│   ├── About.tsx            # Showroom values, philosophy, and authentic story
│   ├── CollectionDetails.tsx# Category-specific gallery view
│   ├── Collections.tsx      # Filterable & searchable jewellery catalogue
│   ├── Contact.tsx          # Click-to-call, Google Maps, and enquiry form
│   ├── Home.tsx             # 10 editorial sections (Hero, Intro, Grid, Inspiration, Reviews, etc.)
│   ├── PrivacyPolicy.tsx    # Comprehensive privacy disclosures for showroom visitors
│   ├── ProductDetails.tsx   # Product gallery, specifications, price note, and CTAs
│   └── Visit.tsx            # Landmark guidance, transit details, and interactive map
├── App.tsx                  # BrowserRouter, route definitions, and ScrollToTop
├── index.css                # Tailwind CSS v4 design tokens and typography rules
└── main.tsx                 # React entry point
```

---

## 4. Local Development & Build Instructions

### Installation

```bash
npm install
```

### Development Server

Runs on `http://localhost:3000`:

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

The output files will be compiled into the `dist/` directory.

### Linting / Type Checking

```bash
npm run lint
```
