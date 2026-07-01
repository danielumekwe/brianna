export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "MRO Materials & Supplies",
        href: "/mro-materials-supplies",
        children: [
          { label: "Value & Flow Equipment", href: "/mro-materials-supplies#value-flow-equipment" },
          { label: "Fasteners", href: "/mro-materials-supplies#fasteners" },
          { label: "Gasket and Sealing Solutions", href: "/mro-materials-supplies#gasket-sealing-solutions" },
          { label: "PPE & Safety", href: "/mro-materials-supplies#ppe-safety" },
          { label: "Laboratory & Testing Equipment", href: "/mro-materials-supplies#laboratory-testing-equipment" },
          { label: "Office & Industrial Consumables", href: "/mro-materials-supplies#office-industrial-consumables" },
        ],
      },
      {
        label: "EPCIC",
        href: "/epcic",
        children: [
          { label: "Engineering", href: "/engineering" },
          { label: "Procurement", href: "/procurement" },
          { label: "Construction", href: "/construction" },
          { label: "Installation", href: "/installation" },
          { label: "Commissioning", href: "/commissioning" },
        ],
      },
      {
        label: "Gas and Steam Turbine Engine and Generator Maintenance and Repairs",
        href: "/gas-and-steam-turbine-engine-and-generator-maintenance-and-repairs",
      },
      { label: "Inspection, Maintenance and Repairs (IMR)", href: "/imr" },
      {
        label: "Special Non-Hot Work Remediation/Repair and Coating Services",
        href: "/specialist-non-hot-work-metal-infrastructure",
      },
      { label: "Subsea Services", href: "/subsea-services" },
      { label: "Wellhead Maintenance Services", href: "/wellhead-maintenance-services" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
  { label: "News", href: "/news" },
];

export const footerNavigation: NavItem[] = [
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
  { label: "Services", href: "/services" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
