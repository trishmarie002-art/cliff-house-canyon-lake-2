import { PropertyInfo, GalleryImage, BedroomLayout, AmenityCategory, ReviewItem, AreaAttraction } from '../types';

export const PROPERTY_INFO: PropertyInfo = {
  name: "Cliff House at Canyon Lake",
  tagline: "Your Private Front-Row Seat to Canyon Lake",
  location: "Canyon Lake, Texas",
  subLocation: "Texas Hill Country Waterfront Escape",
  guestsMax: 10,
  bedroomsCount: 3,
  bedsCount: 7,
  bathroomsCount: 2.5,
  rating: 4.95,
  reviewCount: 98,
  hostName: "Richard",
  hostStatus: "Airbnb Superhost",
  permitNumber: "W.O.R.D. Permit #L1891",
  airbnbUrl: "https://www.airbnb.com/rooms/1040656905837979838?unique_share_id=1969906b-75c6-4522-9134-bbb38375fb07&viralityEntryPoint=1&s=76&source_impression_id=p3_1786052731_P3autKkSKyf3clK1",
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "hero-view",
    src: "https://lh3.googleusercontent.com/pw/AP1GczMvwXt4uhGX5rgx_sFDI1dSMmpfXrodCt_7lYV5mLmv-kepNvqp1QqQIKkvABD5XR7ImroYEdZofV2jLvJ-LjxmQllfsFNOORUlpJ49zSXeNbcLfqw=w1600",
    alt: "Panoramic multi-level cliffside decks overlooking turquoise water at Canyon Lake",
    title: "Cliffside Waterfront Exterior & Decks",
    category: "views",
    featured: true,
  },
  {
    id: "sunset-deck",
    src: "https://lh3.googleusercontent.com/pw/AP1GczNRQIPR_AUH5tZY1tKBIufjvA9MtUmPeDi5UGs4Opr26eMhgIguYPgV0BiI358Q85Lf6FtGPDAYFQkrZ9ED2OQBxPJAfbPRlYCJx44cbKWx_2DBX2Y=w1600",
    alt: "Upper deck lounge with sunset views over Canyon Lake",
    title: "Golden Hour on Upper Sunset Deck",
    category: "views",
    featured: true,
  },
  {
    id: "private-hot-tub",
    src: "https://lh3.googleusercontent.com/pw/AP1GczM_7LM5iPOobOQ6tYttoS7YDHfwcOMm16FYsyrTzqFdmIuQAEgRmDykxxyvAFHLS_W40SDrelzQl7I4nluoYfvq_Ck5ddk7VVX7KwUFPOuTuXGMEyM=w1600",
    alt: "Private hot tub on lower deck lit by string lights with lake views",
    title: "Cliffside Hot Tub & Spa",
    category: "outdoor",
    featured: true,
  },
  {
    id: "living-room",
    src: "https://lh3.googleusercontent.com/pw/AP1GczPjYOHi5XioQJOFUi9tyzIa9b2a2NJykVpdfolfYyVxDfCx8LmJ8jRQwXo3_xc18m1Qi31U7EgC-x1o3jz7fW9of1PAEz5GSQYcOYhgTYmlrJTKZBE=w1600",
    alt: "Spacious open living room with floor-to-ceiling windows showing water",
    title: "Open-Concept Grand Living Area",
    category: "interior",
    featured: true,
  },
  {
    id: "kitchen-dining",
    src: "https://lh3.googleusercontent.com/pw/AP1GczMo-iIxVyVZjXv1yeXPpfO5icjLnw1Kw7hG-ryfbk3NW5V_eyO3TynAn2TPvz8Js5Vh-9A23dU7k5NTzS5e36UUW1B3DzgdpaF16MsKZbtyvR7kXpY=w1600",
    alt: "Gourmet kitchen with island, stainless steel appliances, and lake views",
    title: "Fully Equipped Gourmet Kitchen",
    category: "interior",
    featured: false,
  },
  {
    id: "firepit-lakeside",
    src: "https://lh3.googleusercontent.com/pw/AP1GczP0uLcO-R2Sbupc1JclMWeCVLRefEXW7HWCyhtYvG-y_3X7FHVHOkZSgvtqw3JR0213JaqpaglsiVRJ7xYwCvkW-QDH2FhRlGp3QtpnpRyrTvwkQ74=w1600",
    alt: "Lakeside firepit with Adirondack seating overlooking Canyon Lake water",
    title: "Waterfront Firepit & Stargazing Lounge",
    category: "outdoor",
    featured: true,
  },
  {
    id: "master-bedroom",
    src: "https://lh3.googleusercontent.com/pw/AP1GczO_KkzDH1ir-bZ_E5BsMHLZ6yPT1-_TcWtU74XkzhKS0qP3XyMHBDZYOBM0-nq18L5ee4zDPHGLKamuDwMexn88051BuKHiIrfn1PxBlc-3a7--Uus=w1600",
    alt: "Primary suite with King bed, crisp linens, and lakefront deck access",
    title: "Primary King Suite with Deck Access",
    category: "bedrooms",
    featured: true,
  },
  {
    id: "bedroom-2",
    src: "https://lh3.googleusercontent.com/pw/AP1GczNKl6eoLOfHpLqB1r2dXXCnk6U8aBNM0-NMQiVCYYRO92oi-LpTTsqHeB8RFm-40LhoAmJnvPS-y_MD2babA-1CS6HfP_FTCN1iUHjsCpx2DhVto9E=w1600",
    alt: "Second bedroom with Queen bed and stylish Texas Hill Country accent decor",
    title: "Guest Room 2 (Queen Bed)",
    category: "bedrooms",
    featured: false,
  },
  {
    id: "bedroom-bunks",
    src: "https://lh3.googleusercontent.com/pw/AP1GczNlEWpJDnDAft8suKPW24x5sOAq3rWJK5J4R6oYKs1LBQ3J2TdjywSmNH2heupJftiFvcUl6nuE90PjPpXRE5xQGzMJFeYjM9KuwSZxg5cDgtz44mo=w1600",
    alt: "Third bedroom with comfortable multi-bed bunk setup for family & friends",
    title: "Bunk Suite (Multiple Beds for Groups)",
    category: "bedrooms",
    featured: false,
  },
  {
    id: "outdoor-dining",
    src: "https://lh3.googleusercontent.com/pw/AP1GczPyxq_KEYCUIMnT4ho-rJZ6Mm9oiHAieb-Qm0YbF5yFAMVwH9G50mibQUMUB-iT9KvwG4tN8d1aMVK9-GQ_-T3FZxyzKRbawFBXtkxk9AMvSb2Fc8s=w1600",
    alt: "Al fresco outdoor dining table set on deck overlooking turquoise water",
    title: "Al Fresco Deck Dining",
    category: "outdoor",
    featured: false,
  },
  {
    id: "grill-station",
    src: "https://lh3.googleusercontent.com/pw/AP1GczN1VQ24rj6CsSKooOVfDCX604KhCaVEGtGyJ38zvIG2asTzxfvMVF8BGTLIMNclo6PqucmPIdkxQ0-FWGrg4ygygKdna_hH0_tqCvkHVFGw_xA-dp0=w1600",
    alt: "Outdoor barbecue station on deck next to outdoor lounge",
    title: "Outdoor Grill & Barbecue Station",
    category: "outdoor",
    featured: false,
  },
  {
    id: "bathroom-master",
    src: "https://lh3.googleusercontent.com/pw/AP1GczPy0d43HEpcsXcNXE63fVH_GayjLjJPodXncTe6VNVo4DaRj_47sktozXglTWFS_LLTGWhLZMLu9qBxJUtiqWYM8_PZfxfKfRCa_3_1sgFhSawjf04=w1600",
    alt: "Modern bathroom with walk-in glass shower and dual vanity",
    title: "Luxury Bathroom Suite",
    category: "interior",
    featured: false,
  },
  {
    id: "lake-water-access",
    src: "https://lh3.googleusercontent.com/pw/AP1GczOB3E-vjq60fjYYGJpICbmtisRaMloikXSsf3IPzzDCVJF_rXGpNgErLVRJf5wKtjrRCtuqDDYA4TVa7L7TVBBpHyWeGgnNZpJMfiGLdR_BkrUkL_0=w1600",
    alt: "Direct waterfront line and turquoise crystal clear water at Canyon Lake",
    title: "Direct Canyon Lake Water Access",
    category: "views",
    featured: false,
  },
  {
    id: "coffee-bar",
    src: "https://lh3.googleusercontent.com/pw/AP1GczNI3iljSV3yqsGJ1UHJNEw-LMuIWtRj-L6OuVQVByKJlQyJww_yPVrDGPuheLiCRoP5Lh53gA0Eq_nREdc9aSHf8kOUp7xfgfhdH22PjZe3hoGPzJU=w1600",
    alt: "Morning coffee station in gourmet kitchen",
    title: "Complimentary Coffee & Tea Bar",
    category: "interior",
    featured: false,
  },
  {
    id: "sunset-water",
    src: "https://lh3.googleusercontent.com/pw/AP1GczPWTFAfqN9Dau2UrkxmNzCff5isFtWY-9jx1xGVjQ7_SXiw5Gy6d-DPiwrRYLEuOOyYosm7Nj3jfTwZbFSXL702mttaCl03v6imlVl8bgDvi3UasEg=w1600",
    alt: "Stunning Texas Hill Country sunset over calm lake waters",
    title: "Hill Country Sunset Horizons",
    category: "views",
    featured: false,
  },
];

export const BEDROOMS_DATA: BedroomLayout[] = [
  {
    id: "master-suite",
    name: "Bedroom 1 — Master Suite",
    subtitle: "Upper Level • Waterfront View",
    beds: ["1 King Bed"],
    capacity: 2,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMvwXt4uhGX5rgx_sFDI1dSMmpfXrodCt_7lYV5mLmv-kepNvqp1QqQIKkvABD5XR7ImroYEdZofV2jLvJ-LjxmQllfsFNOORUlpJ49zSXeNbcLfqw=w1600",
    features: ["Private slider deck access", "En-suite bathroom", "Ultra-plush mattress", "Blackout shades", "HD Smart TV"],
  },
  {
    id: "bedroom-2",
    name: "Bedroom 2 — Queen & Twin Suite",
    subtitle: "Main Level • Serene Wooded View",
    beds: ["1 Queen Bed", "1 Twin Daybed"],
    capacity: 3,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNRQIPR_AUH5tZY1tKBIufjvA9MtUmPeDi5UGs4Opr26eMhgIguYPgV0BiI358Q85Lf6FtGPDAYFQkrZ9ED2OQBxPJAfbPRlYCJx44cbKWx_2DBX2Y=w1600",
    features: ["Premium memory foam mattress", "Direct access to full bathroom", "Spacious closet space", "Reading nook"],
  },
  {
    id: "bunk-suite",
    name: "Bedroom 3 — Hill Country Bunkroom",
    subtitle: "Lower Level • Ideal for Families & Friends",
    beds: ["1 Queen Bed", "2 Twin Bunks", "1 Trundle"],
    capacity: 5,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM_7LM5iPOobOQ6tYttoS7YDHfwcOMm16FYsyrTzqFdmIuQAEgRmDykxxyvAFHLS_W40SDrelzQl7I4nluoYfvq_Ck5ddk7VVX7KwUFPOuTuXGMEyM=w1600",
    features: ["4 Total Beds", "High-capacity sleeping", "Board game library", "Adjacent to lower hot tub deck"],
  },
];

export const AMENITIES_DATA: AmenityCategory[] = [
  {
    id: "water-outdoor",
    title: "Outdoor & Waterfront Living",
    items: [
      { name: "Two Panoramic Decks", description: "Multi-level wood decks with dining table, lounge loungers, and 180° lake views.", icon: "Sun", highlight: true },
      { name: "Private Outdoor Hot Tub", description: "Year-round hot tub on cliffside lower deck with ambient LED lighting.", icon: "Sparkles", highlight: true },
      { name: "Lakeside Firepit", description: "Dedicated stone firepit with Adirondack chairs right above the water's edge.", icon: "Flame", highlight: true },
      { name: "BBQ Grill Station", description: "Propane grill with tools for outdoor steaks & sunset barbecues.", icon: "Utensils", highlight: true },
      { name: "Direct Lake Access", description: "Steps down to the shoreline for swimming, kayaking, and paddleboarding.", icon: "Waves", highlight: true },
    ]
  },
  {
    id: "kitchen-dining",
    title: "Kitchen & Gourmet Dining",
    items: [
      { name: "Chef's Kitchen", description: "Full size refrigerator, stove, oven, microwave, and dishwasher.", icon: "ChefHat", highlight: true },
      { name: "Coffee & Espresso Bar", description: "Keurig & drip coffee makers with complimentary gourmet pods & syrups.", icon: "Coffee" },
      { name: "Cookware & Bakeware", description: "Pots, pans, baking sheets, blender, toaster, and sharp knife set.", icon: "UtensilsCrossed" },
      { name: "Indoor & Outdoor Dining", description: "Large dining table seating 8+ plus barstools and deck outdoor table.", icon: "Table" },
    ]
  },
  {
    id: "comfort-tech",
    title: "Comfort, Tech & Convenience",
    items: [
      { name: "High-Speed Wi-Fi", description: "Fast reliable wireless internet for streaming & remote work.", icon: "Wifi", highlight: true },
      { name: "Smart TVs", description: "Living room & bedroom 4K TVs with Netflix, Hulu, Prime Video.", icon: "Tv" },
      { name: "Central HVAC & Heating", description: "Nest-controlled central air conditioning & heating.", icon: "Thermometer" },
      { name: "Washer & Dryer", description: "Full size in-unit laundry with detergent provided.", icon: "Shirt" },
      { name: "Self Check-in", description: "Keyless entry via secure smart lock with private access code.", icon: "KeyRound" },
      { name: "Free On-Site Parking", description: "Private driveway with space for up to 4 vehicles or boat trailer.", icon: "Car" },
    ]
  },
  {
    id: "safety-services",
    title: "Safety & Host Services",
    items: [
      { name: "Superhost Support", description: "Attentive 24/7 guest support from host Richard.", icon: "Award" },
      { name: "Licensed & Permitted", description: "Official W.O.R.D. Permit #L1891 compliance.", icon: "ShieldCheck" },
      { name: "Smoke & CO Detectors", description: "Safety equipped throughout all levels.", icon: "BellRing" },
      { name: "First Aid & Extinguisher", description: "Fully stocked safety kit on site.", icon: "LifeBuoy" },
    ]
  }
];

// Individual review text remains on Airbnb so the site never displays invented or stale quotes.
export const REVIEWS_DATA: ReviewItem[] = [];

export const AREA_ATTRACTIONS: AreaAttraction[] = [
  {
    id: "canyon-lake-marina",
    name: "Canyon Lake Marina & Boat Rentals",
    category: "water",
    distance: "5 min drive (2.1 miles)",
    description: "Rent pontoon boats, jet skis, kayak, or paddleboards for a day on the crystal blue reservoir.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczPjYOHi5XioQJOFUi9tyzIa9b2a2NJykVpdfolfYyVxDfCx8LmJ8jRQwXo3_xc18m1Qi31U7EgC-x1o3jz7fW9of1PAEz5GSQYcOYhgTYmlrJTKZBE=w1600"
  },
  {
    id: "guadalupe-tubing",
    name: "Guadalupe River Tube Chute",
    category: "water",
    distance: "10 min drive (5.4 miles)",
    description: "The classic Texas Hill Country tradition! Float down the cool waters of the Guadalupe River.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMo-iIxVyVZjXv1yeXPpfO5icjLnw1Kw7hG-ryfbk3NW5V_eyO3TynAn2TPvz8Js5Vh-9A23dU7k5NTzS5e36UUW1B3DzgdpaF16MsKZbtyvR7kXpY=w1600"
  },
  {
    id: "whitewater-amphitheater",
    name: "Whitewater Amphitheater",
    category: "entertainment",
    distance: "12 min drive (6.8 miles)",
    description: "Iconic outdoor music venue right on the Guadalupe River featuring major national artists.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczP0uLcO-R2Sbupc1JclMWeCVLRefEXW7HWCyhtYvG-y_3X7FHVHOkZSgvtqw3JR0213JaqpaglsiVRJ7xYwCvkW-QDH2FhRlGp3QtpnpRyrTvwkQ74=w1600"
  },
  {
    id: "overlook-park",
    name: "Canyon Lake Overlook Park & Dam",
    category: "nature",
    distance: "8 min drive (4.2 miles)",
    description: "Walk across the massive dam with sweeping views of the lake spillway and limestone cliffs.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczO_KkzDH1ir-bZ_E5BsMHLZ6yPT1-_TcWtU74XkzhKS0qP3XyMHBDZYOBM0-nq18L5ee4zDPHGLKamuDwMexn88051BuKHiIrfn1PxBlc-3a7--Uus=w1600"
  },
  {
    id: "hill-country-wineries",
    name: "Dry Comal Creek & Hill Country Wineries",
    category: "dining",
    distance: "15 min drive (10.5 miles)",
    description: "Discover local Texas boutique wineries, craft breweries, and authentic Hill Country barbecue spots.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczNKl6eoLOfHpLqB1r2dXXCnk6U8aBNM0-NMQiVCYYRO92oi-LpTTsqHeB8RFm-40LhoAmJnvPS-y_MD2babA-1CS6HfP_FTCN1iUHjsCpx2DhVto9E=w1600"
  }
];

export const FAQS = [
  {
    q: "What is the guest capacity and sleeping layout?",
    a: "The Airbnb listing confirms that Cliff House accommodates up to 10 guests and has 3 bedrooms, 7 beds, and 2.5 bathrooms. View the Airbnb listing for the current room-by-room sleeping arrangement."
  },
  {
    q: "How does check-in work?",
    a: "The home offers self check-in with a smart lock. The Airbnb listing states check-in is after 4:00 PM and checkout is before 11:00 AM. Airbnb and the host will provide reservation-specific arrival instructions."
  },
  {
    q: "Is there direct water access?",
    a: "The Airbnb listing identifies the home as waterfront and right on Canyon Lake. Please review the listing and the host's arrival guidance for current shoreline conditions and safe access details."
  },
  {
    q: "How do I check dates and complete a booking?",
    a: "All reservations, real-time availability, pricing calculations, and secure payments are processed exclusively through our official Airbnb listing to protect guests. Click any 'Book on Airbnb' button to select your dates."
  },
  {
    q: "What is your W.O.R.D. permit status?",
    a: "Cliff House operates in full compliance with local Texas Hill Country regulations under Water Orientated Recreation District of Comal County Permit #L1891."
  },
  {
    q: "What amenities are confirmed on the Airbnb listing?",
    a: "The listing confirms a kitchen, Wi-Fi, free parking on the premises, a hot tub, two decks, a grill station, and a firepit overlooking the lake. Airbnb currently lists 45 amenities; open the official listing to see the complete, current list."
  },
  {
    q: "Are pets allowed?",
    a: "The public Airbnb page does not show a pet policy in the information available here. Please check the current house rules on Airbnb or message host Richard before booking."
  },
  {
    q: "What are the parking rules?",
    a: "The Airbnb listing confirms free parking on the premises, but it does not state a vehicle limit on the public page. Confirm the number and type of vehicles with the host through Airbnb before arrival."
  },
  {
    q: "What are the quiet hours and party rules?",
    a: "The public Airbnb page does not display those detailed house rules. Review the current house rules during booking and contact host Richard through Airbnb if you need clarification. The confirmed maximum occupancy is 10 guests."
  },
  {
    q: "Who hosts Cliff House?",
    a: "Cliff House is hosted by Richard, an Airbnb Superhost with three years of hosting experience. The listing shows a 100% response rate and says he responds within an hour."
  },
  {
    q: "What safety information does Airbnb show?",
    a: "Airbnb shows a smoke alarm and states that a carbon monoxide alarm has not been reported. Review the complete Safety & property section on Airbnb before booking."
  }
];
