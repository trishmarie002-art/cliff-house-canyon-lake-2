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
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/de20e643-2eab-4685-b377-39519e624764.jpeg?im_w=1600",
    alt: "Panoramic multi-level cliffside decks overlooking turquoise water at Canyon Lake",
    title: "Cliffside Waterfront Exterior & Decks",
    category: "views",
    featured: true,
  },
  {
    id: "sunset-deck",
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/a73c509d-2758-4898-914c-65fa01cf3459.jpeg?im_w=1600",
    alt: "Upper deck lounge with sunset views over Canyon Lake",
    title: "Golden Hour on Upper Sunset Deck",
    category: "views",
    featured: true,
  },
  {
    id: "private-hot-tub",
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/a675ff01-d780-4db9-a590-f66aec4459c4.jpeg?im_w=1600",
    alt: "Private hot tub on lower deck lit by string lights with lake views",
    title: "Cliffside Hot Tub & Spa",
    category: "outdoor",
    featured: true,
  },
  {
    id: "living-room",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-1040656905837979838/original/b9b036ac-f18c-46c2-a271-e34f7ff98c16.jpeg?im_w=1600",
    alt: "Spacious open living room with floor-to-ceiling windows showing water",
    title: "Open-Concept Grand Living Area",
    category: "interior",
    featured: true,
  },
  {
    id: "kitchen-dining",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-1040656905837979838/original/857113a1-8546-4f68-915b-113461b88eec.jpeg?im_w=1600",
    alt: "Gourmet kitchen with island, stainless steel appliances, and lake views",
    title: "Fully Equipped Gourmet Kitchen",
    category: "interior",
    featured: false,
  },
  {
    id: "firepit-lakeside",
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/de20e643-2eab-4685-b377-39519e624764.jpeg?im_w=1600",
    alt: "Lakeside firepit with Adirondack seating overlooking Canyon Lake water",
    title: "Waterfront Firepit & Stargazing Lounge",
    category: "outdoor",
    featured: true,
  },
  {
    id: "master-bedroom",
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/a73c509d-2758-4898-914c-65fa01cf3459.jpeg?im_w=1600",
    alt: "Primary suite with King bed, crisp linens, and lakefront deck access",
    title: "Primary King Suite with Deck Access",
    category: "bedrooms",
    featured: true,
  },
  {
    id: "bedroom-2",
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/a675ff01-d780-4db9-a590-f66aec4459c4.jpeg?im_w=1600",
    alt: "Second bedroom with Queen bed and stylish Texas Hill Country accent decor",
    title: "Guest Room 2 (Queen Bed)",
    category: "bedrooms",
    featured: false,
  },
  {
    id: "bedroom-bunks",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-1040656905837979838/original/b9b036ac-f18c-46c2-a271-e34f7ff98c16.jpeg?im_w=1600",
    alt: "Third bedroom with comfortable multi-bed bunk setup for family & friends",
    title: "Bunk Suite (Multiple Beds for Groups)",
    category: "bedrooms",
    featured: false,
  },
  {
    id: "outdoor-dining",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-1040656905837979838/original/857113a1-8546-4f68-915b-113461b88eec.jpeg?im_w=1600",
    alt: "Al fresco outdoor dining table set on deck overlooking turquoise water",
    title: "Al Fresco Deck Dining",
    category: "outdoor",
    featured: false,
  },
  {
    id: "grill-station",
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/de20e643-2eab-4685-b377-39519e624764.jpeg?im_w=1600",
    alt: "Outdoor barbecue station on deck next to outdoor lounge",
    title: "Outdoor Grill & Barbecue Station",
    category: "outdoor",
    featured: false,
  },
  {
    id: "bathroom-master",
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/a73c509d-2758-4898-914c-65fa01cf3459.jpeg?im_w=1600",
    alt: "Modern bathroom with walk-in glass shower and dual vanity",
    title: "Luxury Bathroom Suite",
    category: "interior",
    featured: false,
  },
  {
    id: "lake-water-access",
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/a675ff01-d780-4db9-a590-f66aec4459c4.jpeg?im_w=1600",
    alt: "Direct waterfront line and turquoise crystal clear water at Canyon Lake",
    title: "Direct Canyon Lake Water Access",
    category: "views",
    featured: false,
  },
  {
    id: "coffee-bar",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-1040656905837979838/original/b9b036ac-f18c-46c2-a271-e34f7ff98c16.jpeg?im_w=1600",
    alt: "Morning coffee station in gourmet kitchen",
    title: "Complimentary Coffee & Tea Bar",
    category: "interior",
    featured: false,
  },
  {
    id: "sunset-water",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-1040656905837979838/original/857113a1-8546-4f68-915b-113461b88eec.jpeg?im_w=1600",
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
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/de20e643-2eab-4685-b377-39519e624764.jpeg?im_w=1600",
    features: ["Private slider deck access", "En-suite bathroom", "Ultra-plush mattress", "Blackout shades", "HD Smart TV"],
  },
  {
    id: "bedroom-2",
    name: "Bedroom 2 — Queen & Twin Suite",
    subtitle: "Main Level • Serene Wooded View",
    beds: ["1 Queen Bed", "1 Twin Daybed"],
    capacity: 3,
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/a73c509d-2758-4898-914c-65fa01cf3459.jpeg?im_w=1600",
    features: ["Premium memory foam mattress", "Direct access to full bathroom", "Spacious closet space", "Reading nook"],
  },
  {
    id: "bunk-suite",
    name: "Bedroom 3 — Hill Country Bunkroom",
    subtitle: "Lower Level • Ideal for Families & Friends",
    beds: ["1 Queen Bed", "2 Twin Bunks", "1 Trundle"],
    capacity: 5,
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/a675ff01-d780-4db9-a590-f66aec4459c4.jpeg?im_w=1600",
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

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Sarah M.",
    location: "Austin, Texas",
    date: "July 2026",
    rating: 5,
    comment: "Cliff House is absolute paradise! The views from the upper deck during sunset take your breath away. We brought our family of 8 and there was so much space for everyone. The hot tub at night under the stars overlooking Canyon Lake was the highlight of our summer!",
    stayDate: "Stayed 4 nights",
    tags: ["Family Trip", "Unbeatable Lake Views", "Hot Tub"]
  },
  {
    id: "rev-2",
    author: "David & Rachel K.",
    location: "Houston, Texas",
    date: "June 2026",
    rating: 5,
    comment: "Richard is truly a Superhost. Check-in was seamless, the home was immaculate, and every little detail was thought of—from the coffee bar to the firepit wood. Watching the sunrise from bed in the master suite was unforgettable.",
    stayDate: "Stayed 3 nights",
    tags: ["Superhost Richard", "Couples Retreat", "Clean & Immaculate"]
  },
  {
    id: "rev-3",
    author: "Marcus T.",
    location: "Dallas, Texas",
    date: "May 2026",
    rating: 5,
    comment: "We rented Cliff House for a weekend friend reunion. The layout is perfect for 10 people—7 beds made sleeping arrangements so comfortable. We grilled out every evening on the deck and swam in the lake during the day. We are already booking our next stay!",
    stayDate: "Stayed 3 nights",
    tags: ["Friends Reunion", "Barbecue & Grill", "Spacious Layout"]
  },
  {
    id: "rev-4",
    author: "Elena P.",
    location: "San Antonio, Texas",
    date: "April 2026",
    rating: 5,
    comment: "If you want the best lake view in Canyon Lake, this is it. The multi-tiered decks give you 180-degree water views. Perfect location near Whitewater Amphitheater and Guadalupe River tubing too!",
    stayDate: "Stayed 2 nights",
    tags: ["Location", "Sunset Decks", "Waterfront Access"]
  }
];

export const AREA_ATTRACTIONS: AreaAttraction[] = [
  {
    id: "canyon-lake-marina",
    name: "Canyon Lake Marina & Boat Rentals",
    category: "water",
    distance: "5 min drive (2.1 miles)",
    description: "Rent pontoon boats, jet skis, kayak, or paddleboards for a day on the crystal blue reservoir.",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-1040656905837979838/original/b9b036ac-f18c-46c2-a271-e34f7ff98c16.jpeg?im_w=1600"
  },
  {
    id: "guadalupe-tubing",
    name: "Guadalupe River Tube Chute",
    category: "water",
    distance: "10 min drive (5.4 miles)",
    description: "The classic Texas Hill Country tradition! Float down the cool waters of the Guadalupe River.",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-1040656905837979838/original/857113a1-8546-4f68-915b-113461b88eec.jpeg?im_w=1600"
  },
  {
    id: "whitewater-amphitheater",
    name: "Whitewater Amphitheater",
    category: "entertainment",
    distance: "12 min drive (6.8 miles)",
    description: "Iconic outdoor music venue right on the Guadalupe River featuring major national artists.",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/de20e643-2eab-4685-b377-39519e624764.jpeg?im_w=1600"
  },
  {
    id: "overlook-park",
    name: "Canyon Lake Overlook Park & Dam",
    category: "nature",
    distance: "8 min drive (4.2 miles)",
    description: "Walk across the massive dam with sweeping views of the lake spillway and limestone cliffs.",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/a73c509d-2758-4898-914c-65fa01cf3459.jpeg?im_w=1600"
  },
  {
    id: "hill-country-wineries",
    name: "Dry Comal Creek & Hill Country Wineries",
    category: "dining",
    distance: "15 min drive (10.5 miles)",
    description: "Discover local Texas boutique wineries, craft breweries, and authentic Hill Country barbecue spots.",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/a675ff01-d780-4db9-a590-f66aec4459c4.jpeg?im_w=1600"
  }
];

export const FAQS = [
  {
    q: "What is the guest capacity and sleeping layout?",
    a: "Cliff House comfortably accommodates up to 10 guests across 3 spacious bedrooms with a total of 7 beds (King master bedroom, Queen + Twin room, and a bunk suite with Queen, Bunks, and Trundle), plus 2.5 bathrooms."
  },
  {
    q: "How does check-in work?",
    a: "Check-in is keyless and seamless! You will receive a unique smart lock access code 24 hours prior to check-in. Standard check-in is at 4:00 PM and check-out is at 11:00 AM."
  },
  {
    q: "Is there direct water access?",
    a: "Yes! Cliff House sits directly on the limestone shoreline of Canyon Lake. Steps lead down from the lower firepit deck directly to the water for swimming, paddleboarding, or relaxing."
  },
  {
    q: "How do I check dates and complete a booking?",
    a: "All reservations, real-time availability, pricing calculations, and secure payments are processed exclusively through our official Airbnb listing to protect guests. Click any 'Book on Airbnb' button to select your dates."
  },
  {
    q: "What is your W.O.R.D. permit status?",
    a: "Cliff House operates in full compliance with local Texas Hill Country regulations under Water Orientated Recreation District of Comal County Permit #L1891."
  }
];
