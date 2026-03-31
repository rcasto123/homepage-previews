import { siteData } from "../../data/siteContent";

export default function V1Home() {
  return (
    <div className="v1-page v1-home">
      <div className="v1-hero">
        <h1 className="v1-glitch-title">{siteData.name.toUpperCase()}</h1>
        <div className="v1-terminal-prompt">root@robertcas.to:~$</div>
        <h2 className="v1-role-title">{siteData.title}</h2>
      </div>

      <div className="v1-divider"></div>

      <p className="v1-bio">{siteData.homeBio}</p>

      <div className="v1-home-stats">
        <div className="v1-stat-block">
          <span className="v1-stat-value">12+</span>
          <span className="v1-stat-label">YEARS EXP</span>
        </div>
        <div className="v1-stat-block">
          <span className="v1-stat-value">2,800+</span>
          <span className="v1-stat-label">EMPLOYEES</span>
        </div>
        <div className="v1-stat-block">
          <span className="v1-stat-value">96%</span>
          <span className="v1-stat-label">SLA COMPLIANCE</span>
        </div>
        <div className="v1-stat-block">
          <span className="v1-stat-value">3</span>
          <span className="v1-stat-label">CONTINENTS</span>
        </div>
      </div>
    </div>
  );
}
