import { siteData } from "../../data/siteContent";

export default function V4Projects() {
  return (
    <div className="v4-page v4-projects">
      <div className="v4-page-header">
        <h1 className="v4-page-title">Projects</h1>
        <p className="v4-page-subtitle">A collection of work and initiatives I've crafted with care</p>
      </div>

      <div className="v4-project-grid">
        {siteData.projects.map((project) => (
          <div key={project.id} className="v4-project-card">
            <div className="v4-project-header">
              <span className="v4-project-category">{project.category}</span>
              <span className={`v4-project-status ${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>
            <h3 className="v4-project-title">{project.title}</h3>
            <p className="v4-project-desc">{project.description}</p>
            <div className="v4-project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="v4-tag">{tag}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="v4-project-link">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
