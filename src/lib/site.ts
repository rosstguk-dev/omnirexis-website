export const BOOK_CALL =
  "https://scheduler.zoom.us/ross-gallagher-ie9whv/30-mins-with-ross";

export const EMAIL = "hello@omnirexis.co.uk";
export const PHONE = "0161 250 0045";
export const PHONE_HREF = "tel:+441612500045";
export const LINKEDIN = "https://www.linkedin.com/company/omnirexis";

export const ADDRESS = {
  line1: "Bartle House",
  line2: "9 Oxford Court",
  city: "Manchester",
  postcode: "M2 3WQ",
};

export const HOURS = [
  { days: "Monday – Friday", time: "8:00 – 20:00" },
  { days: "Saturday – Sunday", time: "9:00 – 17:00" },
];

export const NAV = [
  { to: "/solutions" as const, label: "Solutions" },
  { to: "/process" as const, label: "Process" },
  { to: "/pt" as const, label: "PT" },
  { to: "/leisure" as const, label: "Leisure" },
  { to: "/rapid-services" as const, label: "Studio" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export const SOLUTIONS = [
  {
    id: "audit",
    index: "01",
    name: "AI Opportunity Audit",
    kicker: "Know where to start",
    summary:
      "We sit with the work that is slow, missed or repeated, then name the two or three moves that would actually change the week.",
    href: "/solutions#audit",
    points: [
      "Workflow review and opportunity mapping",
      "Prioritised implementation roadmap",
      "Projected costs and benefits agreed before anything is built",
    ],
  },
  {
    id: "voice",
    index: "02",
    name: "Voice receptionists",
    kicker: "Every missed call still has a next step",
    summary:
      "Capture the enquiry, answer what you have approved, book the slot, and hand the rest to a person — without a script that sounds like a machine.",
    href: "/solutions#voice",
    points: [
      "Call flows and approved answers",
      "Calendar and CRM integration where the tools allow it",
      "Human handover, testing and ongoing refinement",
    ],
  },
  {
    id: "automation",
    index: "03",
    name: "Process automation",
    kicker: "Let the systems talk to each other",
    summary:
      "CRM updates, follow-ups, reporting and the admin that currently lives in someone’s head — connected around the software you already pay for.",
    href: "/solutions#automation",
    points: [
      "Workflow mapping and integration",
      "Step-by-step rollout, not a big-bang cutover",
      "Monitoring and improvement once it is live",
    ],
  },
  {
    id: "experience",
    index: "04",
    name: "Customer experience",
    kicker: "A useful answer, faster",
    summary:
      "Chat and knowledge assistants grounded in your approved information, so customers stop waiting and your team stops repeating themselves.",
    href: "/solutions#experience",
    points: [
      "Approved knowledge and brand voice",
      "Support-channel integration",
      "Resolution tracking and content updates",
    ],
  },
];

export const PROCESS = [
  {
    index: "01",
    name: "Discovery call",
    time: "30 minutes",
    body: "The business, the tools you already use, and the work that takes too long. You do not need a technical brief.",
  },
  {
    index: "02",
    name: "Opportunity audit",
    time: "Mapped, not guessed",
    body: "We map the work and identify the highest-value starting point — with a clear view of cost, benefit and fit.",
  },
  {
    index: "03",
    name: "Solution design",
    time: "Agreed in writing",
    body: "The stack, the scope, the plan. Established tools where they fit; our own software where it is the better job.",
  },
  {
    index: "04",
    name: "Implementation",
    time: "Configured, integrated, tested",
    body: "Built around your workflow, with handoffs checked before anyone relies on it on a Tuesday morning.",
  },
  {
    index: "05",
    name: "Optimise & support",
    time: "As scoped",
    body: "Review what moved, improve what works, and keep the support you actually agreed — not an open-ended retainer by stealth.",
  },
];

export const PT_PLANS = [
  {
    id: "free",
    name: "Free",
    price: "£0",
    cadence: "to start",
    audience: "Your first two clients",
    blurb: "Core client CRM, sessions and payments, and a weekly action view.",
    points: [
      "Up to 2 active clients",
      "Core client CRM",
      "Sessions and payments",
      "Weekly action view",
    ],
    featured: false,
  },
  {
    id: "founding",
    name: "Founding",
    price: "£14.99",
    cadence: "/ month",
    audience: "First 50 paying trainers",
    blurb: "Founding price locked while membership stays continuously active.",
    points: [
      "Founding price locked at £14.99",
      "All Solo features",
      "Direct feature input",
      "First 50 paying trainers",
    ],
    featured: true,
  },
  {
    id: "solo",
    name: "Solo",
    price: "£17.99",
    cadence: "/ month",
    audience: "Independent trainers",
    blurb: "Programme builder, check-ins, progress and scheduling for a working book.",
    points: [
      "Up to 15 active clients",
      "Programme and workout builder",
      "Check-ins and progress",
      "Scheduling and reminders",
    ],
    featured: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "£24.99",
    cadence: "/ month",
    audience: "A growing coaching business",
    blurb: "Everything in Solo, plus a business view and priority support.",
    points: [
      "Up to 50 active clients",
      "Everything in Solo",
      "Business and revenue overview",
      "Priority support",
    ],
    featured: false,
  },
];

export const RAPID = [
  {
    id: "content",
    name: "Content Sprint",
    price: "£79",
    turnaround: "48-hour delivery",
    body: "One original fitness, leisure or wellness article, member email or landing-page draft. Up to 1,000 words. One revision included.",
    points: [
      "Article, member email or landing-page draft",
      "Up to 1,000 words",
      "One revision",
    ],
  },
  {
    id: "ops",
    name: "Operations Document Sprint",
    price: "£149",
    turnaround: "Three working days",
    body: "A professionally structured SOP, operational checklist, staff guide or process document. Up to five finished pages. One revision included.",
    points: [
      "SOP, checklist, staff guide or process map",
      "Up to five finished pages",
      "One revision",
    ],
  },
  {
    id: "engine",
    name: "Content Engine",
    price: "£349",
    turnaround: "Per month",
    body: "Two original articles, eight social posts and two customer emails each month, with one revision round per batch.",
    points: ["Two articles", "Eight social posts", "Two customer emails"],
  },
];

export const FAQS = [
  {
    q: "Where should I start?",
    a: "A free 30-minute strategy call. We talk through the work taking up your time, the systems you use, and whether there is a sensible first project. You leave with a view either way.",
  },
  {
    q: "Is Omnirexis just for fitness businesses?",
    a: "No. Automation, voice and growth work across a range of operators. Leisure Systems and the PT platform are dedicated offerings for fitness and leisure — because that is where the practice was built.",
  },
  {
    q: "Do I need to replace my existing software?",
    a: "Not if it still earns its place. We start with what you already use and which integrations it supports. Any proposed change is discussed before implementation.",
  },
  {
    q: "How much does it cost?",
    a: "Consultancy and implementation are scoped around the work. PT plans start at £0. Rapid services are fixed-price. Third-party subscriptions and ongoing support are agreed separately.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, when it is useful. Monitoring, maintenance and improvements can sit inside the scope. We do not invent a retainer you did not ask for.",
  },
  {
    q: "Will AI replace my staff?",
    a: "The starting point is the repetitive work and the slow response — not the people who currently carry it. You stay in control of where automation fits and where judgement is required.",
  },
  {
    q: "How long does implementation take?",
    a: "It depends on the systems, access, data and scope. We agree a realistic plan before starting. Rapid service turnaround times are listed with each package.",
  },
  {
    q: "Do you build your own software?",
    a: "We implement established tools where they fit the job, and we offer our own specialist PT platform. The choice depends on the problem being solved — not on a catalogue we need to sell.",
  },
  {
    q: "Is our business data secure?",
    a: "Access, permissions and data handling are assessed for each implementation. We discuss your requirements and the providers involved before anything is connected.",
  },
  {
    q: "Can I try the PT platform for free?",
    a: "Yes. The free plan supports two clients. Compare packages on the PT page, then tell us which one you want to start with.",
  },
];

export const VALUES = [
  {
    name: "Start with the work",
    body: "The process, the people, the outcome. Tools come after.",
  },
  {
    name: "Every tool earns its place",
    body: "If it does not save time, catch what gets missed, or make a better next step, it does not ship.",
  },
  {
    name: "Keep it practical",
    body: "Your team, your existing systems, your budget. Not a lab, not a pitch deck.",
  },
  {
    name: "Build on what works",
    body: "Review the impact. Improve the useful parts. Leave the rest alone.",
  },
];
