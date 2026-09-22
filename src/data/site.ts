export const site = {
  name: "Eratic Multi Solution LLP",
  shortName: "EMS",
  brandName: "Eratic Multisolutions",
  tagline: "One Click Solution",
  description:
    "Eratic Multi Solution LLP — one click solution to set up infrastructure, co-working rental, and complete asset supply since 2023.",
  email: "info@eraticmultisolution.com",
  phone: "9911673603",
  phoneHref: "tel:+919911673603",
  whatsapp: "https://wa.me/919911673603",
  founded: "2023",
  hours: "Mon – Sat · 9.00am – 6.00pm",
  address: {
    line1: "Office No-14, Mohit Nagar",
    line2: "Old Palam Road",
    line3: "New Delhi – 110078",
    full: "Office No-14, Mohit Nagar, Old Palam Road, New Delhi – 110078",
    maps: "https://www.google.com/maps/search/?api=1&query=Office+No-14+Mohit+Nagar+Old+Palam+Road+New+Delhi+110078",
  },
  logo: "/logo.png",
  heroImage: "/image.png",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Infrastructure Setup", href: "/services?tab=infrastructure" },
      { label: "Rental Services", href: "/services?tab=rental" },
      { label: "Asset Supply & Services", href: "/services?tab=supply" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Infrastructure", href: "/services?tab=infrastructure" },
  { label: "Rental", href: "/services?tab=rental" },
  { label: "Asset Supply", href: "/services?tab=supply" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrowRed: "Eratic Multi Solution · EMS",
  eyebrowRest: "One Click Solution",
  titleLine1: "Infrastructure,",
  titleLine2Before: "delivered as",
  titleAccent: "one click",
  description:
    "Provide one click solution to set up an infrastructure — plus rental and complete asset supply so you can open, operate, and scale.",
  cta: "View Our Services",
  ctaHref: "/services",
  image:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  images: [
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
      alt: "Call center and infrastructure setup",
    },
    {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=80",
      alt: "Electrical and appliances supply",
    },
    {
      src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1400&q=80",
      alt: "Medical lab and safety equipment",
    },
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
      alt: "Warehouse and asset supply",
    },
  ],
} as const;

export const stats = [
  { value: "2023", label: "Founded" },
  { value: "3", label: "Service Verticals" },
  { value: "Global", label: "Client Network" },
  { value: "1", label: "Click Solution" },
] as const;

export const about = {
  eyebrow: "Who We Are",
  watermark: "Features",
  title: "One Click Solution to Set Up Infrastructure",
  description:
    "Purpose and quality drive everything we do at Eratic Multi Solution LLP. Since 2023, our mission has been simple: provide one click solution to set up an infrastructure. Today, our small, passionate project has grown into a global network serving customers around the world.",
  featureCards: [
    "Infrastructure Setup",
    "Campaign Management",
    "IT Solution Services",
    "Asset Supply & Rental",
  ],
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  accentImage:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  paragraphs: [
    "Purpose and quality drive everything we do at Eratic Multi Solution LLP. Since 2023, our mission has been simple: provide one click solution to set up an infrastructure. Today, our small, passionate project has grown into a global network serving customers around the world.",
    "We specialize in comprehensive Infrastructure Setup, Campaign Management, and IT Solution Services — delivering tailored solutions for businesses seeking impactful marketing strategies, with a dedicated team of experts.",
  ],
  points: [
    {
      title: "Infrastructure Setup",
      description: "Call Center, Salon interior design, Medical Lab, Warehouse.",
    },
    {
      title: "Rental Services",
      description: "Co-Working Space for teams that need to start immediately.",
    },
    {
      title: "Asset Supply & Services",
      description:
        "Construction, electrical, office, medical, safety, and packaging supplies.",
    },
    {
      title: "IT & Campaign Management",
      description:
        "Tailored technology and marketing support with a dedicated expert team.",
    },
  ],
  caption: "Purpose · Quality · Delivery",
} as const;

export const services = [
  {
    title: "Call Center",
    description:
      "Complete call center infrastructure setup — seating, networking, power, and operations-ready fit-out.",
    icon: "trending" as const,
  },
  {
    title: "Salon Interior Design",
    description:
      "Premium salon interiors with layout, finishes, lighting, and fixtures built for daily use.",
    icon: "lightbulb" as const,
  },
  {
    title: "Medical Lab",
    description:
      "Lab-ready rooms with furniture, consumables, electrical, and safety support.",
    icon: "network" as const,
  },
  {
    title: "Warehouse",
    description:
      "Warehouse setup with racking, storage, lighting, power, and safety supplies.",
    icon: "clipboard" as const,
  },
  {
    title: "Co-Working Space",
    description:
      "Rental co-working space so teams can operate immediately without a long build cycle.",
    icon: "users" as const,
  },
  {
    title: "Campaign & IT Solutions",
    description:
      "Campaign management and IT solution services for impactful business strategies.",
    icon: "messages" as const,
  },
] as const;

export const growth = {
  eyebrow: "Rental Services",
  watermark: "Business",
  title: "Co-Working Space",
  features: [
    {
      title: "Ready workspaces",
      description:
        "Professional co-working environments with desks and connectivity for immediate operations.",
      icon: "handshake" as const,
    },
    {
      title: "Flexible rental",
      description:
        "Start operating while your permanent infrastructure setup is planned and delivered.",
      icon: "headset" as const,
    },
  ],
  primaryCta: "Request Availability",
  secondaryCta: "Asset Supply",
  images: {
    main: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
    overlay:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
  },
} as const;

export const projects = [
  {
    title: "Call Center",
    category: "Infrastructure Setup",
    description:
      "Complete call center infrastructure — planned and made ready for operations.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Salon Interior Design",
    category: "Infrastructure Setup",
    description:
      "Salon interiors designed for premium look and daily operational performance.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Medical Lab",
    category: "Infrastructure Setup",
    description:
      "Medical lab setup with furniture, consumables, and supporting systems.",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Warehouse",
    category: "Infrastructure Setup",
    description:
      "Warehouse infrastructure with industrial storage, lighting, and safety readiness.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Construction Material & Services",
    category: "Asset Supply",
    description:
      "Faucets, sinks, painting tools, paints, locks, door hardware, racks, industrial racks, tube fitting.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Electrical & Appliances",
    category: "Asset Supply",
    description:
      "Wire & cables, fans, geysers & water heater, power generation, AC, water dispenser.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Office Supplies",
    category: "Asset Supply",
    description:
      "Tables, chairs, CCTV camera, access control system, cleaning equipment, printers, computer & accessories, network devices.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Safety Supplies",
    category: "Asset Supply",
    description:
      "Safety shoes, safety gloves, raincoat, fire extinguishers, safety helmets, respiratory mask.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
  },
] as const;

export const team = [
  {
    name: "Infrastructure Setup",
    role: "Service Vertical A",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rental Services",
    role: "Co-Working Space",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Asset Supply",
    role: "Service Vertical C",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "IT & Campaigns",
    role: "Solution Services",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
  },
] as const;

export const infrastructureIntro = {
  eyebrow: "Infrastructure Setup",
  title: "Infrastructure Setup",
  description:
    "Call Center, Salon interior design, Medical Lab, and Warehouse — one click solution to set up an infrastructure.",
} as const;

export const infrastructureItems = [
  {
    slug: "call-center",
    tag: "Infrastructure",
    title: "Call Center",
    description:
      "Complete call center infrastructure setup for high-density operations — seating, cabling, power, and network readiness.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    icon: "headset",
  },
  {
    slug: "salon",
    tag: "Infrastructure",
    title: "Salon Interior Design",
    description:
      "Salon interior design with layout, finishes, lighting, stations, and fixtures ready for day-one operations.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
    icon: "scissors",
  },
  {
    slug: "medical-lab",
    tag: "Infrastructure",
    title: "Medical Lab",
    description:
      "Medical lab setup with furniture, consumables, supporting systems, and compliance-ready work zones.",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1400&q=80",
    icon: "flask",
  },
  {
    slug: "warehouse",
    tag: "Infrastructure",
    title: "Warehouse",
    description:
      "Warehouse infrastructure with industrial storage, lighting, power distribution, and safety systems.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    icon: "warehouse",
  },
] as const;

export const rental = {
  eyebrow: "Rental Services",
  title: "Co-Working Space",
  description:
    "Co-Working Space rental so teams can start operating immediately without a long build cycle.",
  cta: "Request Availability",
  image:
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80",
} as const;

export const supplyIntro = {
  eyebrow: "Asset Supply & Services",
  title: "Asset Supply & Services",
  description:
    "Construction material, electrical & appliances, office supplies, medical lab & supplies, safety supplies, and packaging & material handling.",
} as const;

export const assetCategories = [
  {
    id: "construction",
    label: "Construction Material & Services",
    title: "Construction Material & Services",
    description:
      "Hardware and finishing supplies for fit-outs, renovations, and industrial interiors.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Faucets",
      "Sinks",
      "Painting Tool",
      "Paints",
      "Locks",
      "Door Hardware",
      "Racks",
      "Industrial Racks",
      "Tube Fitting",
    ],
  },
  {
    id: "electrical",
    label: "1) Electrical & Appliances",
    title: "Electrical & Appliances",
    description:
      "Power, climate, and daily-use equipment for commercial and industrial spaces.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Wire & Cables",
      "Fans",
      "Geysers & Water Heater",
      "Power Generation",
      "AC",
      "Water Dispenser",
    ],
  },
  {
    id: "office",
    label: "2) Office Supplies",
    title: "Office Supplies",
    description:
      "Furniture and security systems that make a workspace functional and controlled.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Tables",
      "Chairs",
      "CCTV Camera",
      "Access Control System",
      "Cleaning Equipment",
      "Printers",
      "Computer & Accessories",
      "Network Devices",
    ],
  },
  {
    id: "medical",
    label: "3) Medical Lab & Supplies",
    title: "Medical Lab & Supplies",
    description:
      "Consumables and furniture for clinics, labs, and wellness facilities.",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Medical Consumables",
      "Hospital Furniture",
      "Fitness Equipment",
    ],
  },
  {
    id: "safety",
    label: "4) Safety Supplies",
    title: "Safety Supplies",
    description:
      "Personal protective equipment and emergency-ready items for sites and facilities.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Safety Shoes",
      "Safety Gloves",
      "Raincoat",
      "Fire Extinguishers",
      "Safety Helmets",
      "Respiratory Mask",
    ],
  },
  {
    id: "packaging",
    label: "5) Packaging & Material Handling",
    title: "Packaging & Material Handling",
    description:
      "Packaging and handling equipment for storage, dispatch, and warehouse movement.",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Storage Bins",
      "Ladders",
      "Packaging Boxes",
      "Trolleys",
      "Packaging Rolls",
    ],
  },
] as const;

export const clients = [
  { name: "Tata 1mg Healthcare", category: "Healthcare", color: "#006dc2" },
  { name: "Tata 1mg Technologies", category: "Technology", color: "#03abab" },
  { name: "Jarvis Consulting", category: "Consulting", color: "#011552" },
  { name: "Khoobsurat Makeovers", category: "Beauty", color: "#4ea32a" },
  {
    name: "Lifestyle Foods",
    category: "Food",
    note: "Chuk De Masale",
    color: "#006dc2",
  },
  { name: "Contact 360 Marketing", category: "Marketing", color: "#03abab" },
  { name: "BBQ", category: "Hospitality", color: "#011552" },
] as const;

export const testimonials = [
  {
    quote:
      "EMS delivered a one click infrastructure setup for our operations — reliable, clear, and accountable from brief to handover.",
    name: "Operations Lead",
    role: "Tata 1mg Healthcare",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    visual:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    visualAlt: "Team operating in a ready infrastructure workspace",
  },
  {
    quote:
      "From co-working space to complete asset supply, Eratic Multi Solution helped us start faster without juggling vendors.",
    name: "Facility Manager",
    role: "Jarvis Consulting",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    visual:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
    visualAlt: "Co-working office space ready for teams",
  },
  {
    quote:
      "Salon interiors and supply coordination arrived as one coordinated delivery. Purpose and quality showed in every detail.",
    name: "Brand Owner",
    role: "Khoobsurat Makeovers",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=200&q=80",
    visual:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    visualAlt: "Salon interior design and fixtures",
  },
] as const;

export const contactNeeds = [
  "Call Center",
  "Salon interior design",
  "Medical Lab",
  "Warehouse",
  "Co-Working Space",
  "Asset Supply & Services",
  "Campaign Management / IT Solutions",
] as const;
