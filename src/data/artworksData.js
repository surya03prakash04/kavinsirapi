/**
 * Artworks portfolio data for Kavin Sirpi
 * All images correspond to real cement relief carvings.
 */

export const ARTWORK_CATEGORIES = [
  "All Works",
  "Elephant Sculptures",
  "Peacock & Nature Reliefs",
  "Religious & Traditional Art",
  "Custom Wall Murals",
  "Architectural Reliefs",
  "Sculpting Process"
];

export const ARTWORKS_DATA = [
  {
    id: "elephant-banyan-monument",
    title: "The Royal Tusker & Sacred Banyan",
    category: "Elephant Sculptures",
    image: "/images/hero-elephant-banyan.jpg",
    medium: "Direct High-Relief Cementitious Mortar",
    dimensions: "15 ft (W) × 11 ft (H) Feature Wall",
    description: "A monumental high-relief carving of a majestic caparisoned elephant standing beneath the expansive roots of a sacred banyan tree. Sculpted directly on-site into the structural concrete wall with deep undercuts and hand-textured bark detailing.",
    highlights: ["Deep 3D undercuts up to 6 inches", "Natural cement stone texture", "Hand-tooled aerial roots & drapery"],
    featured: true,
    aspect: "landscape"
  },
  {
    id: "mayil-peacock-relief",
    title: "Celestial Mayil in Full Plumage",
    category: "Peacock & Nature Reliefs",
    image: "/images/peacock-relief.jpg",
    medium: "Fine Architectural Cement Plaster Relief",
    dimensions: "10 ft (W) × 9 ft (H) Courtyard Wall",
    description: "An intricate multi-tiered peacock relief capturing the fluid sweep of ceremonial feathers and delicate flowering jasmine vines. The high-relief feather eyes create dynamic shadow play throughout changing daylight hours.",
    highlights: ["Individual quill and plumage feather carving", "Raked stone textured backdrop", "Weatherproof outdoor exterior finish"],
    featured: true,
    aspect: "portrait"
  },
  {
    id: "ganesha-sanctum-relief",
    title: "Vighnaharta Temple Wall Sanctum",
    category: "Religious & Traditional Art",
    image: "/images/ganesha-temple-relief.jpg",
    medium: "High-Density Sculptural Mortar & Stone Buffing",
    dimensions: "8 ft (W) × 9 ft (H) Puja Mandapam",
    description: "Sacred South Indian temple architectural relief depicting Lord Ganesha seated on a blossoming lotus throne, framed by ornate Yali arches, pilaster columns, ceremonial bell niches, and his sacred vahana (Mushika).",
    highlights: ["Traditional Agamic iconography", "Ornate jewellery and crown detailing", "Integrated alcove architectural framing"],
    featured: true,
    aspect: "portrait"
  },
  {
    id: "sculptor-at-work-live",
    title: "Master at Work: Hand-Carving the Sanctuary",
    category: "Sculpting Process",
    image: "/images/sculptor-at-work.jpg",
    medium: "Live In-Situ Masonry Relief Carving",
    dimensions: "Double-Height Scaffolding Installation",
    description: "Master sculptor Kavin hand-carving wet cement mortar with steel gouges and mallets on site. Direct wall relief sculpting requires flawless precision and rapid execution before the cement begins its primary cure.",
    highlights: ["Direct on-site sculpting", "No prefabricated molds used", "Customized steel trowels & chisels"],
    featured: false,
    aspect: "landscape"
  },
  {
    id: "architectural-villa-relief",
    title: "Contemporary Villa Feature Installation",
    category: "Architectural Reliefs",
    image: "/images/hero-elephant-banyan.jpg",
    medium: "Integrated Structural Cement Murals",
    dimensions: "Architectural Living Gallery",
    description: "Seamlessly uniting contemporary exposed concrete architecture with classical Indian sculptural heritage. The relief appears to organically emerge from the villa's structural load-bearing concrete wall.",
    highlights: ["Architectural harmony", "Integrated interior raking illumination", "Permanent monolithic lifespan"],
    featured: false,
    aspect: "landscape"
  },
  {
    id: "courtyard-nature-relief",
    title: "Flora & Fauna Courtyard Wall",
    category: "Custom Wall Murals",
    image: "/images/peacock-relief.jpg",
    medium: "Custom Cement Wall Mural",
    dimensions: "Residential Atrium",
    description: "Bespoke nature-inspired relief designed for an indoor atrium with natural skylight. As the sun moves across the skylight, the relief casts changing three-dimensional shadows across the room.",
    highlights: ["Dynamic daylight shadow play", "Hand-finished mineral cement", "Custom scale composition"],
    featured: false,
    aspect: "portrait"
  }
];

export const SIGNATURE_PROJECT = {
  title: "The Royal Tusker Feature Wall",
  subtitle: "Architectural Living Room Transformation",
  beforeImage: "/images/raw-wall-before.jpg",
  afterImage: "/images/hero-elephant-banyan.jpg",
  location: "Private Residence",
  wallSize: "165 sq. ft (15 ft × 11 ft)",
  material: "High-grade polymer-modified cement mortar & natural stone aggregate",
  executionTime: "Direct on-site carving",
  description: "Witness the complete metamorphosis of an unfinished masonry brick wall into an awe-inspiring, museum-quality sculptural installation. Carved directly onto the raw wall without mold replication, the relief brings commanding tactile presence, traditional grace, and architectural permanence to the modern living hall."
};

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Concept & Design",
    summary: "Translating your architectural vision into scaled proportional drawings.",
    details: "Every project begins with a bespoke design tailored specifically to your wall's lighting, scale, and room aesthetics. Whether an ornate elephant, traditional deity, or contemporary botanical relief, we align on proportions and relief depth."
  },
  {
    step: "02",
    title: "Wall Preparation & Sketching",
    summary: "Scoring the substrate and grid-mapping the full-scale composition.",
    details: "The raw brick or plaster substrate is chipped and primed with bonding agents to ensure lifelong adhesion. Master Kavin then sketches the life-size anatomical proportions directly onto the wall with charcoal and chalk."
  },
  {
    step: "03",
    title: "Handcrafted Sculpting",
    summary: "Layering specialized cement mortar and shaping 3D anatomical volume.",
    details: "High-density cementitious mortar is applied in stages. While the mix is in its pliable state, the sculptor sculpts the primary anatomy, deep undercuts, muscle contours, and foundational architecture by hand."
  },
  {
    step: "04",
    title: "Detailing & Final Finish",
    summary: "Microscopic chisel textures, curing, and protective stone sealing.",
    details: "Using fine steel needles, spatulas, and texture combs, delicate feather quills, ornate jewelry, and tree bark striations are carved. After systematic water curing, a breathable matte stone sealant preserves the natural concrete tone."
  }
];
