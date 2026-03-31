import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import './v1.css';

export default function V1Layout() {
  const { basePath } = useTheme();

  return (
    <div className="preview-frame v1-cyberpunk">
      <nav className="v1-nav">
        <div className="v1-nav-left">
          <span className="v1-logo">RC</span>
          <span className="v1-site-name">ROBERTCAS.TO</span>
        </div>
        <div className="v1-nav-right">
          <Link to={`${basePath}/projects`}>PROJECTS</Link>
          <Link to={`${basePath}/resume`}>RESUME</Link>
          <Link to={`${basePath}/dashboard`}>DASHBOARD</Link>
          <a href="https://linkedin.com/in/robert-casto" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
          <Link to={`${basePath}/contact`} className="v1-contact-btn">
            CONTACT
          </Link>
        </div>
      </nav>

      <div className="v1-status-bar">
        <span className="v1-status-dot"></span>
        <span>SYS.STATUS: ONLINE</span>
        <span className="v1-breadcrumb">// Aircall &gt; Global IT Operations</span>
      </div>

      <Outlet />
    </div>
  );
}
