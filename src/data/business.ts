/**
 * Business Information Source of Truth: Prakash Jewellers
 * All verified information supplied by the client is stored here.
 * Any missing or tentative information is clearly designated as editable placeholders.
 */

export interface BusinessDetails {
  name: string;
  category: string;
  tagline: string;
  address: {
    line1: string;
    colony: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
  };
  phone: {
    display: string;
    telUri: string;
    note: string;
  };
  googleReviews: {
    rating: number;
    reviewCount: number;
    maxRating: number;
    sourceNotice: string;
    profileUrlPlaceholder: string;
  };
  hours: {
    closingTime: string;
    displayText: string;
    note: string;
    schedule: { day: string; hours: string }[];
  };
  maps: {
    searchUrl: string;
    embedQuery: string;
    landmarkNotice: string;
  };
  demonstrationDisclaimer: string;
  missingInformationChecklist: {
    id: string;
    item: string;
    status: 'Pending Client Confirmation' | 'Verified';
    details: string;
  }[];
}

export const BUSINESS_INFO: BusinessDetails = {
  name: "PRAKASH JEWELLERS",
  category: "Jewellery Store",
  tagline: "Jewellery for Every Beautiful Moment",
  address: {
    line1: "1, 65, East Coast Road",
    colony: "New Colony",
    area: "Kottivakkam",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600041",
    country: "India",
    fullFormatted: "1, 65, East Coast Road, New Colony, Kottivakkam, Chennai, Tamil Nadu 600041, India"
  },
  phone: {
    display: "044 2451 1625",
    telUri: "tel:+914424511625",
    note: "Landline phone for direct showroom enquiries and appointment requests."
  },
  googleReviews: {
    rating: 4.1,
    reviewCount: 13,
    maxRating: 5.0,
    sourceNotice: "Client-supplied Google Business listing figures (4.1/5 from 13 reviews). Must be rechecked and connected to the official Google Business profile before live domain launch.",
    profileUrlPlaceholder: "https://www.google.com/maps/search/?api=1&query=Prakash+Jewellers+1+65+East+Coast+Road+Kottivakkam+Chennai+600041"
  },
  hours: {
    closingTime: "9:00 PM",
    displayText: "Open daily until 9:00 PM",
    note: "Closing time supplied by client. Daily opening hours subject to confirmation before launch.",
    schedule: [
      { day: "Monday – Saturday", hours: "10:30 AM – 9:00 PM (To be confirmed)" },
      { day: "Sunday", hours: "11:00 AM – 8:30 PM (To be confirmed)" }
    ]
  },
  maps: {
    searchUrl: "https://www.google.com/maps/search/?api=1&query=Prakash+Jewellers+1+65+East+Coast+Road+Kottivakkam+Chennai+Tamil+Nadu+600041",
    embedQuery: "1, 65, East Coast Road, New Colony, Kottivakkam, Chennai, Tamil Nadu 600041",
    landmarkNotice: "Located prominently along East Coast Road (ECR) in New Colony, Kottivakkam, easily accessible from Thiruvanmiyur and Palavakkam."
  },
  demonstrationDisclaimer: "Notice: The jewellery pieces and visual previews on this website represent sample demonstration designs for showroom presentation. Actual showroom stock, weights, purities, and availability must be confirmed directly with Prakash Jewellers at the Kottivakkam showroom.",
  missingInformationChecklist: [
    {
      id: "hours",
      item: "Exact Daily Opening Hours",
      status: "Pending Client Confirmation",
      details: "Client confirmed closing time is 9:00 PM; specific daily opening times (e.g. 10:00 AM or 10:30 AM) need final sign-off."
    },
    {
      id: "catalog",
      item: "Showroom Inventory Confirmation",
      status: "Pending Client Confirmation",
      details: "Temporary showcase uses Gold Jewellery sample designs. Verified categories and product images to be uploaded upon receipt from owner."
    },
    {
      id: "email_whatsapp",
      item: "Official Email & WhatsApp Channel",
      status: "Pending Client Confirmation",
      details: "No email or WhatsApp assumed. Landline (044 2451 1625) is currently the only verified telephone point of contact."
    },
    {
      id: "google_profile",
      item: "Direct Google Business Profile Link",
      status: "Pending Client Confirmation",
      details: "Client provided 4.1 rating (13 reviews). Final profile URL to be synced once Google Business access is verified."
    },
    {
      id: "story",
      item: "Showroom Heritage / Owner Background",
      status: "Pending Client Confirmation",
      details: "No fabricated claims, founding years, or awards used. Clean, authentic showroom introduction provided pending owner interview."
    }
  ]
};
