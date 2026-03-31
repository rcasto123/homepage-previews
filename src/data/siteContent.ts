export const siteData = {
  name: "Robert Casto",
  role: "IT Operations Leader",
  company: "Aircall",
  location: "Bellevue, WA",
  email: "robertmcasto@gmail.com",
  linkedin: "https://linkedin.com/in/robert-casto",

  bio: "With 12+ years building and scaling global IT operations, I've led the journey from 200 to 2,800+ employees, driving service excellence and SLA compliance across the US, Europe, and Australia. I specialize in building high-performing, globally distributed teams — developing talent, fostering cultures of ownership, and designing support models that scale without sacrificing quality. Currently leading IT strategy at Aircall, where I leverage platforms like Google Workspace, Okta, Jamf, and Intune alongside modern ITSM solutions and automation frameworks to deliver measurable business impact. An AI enthusiast at heart, I'm actively integrating AI-powered workflows and intelligent automation into IT operations — pushing the boundaries of what modern IT can achieve and redefining how teams work at scale.",

  stats: {
    experience: "12+",
    employees: "2,800+",
    sla: "96%",
    continents: "3",
  },

  projects: [
    {
      title: "robertcas.to",
      category: "Web Development",
      description: "Personal portfolio site built with React, Vite, and Tailwind CSS. Features a Terminal Noir design aesthetic with an animated canvas perspective grid, deployed on Netlify.",
      tags: ["React", "Vite", "Tailwind CSS", "Netlify"],
      status: "live",
      url: "https://robertcas.to",
    },
    {
      title: "IT Operations Dashboard",
      category: "Internal Tooling",
      description: "Custom Jira-based operations dashboard providing real-time visibility into incident metrics, SLA compliance, and ticket queue health across global regions.",
      tags: ["Jira", "SLA Management", "KPIs", "Operations"],
      status: "live",
    },
    {
      title: "Global IT Onboarding Automation",
      category: "Process Automation",
      description: "Automated onboarding lifecycle managing provisioning across Okta, Microsoft 365, and additional SaaS platforms for a globally distributed workforce of 2,800+.",
      tags: ["Okta", "Microsoft 365", "Automation", "ITSM"],
      status: "live",
    },
    {
      title: "SLA Compliance Recovery Program",
      category: "IT Operations",
      description: "Initiative that elevated incident ticket SLA compliance from 76% to 96% within one year through process redesign, tooling improvements, and team coaching.",
      tags: ["ITIL", "Zendesk", "Process Improvement", "KPI Management"],
      status: "live",
    },
    {
      title: "Savage Moose Sports Pub",
      category: "Web Development",
      description: "Full bar & restaurant website for Savage Moose Sports Pub in Kenmore, WA. Built with React and Tailwind CSS — features menus, weekly specials, events, and location info.",
      tags: ["React", "Tailwind CSS", "Netlify", "Web Design"],
      status: "live",
      url: "https://savagemoosesportspub.com",
    },
    {
      title: "SlackBuddy",
      category: "SaaS / AI Product",
      description: "AI-powered Slack companion offering context-aware reply suggestions and real-time team mood tracking. Now in public beta with 12,000+ users across remote and hybrid teams.",
      tags: ["AI", "Slack", "SaaS", "Product Design"],
      status: "live",
    },
    {
      title: "DC Absolute Universe Tracker",
      category: "Web Development",
      description: "Interactive collection tracker for DC's Absolute Universe comics. Track owned issues, view release calendars, series guides, and trade paperbacks.",
      tags: ["HTML", "CSS", "JavaScript", "Comics"],
      status: "live",
    },
    {
      title: "Homepage Previews",
      category: "Web Development",
      description: "Gallery for testing and comparing different homepage designs for robertcas.to. Features tabbed previews, fullscreen mode, and side-by-side comparisons.",
      tags: ["React", "Vite", "TypeScript", "Netlify"],
      status: "live",
    },
  ],

  experience: [
    {
      title: "IT Operations Manager",
      company: "Aircall",
      location: "Bellevue, WA",
      period: "2021 – Present",
      bullets: [
        "Serve as the go-to escalation expert for complex technical issues, providing expert support to both technical and non-technical stakeholders across a globally distributed workforce.",
        "Lead the full IT onboarding/offboarding lifecycle, provisioning and deactivating access across all SaaS tools and platforms to ensure security and compliance.",
        "Direct regional IT operations across the US, France, England, and Australia, ensuring alignment with global IT standards while addressing local needs and priorities.",
      ],
    },
    {
      title: "IT Support Manager",
      company: "Aircall",
      location: "New York, NY",
      period: "2019 – 2021",
      bullets: [
        "Built and led a global IT support team from the ground up, growing from 2 to 8 team members across the US, Europe, and Australia.",
        "Drove SLA compliance from 76% to 96% through process redesign, tooling improvements, and a culture of accountability.",
        "Managed IT vendor relationships and procurement, negotiating contracts that reduced annual SaaS spend by 15%.",
      ],
    },
  ],

  education: [
    {
      degree: "B.S. Computer Science",
      school: "University of Washington",
      year: "2014",
    },
  ],

  certifications: [
    "ITIL v4 Foundation",
    "Google Workspace Administrator",
    "Okta Certified Administrator",
  ],

  skills: [
    "Google Workspace",
    "Okta",
    "Jamf",
    "Microsoft Intune",
    "Jira Service Management",
    "Zendesk",
    "Slack Administration",
    "Confluence",
    "Python",
    "JavaScript",
    "React",
  ],

  dashboard: {
    incidents: { open: 7, critical: 2 },
    slaCompliance: { current: "96%", trend: "+20% YoY" },
    ticketQueue: { total: 43, backlog: 12 },
    avgMTTR: { hours: "1.4h", note: "global avg" },
    tickets: [
      {
        id: "OPS-142",
        summary: "Okta SSO latency — APAC region",
        priority: "critical",
        status: "in progress",
        region: "APAC",
        sla: "2h left",
      },
      {
        id: "OPS-139",
        summary: "New hire batch — 12 accounts pending",
        priority: "high",
        status: "in progress",
        region: "US",
        sla: "4h left",
      },
      {
        id: "OPS-138",
        summary: "Jamf enrollment stuck — MacBook Pro fleet",
        priority: "medium",
        status: "open",
        region: "EU",
        sla: "8h left",
      },
      {
        id: "OPS-135",
        summary: "Google Workspace license audit Q1",
        priority: "low",
        status: "open",
        region: "Global",
        sla: "2d left",
      },
      {
        id: "OPS-131",
        summary: "VPN config update — Sydney office",
        priority: "medium",
        status: "resolved",
        region: "APAC",
        sla: "Done",
      },
    ],
  },
};
