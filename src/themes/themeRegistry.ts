import { lazy } from 'react';

// V1 Theme
const V1Layout = lazy(() => import('./v1/Layout'));
const V1Home = lazy(() => import('./v1/Home'));
const V1Projects = lazy(() => import('./v1/Projects'));
const V1Resume = lazy(() => import('./v1/Resume'));
const V1Dashboard = lazy(() => import('./v1/Dashboard'));
const V1Contact = lazy(() => import('./v1/Contact'));

// V2 Theme
const V2Layout = lazy(() => import('./v2/Layout'));
const V2Home = lazy(() => import('./v2/Home'));
const V2Projects = lazy(() => import('./v2/Projects'));
const V2Resume = lazy(() => import('./v2/Resume'));
const V2Dashboard = lazy(() => import('./v2/Dashboard'));
const V2Contact = lazy(() => import('./v2/Contact'));

// V3 Theme
const V3Layout = lazy(() => import('./v3/Layout'));
const V3Home = lazy(() => import('./v3/Home'));
const V3Projects = lazy(() => import('./v3/Projects'));
const V3Resume = lazy(() => import('./v3/Resume'));
const V3Dashboard = lazy(() => import('./v3/Dashboard'));
const V3Contact = lazy(() => import('./v3/Contact'));

// V4 Theme
const V4Layout = lazy(() => import('./v4/Layout'));
const V4Home = lazy(() => import('./v4/Home'));
const V4Projects = lazy(() => import('./v4/Projects'));
const V4Resume = lazy(() => import('./v4/Resume'));
const V4Dashboard = lazy(() => import('./v4/Dashboard'));
const V4Contact = lazy(() => import('./v4/Contact'));

export const themeRegistry = {
  v1: {
    Layout: V1Layout,
    Home: V1Home,
    Projects: V1Projects,
    Resume: V1Resume,
    Dashboard: V1Dashboard,
    Contact: V1Contact,
  },
  v2: {
    Layout: V2Layout,
    Home: V2Home,
    Projects: V2Projects,
    Resume: V2Resume,
    Dashboard: V2Dashboard,
    Contact: V2Contact,
  },
  v3: {
    Layout: V3Layout,
    Home: V3Home,
    Projects: V3Projects,
    Resume: V3Resume,
    Dashboard: V3Dashboard,
    Contact: V3Contact,
  },
  v4: {
    Layout: V4Layout,
    Home: V4Home,
    Projects: V4Projects,
    Resume: V4Resume,
    Dashboard: V4Dashboard,
    Contact: V4Contact,
  },
};

export type ThemeId = keyof typeof themeRegistry;
