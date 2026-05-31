import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Destination Aesthetics",
    tagline: "Enhance Your Natural Beauty Today",
    phone: "(916) 844-4913",
    phoneHref: "tel:+19168444913",
    email: "info@destinationaesthetics.com",
    address: "9200 E Stockton Blvd, Elk Grove, CA 95624",
    city: "Elk Grove",
    serviceAreas: ["El Dorado Hills", "Elk Grove", "Folsom", "Napa", "Roseville", "Sacramento"],
    license: "CA Medical License",
    since: "2006",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "navy",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "BOTOX® & Dysport®", desc: "Smooth away wrinkles and fine lines for a refreshed, youthful appearance.", urgent: false },
    { icon: "droplets", title: "Dermal Fillers", desc: "Restore volume, smooth lines, and enhance facial contours with expert precision.", urgent: false },
    { icon: "star", title: "Laser Skin Rejuvenation", desc: "Improve skin tone, texture, and clarity, reducing imperfections for radiant skin.", urgent: false },
    { icon: "heart", title: "HydraFacial®", desc: "Deeply cleanse, extract, and hydrate your skin for an instant glow and lasting health.", urgent: false },
    { icon: "scissors", title: "CoolSculpting® Elite", desc: "Freeze away stubborn fat cells for a more sculpted and contoured physique.", urgent: false },
    { icon: "thermometer", title: "Microneedling", desc: "Stimulate collagen production to improve skin texture, reduce scars, and minimize pores.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Folsom", stars: 5, text: "I had a HydraFacial® with Emily last month and my skin has never looked better! She was so gentle and knowledgeable, explaining every step. The glow lasted for weeks, and I've already booked my next appointment. Truly a fantastic experience and worth every penny!" },
    { name: "Mark T.", location: "Roseville", stars: 5, text: "The BOTOX® treatment at Destination Aesthetics was incredibly subtle and effective. Dr. Chen listened to my concerns and delivered natural-looking results. I feel so much more confident without looking 'done.' The staff was professional and made me feel completely at ease." },
    { name: "Jessica P.", location: "Elk Grove", stars: 5, text: "After trying CoolSculpting® Elite, I'm amazed at the difference in my stubborn areas. The team was supportive and made the process comfortable. It's been three months, and I can see a noticeable reduction. This place truly delivers on its promises!" }
  ],

  trustBadges: [
    "Board-Certified Practitioners", "Advanced Technology", "Personalized Care Plans", "5-Star Rated", "Award-Winning Medspa"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10000, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Expert Practitioners", desc: "Our team consists of highly trained and certified medical professionals." },
    { icon: "sparkles", title: "Personalized Treatments", desc: "We tailor every service to your unique aesthetic goals and needs." },
    { icon: "shield-check", title: "Safety & Comfort First", desc: "Your well-being is our top priority with state-of-the-art facilities." },
    { icon: "star", title: "Cutting-Edge Technology", desc: "Utilizing the latest advancements for superior, lasting results." },
    { icon: "thumbs-up", title: "Natural-Looking Results", desc: "Achieve a refreshed appearance that enhances your natural beauty." },
    { icon: "heart", title: "Exceptional Client Care", desc: "Experience a warm, welcoming environment from consultation to aftercare." }
  ],

  formServiceOptions: ["BOTOX® & Dysport®", "Dermal Fillers", "Laser Skin Rejuvenation", "HydraFacial®", "CoolSculpting® Elite", "Microneedling"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!