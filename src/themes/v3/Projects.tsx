import { siteData } from '../../data/siteContent';

export default function V3Projects() {
  return (
    <div className="v3-page-section">
      <h2 className="v3-section-title">Work</h2>
      <div className="v3-grid">
        {siteData.projects.map((project, idx) => (
          <div key={idx} className="v3-card-page">
            <div className="v3-card-title">{project.title}</div>
            <div className="v3-card-subtitle">{project.category}</div>
            <div className="v3-card-description">{project.description}</div>
            <div className="v3-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="v3-tag-item">{tag}</span>
              ))}
            </div>
            {project.url && (
              <div style={{ marginTop: '12px' }}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', fontSize: '14px', fontWeight: 500 }}>
                  Visit Project →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
