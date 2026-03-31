import { siteData } from '../../data/siteContent';

export default function V2Home() {
  return (
    <>
      <div className="v2-hero">
        <div className="v2-hero-content">
          <p className="v2-greeting">Hey, I'm</p>
          <h1 className="v2-title">Robert Casto</h1>
          <p className="v2-subtitle">
            IT Operations Leader at <span className="v2-highlight">Aircall</span>
          </p>
          <p className="v2-description">
            12+ years scaling global IT operations across the US, Europe, and Australia. Building high-performing teams and designing support models that grow with the business.
          </p>
          <div className="v2-cta-row">
            <a href="#projects" className="v2-btn-primary">View Projects</a>
            <a href="#resume" className="v2-btn-secondary">Download Resume</a>
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
          <span className="v2-stat-number">{siteData.stats.experience}</span>
          <span className="v2-stat-label">Years Experience</span>
        </div>
        <div className="v2-stat">
          <span className="v2-stat-number">{siteData.stats.employees}</span>
          <span className="v2-stat-label">Employees Supported</span>
        </div>
        <div className="v2-stat">
          <span className="v2-stat-number">{siteData.stats.continents}</span>
          <span className="v2-stat-label">Continents</span>
        </div>
      </div>
    </>
  );
}
