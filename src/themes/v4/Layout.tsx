import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import './v4.css';

export default function V4Layout() {
  const { basePath } = useTheme();

  return (
    <div className="preview-frame v4-ghibli">
      <div className="v4-bg-image"></div>
      <div className="v4-bg-overlay"></div>

      <nav className="v4-nav">
        <span className="v4-logo">ロバート</span>
        <div className="v4-nav-links">
          <Link to={basePath || "/"}>About</Link>
          <Link to={`${basePath}/projects`}>Projects</Link>
          <Link to={`${basePath}/resume`}>Resume</Link>
          <Link to={`${basePath}/contact`} className="v4-nav-contact">
            Say Hello
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
