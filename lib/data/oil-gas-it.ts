import { Boxes, Building2, Cloud, Factory, HardHat, Headset, Network, Server, ShieldCheck, Wifi } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ItCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

/** The 5 capability cards with a bullet-list shape (the 6th, procurement, has its own shape below). */
export const itCapabilities: ItCapability[] = [
  {
    title: "IT Infrastructure",
    description: "Build a reliable technology foundation for your organization.",
    icon: Server,
    items: [
      "Servers and storage",
      "Business computers and workstations",
      "Data center infrastructure",
      "UPS and power protection",
      "IT equipment deployment",
      "Infrastructure maintenance",
    ],
  },
  {
    title: "Network & Connectivity",
    description: "Keep your teams, systems, and locations connected.",
    icon: Network,
    items: [
      "Enterprise network design",
      "Routers and switches",
      "Wi-Fi infrastructure",
      "Structured cabling",
      "Remote-site connectivity",
      "Network monitoring and troubleshooting",
    ],
  },
  {
    title: "Cybersecurity",
    description: "Protect your business infrastructure and digital assets.",
    icon: ShieldCheck,
    items: [
      "Firewall solutions",
      "Endpoint security",
      "Access control",
      "Secure remote access",
      "Security assessments",
      "Backup and recovery solutions",
    ],
  },
  {
    title: "Cloud & Digital Workplace",
    description: "Modernize the way your organization works.",
    icon: Cloud,
    items: ["Microsoft 365", "Microsoft Azure", "AWS cloud solutions", "Cloud migration", "Business email", "Microsoft Teams & SharePoint", "Cloud backup"],
  },
  {
    title: "Technical Support",
    description: "Get the technical assistance your business needs.",
    icon: Headset,
    items: [
      "Remote IT support",
      "On-site technical support",
      "Hardware troubleshooting",
      "Software installation",
      "Network troubleshooting",
      "Preventive maintenance",
    ],
  },
];

export type ItProcurementGroup = {
  label: string;
  vendors: string;
};

export const itProcurement: {
  title: string;
  description: string;
  icon: LucideIcon;
  groups: ItProcurementGroup[];
  disclaimer: string;
} = {
  title: "Hardware & Software Procurement",
  description: "Source the technology your business needs from established technology ecosystems.",
  icon: Boxes,
  groups: [
    { label: "Computing", vendors: "Dell • HP • Lenovo" },
    { label: "Networking", vendors: "Cisco • Fortinet" },
    { label: "Cloud & Productivity", vendors: "Microsoft • AWS" },
    { label: "Enterprise Infrastructure", vendors: "Dell Technologies • Lenovo" },
  ],
  disclaimer: "Product availability and partner status are subject to specific supplier and authorization arrangements.",
};

export type ItProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const itProcessSteps: ItProcessStep[] = [
  { number: "01", title: "Assess", description: "We understand your existing infrastructure and requirements." },
  { number: "02", title: "Design", description: "We develop a technology solution aligned with your business objectives." },
  { number: "03", title: "Deploy", description: "We assist with procurement, installation, configuration, and implementation." },
  { number: "04", title: "Support", description: "We provide ongoing technical support and maintenance." },
];

export type ItIndustry = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const itIndustries: ItIndustry[] = [
  { title: "Oil & Gas", description: "Upstream, midstream and downstream operations.", icon: Factory },
  { title: "Engineering & Construction", description: "Engineering teams, project offices and contractors.", icon: HardHat },
  { title: "Corporate Organizations", description: "Office infrastructure, collaboration and business IT.", icon: Building2 },
  { title: "Remote Operations", description: "Technology and connectivity for distributed locations.", icon: Wifi },
];

export type ItEcosystemVendor = {
  name: string;
  focus: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
};

export const itEcosystem: ItEcosystemVendor[] = [
  { name: "Cisco", focus: "Networking & connectivity", logo: "/logos/cisco.png", logoWidth: 960, logoHeight: 507 },
  {
    name: "Microsoft",
    focus: "Cloud, productivity & collaboration",
    logo: "/logos/microsoft.png",
    logoWidth: 960,
    logoHeight: 205,
  },
  {
    name: "Dell Technologies",
    focus: "Computing, servers & infrastructure",
    logo: "/logos/dell-technologies.png",
    logoWidth: 960,
    logoHeight: 123,
  },
  { name: "HP", focus: "Business computing & printing", logo: "/logos/hp.png", logoWidth: 960, logoHeight: 960 },
  {
    name: "Lenovo",
    focus: "Business computing & infrastructure",
    logo: "/logos/lenovo.png",
    logoWidth: 960,
    logoHeight: 202,
  },
  {
    name: "Fortinet",
    focus: "Network security & cybersecurity",
    logo: "/logos/fortinet.png",
    logoWidth: 960,
    logoHeight: 117,
  },
  { name: "AWS", focus: "Cloud infrastructure & services", logo: "/logos/aws.png", logoWidth: 960, logoHeight: 575 },
];
