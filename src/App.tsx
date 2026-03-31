import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import "./App.css";

// ─── Theme Layouts ──────────────────────────────────────
import V1Layout from "./themes/v1/Layout";
import V1Home from "./themes/v1/Home";
import V1Projects from "./themes/v1/Projects";
import V1Resume from "./themes/v1/Resume";
import V1Dashboard from "./themes/v1/Dashboard";
import V1Contact from "./themes/v1/Contact";

import V2Layout from "./themes/v2/Layout";
import V2Home from "./themes/v2/Home";
import V2Projects from "./themes/v2/Projects";
import V2Resume from "./themes/v2/Resume";
import V2Dashboard from "./themes/v2/Dashboard";
import V2Contact from "./themes/v2/Contact";

import V3Layout from "./themes/v3/Layout";
import V3Home from "./themes/v3/Home";
import V3Projects from "./themes/v3/Projects";
import V3Resume from "./themes/v3/Resume";
import V3Dashboard from "./themes/v3/Dashboard";
import V3Contact from "./themes/v3/Contact";

import V4Layout from "./themes/v4/Layout";
import V4Home from "./themes/v4/Home";
import V4Projects from "./themes/v4/Projects";
import V4Resume from "./themes/v4/Resume";
import V4Dashboard from "./themes/v4/Dashboard";
import V4Contact from "./themes/v4/Contact";

// ─── Types ──────────────────────────────────────────────
interface VersionInfo {
  id: string;
  name: string;
  description: string;
  date: string;
  status: "current" | "draft" | "archived";
  path: string;
  pages: string[];
}

const versions: VersionInfo[] = [
  {
    id: "v1",
    name: "Cyberpunk Terminal",
    description: "Dark hacker terminal aesthetic with glitch effects and monospace typography",
    date: "Mar 2026",
    status: "draft",
    path: "/v1",
    pages: ["Home", "Projects", "Resume", "Dashboard", "Contact"],
  },
  {
    id: "v2",
    name: "Minimal Clean",
    description: "Clean, modern layout with clear typography and professional feel",
    date: "Mar 2026",
    status: "draft",
    path: "/v2",
    pages: ["Home", "Projects", "Resume", "Dashboard", "Contact"],
  },
  {
    id: "v3",
    name: "Bold Gradient",
    description: "Eye-catching gradient text with dark glass-morphism cards",
    date: "Mar 2026",
    status: "draft",
    path: "/v3",
    pages: ["Home", "Projects", "Resume", "Dashboard", "Contact"],
  },
  {
    id: "v4",
    name: "Studio Ghibli",
    description: "Warm watercolor aesthetic with soft pastels and nature motifs",
    date: "Mar 2026",
    status: "draft",
    path: "/v4",
    pages: ["Home", "Projects", "Resume", "Dashboard", "Contact"],
  },
];

// ─── Gallery / Preview Hub ──────────────────────────────
function Gallery() {
  const [liveDesign, setLiveDesign] = useState<string>("v1");
  const [loading, setLoading] = useState(true);
  const [switching, setSwitching] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/.netlify/functions/config")
      .then((r) => r.json())
      .then((data) => {
        setLiveDesign(data.current || "v1");
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const versionsWithStatus = versions.map((v) => ({
    ...v,
    status: (v.id === liveDesign ? "current" : "draft") as "current" | "draft" | "archived",
  }));

  const handleMakeLive = async (designId: string) => {
    setSwitching(designId);
    try {
      await fetch("/.netlify/functions/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ design: designId }),
      });
      setLiveDesign(designId);
    } catch (e) {
      console.error("Failed to update live design:", e);
    }
    setSwitching(null);
  };

  if (loading) {
    return (
      <div className="app loading-state">
        <div className="loading-spinner">Loading designs...</div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <a href="https://robertcas.to" className="header-back">
            &larr; robertcas.to
          </a>
          <h1 className="app-title">Homepage Previews</h1>
        </div>
        <p className="app-subtitle">
          Full multi-page site previews &mdash; click any design to explore all pages
        </p>
      </header>

      <div className="gallery-grid-main">
        {versionsWithStatus.map((v) => (
          <div key={v.id} className="gallery-main-card">
            <div className="gallery-main-header">
              <div>
                <h2 className="gallery-main-name">{v.name}</h2>
                <p className="gallery-main-desc">{v.description}</p>
              </div>
              <div className="gallery-main-badges">
                <span className={`status-badge ${v.status}`}>{v.status}</span>
                <span className="gallery-date">{v.date}</span>
              </div>
            </div>

            <div className="gallery-pages">
              {v.pages.map((page) => {
                const pagePath = page === "Home" ? "" : `/${page.toLowerCase()}`;
                return (
                  <Link
                    key={page}
                    to={`${v.path}${pagePath}`}
                    className="gallery-page-link"
                  >
                    {page}
                  </Link>
                );
              })}
            </div>

            <div className="gallery-main-actions">
              <button
                className="gallery-explore-btn"
                onClick={() => navigate(v.path)}
              >
                Explore Full Site &rarr;
              </button>
              {v.status !== "current" ? (
                <button
                  className="make-live-btn"
                  onClick={() => handleMakeLive(v.id)}
                  disabled={switching !== null}
                >
                  {switching === v.id ? "Deploying..." : "Make Live"}
                </button>
              ) : (
                <span className="live-indicator">&#10004; Currently Live</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer className="app-footer">
        <p>
          robertcas.to Homepage Previews &bull;{" "}
          <a href="https://robertcas.to">Back to main site</a>
        </p>
      </footer>
    </div>
  );
}

// ─── Live Mode Wrapper ──────────────────────────────────
// When accessed from robertcas.to (not /previews), render the current live design full-screen
function LiveMode() {
  const [liveDesign, setLiveDesign] = useState<string>("v1");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/.netlify/functions/config")
      .then((r) => r.json())
      .then((data) => {
        setLiveDesign(data.current || "v1");
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return null;

  // Render the appropriate theme's routes as the live site
  const themeRoutes: Record<string, React.ReactNode> = {
    v1: (
      <Routes>
        <Route element={<V1Layout />}>
          <Route index element={<V1Home />} />
          <Route path="projects" element={<V1Projects />} />
          <Route path="resume" element={<V1Resume />} />
          <Route path="dashboard" element={<V1Dashboard />} />
          <Route path="contact" element={<V1Contact />} />
        </Route>
      </Routes>
    ),
    v2: (
      <Routes>
        <Route element={<V2Layout />}>
          <Route index element={<V2Home />} />
          <Route path="projects" element={<V2Projects />} />
          <Route path="resume" element={<V2Resume />} />
          <Route path="dashboard" element={<V2Dashboard />} />
          <Route path="contact" element={<V2Contact />} />
        </Route>
      </Routes>
    ),
    v3: (
      <Routes>
        <Route element={<V3Layout />}>
          <Route index element={<V3Home />} />
          <Route path="projects" element={<V3Projects />} />
          <Route path="resume" element={<V3Resume />} />
          <Route path="dashboard" element={<V3Dashboard />} />
          <Route path="contact" element={<V3Contact />} />
        </Route>
      </Routes>
    ),
    v4: (
      <Routes>
        <Route element={<V4Layout />}>
          <Route index element={<V4Home />} />
          <Route path="projects" element={<V4Projects />} />
          <Route path="resume" element={<V4Resume />} />
          <Route path="dashboard" element={<V4Dashboard />} />
          <Route path="contact" element={<V4Contact />} />
        </Route>
      </Routes>
    ),
  };

  return <div className="live-wrapper">{themeRoutes[liveDesign]}</div>;
}

// ─── Main App ───────────────────────────────────────────
function App() {
  const isLiveSite = window.location.hostname === "robertcas.to";
  const location = useLocation();

  // On robertcas.to: if not explicitly visiting /previews or /v*, render live mode
  if (isLiveSite && !location.pathname.startsWith("/previews") && !location.pathname.startsWith("/v1") && !location.pathname.startsWith("/v2") && !location.pathname.startsWith("/v3") && !location.pathname.startsWith("/v4")) {
    return <LiveMode />;
  }

  return (
    <Routes>
      {/* Gallery */}
      <Route path="/" element={<Gallery />} />
      <Route path="/previews" element={<Gallery />} />

      {/* V1: Cyberpunk Terminal */}
      <Route path="/v1" element={<V1Layout />}>
        <Route index element={<V1Home />} />
        <Route path="projects" element={<V1Projects />} />
        <Route path="resume" element={<V1Resume />} />
        <Route path="dashboard" element={<V1Dashboard />} />
        <Route path="contact" element={<V1Contact />} />
      </Route>

      {/* V2: Minimal Clean */}
      <Route path="/v2" element={<V2Layout />}>
        <Route index element={<V2Home />} />
        <Route path="projects" element={<V2Projects />} />
        <Route path="resume" element={<V2Resume />} />
        <Route path="dashboard" element={<V2Dashboard />} />
        <Route path="contact" element={<V2Contact />} />
      </Route>

      {/* V3: Bold Gradient */}
      <Route path="/v3" element={<V3Layout />}>
        <Route index element={<V3Home />} />
        <Route path="projects" element={<V3Projects />} />
        <Route path="resume" element={<V3Resume />} />
        <Route path="dashboard" element={<V3Dashboard />} />
        <Route path="contact" element={<V3Contact />} />
      </Route>

      {/* V4: Studio Ghibli */}
      <Route path="/v4" element={<V4Layout />}>
        <Route index element={<V4Home />} />
        <Route path="projects" element={<V4Projects />} />
        <Route path="resume" element={<V4Resume />} />
        <Route path="dashboard" element={<V4Dashboard />} />
        <Route path="contact" element={<V4Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
