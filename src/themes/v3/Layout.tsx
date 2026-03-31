import { Outlet, NavLink } from "react-router-dom";
import { siteData } from "../../data/siteContent";
import { useTheme } from "../../contexts/ThemeContext";
import "./v3.css";

export default function V3Layout() {
  const { basePath } = useTheme();

  return (
    <div className="v3-site">
      <nav className="v3-nav">
        <div className="v3-nav-inner">
          <NavLink to={`${basePath}/`} className="v3-logo">{siteData.initials}</NavLink>
          <div className="v3-nav-links">
            <NavLink to={`${basePath}/`} end className={({isActive}) => isActive ? "v3-active" : ""}>Home</NavLink>
            <NavLink to={`${basePath}/projects`} className={({isActive}) => isActive ? "v3-active" : ""}>Work</NavLink>
            <NavLink to={`${basePath}/resume`} className={({isActive}) => isActive ? "v3-active" : ""}>Resume</NavLink>
            <NavLink to={`${basePath}/dashboard`} className={({isActive}) => isActive ? "v3-active" : ""}>Dashboard</NavLink>
            <NavLink to={`${basePath}/contact`} className={({isActive}) => `v3-nav-contact ${isActive ? "v3-active" : ""}`}>Get in Touch</NavLink>
          </div>
        </div>
      </nav>

      <main className="v3-main">
        <Outlet />
      </main>

      <footer className="v3-footer">
        <div className="v3-footer-inner">
          <p>&copy; {new Date().getFullYear()} {siteData.name}</p>
          <div className="v3-footer-links">
            <a href={`mailto:${siteData.email}`}>Email</a>
            <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
