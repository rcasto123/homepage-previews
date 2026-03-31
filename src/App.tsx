import { useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import { themes, getTheme, type ThemeConfig } from "./themes/themeRegistry";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";

// ─── Loading Fallback ───────────────────────────────────
function ThemeLoading() {
  return (
    <div className="theme-loading">
      <div className="theme-loading-spinner" />
      <p>Loading theme...</p>
    </div>
  );
}

// ─── Dynamic Theme Routes ───────────────────────────────
// Generates <Route> elements for a single theme from its registry config
function ThemeRoutes({ theme }: { theme: ThemeConfig }) {
  const { Layout, Home, Projects, Resume, Dashboard, Contact } = theme.pages;
  return (
    <Route
      element={
        <ThemeProvider themeId={theme.id}>
          <Suspense fallback={<ThemeLoading />}>
            <Layout />
          </Suspense>
        </ThemeProvider>
      }
    >
      <Route index element={<Suspense fallback={<ThemeLoading />}><Home /></Suspense>} />
      <Route path="projects" element={<Suspense fallback={<ThemeLoading />}><Projects /></Suspense>} />
      <Route path="resume" element={<Suspense fallback={<ThemeLoading />}><Resume /></Suspense>} />
      <Route path="dashboard" element={<Suspense fallback={<ThemeLoading />}><Dashboard /></Suspense>} />
      <Route path="contact" element={<Suspense fallback={<ThemeLoading />}><Contact /></Suspense>} />
    </Route>
  );
}

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
          <a href="https://robertcas.to" className="header-back">&larr; robertcas.to</a>
          <h1 className="app-title">Homepage Previews</h1>
        </div>
        <p className="app-subtitle">
          Full multi-page site previews &mdash; click any design to explore all pages
        </p>
      </header>

      <div className="gallery-grid-main">
        {themes.map((theme) => {
          const isLive = theme.id === liveDesign;
          return (
            <div key={theme.id} className="gallery-main-card">
              <div className="gallery-main-header">
                <div>
                  <h2 className="gallery-main-name">{theme.name}</h2>
                  <p className="gallery-main-desc">{theme.description}</p>
                </div>
                <div className="gallery-main-badges">
                  <span className={`status-badge ${isLive ? "current" : "draft"}`}>
                    {isLive ? "current" : "draft"}
                  </span>
                  <span className="gallery-date">{theme.date}</span>
                </div>
              </div>

              <div className="gallery-pages">
                {theme.pageNames.map((page) => {
                  const pagePath = page === "Home" ? "" : `/${page.toLowerCase()}`;
                  return (
                    <Link key={page} to={`${theme.path}${pagePath}`} className="gallery-page-link">
                      {page}
                    </Link>
                  );
                })}
              </div>

              <div className="gallery-main-actions">
                <button className="gallery-explore-btn" onClick={() => navigate(theme.path)}>
                  Explore Full Site &rarr;
                </button>
                {!isLive ? (
                  <button
                    className="make-live-btn"
                    onClick={() => handleMakeLive(theme.id)}
                    disabled={switching !== null}
                  >
                    {switching === theme.id ? "Deploying..." : "Make Live"}
                  </button>
                ) : (
                  <span className="live-indicator">&#10004; Currently Live</span>
                )}
              </div>
            </div>
          );
        })}
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
// When accessed from robertcas.to (not /previews), render the current live design
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

  const theme = getTheme(liveDesign);
  if (!theme) return null;

  const { Layout, Home, Projects, Resume, Dashboard, Contact } = theme.pages;

  return (
    <div className="live-wrapper">
      <ThemeProvider themeId={theme.id}>
        <Suspense fallback={<ThemeLoading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="resume" element={<Resume />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

// ─── Main App ───────────────────────────────────────────
function App() {
  const isLiveSite = window.location.hostname === "robertcas.to";
  const location = useLocation();

  // On robertcas.to: if not visiting /previews or any /v* path, render live mode
  const isThemePath = themes.some((t) => location.pathname.startsWith(t.path));
  if (isLiveSite && !location.pathname.startsWith("/previews") && !isThemePath) {
    return <LiveMode />;
  }

  return (
    <Routes>
      {/* Gallery */}
      <Route path="/" element={<Gallery />} />
      <Route path="/previews" element={<Gallery />} />

      {/* All themes — generated dynamically from the registry */}
      {themes.map((theme) => (
        <Route key={theme.id} path={`${theme.path}/*`}>
          {ThemeRoutes({ theme })}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
