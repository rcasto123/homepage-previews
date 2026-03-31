import { siteData } from '../../data/siteContent';

export default function V1Projects() {
  return (
    <div className="v1-page-section">
      <h2 className="v1-section-title">PROJECTS</h2>
      <div className="v1-grid">
        {siteData.projects.map((project, idx) => (
          <div key={idx} className="v1-card">
            <div className="v1-card-title">{project.title}</div>
            <div className="v1-card-subtitle">{project.category}</div>
            <div className="v1-card-description">{project.description}</div>
            <div className="v1-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="v1-tag">{tag}</span>
              ))}
            </div>
            {project.url && (
              <div style={{ marginTop: '12px' }}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: '#00e5ff', fontSize: '12px' }}>
                  Visit →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
