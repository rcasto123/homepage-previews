import { lazy, type ComponentType, type LazyExoticComponent } from "react";

// ─── Theme Page Components Type ─────────────────────────
export interface ThemePages {
  Layout: LazyExoticComponent<ComponentType<any>>;
  Home: LazyExoticComponent<ComponentType<any>>;
  Projects: LazyExoticComponent<ComponentType<any>>;
  Resume: LazyExoticComponent<ComponentType<any>>;
  Dashboard: LazyExoticComponent<ComponentType<any>>;
  Contact: LazyExoticComponent<ComponentType<any>>;
}

// ─── Theme Definition ───────────────────────────────────
export interface ThemeConfig {
  id: string;
  name: string;
  description: string;
  date: string;
  path: string;
  pages: ThemePages;
  pageNames: string[];
}

// ─── Theme Registry ─────────────────────────────────────
// To add a new theme:
//  1. Create src/themes/v5/ with Layout, Home, Projects, Resume, Dashboard, Contact, v5.css
//  2. Add one entry to this array
//  That's it — routing, gallery, and live mode all pick it up automatically.

export const themes: ThemeConfig[] = [
  {
    id: "v1",
    name: "Cyberpunk Terminal",
    description: "Dark hacker terminal aesthetic with glitch effects and monospace typography",
    date: "Mar 2026",
    path: "/v1",
    pageNames: ["Home", "Projects", "Resume", "Dashboard", "Contact"],
    pages: {
      Layout: lazy(() => import("./v1/Layout")),
      Home: lazy(() => import("./v1/Home")),
      Projects: lazy(() => import("./v1/Projects")),
      Resume: lazy(() => import("./v1/Resume")),
      Dashboard: lazy(() => import("./v1/Dashboard")),
      Contact: lazy(() => import("./v1/Contact")),
    },
  },
  {
    id: "v2",
    name: "Minimal Clean",
    description: "Clean, modern layout with clear typography and professional feel",
    date: "Mar 2026",
    path: "/v2",
    pageNames: ["Home", "Projects", "Resume", "Dashboard", "Contact"],
    pages: {
      Layout: lazy(() => import("./v2/Layout")),
      Home: lazy(() => import("./v2/Home")),
      Projects: lazy(() => import("./v2/Projects")),
      Resume: lazy(() => import("./v2/Resume")),
      Dashboard: lazy(() => import("./v2/Dashboard")),
      Contact: lazy(() => import("./v2/Contact")),
    },
  },
  {
    id: "v3",
    name: "Bold Gradient",
    description: "Eye-catching gradient text with dark glass-morphism cards",
    date: "Mar 2026",
    path: "/v3",
    pageNames: ["Home", "Projects", "Resume", "Dashboard", "Contact"],
    pages: {
      Layout: lazy(() => import("./v3/Layout")),
      Home: lazy(() => import("./v3/Home")),
      Projects: lazy(() => import("./v3/Projects")),
      Resume: lazy(() => import("./v3/Resume")),
      Dashboard: lazy(() => import("./v3/Dashboard")),
      Contact: lazy(() => import("./v3/Contact")),
    },
  },
  {
    id: "v4",
    name: "Studio Ghibli",
    description: "Warm watercolor aesthetic with soft pastels and nature motifs",
    date: "Mar 2026",
    path: "/v4",
    pageNames: ["Home", "Projects", "Resume", "Dashboard", "Contact"],
    pages: {
      Layout: lazy(() => import("./v4/Layout")),
      Home: lazy(() => import("./v4/Home")),
      Projects: lazy(() => import("./v4/Projects")),
      Resume: lazy(() => import("./v4/Resume")),
      Dashboard: lazy(() => import("./v4/Dashboard")),
      Contact: lazy(() => import("./v4/Contact")),
    },
  },
];

// ─── Helpers ────────────────────────────────────────────
export function getTheme(id: string): ThemeConfig | undefined {
  return themes.find((t) => t.id === id);
}

export function getThemeIds(): string[] {
  return themes.map((t) => t.id);
}
