import { siteData } from "../../data/siteContent";

export default function V2Projects() {
  return (
    <div className="v2-projects-page">
      <div className="v2-page-header">
        <h1 className="v2-page-title">Projects</h1>
        <p className="v2-page-desc">Things I've built and initiatives I've led.</p>
      </div>

      <div className="v2-projects-grid">
        {siteData.projects.map((project) => (
          <div key={project.id} className="v2-project-card">
            <div className="v2-project-top">
              <span className="v2-project-category">{project.category}</span>
              <span className="v2-project-status">{project.status}</span>
            </div>
            <h3 className="v2-project-title">{project.title}</h3>
            <p className="v2-project-desc">{project.description}</p>
            <div className="v2-project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="v2-ptag">{tag}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="v2-project-link">
                View Project &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
