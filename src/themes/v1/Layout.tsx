import { Outlet, NavLink, useLocation } from "react-router-dom";
import { siteData } from "../../data/siteContent";
import "./v1.css";

export default function V1Layout() {
  const location = useLocation();
  const basePath = location.pathname.startsWith("/v1") ? "/v1" : "";

  return (
    <div className="v1-site">
      {/* Floating background terms */}
      <div className="v1-bg-terms">
        {siteData.floatingTerms.map((term, i) => (
          <span key={i} className="v1-float-term" style={{
            left: `${(i * 17) % 90}%`,
            top: `${(i * 23) % 85}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${12 + (i % 5) * 3}s`,
          }}>{term}</span>
        ))}
      </div>

      <nav className="v1-nav">
        <div className="v1-nav-left">
          <NavLink to={`${basePath}/`} className="v1-logo-link">
            <span className="v1-logo">{siteData.initials}</span>
            <span className="v1-site-name">{siteData.siteName}</span>
          </NavLink>
        </div>
        <div className="v1-nav-right">
          <NavLink to={`${basePath}/`} end className={({isActive}) => isActive ? "v1-nav-active" : ""}>HOME</NavLink>
          <NavLink to={`${basePath}/resume`} className={({isActive}) => isActive ? "v1-nav-active" : ""}>RESUME</NavLink>
          <NavLink to={`${basePath}/projects`} className={({isActive}) => isActive ? "v1-nav-active" : ""}>PROJECTS</NavLink>
          <NavLink to={`${basePath}/dashboard`} className={({isActive}) => isActive ? "v1-nav-active" : ""}>DASHBOARD</NavLink>
          <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <NavLink to={`${basePath}/contact`} className="v1-contact-btn">CONTACT</NavLink>
        </div>
      </nav>

      <div className="v1-status-bar">
        <span className="v1-status-dot"></span>
        <span>SYS.STATUS: {siteData.statusBar.status}</span>
        <span className="v1-breadcrumb">// {siteData.statusBar.breadcrumb}</span>
      </div>

      <main className="v1-main">
        <Outlet />
      </main>

      <footer className="v1-footer">
        <div className="v1-footer-line"></div>
        <p>&copy; {new Date().getFullYear()} {siteData.name} &bull; {siteData.location}</p>
      </footer>
    </div>
  );
}
