import { siteData } from '../../data/siteContent';

export default function V4Projects() {
  return (
    <div className="v4-page-section">
      <h2 className="v4-section-title">Projects</h2>
      <div className="v4-grid">
        {siteData.projects.map((project, idx) => (
          <div key={idx} className="v4-card-page">
            <div className="v4-card-title">{project.title}</div>
            <div className="v4-card-subtitle">{project.category}</div>
            <div className="v4-card-description">{project.description}</div>
            <div className="v4-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="v4-tag-item">{tag}</span>
              ))}
            </div>
            {project.url && (
              <div style={{ marginTop: '12px' }}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ff9080', fontSize: '14px', fontWeight: 500 }}>
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
