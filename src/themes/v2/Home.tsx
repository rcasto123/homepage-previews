import { Link } from "react-router-dom";
import { siteData } from "../../data/siteContent";
import { useTheme } from "../../contexts/ThemeContext";

export default function V2Home() {
  const { basePath } = useTheme();

  return (
    <div className="v2-home">
      <section className="v2-hero">
        <div className="v2-hero-content">
          <p className="v2-greeting">Hey, I'm</p>
          <h1 className="v2-title">{siteData.name}</h1>
          <p className="v2-subtitle">
            {siteData.title} at <span className="v2-highlight">Aircall</span>
          </p>
          <p className="v2-description">{siteData.homeBio}</p>
          <div className="v2-cta-row">
            <Link to={`${basePath}/projects`} className="v2-btn-primary">View Projects</Link>
            <Link to={`${basePath}/resume`} className="v2-btn-secondary">View Resume</Link>
          </div>
        </div>
        <div className="v2-hero-visual">
          <div className="v2-avatar-ring">
            <div className="v2-avatar-placeholder">{siteData.initials}</div>
          </div>
        </div>
      </section>

      <section className="v2-stats">
        <div className="v2-stat">
          <span className="v2-stat-number">12+</span>
          <span className="v2-stat-label">Years Experience</span>
        </div>
        <div className="v2-stat">
          <span className="v2-stat-number">2,800+</span>
          <span className="v2-stat-label">Employees Supported</span>
        </div>
        <div className="v2-stat">
          <span className="v2-stat-number">96%</span>
          <span className="v2-stat-label">SLA Compliance</span>
        </div>
        <div className="v2-stat">
          <span className="v2-stat-number">3</span>
          <span className="v2-stat-label">Continents</span>
        </div>
      </section>
    </div>
  );
}
