// All content scraped from robertcas.to
// Used by all 4 design themes to render consistent content

export const siteData = {
  name: "Robert Casto",
  initials: "RC",
  title: "IT Operations Leader",
  location: "Bellevue, WA",
  siteName: "ROBERTCAS.TO",
  email: "robertmcasto@gmail.com",
  linkedin: "https://linkedin.com/in/robert-casto",

  // Homepage
  homeBio: `With 12+ years building and scaling global IT operations, I've led the journey from 200 to 2,800+ employees, driving service excellence and SLA compliance across the US, Europe, and Australia. I specialize in building high-performing, globally distributed teams — developing talent, fostering cultures of ownership, and designing support models that scale without sacrificing quality. Currently leading IT strategy at Aircall, where I leverage platforms like Google Workspace, Okta, Jamf, and Intune alongside modern ITSM solutions and automation frameworks to deliver measurable business impact. An AI enthusiast at heart, I'm actively integrating AI-powered workflows and intelligent automation into IT operations — pushing the boundaries of what modern IT can achieve and redefining how teams work at scale.`,

  statusBar: {
    status: "ONLINE",
    breadcrumb: "Aircall \u00B7 Global IT Operations",
  },

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Projects", href: "/projects" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "LinkedIn", href: "https://linkedin.com/in/robert-casto", external: true },
    { label: "Contact", href: "mailto:robertmcasto@gmail.com", external: true },
  ],

  // Floating tech terms for cyberpunk background
  floatingTerms: [
    "ITIL v4", "SLA:96%", "kubectl", "AZ-104", "ZTNA", "MDM",
    "SIEM", "IAM", "OKTA", "ITSM", "MPLS", "SSO", "MFA",
    "TLS1.3", "SAML", "OAuth2", "0xA4F2", "0x1B3E", "0xFF",
    "10.0.0.1", "01001",
  ],

  // Projects page
  projects: [
    {
      id: 1,
      category: "Web Development",
      title: "robertcas.to",
      description: "Personal portfolio site built with React, Vite, and Tailwind CSS. Features a Terminal Noir design aesthetic with an animated canvas perspective grid, deployed on Netlify.",
      tags: ["React", "Vite", "Tailwind CSS", "Netlify"],
      link: "https://robertcas.to",
      status: "LIVE",
    },
    {
      id: 2,
      category: "Internal Tooling",
      title: "IT Operations Dashboard",
      description: "Custom Jira-based operations dashboard providing real-time visibility into incident metrics, SLA compliance, and ticket queue health across global regions.",
      tags: ["Jira", "SLA Management", "KPIs", "Operations"],
      link: "https://robertcas.to/jiradashboard",
      status: "LIVE",
    },
    {
      id: 3,
      category: "Process Automation",
      title: "Global IT Onboarding Automation",
      description: "Automated onboarding lifecycle managing provisioning across Okta, Microsoft 365, and additional SaaS platforms for a globally distributed workforce of 2,800+.",
      tags: ["Okta", "Microsoft 365", "Automation", "ITSM"],
      status: "LIVE",
    },
    {
      id: 4,
      category: "IT Operations",
      title: "SLA Compliance Recovery Program",
      description: "Initiative that elevated incident ticket SLA compliance from 76% to 96% within one year through process redesign, tooling improvements, and team coaching.",
      tags: ["ITIL", "Zendesk", "Process Improvement", "KPI Management"],
      status: "LIVE",
    },
    {
      id: 5,
      category: "Web Development",
      title: "Savage Moose Sports Pub",
      description: "Full bar & restaurant website for Savage Moose Sports Pub in Kenmore, WA. Built with React and Tailwind CSS \u2014 features menus, weekly specials, events, and location info.",
      tags: ["React", "Tailwind CSS", "Netlify", "Web Design"],
      link: "https://savagemoose.org",
      status: "LIVE",
    },
    {
      id: 6,
      category: "SaaS / AI Product",
      title: "SlackBuddy",
      description: "AI-powered Slack companion offering context-aware reply suggestions and real-time team mood tracking. Now in public beta with 12,000+ users across remote and hybrid teams.",
      tags: ["AI", "Slack", "SaaS", "Product Design"],
      link: "https://slackbuddy.org",
      status: "LIVE",
    },
    {
      id: 7,
      category: "Web Development",
      title: "DC Absolute Universe Tracker",
      description: "Interactive collection tracker for DC's Absolute Universe comics. Track owned issues, view release calendars, series guides, and trade paperbacks.",
      tags: ["HTML", "CSS", "JavaScript", "Comics"],
      link: "https://robertcas.to/projects/absolutetracker/",
      status: "LIVE",
    },
    {
      id: 8,
      category: "Web Development",
      title: "Homepage Previews",
      description: "Gallery for testing and comparing different homepage designs for robertcas.to. Features tabbed previews, fullscreen mode, and side-by-side comparisons.",
      tags: ["React", "Vite", "TypeScript", "Netlify"],
      link: "https://homepage-previews.netlify.app",
      status: "LIVE",
    },
  ],

  // Resume page
  resume: {
    summary: "Results-driven IT Operations Manager with 12+ years of progressive experience leading global help desk and IT operations teams. Proven track record of driving service excellence, improving SLA compliance from 76% to 96%, while scaling teams through rapid organizational growth (200 to 2,800 employees). Adept at managing cross-functional IT projects, procurement, and multi-regional operations across the US, Europe, and Australia. Skilled in aligning IT strategy with business objectives through ITIL best practices, KPI-driven performance management, and deep hands-on technical expertise.",

    experience: [
      {
        company: "Aircall",
        role: "IT Operations Manager",
        location: "Bellevue, WA",
        bullets: [
          "Serve as the go-to escalation expert for complex technical issues, providing expert support to both technical and non-technical stakeholders across a globally distributed workforce.",
          "Lead the full IT onboarding/offboarding lifecycle, provisioning and deactivating access across all SaaS tools and platforms to ensure security and compliance.",
          "Direct regional IT operations across the US, France, England, and Australia, ensuring alignment with global IT standards while addressing local needs and priorities.",
        ],
      },
      {
        company: "Tessenderlo Kerley",
        role: "IT Operations Manager",
        location: "Phoenix, AZ",
        bullets: [
          "Elevated incident ticket SLA compliance from 76% to 96% within the first year, significantly improving end-user satisfaction and IT team credibility.",
          "Delivered multiple enterprise IT projects on time and on budget, including AV infrastructure refresh, Windows 11 migration, and Zscaler secure access deployment.",
          "Owned full-cycle IT procurement, managing both CapEx and OpEx budgets to ensure cost-effective technology investments and strong vendor relationships.",
          "Scaled and managed a multi-site team across the US and Mexico, driving performance through coaching, process standardization, and clear accountability frameworks.",
        ],
      },
      {
        company: "Nextiva & SiteLock (UnitedWeb)",
        role: "Global Help Desk Manager",
        location: "Scottsdale, AZ",
        bullets: [
          "Scaled a global help desk team through 1,000%+ company growth, from 200 to 2,800 employees, hiring and developing talent across multiple countries.",
          "Deployed and administered key enterprise platforms including Microsoft 365, Google Workspace, Atlassian (Jira/Confluence), Okta, and Mimecast.",
          "Served as the primary escalation point for all critical incidents and high-priority service requests, ensuring rapid resolution and minimal business disruption.",
          "Designed and tracked KPIs to measure team performance and maintain consistent SLA adherence, reporting results to senior leadership.",
          "Led department budget planning and fiscal year expenditure forecasting, ensuring alignment with organizational financial goals.",
        ],
      },
      {
        company: "UnitedWeb (Nextiva & SiteLock)",
        role: "IT Support Technician",
        location: "Scottsdale, AZ",
        bullets: [
          "Provided desktop-level support including software installation, upgrades, and hardware diagnostics for a growing enterprise environment.",
          "Installed and managed operating systems and end-user desktop applications, maintaining detailed ticket documentation and resolution records.",
        ],
      },
      {
        company: "Invaserv LLC (a Stateserv Company)",
        role: "IT Systems Administrator",
        location: "Tempe, AZ",
        bullets: [
          "Procured, tracked, and maintained company software licenses, conducting regular audits to ensure licensing compliance and accuracy of the IT asset database.",
          "Administered SaaS platforms, network infrastructure, Active Directory, security systems, and file servers.",
          "Served as Project Manager for help desk migration (FogBugz to Zendesk), email migration (Exchange to Google Workspace), and Integra cloud firewall/MPLS deployment.",
        ],
      },
      {
        company: "Invaserv LLC (a Stateserv Company)",
        role: "IT Support Technician",
        location: "Tempe, AZ",
        bullets: [
          "Delivered Tier 1 support for hardware and software issues across desktops, laptops, and mobile devices in a Microsoft Windows environment.",
          "Troubleshot server/client applications and TCP/IP networking issues, preparing status reports and escalating critical issues to management.",
        ],
      },
    ],

    skills: {
      "IT Leadership & Operations": "Help Desk / Service Desk Management, ITIL, ITSM, Incident Management, SLA / KPI Management, Project Management, Procurement (CapEx & OpEx), Vendor Management, IT Budgeting",
      "Platforms & SaaS Tools": "Microsoft 365 / Office 365, Azure, Intune, Entra ID, Google Workspace, Okta, Zendesk, Atlassian (Jira / Confluence), SAP, Zscaler, Mimecast, ServiceNow",
      "Systems & Infrastructure": "Active Directory, PowerShell, Windows Server, File Server Administration, TCP/IP, CRM Administration, Multi-protocol Systems",
      "Soft Skills": "Team Leadership, Mentoring & Coaching, Cross-functional Collaboration, Problem Solving, Multi-regional Operations",
    },
  },

  // Dashboard page
  dashboard: {
    title: "IT Ops Dashboard",
    subtitle: "Real-time visibility into incident metrics, SLA compliance, and ticket queue health across global regions.",

    metrics: [
      { label: "Open Incidents", value: "7", sub: "2 critical" },
      { label: "SLA Compliance", value: "96%", sub: "+20% YoY" },
      { label: "Ticket Queue", value: "43", sub: "12 in backlog" },
      { label: "Avg MTTR", value: "1.4h", sub: "global avg" },
    ],

    tickets: [
      { id: "OPS-142", summary: "Okta SSO latency \u2014 APAC region", priority: "CRITICAL", status: "IN PROGRESS", region: "APAC", sla: "2h left" },
      { id: "OPS-141", summary: "M365 license overage alert", priority: "HIGH", status: "IN PROGRESS", region: "GLOBAL", sla: "4h left" },
      { id: "OPS-140", summary: "Zendesk macro audit Q1", priority: "MEDIUM", status: "TODO", region: "EMEA", sla: "12h left" },
      { id: "OPS-137", summary: "VPN cert renewal \u2014 US East", priority: "HIGH", status: "TODO", region: "US", sla: "8h left" },
      { id: "OPS-135", summary: "Onboarding batch \u2014 18 new hires", priority: "LOW", status: "DONE", region: "GLOBAL", sla: "on time" },
      { id: "OPS-133", summary: "Post-incident report \u2014 EMEA", priority: "MEDIUM", status: "DONE", region: "EMEA", sla: "on time" },
    ],

    regions: [
      { name: "US", status: "HEALTHY", open: 2, sla: "98%", queue: 14 },
      { name: "EMEA", status: "WARNING", open: 3, sla: "94%", queue: 18 },
      { name: "APAC", status: "WARNING", open: 2, sla: "91%", queue: 11 },
      { name: "LATAM", status: "HEALTHY", open: 0, sla: "100%", queue: 0 },
    ],
  },
};
