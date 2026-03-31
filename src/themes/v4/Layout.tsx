import { Outlet, NavLink } from "react-router-dom";
import { siteData } from "../../data/siteContent";
import { useTheme } from "../../contexts/ThemeContext";
import "./v4.css";

export default function V4Layout() {
  const { basePath } = useTheme();

  return (
    <div className="v4-site">
      <nav className="v4-nav">
        <div className="v4-nav-left">
          <NavLink to={`${basePath}/`} className="v4-logo-link">
            <span className="v4-logo">ロバート</span>
          </NavLink>
        </div>
        <div className="v4-nav-right">
          <NavLink to={`${basePath}/`} end className={({isActive}) => isActive ? "v4-nav-active" : ""}>
            About
          </NavLink>
          <NavLink to={`${basePath}/projects`} className={({isActive}) => isActive ? "v4-nav-active" : ""}>
            Projects
          </NavLink>
          <NavLink to={`${basePath}/resume`} className={({isActive}) => isActive ? "v4-nav-active" : ""}>
            Resume
          </NavLink>
          <NavLink to={`${basePath}/dashboard`} className={({isActive}) => isActive ? "v4-nav-active" : ""}>
            Dashboard
          </NavLink>
          <NavLink to={`${basePath}/contact`} className="v4-contact-btn">
            Say Hello
          </NavLink>
        </div>
      </nav>

      <main className="v4-main">
        <Outlet />
      </main>

      <footer className="v4-footer">
        <div className="v4-footer-divider"></div>
        <p>&copy; {new Date().getFullYear()} {siteData.name} &bull; {siteData.location}</p>
      </footer>
    </div>
  );
}
