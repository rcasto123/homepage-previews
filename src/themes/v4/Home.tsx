import { siteData } from "../../data/siteContent";
import { Link } from "react-router-dom";

export default function V4Home() {
  return (
    <div className="v4-page v4-home">
      <div className="v4-hero">
        <p className="v4-greeting">~ a journey through ~</p>
        <h1 className="v4-name">{siteData.name}</h1>
        <p className="v4-title">{siteData.title}</p>
      </div>

      <div className="v4-bio-section">
        <p className="v4-bio">
          Cultivating global IT operations like a sprawling garden —
          nurturing talent, fostering growth, and ensuring every region thrives.
          With over a decade of experience scaling teams and building resilient systems
          across three continents, I believe great operations come from thoughtful design
          and genuine human connection.
        </p>
      </div>

      <div className="v4-stats">
        <div className="v4-stat-card">
          <span className="v4-stat-emoji">🌸</span>
          <span className="v4-stat-value">12+</span>
          <span className="v4-stat-label">Years</span>
        </div>
        <div className="v4-stat-card">
          <span className="v4-stat-emoji">🏔️</span>
          <span className="v4-stat-value">2,800+</span>
          <span className="v4-stat-label">People</span>
        </div>
        <div className="v4-stat-card">
          <span className="v4-stat-emoji">🌍</span>
          <span className="v4-stat-value">3</span>
          <span className="v4-stat-label">Continents</span>
        </div>
      </div>

      <div className="v4-cta-section">
        <p className="v4-cta-text">Ready to explore? Start with my journey.</p>
        <div className="v4-cta-buttons">
          <Link to="/v4/projects" className="v4-btn v4-btn-primary">
            View Projects
          </Link>
          <Link to="/v4/resume" className="v4-btn v4-btn-secondary">
            Read Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
