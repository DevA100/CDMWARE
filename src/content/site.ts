/**
 * All site copy and settings live here, so the team can update text and
 * links without touching page layouts. The copy comes from
 * docs/website-content.md.
 *
 * Search for "TODO" to find every placeholder that still needs real content.
 */

type Link = { label: string; href: string };

export const site = {
  name: "CDMware",
  legalName: "CDMware",
  registrationNumber: "8695337",
  tagline: "Engineering Your Vision.",
  positioning: "An Innovation and Technology Company",
  descriptors: "Business Innovation. Digital Innovation. AI-Powered Engineering.",
  url: "https://cdmware.com",
  // Also the home page meta description.
  description:
    "CDMware helps startups, SMEs and organizations refine business models, develop digital strategies and build AI-powered solutions. Engineering Your Vision.",
  email: "info@cdmware.com",
  phone: "+234 704 395 5397",
  phoneHref: "tel:+2347043955397",
  whatsapp: "2347043955397",
  whatsappMessage: "Hello CDMware, I'd like to talk about my business.",
  address: "Lekki, Lagos, Nigeria",
  // TODO: replace "#" with the real profile URLs. Entries without a real
  // URL are hidden (see `socialLinks` below).
  socials: [
    { network: "facebook", href: "#" },
    { network: "instagram", href: "#" },
    { network: "linkedin", href: "https://www.linkedin.com/company/cdmware/" },
    { network: "x", href: "#" },
  ] as const,
};

/** The social profiles that have a real URL: shown in the footer and listed as `sameAs` in the structured data. */
export const socialLinks = site.socials.filter((s) => /^https?:\/\//.test(s.href));

/** Header navigation. "Home" only shows in the mobile menu (the logo links home on desktop). */
export const nav: (Link & { mobileOnly?: boolean })[] = [
  { label: "Home", href: "/", mobileOnly: true },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Our Work", href: "/our-work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const navCta: Link = { label: "Let's Talk", href: "/contact" };

/* ------------------------------------------------------------------ */
/* SEO titles and descriptions (SEO METADATA in website-content.md).   */
/* how-we-work and the case study template are written in the same     */
/* style, as the content file has none for them.                       */
/* ------------------------------------------------------------------ */

export const seo = {
  home: {
    title: "CDMware | Business Innovation, Digital Solutions & AI Engineering",
    description: site.description,
  },
  about: {
    title: "About CDMware | Innovation & Technology",
    description:
      "Discover CDMware, an innovation and technology company connecting business strategy, digital innovation and AI-powered engineering.",
  },
  services: {
    title: "Our Services | Business Innovation & AI Solutions | CDMware",
    description:
      "Explore CDMware's business model advisory, digital strategy, custom software development, AI agents and intelligent automation services.",
  },
  whoWeServe: {
    title: "Solutions for Startups, SMEs & Organizations | CDMware",
    description:
      "CDMware works with founders, startups, SMEs and organizations to strengthen business models and enable growth through intelligent technology.",
  },
  howWeWork: {
    title: "How We Work | From Understanding to Execution | CDMware",
    description:
      "See how CDMware works: discovery, business assessment, strategic recommendations, solution definition, engineering and continued improvement.",
  },
  ourWork: {
    title: "Case Studies & Projects | CDMware",
    description:
      "Explore CDMware's business innovation, digital product and AI engineering projects. Discover our approach to solving real business challenges.",
  },
  insights: {
    title: "Business, Digital Innovation & AI Insights | CDMware",
    description:
      "Explore practical insights on business models, digital innovation, artificial intelligence, automation and software engineering.",
  },
  contact: {
    title: "Contact CDMware | Let's Engineer Your Vision",
    description:
      "Talk to CDMware about your business idea, digital strategy or AI-powered solution. Start a conversation with our team.",
  },
  terms: {
    title: "Terms of Services | CDMware",
    description: "The terms and conditions for using the CDMware website and services.",
  },
  privacy: {
    title: "Privacy Policy | CDMware",
    description: "How CDMware collects, uses and protects your personal information.",
  },
  /** For /our-work/[slug]. */
  caseStudy: (title: string) => `${title} | Case Study | CDMware`,
};

/* ------------------------------------------------------------------ */
/* Shared calls to action                                              */
/* ------------------------------------------------------------------ */

export const ctas = {
  startConversation: { label: "Start a Conversation", href: "/contact" },
  exploreServices: { label: "Explore Our Services", href: "/services" },
  initialConsultation: "Book an Initial Consultation",
  whatsapp: "Chat on WhatsApp",
};

/** The closing call to action, used at the end of the home page and by ConsultationBand. */
export const closingCta = {
  title: "Your Vision Deserves the Right Foundation.",
  text: "Whether you are exploring a new business idea, refining an existing model or looking to leverage technology more effectively, CDMware can help you identify the right direction and engineer the possibilities.",
  primary: ctas.startConversation,
  secondary: ctas.exploreServices,
};

/* ------------------------------------------------------------------ */
/* PAGE 1: HOME                                                        */
/* ------------------------------------------------------------------ */

export type ServiceId = "business-innovation" | "digital-innovation" | "ai-powered-engineering";

export const home = {
  hero: {
    eyebrow: site.positioning,
    headline: "Engineering Your Vision.",
    strapline: "Business Innovation. Digital Innovation. AI-Powered Solution.",
    paragraphs: [
      "We help startups, founders, SMEs and organizations turn business ideas into viable models, improve how they operate, and bring their ambitions to life through intelligent digital and AI-powered solutions.",
      "Before we build, we understand. Before you invest, we help you identify what makes business sense.",
    ],
    primary: { label: "Explore What We Do", href: "/services" },
    secondary: { label: "Let's Discuss Your Business", href: "/contact" },
  },
  ticker: ["Business Innovation", "Digital Innovation", "AI-Powered Engineering", "Engineering Your Vision."],
  intro: {
    eyebrow: "More Than Technology",
    title: "Great Solutions Begin With the Right Questions.",
    paragraphs: [
      "Every business has a vision. But turning that vision into a sustainable, functional and scalable enterprise requires more than technology.",
      "It requires understanding the business, identifying the right opportunities, making informed decisions and implementing solutions that address real needs.",
      "At CDMware, we approach every engagement with this understanding. We examine business models, evaluate operational realities, identify gaps and recommend improvements before determining the technology required.",
      "We don't believe in building software simply because it can be built. We believe in building what makes sense, what creates value and what moves the business forward.",
    ],
  },
  whatWeDo: {
    eyebrow: "What We Do",
    title: "Three Capabilities. One Connected Approach.",
    listLabel: "Our services include:",
    capabilities: [
      {
        id: "business-innovation",
        title: "Business Innovation",
        subheading: "Build on a stronger business foundation.",
        text: "We work with founders, startups and established businesses to examine, validate and refine their business models. We help identify opportunities, address structural gaps and develop better approaches to creating, delivering and capturing value.",
        items: [
          "Business model assessment and analysis",
          "Business idea validation",
          "Business model design and refinement",
          "Value proposition development",
          "Customer and market analysis",
          "Revenue model assessment",
          "Strategic business advisory",
          "Business growth and scalability planning",
        ],
      },
      {
        id: "digital-innovation",
        title: "Digital Innovation",
        subheading: "Make technology work for your business.",
        text: "We help businesses identify opportunities to use technology more effectively. From digital strategy to process improvement, we develop practical approaches to modernizing operations, improving efficiency and creating better digital experiences.",
        items: [
          "Digital strategy and advisory",
          "Digital innovation planning",
          "Business process analysis and optimization",
          "Technology assessment and architecture",
          "Digital product strategy",
          "Workflow improvement",
          "Digitalization of business operations",
          "Technology implementation roadmaps",
        ],
      },
      {
        id: "ai-powered-engineering",
        title: "AI-Powered Engineering",
        subheading: "Turn the right ideas into intelligent solutions.",
        text: "We design, develop and implement digital products and intelligent systems that address clearly defined business and operational needs.",
        items: [
          "AI-powered software applications",
          "AI agents and multi-agent systems",
          "Intelligent workflow automation",
          "Custom web and mobile applications",
          "Enterprise software solutions",
          "API development and system integration",
          "Data intelligence and analytics",
          "Intelligent business tools and platforms",
        ],
      },
    ] satisfies { id: ServiceId; title: string; subheading: string; text: string; items: string[] }[],
  },
  approach: {
    eyebrow: "Our Approach",
    title: "We Understand Before We Engineer.",
    paragraphs: [
      "Technology investments should be informed by business realities, not assumptions.",
      "Our approach begins with understanding what you are trying to achieve, the model behind it and the challenges you face.",
      "We assess the business opportunity, identify gaps, recommend improvements and determine where digital technology and artificial intelligence can create meaningful value.",
      "Sometimes, the best recommendation is to improve an existing process rather than build a new application. We are comfortable making that recommendation because the right solution matters more than simply delivering a software project.",
    ],
    cta: { label: "Let's Examine Your Business", href: "/contact" },
  },
  whoWeWorkWith: {
    eyebrow: "Who We Work With",
    title: "Supporting Businesses at Different Stages of Growth.",
    audiences: [
      {
        id: "startups-founders",
        title: "Startups & Founders",
        text: "From early-stage ideas to growing ventures, we help founders evaluate business opportunities, refine their models, define digital products and build the technology needed to execute their vision.",
      },
      {
        id: "smes",
        title: "Small & Medium Enterprises",
        text: "We help SMEs improve their business models, optimize processes, adopt relevant technologies and develop intelligent solutions that support operational efficiency and growth.",
      },
      {
        id: "organizations-institutions",
        title: "Organizations & Institutions",
        text: "We work with established organizations and institutions to assess technology opportunities, modernize operations, improve existing systems and implement digital and AI-powered solutions.",
      },
    ] satisfies { id: AudienceId; title: string; text: string }[],
    linkLabel: "Who We Serve",
  },
  whyUs: {
    eyebrow: "Why CDMware?",
    title: "We Think Beyond the Build.",
    points: [
      {
        title: "Business Understanding First",
        text: "We take time to understand your business model, objectives, customers and operational realities before recommending technology.",
      },
      {
        title: "Strategic Thinking",
        text: "We help identify gaps, evaluate opportunities and make informed decisions before resources are committed to implementation.",
      },
      {
        title: "Purposeful Engineering",
        text: "We build solutions around defined business needs, not technology trends or unnecessary complexity.",
      },
      {
        title: "Intelligent Technology",
        text: "We apply artificial intelligence, automation, data and modern engineering to create practical solutions.",
      },
      {
        title: "A Connected Partnership",
        text: "We bring business thinking and technical execution together, helping clients move from ideas and strategy to implementation.",
      },
    ],
  },
  process: {
    eyebrow: "Our Process",
    title: "From Understanding to Execution.",
    steps: [
      { title: "Discover", text: "We listen, ask questions and understand your business, idea, customers, challenges and objectives." },
      {
        title: "Assess",
        text: "We examine your business model, value proposition, revenue structure, market assumptions and operational processes to identify opportunities and weaknesses.",
      },
      {
        title: "Recommend",
        text: "We present findings, recommend improvements and identify the most appropriate strategic and technological direction.",
      },
      {
        title: "Design",
        text: "Where a digital solution is justified, we define the requirements, architecture, user experience and implementation roadmap.",
      },
      { title: "Engineer", text: "We develop, integrate and configure the appropriate digital and AI-powered solutions." },
      {
        title: "Validate & Deploy",
        text: "We test the solution, assess its performance against agreed requirements and prepare it for implementation.",
      },
      {
        title: "Support & Evolve",
        text: "We provide agreed support and help identify opportunities for further improvement as the business evolves.",
      },
    ],
    link: { label: "See how we work", href: "/how-we-work" },
  },
  testimonials: {
    title: "What our clients say",
    intro: "Startups, SMEs and organizations in Nigeria and beyond.",
  },
};

/* ------------------------------------------------------------------ */
/* PAGE 2: ABOUT                                                       */
/* ------------------------------------------------------------------ */

export const about = {
  crumb: "About",
  eyebrow: "About CDMware",
  title: "We Believe in the Power of Ideas, Strategy and Intelligent Execution.",
  paragraphs: [
    "CDMware is an innovation and technology company committed to helping businesses develop stronger foundations, explore new possibilities and achieve more through intelligent technology.",
    "We work at the intersection of business thinking and technology engineering.",
    "Our work begins with understanding. We engage with founders, startups, SMEs and organizations to examine their business models, understand their challenges, identify opportunities and determine how innovation and technology can create meaningful value.",
    "From refining business models and developing digital strategies to engineering AI-powered solutions, we help turn business possibilities into practical outcomes.",
    "We believe technology should serve a purpose. It should solve a problem, improve an experience, strengthen an operation or create an opportunity.",
    "That is why we look beyond what needs to be built and focus on why it needs to exist.",
  ],
  mission: {
    title: "Our Mission",
    text: "To help businesses unlock their potential through business innovation, strategic thinking and intelligent technology.",
  },
  vision: {
    title: "Our Vision",
    text: "To become a trusted innovation and technology partner, enabling businesses and organizations to build, evolve and thrive in an increasingly digital world.",
  },
  philosophy: {
    title: "Our Philosophy",
    line: ["Understand the business.", "Rethink the possibilities.", "Engineer the solution."],
    paragraphs: [
      "We believe that successful innovation requires more than good ideas and advanced technology. It requires a clear understanding of the problem, a viable approach to solving it and the ability to execute effectively.",
      "We don't encourage businesses to invest in technology without first understanding what they need and why they need it.",
      "At CDMware, the objective is not simply to build more. It is to build better.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* PAGE 3: SERVICES                                                    */
/* ------------------------------------------------------------------ */

export type Service = {
  /** Also the section's anchor on /services, e.g. /services#digital-innovation. */
  id: ServiceId;
  title: string;
  subheading: string;
  intro: string;
  items: string[];
  deliverables: string;
};

export const servicesPage = {
  crumb: "Services",
  eyebrow: "Our Services",
  title: "Connecting Business Thinking with Technology Execution.",
  intro:
    "We combine business model analysis, digital strategy and AI-powered engineering to help clients make informed decisions and implement solutions that matter.",
  listLabel: "Services",
  deliverablesLabel: "Deliverables may include:",
};

export const services: Service[] = [
  {
    id: "business-innovation",
    title: "Business Innovation",
    subheading: "Rethink the model. Strengthen the opportunity.",
    intro:
      "A promising idea does not automatically translate into a viable business. We help clients examine the assumptions, structures and strategies behind their businesses.",
    items: [
      "Business model assessment",
      "Business idea evaluation and validation",
      "Business model design and refinement",
      "Value proposition development",
      "Customer segmentation and market analysis",
      "Revenue model evaluation",
      "Operational model assessment",
      "Strategic business advisory",
    ],
    deliverables:
      "Business assessment reports, business model recommendations, value proposition frameworks, market and customer insights, and strategic recommendations.",
  },
  {
    id: "digital-innovation",
    title: "Digital Innovation",
    subheading: "Identify where technology can make a difference.",
    intro:
      "We help businesses determine how digital technology can support their objectives, improve processes and create better ways of operating.",
    items: [
      "Digital strategy development",
      "Digital readiness assessment",
      "Technology advisory",
      "Digital product strategy",
      "Business process analysis",
      "Process optimization",
      "Workflow redesign",
      "Technology architecture and roadmaps",
    ],
    deliverables:
      "Digital strategy documents, process improvement recommendations, technology roadmaps, solution architecture and implementation plans.",
  },
  {
    id: "ai-powered-engineering",
    title: "AI-Powered Engineering",
    subheading: "Engineer intelligent solutions for real-world needs.",
    intro:
      "We build technology that enables businesses to operate more effectively, automate appropriate processes and create new digital capabilities.",
    items: [
      "AI-powered applications",
      "AI agents and multi-agent systems",
      "Intelligent workflow automation",
      "Custom software development",
      "Web and mobile application development",
      "Enterprise application development",
      "API and third-party integrations",
      "Data processing and analytics solutions",
    ],
    deliverables:
      "Working software applications, AI-enabled systems, intelligent agents, automated workflows, integrations, technical documentation and deployment support.",
  },
];

/* ------------------------------------------------------------------ */
/* PAGE 4: WHO WE SERVE                                                */
/* ------------------------------------------------------------------ */

export type AudienceId = "startups-founders" | "smes" | "organizations-institutions";

export const whoWeServe = {
  crumb: "Who We Serve",
  eyebrow: "Who We Work With",
  title: "Different Businesses. Different Challenges. A Shared Commitment to Better Solutions.",
  helpLabel: "We can help you with:",
  audiences: [
    {
      id: "startups-founders",
      title: "Startups & Founders",
      situation: "You have an idea, an opportunity or an emerging business.",
      text: "We help you examine its viability, understand your target customers, refine your business model and determine the right digital capabilities to support your growth.",
      helpWith: [
        "Business idea assessment",
        "Business model development",
        "Startup digital strategy",
        "Product definition and validation",
        "MVP planning and development",
        "AI-powered product engineering",
      ],
    },
    {
      id: "smes",
      title: "SMEs",
      situation:
        "You have an established business and want to operate more effectively, reach new opportunities or modernize your operations.",
      text: "We help identify operational gaps, improve business processes and determine where digital solutions and AI can create practical value.",
      helpWith: [
        "Business model refinement",
        "Operational assessment",
        "Digitalization strategy",
        "Workflow automation",
        "Custom business applications",
        "AI-powered operational solutions",
      ],
    },
    {
      id: "organizations-institutions",
      title: "Organizations & Institutions",
      situation:
        "You need to improve existing systems, explore new technology opportunities or develop capabilities that support your organizational objectives.",
      text: "We work with organizations to assess their requirements, develop practical technology strategies and implement appropriate digital solutions.",
      helpWith: [
        "Technology advisory",
        "Digital strategy",
        "Systems assessment",
        "Enterprise software development",
        "Process optimization",
        "AI integration and automation",
      ],
    },
  ] satisfies { id: AudienceId; title: string; situation: string; text: string; helpWith: string[] }[],
};

/* ------------------------------------------------------------------ */
/* PAGE 5: HOW WE WORK                                                 */
/* ------------------------------------------------------------------ */

export const howWeWork = {
  crumb: "How We Work",
  eyebrow: "How We Work",
  title: "We Don't Rush to Build. We Work to Get It Right.",
  intro:
    "Every engagement is different, but our approach follows a consistent principle: understand the need before engineering the solution.",
  stepLabel: "Step",
  steps: [
    { title: "Discovery", text: "We understand your vision, business objectives, current challenges and expectations." },
    {
      title: "Business Assessment",
      text: "We examine your business model, customers, value proposition, revenue structure and operational processes.",
    },
    {
      title: "Strategic Recommendations",
      text: "We identify gaps, opportunities and possible improvements. We recommend the most suitable direction based on our findings.",
    },
    {
      title: "Solution Definition",
      text: "We determine whether technology is required, what should be built and how the proposed solution will support the business.",
    },
    { title: "Engineering & Implementation", text: "We design, develop, integrate and deploy the agreed solution." },
    {
      title: "Evaluation & Improvement",
      text: "We assess the delivered solution against agreed requirements and identify opportunities for continued improvement.",
    },
  ],
  note: {
    title: "Important",
    text: "Not every engagement needs to progress through every stage. Some clients may need strategic assessment alone, while others may require a complete journey from business analysis to software implementation.",
  },
};

/* ------------------------------------------------------------------ */
/* PAGE 6: OUR WORK (case studies)                                     */
/* ------------------------------------------------------------------ */

export const caseStudyCategories = [
  "Business Innovation & Strategy",
  "Digital Product Development",
  "AI & Intelligent Automation",
  "Enterprise Systems & Integrations",
  "Digital Experience & Design",
] as const;

export type CaseStudyCategory = (typeof caseStudyCategories)[number];

/**
 * One case study. Adding an entry to `caseStudies` creates its card on
 * /our-work and its page at /our-work/<slug>.
 *
 * From the content guidelines: only publish projects with accurate
 * descriptions and permission to disclose client information. Where client
 * information is confidential, use an anonymized case study with approval.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  category: CaseStudyCategory;
  /** One or two sentences for the card and the page's meta description. */
  summary: string;
  /** A path in public/images/, e.g. "/images/my-project.webp". Leave "" for a branded placeholder. */
  image: string;
  /** 1. The client or project context. */
  context: string;
  /** 2. The original challenge or opportunity. */
  challenge: string;
  /** 3. The business or operational assessment. */
  assessment: string;
  /** 4. The approach and recommendations. */
  approach: string[];
  /** 5. The digital or AI solution implemented, if applicable. */
  solution?: string;
  /** 6. The verified outcome. */
  outcome: string;
};

// No case studies have been approved for publication yet.
export const caseStudies: CaseStudy[] = [];

export const ourWork = {
  crumb: "Our Work",
  eyebrow: "Our Work",
  title: "Ideas, Challenges and the Solutions Behind Them.",
  intro:
    "We believe the best way to demonstrate our capabilities is to show how we approach real problems and the solutions we develop.",
  categoriesTitle: "Case study categories",
  empty: {
    title: "Case studies are being prepared.",
    text: "We are preparing case studies for publication. In the meantime, we would be glad to hear about your business.",
  },
  detail: {
    context: "The context",
    challenge: "The challenge or opportunity",
    assessment: "Our assessment",
    approach: "Approach and recommendations",
    solution: "The solution",
    outcome: "The outcome",
    back: "All case studies",
  },
};

/* ------------------------------------------------------------------ */
/* PAGE 7: INSIGHTS                                                    */
/* ------------------------------------------------------------------ */

export const insights = {
  crumb: "Insights",
  title: "Ideas Worth Exploring. Knowledge Worth Sharing.",
  intro:
    "We explore the intersection of business, innovation and technology to help business leaders, founders and organizations make more informed decisions.",
  categoriesTitle: "What we write about",
  categories: [
    {
      title: "Business Innovation",
      text: "Business models, entrepreneurship, business viability, market opportunities and strategic thinking.",
    },
    {
      title: "Digital Innovation",
      text: "Digital strategy, digital products, process optimization, technology adoption and operational efficiency.",
    },
    {
      title: "Artificial Intelligence",
      text: "AI applications, intelligent agents, automation, AI adoption and practical AI opportunities for businesses.",
    },
    {
      title: "Engineering & Technology",
      text: "Software architecture, system integration, engineering practices and emerging technologies.",
    },
  ],
  upcomingTitle: "Coming soon",
  upcoming: [
    "Before You Build an App: Questions Every Founder Should Answer.",
    "Is Your Business Model Ready to Scale?",
    "When Should a Business Invest in Custom Software?",
    "Practical Applications of AI for Small and Medium-Sized Businesses.",
    "Business Process Automation: What Should You Automate First?",
    "Building an AI-Powered Business: Strategy Before Technology.",
  ],
};

/* ------------------------------------------------------------------ */
/* PAGE 8: CONTACT                                                     */
/* ------------------------------------------------------------------ */

export const contact = {
  crumb: "Contact",
  title: "Let's Talk About Your Vision.",
  lede: "Whether you are developing a new business idea, refining an existing business model or exploring opportunities to use technology more effectively, we would like to understand what you are working towards.",
  formTitle: ctas.startConversation.label,
  formIntro: "Tell us about your business, your challenges and what you hope to achieve.",
  detailsTitle: "Contact details",
  consultation: {
    title: ctas.initialConsultation,
    text: "Our first conversation is about understanding your needs and determining how we can help.",
    hint: "Choose “Initial consultation” in the form and we'll be in touch to arrange a time.",
  },
  form: {
    serviceLabel: "What would you like to discuss?",
    servicePlaceholder: "Choose an option",
    serviceOptions: [
      "Business Innovation",
      "Digital Innovation",
      "AI-Powered Engineering",
      "Initial consultation",
      "Something else",
    ],
    messageLabel: "Tell us about your business",
    submit: ctas.startConversation.label,
  },
};

/* ------------------------------------------------------------------ */
/* FOOTER                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  title: `${site.name} — ${site.tagline}`,
  descriptor: site.descriptors,
  text: "We help businesses rethink possibilities, strengthen their models and engineer intelligent solutions that create meaningful value.",
  quickLinksTitle: "Quick Links",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Who We Serve", href: "/who-we-serve" },
    { label: "Our Work", href: "/our-work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ] satisfies Link[],
  servicesTitle: "Services",
  services: services.map((s) => ({ label: s.title, href: `/services#${s.id}` })),
  howWeWork: { label: "How We Work", href: "/how-we-work" },
  contactTitle: "Contact",
  legal: [
    { label: "Terms of Services", href: "/terms-of-services" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ] satisfies Link[],
  /** Rendered as "Copyright © <current year> CDMware. All Rights Reserved." */
  copyright: { before: "Copyright ©", after: `${site.name}. All Rights Reserved.` },
  /** Shown after the copyright line: "Company Registration No. <site.registrationNumber>". */
  registrationLabel: "Company Registration No.",
};

/* ------------------------------------------------------------------ */
/* Client testimonials (real, kept from the previous site)             */
/* ------------------------------------------------------------------ */

export const testimonials = [
  {
    name: "Elfrida",
    role: "CEO, PIS Ltd · Lagos",
    quote:
      "CDMware didn't just build our product, they partnered with us. Their technical expertise, attention to detail, and ability to translate ideas into a functional, high-performing product exceeded our expectations. We launched faster, cleaner, and more confidently because of their team.",
  },
  {
    name: "Uzo",
    role: "CEO, Izoduwa FSH · UK",
    quote:
      "Working with CDMware completely transformed how we operate digitally. From the initial consultation to delivery, their team understood our business challenges and delivered a solution that was both scalable and easy to use. Our online visibility and operational efficiency improved significantly within weeks.",
  },
  {
    name: "Stella",
    role: "Head of IT, CDMT · Bulgaria",
    quote:
      "What stood out about CDMware was their strategic approach. They took time to understand our systems, proposed improvements, and delivered a secure, well-architected solution aligned with our long-term goals. Their professionalism and technical depth make them a trusted technology partner.",
  },
];

/** Small labels on link-preview images that have no page crumb of their own. */
export const ogLabels = { caseStudy: "Case study", legal: "Legal" };
