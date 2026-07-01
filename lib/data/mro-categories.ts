export type MroCategory = {
  id: string;
  title: string;
  items: string[];
  note?: string;
};

export const mroCategories: MroCategory[] = [
  {
    id: "value-flow-equipment",
    title: "Valves & Flow Control Equipment",
    items: ["Ball Valves", "Gate Valves", "Globe Valves", "Check Valves", "Control Valves", "Actuators and Valve Accessories"],
    note: "Available in Carbon Steel, Stainless Steel, Alloy Steel, and special materials.",
  },
  {
    id: "fasteners",
    title: "Fasteners",
    items: ["Bolts", "Nuts", "Washers", "Stud Bolts", "Anchor Bolts"],
    note: "Supplied in accordance with ASTM, ASME, and client specifications.",
  },
  {
    id: "gasket-sealing-solutions",
    title: "Gaskets & Sealing Solutions",
    items: ["Spiral Wound Gaskets", "Ring Type Joint (RTJ) Gaskets", "Non-Asbestos & Soft Cut Gaskets", "O-Rings", "Mechanical Seals"],
  },
  {
    id: "ppe-safety",
    title: "Personal Protective Equipment (PPE) & Safety",
    items: [
      "Coveralls and Protective Clothing",
      "Safety Helmets & Safety Boots",
      "Gloves & Eye Protection",
      "Respirators & Gas Detectors",
      "Firefighting and Safety Equipment",
    ],
    note: "All PPE supplied meets industry safety standards.",
  },
  {
    id: "laboratory-testing-equipment",
    title: "Laboratory & Testing Equipment",
    items: ["Flash Point Testers", "Viscometers", "Density & Moisture Analyzers", "Oil, Fuel & Chemical Testing Instruments"],
    note: "OEM and OEM-approved equipment available.",
  },
  {
    id: "office-industrial-consumables",
    title: "Office & Industrial Consumables",
    items: ["Office Stationery & Accessories", "Printers and IT Accessories", "Cleaning & Maintenance Consumables"],
  },
];

export const mroGalleryImages = [
  "/uploads/2026/02/WhatsApp-Image-2026-02-05-at-14.45.57-2.jpeg",
  "/uploads/2026/02/WhatsApp-Image-2026-02-05-at-14.45.57-1.jpeg",
  "/uploads/2026/02/WhatsApp-Image-2026-02-05-at-14.45.57.jpeg",
  "/uploads/2026/02/WhatsApp-Image-2026-02-05-at-14.47.30.jpeg",
  "/uploads/2026/02/WhatsApp-Image-2026-02-05-at-14.48.54.jpeg",
];
