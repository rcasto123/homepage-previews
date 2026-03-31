import { siteData } from '../../data/siteContent';

export default function V4Home() {
  return (
    <>
      <div className="v4-hero">
        <div className="v4-hero-content">
          <p className="v4-greeting">~ a journey through ~</p>
          <h1 className="v4-title">Robert Casto</h1>
          <div className="v4-title-underline"></div>
          <p className="v4-subtitle">
            IT Operations Leader at <span className="v4-highlight">Aircall</span>
          </p>
          <p className="v4-description">
            12+ years cultivating global IT operations like a sprawling garden — growing teams from 200 to 2,800+ across three continents, nurturing excellence in every corner of the world.
          </p>
          <div className="v4-cta-row">
            <a href="#projects" className="v4-btn-primary">Explore My World →</a>
            <a href="#resume" className="v4-btn-secondary">Download Resume</a>
          </div>
        </div>
      </div>

      <div className="v4-stats-row">
        <div className="v4-stat-card">
          <span className="v4-stat-icon">🌸</span>
          <span className="v4-stat-number">{siteData.stats.experience}</span>
          <span className="v4-stat-label">Years of Growth</span>
        </div>
        <div className="v4-stat-card">
          <span className="v4-stat-icon">🏢</span>
          <span className="v4-stat-number">{siteData.stats.employees}</span>
          <span className="v4-stat-label">People Supported</span>
        </div>
        <div className="v4-stat-card">
          <span className="v4-stat-icon">🌍</span>
          <span className="v4-stat-number">{siteData.stats.continents}</span>
          <span className="v4-stat-label">Continents</span>
        </div>
      </div>
    </>
  );
}
