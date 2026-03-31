import { Outlet, NavLink, useLocation } from "react-router-dom";
import { siteData } from "../../data/siteContent";
import "./v2.css";

export default function V2Layout() {
  const location = useLocation();
  const basePath = location.pathname.startsWith("/v2") ? "/v2" : "";

  return (
    <div className="v2-site">
      <nav className="v2-nav">
        <NavLink to={`${basePath}/`} className="v2-name">{siteData.name}</NavLink>
        <div className="v2-nav-links">
          <NavLink to={`${basePath}/`} end className={({isActive}) => isActive ? "v2-active" : ""}>About</NavLink>
          <NavLink to={`${basePath}/projects`} className={({isActive}) => isActive ? "v2-active" : ""}>Projects</NavLink>
          <NavLink to={`${basePath}/resume`} className={({isActive}) => isActive ? "v2-active" : ""}>Resume</NavLink>
          <NavLink to={`${basePath}/dashboard`} className={({isActive}) => isActive ? "v2-active" : ""}>Dashboard</NavLink>
          <NavLink to={`${basePath}/contact`} className={({isActive}) => `v2-nav-contact ${isActive ? "v2-active" : ""}`}>Contact</NavLink>
        </div>
      </nav>

      <main className="v2-main">
        <Outlet />
      </main>

      <footer className="v2-footer">
        <div className="v2-footer-inner">
          <p>&copy; {new Date().getFullYear()} {siteData.name}</p>
          <div className="v2-footer-links">
            <a href={`mailto:${siteData.email}`}>Email</a>
            <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
