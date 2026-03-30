import { useState } from "react";
import "./App.css";

interface HomepageVersion {
  id: string;
  name: string;
  description: string;
  date: string;
  status: "current" | "draft" | "archived";
  component: React.ComponentType;
}

// ─── Version 1: Current Cyberpunk Terminal ───────────────────────────
function HomepageV1() {
  return (
    <div className="preview-frame v1-cyberpunk">
      <nav className="v1-nav">
        <div className="v1-nav-left">
          <span className="v1-logo">RC</span>
          <span className="v1-site-name">ROBERTCAS.TO</span>
        </div>
        <div className="v1-nav-right">
          <a href="#">RESUME</a>
          <a href="#">PROJECTS</a>
          <a href="#">DASHBOARD</a>
          <a href="#">LINKEDIN</a>
          <a href="#" className="v1-contact-btn">CONTACT</a>
        </div>
      </nav>

      <div className="v1-status-bar">
        <span className="v1-status-dot"></span>
        <span>SYS.STATUS: ONLINE</span>
        <span className="v1-breadcrumb">// Aircall &gt; Global IT Operations</span>
      </div>

      <div className="v1-hero">
        <h1 className="v1-glitch-title">ROBERT CASTO</h1>
        <div className="v1-terminal-prompt">root@robertcas.to:~$</div>
        <h2 className="v1-role-title">IT Operations Leader</h2>
      </div>

      <div className="v1-divider"></div>

      <p className="v1-bio">
        With 12+ years building and scaling global IT operations, I've led the
        journey from 200 to 2,800+ employees, driving service excellence and SLA
        compliance across the US, Europe, and Australia. I specialize in building
        high-performing, globally distributed teams.
      </p>
    </div>
  );
}

// ─── Version 2: Minimal Clean ────────────────────────────────────────
function HomepageV2() {
  return (
    <div className="preview-frame v2-minimal">
      <nav className="v2-nav">
        <span className="v2-name">Robert Casto</span>
        <div className="v2-nav-links">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Resume</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <div className="v2-hero">
        <div className="v2-hero-content">
          <p className="v2-greeting">Hey, I'm</p>
          <h1 className="v2-title">Robert Casto</h1>
          <p className="v2-subtitle">
            IT Operations Leader at <span className="v2-highlight">Aircall</span>
          </p>
          <p className="v2-description">
            12+ years scaling global IT operations across the US, Europe, and
            Australia. Building high-performing teams and designing support
            models that grow with the business.
          </p>
          <div className="v2-cta-row">
            <a href="#" className="v2-btn-primary">View Projects</a>
            <a href="#" className="v2-btn-secondary">Download Resume</a>
          </div>
        </div>
        <div className="v2-hero-visual">
          <div className="v2-avatar-ring">
            <div className="v2-avatar-placeholder">RC</div>
          </div>
        </div>
      </div>

      <div className="v2-stats">
        <div className="v2-stat">
          <span className="v2-stat-number">12+</span>
          <span className="v2-stat-label">Years Experience</span>
        </div>
        <div className="v2-stat">
          <span className="v2-stat-number">2,800+</span>
          <span className="v2-stat-label">Employees Supported</span>
        </div>
        <div className="v2-stat">
          <span className="v2-stat-number">3</span>
          <span className="v2-stat-label">Continents</span>
        </div>
      </div>
    </div>
  );
}

// ─── Version 3: Bold Gradient ────────────────────────────────────────
function HomepageV3() {
  return (
    <div className="preview-frame v3-gradient">
      <nav className="v3-nav">
        <span className="v3-logo">RC</span>
        <div className="v3-nav-links">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Resume</a>
          <a href="#" className="v3-nav-contact">Get in Touch</a>
        </div>
      </nav>

      <div className="v3-hero">
        <div className="v3-tag">IT Operations &bull; Global Teams &bull; Aircall</div>
        <h1 className="v3-title">
          I build &amp; scale<br />
          <span className="v3-gradient-text">IT operations</span><br />
          that just work.
        </h1>
        <p className="v3-subtitle">
          From 200 to 2,800+ employees across 3 continents. Designing systems,
          developing talent, and driving SLA compliance at scale.
        </p>
        <div className="v3-cta-row">
          <a href="#" className="v3-btn">See My Work &rarr;</a>
        </div>
      </div>

      <div className="v3-cards">
        <div className="v3-card">
          <div className="v3-card-icon">&#9881;</div>
          <h3>Operations</h3>
          <p>Global IT infrastructure &amp; support</p>
        </div>
        <div className="v3-card">
          <div className="v3-card-icon">&#128101;</div>
          <h3>Leadership</h3>
          <p>High-performing distributed teams</p>
        </div>
        <div className="v3-card">
          <div className="v3-card-icon">&#128200;</div>
          <h3>Strategy</h3>
          <p>SLA compliance &amp; automation</p>
        </div>
      </div>
    </div>
  );
}

// ─── Version 4: Studio Ghibli ───────────────────────────────────────
function HomepageV4() {
  return (
    <div className="preview-frame v4-ghibli">
      <div className="v4-bg-image"></div>
      <div className="v4-bg-overlay"></div>

      <nav className="v4-nav">
        <span className="v4-logo">ロバート</span>
        <div className="v4-nav-links">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Resume</a>
          <a href="#" className="v4-nav-contact">Say Hello</a>
        </div>
      </nav>

      <div className="v4-hero">
        <div className="v4-hero-content">
          <p className="v4-greeting">~ a journey through ~</p>
          <h1 className="v4-title">Robert Casto</h1>
          <div className="v4-title-underline"></div>
          <p className="v4-subtitle">
            IT Operations Leader at <span className="v4-highlight">Aircall</span>
          </p>
          <p className="v4-description">
            12+ years cultivating global IT operations like a sprawling garden
            — growing teams from 200 to 2,800+ across three continents, nurturing
            excellence in every corner of the world.
          </p>
          <div className="v4-cta-row">
            <a href="#" className="v4-btn-primary">Explore My World &rarr;</a>
            <a href="#" className="v4-btn-secondary">Download Resume</a>
          </div>
        </div>
      </div>

      <div className="v4-stats-row">
        <div className="v4-stat-card">
          <span className="v4-stat-icon">🌸</span>
          <span className="v4-stat-number">12+</span>
          <span className="v4-stat-label">Years of Growth</span>
        </div>
        <div className="v4-stat-card">
          <span className="v4-stat-icon">🏔️</span>
          <span className="v4-stat-number">2,800+</span>
          <span className="v4-stat-label">People Supported</span>
        </div>
        <div className="v4-stat-card">
          <span className="v4-stat-icon">🌍</span>
          <span className="v4-stat-number">3</span>
          <span className="v4-stat-label">Continents</span>
        </div>
      </div>

    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────────
const versions: HomepageVersion[] = [
  {
    id: "v1",
    name: "Cyberpunk Terminal",
    description: "Current live version — dark hacker terminal aesthetic with glitch effects",
    date: "Mar 2026",
    status: "current",
    component: HomepageV1,
  },
  {
    id: "v2",
    name: "Minimal Clean",
    description: "Clean, modern layout with stats section and clear CTAs",
    date: "Mar 2026",
    status: "draft",
    component: HomepageV2,
  },
  {
    id: "v3",
    name: "Bold Gradient",
    description: "Eye-catching gradient text with card-based skills layout",
    date: "Mar 2026",
    status: "draft",
    component: HomepageV3,
  },
  {
    id: "v4",
    name: "Studio Ghibli",
    description: "Warm watercolor aesthetic inspired by Studio Ghibli — soft pastels, nature motifs, and hand-drawn charm",
    date: "Mar 2026",
    status: "draft",
    component: HomepageV4,
  },
];

type ViewMode = "gallery" | "fullscreen";

function App() {
  const [activeVersion, setActiveVersion] = useState<string>("v1");
  const [viewMode, setViewMode] = useState<ViewMode>("gallery");

  // Live mode: when hosted on robertcas.to, show the "current" design full-screen
  const isLiveSite = window.location.hostname === 'robertcas.to';
  const isPreviewPath = window.location.pathname.startsWith('/previews');

  const active = versions.find((v) => v.id === activeVersion)!;
  const ActiveComponent = active.component;

  // On robertcas.to (not /previews), render current design full-viewport
  if (isLiveSite && !isPreviewPath) {
    const current = versions.find((v) => v.status === "current")!;
    const CurrentComponent = current.component;
    return (
      <div className="live-wrapper">
        <CurrentComponent />
      </div>
    );
  }

  if (viewMode === "fullscreen") {
    return (
      <div className="fullscreen-wrapper">
        <div className="fullscreen-bar">
          <button onClick={() => setViewMode("gallery")} className="back-btn">
            &larr; Back to Gallery
          </button>
          <span className="fullscreen-label">
            {active.name}
            <span className={`status-badge ${active.status}`}>{active.status}</span>
          </span>
        </div>
        <div className="fullscreen-preview">
          <ActiveComponent />
        </div>
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
        <p className="app-subtitle">Test and compare different homepage designs</p>
      </header>

      {/* Tab Navigation */}
      <div className="tabs">
        {versions.map((v) => (
          <button
            key={v.id}
            className={`tab ${activeVersion === v.id ? "active" : ""}`}
            onClick={() => setActiveVersion(v.id)}
          >
            <span className="tab-name">{v.name}</span>
            <span className={`status-badge ${v.status}`}>{v.status}</span>
          </button>
        ))}
      </div>

      {/* Active Preview */}
      <div className="preview-container">
        <div className="preview-header">
          <div>
            <h2 className="preview-title">{active.name}</h2>
            <p className="preview-desc">{active.description}</p>
            <span className="preview-date">{active.date}</span>
          </div>
          <button className="fullscreen-btn" onClick={() => setViewMode("fullscreen")}>
            &#x26F6; Full Preview
          </button>
        </div>
        <div className="preview-window">
          <div className="browser-chrome">
            <div className="browser-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="browser-url">robertcas.to</div>
          </div>
          <div className="browser-content">
            <ActiveComponent />
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-section">
        <h2 className="gallery-title">All Versions</h2>
        <div className="gallery-grid">
          {versions.map((v) => {
            const Comp = v.component;
            return (
              <div
                key={v.id}
                className={`gallery-card ${activeVersion === v.id ? "selected" : ""}`}
                onClick={() => setActiveVersion(v.id)}
              >
                <div className="gallery-preview-mini">
                  <Comp />
                </div>
                <div className="gallery-card-info">
                  <span className="gallery-card-name">{v.name}</span>
                  <span className={`status-badge small ${v.status}`}>{v.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="app-footer">
        <p>robertcas.to Homepage Previews &bull; <a href="https://robertcas.to">Back to main site</a></p>
      </footer>
    </div>
  );
}

export default App;
