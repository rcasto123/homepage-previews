import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import './v3.css';

export default function V3Layout() {
  const { basePath } = useTheme();

  return (
    <div className="preview-frame v3-gradient">
      <nav className="v3-nav">
        <span className="v3-logo">RC</span>
        <div className="v3-nav-links">
          <Link to={`${basePath}/projects`}>Work</Link>
          <Link to={basePath || "/"}>About</Link>
          <Link to={`${basePath}/resume`}>Resume</Link>
          <Link to={`${basePath}/contact`} className="v3-nav-contact">
            Get in Touch
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
