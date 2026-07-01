import {
  Anchor,
  ClipboardCheck,
  ClipboardList,
  Compass,
  Factory,
  Flame,
  Gauge,
  HardHat,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  image: string;
  icon: LucideIcon;
  body: string[];
  bullets?: string[];
  /** Slugs of related services to cross-link (e.g. EPCIC's own phases) */
  related?: string[];
};

/**
 * The 7 services shown on the Services hub, plus the 5 EPCIC phase pages
 * that are only reachable via the EPCIC sub-menu — 12 real pages total,
 * matching the live WordPress site exactly (no invented services).
 */
export const services: Service[] = [
  {
    slug: "epcic",
    title: "Engineering, Procurement, Construction, Installation and Commissioning (EPCIC)",
    shortTitle: "EPCIC",
    summary:
      "BIL offers an extensive range of commercial and technical Engineering, Procurement, Construction, Installation and Commissioning (EPCIC) services that deliver value to our clients on a project-by-project bases.",
    image: "/uploads/2023/10/environmental-pollution-factory-exterior.jpg",
    icon: Factory,
    body: [
      "BIL offers an extensive range of commercial and technical Engineering, Procurement, Construction, Installation and Commissioning (EPCIC) services that deliver value to our clients on a project-by-project bases. We treat every client and project uniquely by offering bespoke solutions.",
      "Through our EPCIC Services we offer the following:",
    ],
    bullets: [
      "Greenfield and Brownfield Project design and management",
      "Engineering design and implementation",
      "Procurement, Supply chain management and outsourcing",
      "Construction and Fabrication locally in accordance with the Nigeria Content Act 2010",
      "Supply and Installation of subsea pipelines and crude oil offloading/export hoses",
      "Asset modification and completion works",
      "Floating production systems/SPM/CALM Buoys/Mooring installation",
      "Supply and Installation of Subsea umbilicals, risers, flexible pipelines/flowlines, and cables",
      "Supply Various Subsea Systems & Topside Products",
      "Warehousing and both ground and marine logistics",
    ],
    related: ["engineering", "procurement", "construction", "installation", "commissioning"],
  },
  {
    slug: "imr",
    title: "Inspection, Maintenance and Repairs (IMR)",
    shortTitle: "IMR",
    summary:
      "BIL understands that the inspection, maintenance, and repair (IMR) of assets and infrastructure is vital for efficiency and to remain cost effective.",
    image: "/uploads/2024/01/medium-shot-engineer-wearing-equipment.jpg",
    icon: Wrench,
    body: [
      "BIL understands that the inspection, maintenance, and repair (IMR) of assets and infrastructure is vital for efficiency and to remain cost effective. Hence we have a broad range of proven IMR services options available to our clients based on their specific needs.",
      "Our passion for new challenges in the industry helps us to constantly improve our services. We have topnotch quality assurance program which aims to meet international standards in all activities and exceed our client's expectations.",
      "Our teams witness key activities during equipment manufacturing to verify conformance to specification and quality standards. Our personnel is trained and qualified to the highest local and international standards and we take pride in evaluating new techniques to establish value and usefulness to our clients. We offer comprehensive IMR services to mitigate challenges, improve reliability and safety upon project completion.",
      "Whether in renovation or complex equipment replacement/installation, the work is planned in detail and executed by qualified Engineers, with environmental and safety concern integrated to the plan from the onset and controlled strictly from beginning to the end of the project.",
      "Our Inspection, Maintenance and Repair (IMR) services team are dedicated to always delivering quality service at all point, whether it be onshore, offshore, subsea in the oil & gas industry. IMR Portfolio includes but not limited to:",
    ],
    bullets: [
      "ROV inspections",
      "Mooring Inspections",
      "Facility modifications and maintenance",
      "Non-Destructive testing (NDT) AUT/PAUT",
      "Subsea Infrastructure Inspection and Survey",
      "Unmanned aerial vehicle (UAV) drones Inspection",
      "Automated underwater vehicle (AUV) drones Inspection",
      "Pipeline Inspections, (Piggable & Non-piggable lines)",
      "Cathodic Protection (CP) Systems; inspection, maintenance & installation",
      "Valve Integrity Management; inspection, maintenance & installation",
      "Asset management (onshore, offshore survey and UAV survey)",
      "Hybrid Acoustic Technology (HAT)",
      "Monitoring/Maintenance of Cathodic Protection Systems",
      "Repair/Installation of Cathodic Rectifier Transformer",
      "Corrosion Management",
      "Coating Repairs/Painting Services",
      "Corrosion Monitoring",
      "DCVG Survey",
      "Helifuel & Helideck",
    ],
  },
  {
    slug: "subsea-services",
    title: "Subsea Services",
    shortTitle: "Subsea Services",
    summary:
      "At BIL, we understand the criticality of subsea assets and infrastructure and the constant periodic need for survey/inspection and maintenance due to environmental conditions.",
    image: "/uploads/2023/10/beautiful-shot-pier-with-cloudy-gray-sky.jpg",
    icon: Anchor,
    body: [
      "At BIL, we understand the criticality of subsea assets and infrastructure. The constant periodic need for survey/inspection and maintenance due to environmental conditions.",
      "Part of our efforts to archive the Global Net Zero target is providing our client with quality subsea services that will secure their assets, improve their operations and protect the environment.",
      "We offer variety of quality product and service but not limited to the following:",
    ],
    bullets: [
      "Remotely operated vehicles (ROVS) Intervention",
      "Autonomous Underwater Vehicle for critical location inspection",
      "Specialized ROV tooling for maintenance",
      "Project management and logistics support",
      "Subsea construction and intervention",
      "Survey and positioning",
      "Subsea Integrity management",
      "Hydraulic Power Unit (HPU) supply",
      "Topside Umbilical Termination Unit (TUTU) supply",
      "Subsea Umbilical Termination Unit (SUTU) supply",
      "Chemical Injection Unit (CIU) — Methanol, Corrosion Inhibitors, de-scalers, antifoam, de-waxer",
      "Subsea Distribution Unit (SDU) supply",
      "Jumper Bundles, Electrical/Chemical/Hydraulic/Optical Flying Leads (EFL/CFL/HFL/OFL)",
    ],
  },
  {
    slug: "gas-and-steam-turbine-engine-and-generator-maintenance-and-repairs",
    title: "Gas and Steam Turbine Engine and Generator Maintenance and Repairs",
    shortTitle: "Gas & Steam Turbine",
    summary:
      "At BIL we understand that power is indispensable when it comes to oil and gas operations, hence the importance of effective maintenance and repairs of power generation equipment.",
    image: "/uploads/2023/10/hero-steam-turbine-products-gas-1.jpg",
    icon: Flame,
    body: [
      "At BIL we understand that power is indispensable when it comes to oil and gas operations, hence, importance of effective maintenance and repairs of power generation equipment/component and plant which are Gas Turbine, Steam Turbine Engine and Generators.",
      "For these critical equipment/components of exploration, production or processing assets and facilities we offer all-encompassing inspection, maintenance, and repairs.",
      "Whether it is minor maintenance, routine maintenance, turn around maintenance or overhauling of Gas Turbine, Steam Turbine Engine and Generators, BIL is poised to offering efficient and cost-effective innovative solutions, deploying well trained and certified professionals, best tooling & equipment and technology.",
      "Also, we have a wide range of partnerships with world leading rotating equipment manufacturers and service providers to deliver unrivaled services to clients. Our Gas Turbine, Steam Turbine Engine and Generators services includes:",
    ],
    bullets: [
      "Steam Turbine, Gas Turbine, Generators inspections/overhauls, OEM parts procurement and engineering services",
      "Steam Turbine and Gas Turbine corrective maintenance and repairs",
      "Turn-key Steam Turbine and Gas Turbine Frame Agreements for long time OEM parts supply and maintenance",
      "Root cause analysis",
      "High speed balancing",
      "Cryogenic decontamination",
      "Reverse engineering",
      "Heat treatment",
      "Innovative PDA Monitoring system installation",
      "Workshop and onsite repairs for Steam Turbine and Gas Turbine generators",
    ],
  },
  {
    slug: "specialist-non-hot-work-metal-infrastructure",
    title: "Special Non-Hot Work Remediation/Repair and Coating Services",
    shortTitle: "Special Non-Hot Work",
    summary:
      "BIL offers a specialist innovative non-hot work maintenance and repair solution for onshore/offshore drilling and production facilities and marine vessels.",
    image: "/uploads/2023/10/non-hot-1.png",
    icon: ShieldCheck,
    body: [
      "Specialist Non-Hot Work metal infrastructure (Pipes, storage tanks, FPSO/Vessel hull) Remediation/Repair and Coating Services.",
      "BIL offers a specialist innovative non-hot work maintenance and repair solution for onshore/offshore drilling and production facilities, marine vessels, leveraging on our technical partners vast experience and innovative technology breakthrough.",
      "Our Non-Hot Work Remediation/Repair Services covers, pipe repair, corrosion protection for both pipelines, storage tanks, FPSO/vessel hull and rustable & corrosive metal structures, and reinforcement solutions for permanent and temporary composite pipe repair.",
      "Our composite repair solution is applicable without permanent shutdown of client's facility. Operations can be going on while the affected area is isolated and repaired in a very short time. This is an emergency repairs solution but also permanent.",
      "Our composite raps, thistle bonds/adhesive, polymer coating is not only suitable for the repair of damaged sections of metal structure, they also eliminate corrosion under insulation (CUI) which is common with many pipeline insulation systems.",
    ],
  },
  {
    slug: "wellhead-maintenance-services",
    title: "Wellhead Maintenance Services",
    shortTitle: "Wellhead Maintenance",
    summary:
      "BIL provides all-encompassing services for wellhead/Christmas tree procurement, inspection, maintenance. We are passionate about the optimization of oil wells/fields and wellheads.",
    image: "/uploads/2023/10/Wellhead-maintenance-650x400-1.jpg",
    icon: Gauge,
    body: [
      "BIL provides all-encompassing services for wellhead/Christmas tree procurement, inspection, maintenance. We are passionate about the optimization of oil wells/fields and ultimately wellheads.",
      "Wellhead maintenance Portfolio includes but not limited to:",
    ],
    bullets: [
      "Routine maintenance, greasing and Inspection",
      "Installation, refurbishment and repair of wellhead equipment and valve",
      "Inventory stock management and reporting",
      "Hot Tapping Services",
      "Gate Valve Drilling Services",
      "Casing Cutting Services",
      "Specialty Sealant Services",
      "Complete Nipple-up/Nipple-down Services",
      "Hydro-static Pressure Testing",
      "BOP Lifting Winches & Hoist",
      "Pole truck Operation",
    ],
  },
  {
    slug: "mro-materials-supplies",
    title: "MRO Materials & Supplies",
    shortTitle: "MRO Materials & Supplies",
    summary:
      "Brianna Integrated Limited (BIL) stocks and supplies a comprehensive range of Maintenance, Repair, and Operations (MRO) materials, readily deployable within 15 days lead time.",
    image: "/uploads/2026/02/WhatsApp-Image-2026-02-05-at-14.45.57-1.jpeg",
    icon: ClipboardList,
    body: [
      "Brianna Integrated Limited (BIL) stocks and supplies a comprehensive range of Maintenance, Repair, and Operations (MRO) materials, locally available and readily deployable within 15 days lead time, to support uninterrupted operations across the Oil & Gas, Energy, Manufacturing, and Industrial sectors.",
      "Our locally stocked MRO materials are strategically positioned to eliminate long sourcing cycles, prevent operational downtime (MPT), and reduce the risks associated with late lead-time deliveries. This enables our clients to maintain asset integrity and production continuity.",
    ],
  },
  {
    slug: "engineering",
    title: "Engineering",
    shortTitle: "Engineering",
    summary:
      "We offer complete Engineering Design and implementation services covering all oil field assets and infrastructure, including environmental protection solutions.",
    image: "/uploads/2023/10/portrait-maintenance-engineer-apprentice-workshop-railway-engineering-facility_35752-12918.jpg",
    icon: Compass,
    body: [
      "We offer complete Engineering Design and implementation services covering all oil field assets and infrastructure, including environmental protection solutions. Our strategy deploys both in-house local engineering team and international engineering partners with vast and efficient experience in all oil and gas fields to offer innovative bespoke solutions to our esteemed clients.",
      "All our designs are custom made, according to client's specifications and application with compliance to industry and international standards and regulations. From conceptualization, through detailed engineering design and implementation, our team of professional engineers work closely with our clients in understanding the key project focus and drivers, putting into consideration process alternatives, undertaking value engineering, personnel and equipment safety and hazard analysis, reviews and incorporation of key external and environmental safety factors providing cost-efficient and desired solutions.",
      "We consider and adopt into our design, local & national industry regulatory bodies specified objectives and requirements and international guidelines/regulations/standards (where applicable), as well as outcomes of environmental impact assessment and in-house plant experience to mitigate environmental impacts.",
      "Continuously, we engaged in research and development to improve quality and productivity throughout all the EPCIC project. Areas of R&D include development of in-house software and new workflows, as well as acquiring and implementing the latest design technology available for EPCIC projects such as laser scanning of existing facilities for revamp projects, and facility lifecycle data standardization.",
      "Complimentary to their vast experience, we equip our Personnel with advanced design and engineering software. Our Engineering portfolio includes but not limited to:",
    ],
    bullets: [
      "Front end engineering design (FEED)",
      "Detailed structural, mechanical, and electrical design",
      "3D plant design",
      "Design and programming of control systems",
      "Project and construction management, both for basic and detailed designs",
      "Stress analysis and static calculations for various scrubbers, vessels, tanks, and pipes",
    ],
    related: ["epcic", "procurement", "construction", "installation", "commissioning"],
  },
  {
    slug: "procurement",
    title: "Procurement",
    shortTitle: "Procurement",
    summary:
      "Brianna Integrated Limited operates proven procurement strategies and solutions that efficiently reduce costs while maintaining quality of materials and equipment.",
    image: "/uploads/2023/10/ENGINEERING-PROCUREMENT-AND-CONSTRUCTION-EPC-1.webp",
    icon: ClipboardList,
    body: [
      "Brianna Integrated Limited operates proven procurement strategies and solutions that efficiently reduce costs and while still maintaining quality of materials and equipment that meets client's specification and application promptly. We optimize our strong relationship and rich network of global and local Original Equipment Manufacturers (OEMs), authorized distributors/vendors of oilfield equipment, reputable third-party quality inspectors and world class freight forwarders to deliver quality product on schedule. Our Procurement team has deep experience and understanding of local and international sourcing market and supply chain management.",
      "We currently have material and equipment distribution agreements with both foreign and local Partners in which we are the representative/agent to the manufacturers exclusively. This has been mutually beneficial in delivering project expected deliverables for EPCIC procurement.",
      "Our Procurement Portfolio includes but not limited to local and international sourcing and purchasing:",
    ],
    bullets: ["Supply chain management", "Warehousing", "Ground and marine Logistics"],
    related: ["epcic", "engineering", "construction", "installation", "commissioning"],
  },
  {
    slug: "construction",
    title: "Construction",
    shortTitle: "Construction",
    summary:
      "BIL delivers a complete range of construction capabilities covering asset/infrastructure and Environmental Solutions and Protection.",
    image: "/uploads/2023/10/construction-site-silhouettes.jpg",
    icon: HardHat,
    body: [
      "BIL delivers a complete range of construction capabilities covering asset/infrastructure and Environmental Solutions and Protection.",
      "Our services cover complete construction & installation works for Onshore and Offshore projects, Subsea construction.",
      "Our Project Management strategy deploys efficient and quick mobilization of construction crew and equipment. We possess the ability to manage construction workforces that include personnel from diverse backgrounds.",
      "In accordance with the Nigeria Content Act 2010, we make it a priority to always employing, training and deploy local labour to a possible degree possible. This keeps in harmony with the local community serving as we and our clients host and always add value to each project and to the local economy. Our Construction Portfolio includes but not limited to:",
    ],
    bullets: [
      "Civil engineering",
      "Helideck construction",
      "Metal works and fabrication",
      "Mechanical equipment erection",
      "Construction of pipelines/pipe laying and erection",
      "Electrical & instrumentation installation",
    ],
    related: ["epcic", "engineering", "procurement", "installation", "commissioning"],
  },
  {
    slug: "installation",
    title: "Installation",
    shortTitle: "Installation",
    summary:
      "BIL provides subsea installation of spools, subsea structures, pipelines, power cables, and subsea infrastructure pipeline end manifolds (PLEM).",
    image: "/uploads/2023/10/pipe-installation-service-1000x1000-1-1000x600.webp",
    icon: Wrench,
    body: [
      "BIL for subsea installation of spools, subsea structures, pipelines, power cables, and subsea infrastructure pipeline end manifolds (PLEM), stringing/assembly and installation of floating hoses, mooring buoy, and mooring system installation.",
      "We strictly deploy qualified installation teams that work under the direction of our project manager, construction manager and site supervisors with approval from our HSE supervisor and QA/QC manager to deliver excellence.",
    ],
    related: ["epcic", "engineering", "procurement", "construction", "commissioning"],
  },
  {
    slug: "commissioning",
    title: "Commissioning",
    shortTitle: "Commissioning",
    summary:
      "BIL's commissioning team is very experienced with broad asset familiarity and outstanding organization skills, from small maintenance shutdowns to large scale greenfield commissioning.",
    image: "/uploads/2023/10/oil-factory-territory-1.jpg",
    icon: ClipboardCheck,
    body: [
      "BIL, commissioning team is very experienced with broad asset familiarity and outstanding organization skills. We have evolved a suite of extremely robust procedures to accommodate any scale of the project, from small maintenance shutdowns to large scale greenfield commissioning. Our extensive processes begin early in the engineering stages to prepare and align effectively, working through construction to ensure constructability, support pre-commissioning and FEED into operations for a seamless handover.",
      "Our dedicated commissioning teams operate a global standard, providing consulting support, specialist manpower, project management, and bespoke software to execute commissioning scopes of every scale and complexity. Our outstanding engineering and operational experience bring a deep understanding of the key interface points to bridge the gap from design to ongoing operations.",
      "Our professional team provides acceptance testing services on new installations as well as maintenance testing and inspections for existing facilities including non-destructive testing and turn-around inspection. We offer a full range of testing and commissioning support for assets equipment installation and environmental equipment and projects.",
      "We also handle platform and subsea structure decommissioning. We strictly deploy qualified installation teams that work under the direction of our project manager, construction manager and site supervisors with approval from our HSE supervisor and QA/QC manager to deliver excellence.",
    ],
    related: ["epcic", "engineering", "procurement", "construction", "installation"],
  },
];

/** The 7 services shown as cards on the Services hub and homepage (top-level only, no EPCIC phase sub-pages). */
export const topLevelServiceSlugs = [
  "epcic",
  "imr",
  "subsea-services",
  "gas-and-steam-turbine-engine-and-generator-maintenance-and-repairs",
  "specialist-non-hot-work-metal-infrastructure",
  "wellhead-maintenance-services",
  "mro-materials-supplies",
];

export const topLevelServices = topLevelServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is Service => Boolean(service));

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service) {
  if (!service.related) return [];
  return service.related
    .map((slug) => services.find((item) => item.slug === slug))
    .filter((item): item is Service => Boolean(item));
}
