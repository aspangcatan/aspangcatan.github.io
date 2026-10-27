/*
 * Portfolio project data.
 * Add, edit, or reorder entries here — the Projects section and the
 * detail dialog render from this list automatically.
 *
 * Fields
 *   id         unique slug
 *   title      project name
 *   subtitle   short qualifier shown under the title (optional)
 *   category   "Healthcare IT" | "Business System" | "Web Application" | "Automation" | ...
 *   status     "Delivered" | "In progress" | "Concept"
 *   org        organization the system was built for (optional)
 *   icon       icon id from the SVG sprite in index.html (users, pill, target,
 *              clipboard, monitor, layers, code ...)
 *   accent     "violet" | "pink" | "indigo" | "teal"
 *   featured   true to give the card a wide layout (use on one project)
 *   image      { src, alt, width, height } (optional — a styled preview is
 *              shown when omitted)
 *   summary    one or two sentences on what it does / the problem it solves
 *   features   key features (first three appear on the card)
 *   stack      technologies used
 *   caseStudy  { problem, solution, impact } (optional)
 *   links      { demo, source, caseStudy } — leave empty strings when not public
 */
window.PORTFOLIO_PROJECTS = [
  {
    id: "hris",
    title: "Human Resource Information System",
    subtitle: "Personnel & Daily Time Record modules",
    category: "Business System",
    status: "Delivered",
    org: "Cebu South Medical Center",
    icon: "users",
    accent: "violet",
    featured: true,
    image: {
      src: "assets/img/hris-login.jpg",
      alt: "HRIS Portal sign-in page for the CSMC Human Resource Information System",
      width: 1120,
      height: 960,
    },
    summary:
      "A centralized HR platform for hospital administration that brings employee records, employment history, documents, and daily time records into one system.",
    features: [
      "Personnel information management with employee profiles, employment history, and document storage",
      "Daily Time Record module with automated time computation and attendance monitoring",
      "HR reports generated for payroll and administrative use",
      "Data validation and user access control for HR staff and employees",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    links: { demo: "", source: "", caseStudy: "" },
  },
  {
    id: "e-amsp",
    title: "E-AMSP",
    subtitle: "Electronic Antimicrobial Stewardship Program",
    category: "Healthcare IT",
    status: "Delivered",
    org: "Cebu South Medical Center",
    icon: "pill",
    accent: "pink",
    image: {
      src: "assets/img/eamsp-login.jpg",
      alt: "E-AMSP sign-in page with the Cebu South Medical Center seal",
      width: 900,
      height: 562,
    },
    summary:
      "Lets physicians prescribe and monitor antimicrobial medications electronically, replacing paper-based processing with a reviewable, auditable workflow.",
    features: [
      "Prescription entry, review, and approval workflow",
      "Role-based access for physicians, pharmacists, and administrators",
      "Reporting and audit trails to support compliance and antimicrobial-usage monitoring",
      "Faster turnaround with less manual, paper-based processing",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    links: { demo: "", source: "", caseStudy: "" },
  },
  {
    id: "e-spms",
    title: "E-SPMS",
    subtitle: "Strategic Performance Management System — IPCR & SPCR",
    category: "Business System",
    status: "Delivered",
    org: "",
    icon: "target",
    accent: "indigo",
    image: {
      src: "assets/img/espms-login.jpg",
      alt: "E-SPMS sign-in page: Manage Performance With Confidence",
      width: 1120,
      height: 700,
    },
    summary:
      "Manages employee performance planning, monitoring, and evaluation aligned with government performance standards — from target setting to final rating.",
    features: [
      "IPCR and SPCR creation, submission, review, and approval workflows",
      "Rating computation and validation rules based on organizational guidelines",
      "Role-based access for employees, supervisors, and PMT members",
      "Performance reports for monitoring and decision-making",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    links: { demo: "", source: "", caseStudy: "" },
  },
  {
    id: "e-ldna",
    title: "E-LDNA",
    subtitle: "Learning & Development Needs Assessment",
    category: "Business System",
    status: "Delivered",
    org: "",
    icon: "clipboard",
    accent: "teal",
    image: {
      src: "assets/img/eldna-login.jpg",
      alt: "E-LDNA landing page: CSMC Competency Assessment and e-LDNA",
      width: 1120,
      height: 700,
    },
    summary:
      "A platform for employee self-competency assessment and training-needs analysis that replaces manual encoding and consolidation of results.",
    features: [
      "Dynamic competency assessment forms with scoring logic",
      "Automated consolidation of results for HR training planning",
      "Dashboards for tracking employee competency gaps",
      "Simplified evaluation workflow with less manual encoding",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    links: { demo: "", source: "", caseStudy: "" },
  },
];

/*
 * Sideline projects — independent work outside my main role.
 * Same fields as above; rendered in the "Sideline Projects" section.
 */
window.PORTFOLIO_SIDELINE = [
  {
    id: "pickleball",
    title: "Match Pickleball Court",
    subtitle: "Online court booking and payment verification",
    category: "Web Application",
    status: "Delivered",
    org: "Match Pickleball, Balamban, Cebu",
    icon: "calendar",
    accent: "teal",
    image: {
      src: "assets/img/pickleball.jpg",
      alt: "The Match Pickleball outdoor court with green hills and palm trees behind it",
      width: 1200,
      height: 630,
    },
    summary:
      "A live booking site for an outdoor pickleball court in Balamban, Cebu. Players reserve hourly slots online and pay by GCash or bank transfer, and the venue verifies payments and runs operations from an admin console.",
    features: [
      "Hourly slot booking by court and date, with multi-hour bookings and no double-booking",
      "Hold-and-pay flow: unpaid slots are held for a set time while customers upload GCash or bank-transfer proof, then released automatically if none arrives",
      "Booking lookup by reference and mobile number to check status: pending review, confirmed, or rejected",
      "Admin console with dashboard, bookings, calendar, courts and rates, and an activity log",
      "Configurable operating hours (including past midnight), slot increments, booking window, paddle rentals, payment QR codes, and maintenance mode",
      "One-click backup export and restore of bookings, payments, settings, and receipts",
    ],
    stack: ["Vue", "TypeScript", "Supabase", "Tailwind CSS", "Cloudflare Turnstile"],
    links: { demo: "https://matchpickleballcourt.com", source: "", caseStudy: "" },
  },
];
