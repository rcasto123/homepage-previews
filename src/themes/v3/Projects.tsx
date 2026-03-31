import { siteData } from "../../data/siteContent";

export default function V3Projects() {
  return (
    <div className="v3-projects-page">
      <div className="v3-page-header">
        <h1 className="v3-page-title">Featured Work</h1>
        <p className="v3-page-desc">Projects and initiatives that showcase my expertise in IT operations and leadership.</p>
      </div>

      <div className="v3-projects-grid">
        {siteData.projects.map((project) => (
          <div key={project.id} className="v3-project-card">
            <div className="v3-project-header">
              <div className="v3-project-meta">
                <span className="v3-project-category">{project.category}</span>
                <span className="v3-project-status">{project.status}</span>
              </div>
            </div>
            <h3 className="v3-project-title">{project.title}</h3>
            <p className="v3-project-desc">{project.description}</p>
            <div className="v3-project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="v3-ptag">{tag}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="v3-project-link">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
