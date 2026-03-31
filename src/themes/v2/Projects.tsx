import { siteData } from '../../data/siteContent';

export default function V2Projects() {
  return (
    <div className="v2-page-section">
      <h2 className="v2-section-title">Projects</h2>
      <div className="v2-grid">
        {siteData.projects.map((project, idx) => (
          <div key={idx} className="v2-card">
            <div className="v2-card-title">{project.title}</div>
            <div className="v2-card-subtitle">{project.category}</div>
            <div className="v2-card-description">{project.description}</div>
            <div className="v2-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="v2-tag">{tag}</span>
              ))}
            </div>
            {project.url && (
              <div style={{ marginTop: '12px' }}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', fontSize: '14px', fontWeight: 500 }}>
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
