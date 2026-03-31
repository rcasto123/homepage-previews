import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import './v2.css';

export default function V2Layout() {
  const { basePath } = useTheme();

  return (
    <div className="preview-frame v2-minimal">
      <nav className="v2-nav">
        <span className="v2-name">Robert Casto</span>
        <div className="v2-nav-links">
          <Link to={basePath || "/"}>About</Link>
          <Link to={`${basePath}/projects`}>Projects</Link>
          <Link to={`${basePath}/resume`}>Resume</Link>
          <Link to={`${basePath}/contact`}>Contact</Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
