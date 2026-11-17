/**
 * All site copy and settings live here, so the team can update text,
 * numbers and links without touching page layouts.
 *
 * Search for "TODO" to find every placeholder that still needs real content.
 */

export const site = {
  name: "CDMWare",
  legalName: "CDMWARE",
  tagline: "Your Vision. Engineered.",
  url: "https://cdmware.com",
  description:
    "CDMWare designs and delivers AI-driven software, creative design and digital marketing that solve real business problems for startups, SMEs and organisations.",
  email: "info@cdmware.com",
  // Footer + WhatsApp number on the current site. The policy pages on the old
  // site listed +234 815 171 4278 instead. TODO: confirm which one to use.
  phone: "+234 704 395 5397",
  phoneHref: "tel:+2347043955397",
  whatsapp: "2347043955397",
  whatsappMessage: "Hello CDMWare, I'd like to talk about a project.",
  address: "18 Kessington Oribhabor Street, Lekki, Lagos, Nigeria",
  // TODO: replace "#" with the real profile URLs.
  socials: [
    { network: "facebook", href: "#" },
    { network: "instagram", href: "#" },
    { network: "linkedin", href: "#" },
    { network: "x", href: "#" },
  ] as const,
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "AI-powered digital solutions",
  headline: "Engineering AI-Powered Digital Solutions That Solve Real Business Problems",
  lede:
    "We design and deliver AI-driven software and digital solutions that solve real business challenges and drive sustainable growth for startups, SMEs, and organisations.",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  intro: string;
  offerings: { title: string; text: string }[];
  outcomes: string[];
  tools: string[];
};

export const services: Service[] = [
  {
    slug: "software-web-development",
    title: "AI-Powered Software & Web Development",
    short: "Software & Web",
    summary:
      "Build powerful web applications, mobile apps, and custom software solutions tailored to your business needs.",
    intro:
      "From internal tools to customer-facing products, we engineer software that fits how your business actually works, with AI built in where it adds real value.",
    offerings: [
      {
        title: "AI-Enabled Custom Software Solutions",
        text: "Bespoke systems that automate repetitive work, surface insights from your data and scale as you grow.",
      },
      {
        title: "Web & Mobile App Development",
        text: "Fast, secure web and mobile applications for iOS, Android and the browser, built on modern frameworks.",
      },
      {
        title: "Responsive Website Design",
        text: "Websites that load quickly, look sharp on every screen and turn visitors into enquiries.",
      },
    ],
    outcomes: [
      "Software designed around your real business processes",
      "Scalable, secure architecture that grows with you",
      "AI features where they save time or money",
      "Clear documentation and handover to your team",
    ],
    tools: ["JavaScript", "Python", "Java", "C#", "PHP", "Dart", "Swift", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "OpenAI", "TensorFlow"],
  },
  {
    slug: "creative-design",
    title: "Creative Design Services",
    short: "Creative Design",
    summary:
      "Stand out with stunning visuals and brand identity that captures attention and converts visitors to customers.",
    intro:
      "Good design makes your product easier to use and your brand easier to remember. Our creative team handles everything from interfaces to identity to video.",
    offerings: [
      {
        title: "UI/UX Design & Prototyping",
        text: "User research, wireframes and clickable prototypes that make products intuitive before a line of code is written.",
      },
      {
        title: "Brand Identity & Graphics",
        text: "Logos, colour systems, typography and marketing graphics that give your brand a consistent, confident look.",
      },
      {
        title: "Video Editing & Motion Graphics",
        text: "Product videos, social clips and animated explainers that tell your story in seconds.",
      },
    ],
    outcomes: [
      "Interfaces your customers find easy to use",
      "A consistent brand across every touchpoint",
      "Visual content ready for web, social and print",
      "Design files your team can reuse",
    ],
    tools: ["Figma", "Adobe XD", "Sketch", "Premiere Pro", "After Effects", "Final Cut Pro", "DaVinci Resolve"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    short: "Digital Marketing",
    summary:
      "Reach your audience and accelerate growth with data-driven marketing strategies that deliver results.",
    intro:
      "We combine analytics, content and paid media to put your business in front of the right people, and we measure what works so your budget goes further.",
    offerings: [
      {
        title: "SEO & Website Analytics",
        text: "Technical and content SEO, plus analytics set-up that shows exactly where your visitors come from and what they do.",
      },
      {
        title: "Social Media Management",
        text: "Content calendars, community management and reporting across the platforms your customers use.",
      },
      {
        title: "Google & Meta Ads Campaigns",
        text: "Targeted campaigns on Google, Facebook and Instagram, optimised continuously for leads and sales.",
      },
    ],
    outcomes: [
      "Higher visibility in search results",
      "A steady, engaged social presence",
      "Ad spend tracked against real results",
      "Clear monthly reporting",
    ],
    tools: ["Search Console", "Google Analytics", "Google Ads", "Meta Ads", "SEMrush"],
  },
  {
    slug: "it-consulting",
    title: "IT Consultant Solutions",
    short: "IT Consulting",
    summary:
      "We support organisations, SMEs, startups and sole proprietors to make effective use of technology and create successful digital transformations.",
    intro:
      "Not sure which technology to invest in, or how to modernise what you already have? We help you make clear, practical technology decisions.",
    offerings: [
      {
        title: "Digital & IT Strategy Consulting",
        text: "A technology roadmap aligned with your business goals, budget and timeline.",
      },
      {
        title: "Software Architecture & System Advisory",
        text: "Independent reviews and design of systems that are secure, maintainable and ready to scale.",
      },
      {
        title: "Process Optimisation & Automation Consulting",
        text: "We map your workflows and find where automation and AI can remove manual effort.",
      },
    ],
    outcomes: [
      "A clear, prioritised technology roadmap",
      "Lower risk on major technology decisions",
      "Less manual work through automation",
      "Teams equipped to run new systems",
    ],
    tools: ["Azure", "AWS", "Google Cloud", "GitHub", "GitLab", "PostgreSQL", "MSSQL", "Oracle"],
  },
];

export const about = {
  body:
    "At CDMWare, we build software solutions, provide creative design services, and execute digital marketing strategies that help businesses thrive. We work with startups, SMEs, and established organisations to engineer digital products and solutions that solve real business problems and drive measurable, sustainable growth.",
  purpose:
    "To empower businesses, institutions, and individuals with tailored digital services that solve real problems, enhance visibility, and drive growth.",
  vision: "To be a trusted global leader in delivering innovative, affordable, and high-quality digital solutions.",
  mission:
    "To empower businesses, organisations, and individuals worldwide with tailored digital services that solve real challenges, enhance visibility, and drive sustainable growth.",
  edge: "We combine global best practices with deep African market expertise.",
};

export const process = [
  {
    title: "Discovery & Consultation",
    text: "We start by deeply understanding your business, goals, challenges, and target audience. This foundation ensures we create solutions that truly address your needs.",
  },
  {
    title: "Strategy & Planning",
    text: "Once we align on objectives, we develop a comprehensive strategy and detailed project plan that serves as our roadmap throughout the project.",
  },
  {
    title: "Design & Prototyping",
    text: "Our creative team brings your vision to life with intuitive user interfaces and designs that are both beautiful and functional.",
  },
  {
    title: "Development & Implementation",
    text: "Our developers transform approved designs into fully functional, high-performance applications using modern technologies and best practices.",
  },
  {
    title: "Testing & Quality Assurance",
    text: "Before launch, we rigorously test every aspect of your project to ensure it works flawlessly across all devices, browsers, and scenarios.",
  },
  {
    title: "Launch & Deployment",
    text: "We carefully deploy your project to production, ensuring a smooth transition with minimal downtime and maximum impact.",
  },
  {
    title: "Training & Handover",
    text: "We make sure your team is fully equipped to manage and maintain your new solution, with hands-on training and detailed documentation.",
  },
  {
    title: "Support & Continuous Optimisation",
    text: "Our partnership doesn't end at launch. We provide ongoing support, maintenance, and optimisation so your solution keeps performing at its best.",
  },
];

export const whyUs = [
  {
    title: "Business-Driven Digital Solutions",
    text: "We don't just build software — we solve real business problems. Every solution is designed with clear objectives, measurable outcomes, and long-term value in mind.",
  },
  {
    title: "AI-Powered & Scalable Technology",
    text: "We use modern technologies and AI-enabled systems to build scalable, secure, and future-ready solutions that grow with your business.",
  },
  {
    title: "Data-Driven Growth & Marketing",
    text: "We use insights, analytics, and proven digital marketing strategies to increase visibility, attract the right audience, and drive sustainable growth.",
  },
  {
    title: "Trusted End-to-End Partner",
    text: "From consultation and strategy to development, launch, and optimisation, we work as a long-term technology partner, not just a service provider.",
  },
];

// TODO: replace these placeholder figures with real numbers.
export const stats = [
  { label: "Satisfied clients", value: "50+" },
  { label: "Finished projects", value: "100+" },
  { label: "Awards", value: "5+" },
  { label: "Support", value: "24/7" },
];

export const industries = [
  {
    slug: "startups-smes",
    title: "Startups & SMEs",
    tagline: "Scale faster with technology built for growth",
    text: "Affordable MVPs, websites and marketing that help young businesses launch quickly and grow without heavy upfront costs.",
  },
  {
    slug: "corporate",
    title: "Corporate Organisations",
    tagline: "Enterprise solutions that enhance efficiency",
    text: "Custom enterprise software, system integration and automation that streamline operations across departments.",
  },
  {
    slug: "ngos",
    title: "NGOs & Foundations",
    tagline: "Amplify your impact with the right digital tools",
    text: "Websites, donor and programme management tools, and campaigns that help mission-driven organisations reach more people.",
  },
  {
    slug: "education",
    title: "Educational Institutions",
    tagline: "Modern platforms for modern learning",
    text: "Learning platforms, school portals and admin systems that make teaching, learning and administration easier.",
  },
  {
    slug: "healthcare",
    title: "Healthcare & Wellness",
    tagline: "Digital solutions for better care",
    text: "Secure booking, records and patient-engagement tools that help providers deliver better care.",
  },
  {
    slug: "government",
    title: "Government",
    tagline: "Digital solutions for government administrations",
    text: "Citizen-facing portals, data systems and digital transformation support for public-sector bodies.",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  service: string; // service slug
  summary: string;
  image: string;
  client: string;
  challenge: string;
  approach: string[];
  results: { label: string; value: string }[];
};

// TODO: the old site only had titles for these. Replace the client name,
// challenge, approach and results with the real project details.
export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-software-solution",
    title: "Enterprise Software Solution",
    category: "Software Development",
    service: "software-web-development",
    summary: "A custom, AI-enabled platform that replaced manual processes and gave leadership real-time visibility.",
    image: "/images/case-enterprise-software.webp",
    client: "Client name (TODO)",
    challenge:
      "TODO: Describe the client's situation and the problem they needed solved, e.g. disconnected spreadsheets, slow reporting, manual approvals.",
    approach: [
      "TODO: Discovery workshops with stakeholders to map existing workflows",
      "TODO: Designed and built a custom platform with role-based dashboards",
      "TODO: Integrated with existing systems and automated reporting",
    ],
    results: [
      { label: "Faster reporting", value: "TODO" },
      { label: "Manual hours saved", value: "TODO" },
      { label: "Users onboarded", value: "TODO" },
    ],
  },
  {
    slug: "enterprise-ui-ux-product-design",
    title: "Enterprise UI/UX & Creative Product Design",
    category: "Design",
    service: "creative-design",
    summary: "A design-focused redesign that made a complex product simple, consistent and easy to adopt.",
    image: "", // TODO: add a real project image (the old one was a stock template)
    client: "Client name (TODO)",
    challenge: "TODO: Describe the usability or brand problems with the product before the redesign.",
    approach: [
      "TODO: User research and usability testing",
      "TODO: New design system and component library",
      "TODO: Clickable prototypes validated with real users",
    ],
    results: [
      { label: "Task completion", value: "TODO" },
      { label: "Support tickets", value: "TODO" },
      { label: "Screens redesigned", value: "TODO" },
    ],
  },
  {
    slug: "digital-growth-marketing-performance",
    title: "Digital Growth & Marketing Performance",
    category: "Digital Marketing",
    service: "digital-marketing",
    summary: "A results-driven campaign combining SEO, social and paid ads to grow qualified leads.",
    image: "/images/case-marketing.webp",
    client: "Client name (TODO)",
    challenge: "TODO: Describe the client's visibility or lead-generation challenge.",
    approach: [
      "TODO: Technical SEO audit and content plan",
      "TODO: Google and Meta ad campaigns with conversion tracking",
      "TODO: Monthly reporting and optimisation",
    ],
    results: [
      { label: "Organic traffic", value: "TODO" },
      { label: "Qualified leads", value: "TODO" },
      { label: "Cost per lead", value: "TODO" },
    ],
  },
];

export const testimonials = [
  {
    name: "Elfrida",
    role: "CEO, PIS Ltd · Lagos",
    quote:
      "CDMWare didn't just build our product, they partnered with us. Their technical expertise, attention to detail, and ability to translate ideas into a functional, high-performing product exceeded our expectations. We launched faster, cleaner, and more confidently because of their team.",
  },
  {
    name: "Uzo",
    role: "CEO, Izoduwa FSH · UK",
    quote:
      "Working with CDMWare completely transformed how we operate digitally. From the initial consultation to delivery, their team understood our business challenges and delivered a solution that was both scalable and easy to use. Our online visibility and operational efficiency improved significantly within weeks.",
  },
  {
    name: "Stella",
    role: "Head of IT, CDMT · Bulgaria",
    quote:
      "What stood out about CDMWare was their strategic approach. They took time to understand our systems, proposed improvements, and delivered a secure, well-architected solution aligned with our long-term goals. Their professionalism and technical depth make them a trusted technology partner.",
  },
];

export const techStack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["JavaScript", "Java", "Python", "C#", "PHP", "Dart", "Swift"] },
  { group: "Cloud & DevOps", items: ["Microsoft Azure", "AWS", "Google Cloud", "Docker", "Kubernetes", "GitLab", "GitHub"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MSSQL", "Firebase", "MongoDB", "Realm", "Oracle"] },
  { group: "Design & Media", items: ["Figma", "Adobe XD", "Sketch", "Premiere Pro", "After Effects", "Final Cut Pro", "DaVinci Resolve"] },
  { group: "Marketing & AI", items: ["Search Console", "Google Analytics", "Google Ads", "Meta Ads", "SEMrush", "OpenAI", "TensorFlow"] },
];

export const consultation = {
  title: "Book your free consultation",
  lede: "Schedule a 30-minute call with CDMWare and let's discuss:",
  points: [
    { title: "Your business", text: "We want to hear all about you, your business, and your ideas." },
    { title: "How we work", text: "Our process, custom solutions and support options." },
    { title: "The next steps", text: "How we'll solve your business problems, and what it takes to get started." },
  ],
};
