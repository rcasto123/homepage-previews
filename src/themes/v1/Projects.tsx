import { siteData } from "../../data/siteContent";

export default function V1Projects() {
  return (
    <div className="v1-page v1-projects">
      <div className="v1-page-header">
        <div className="v1-terminal-prompt">root@robertcas.to:~/projects$</div>
        <h1 className="v1-page-title">PROJECTS</h1>
        <p className="v1-page-subtitle">// Active deployments and operations initiatives</p>
      </div>

      <div className="v1-divider"></div>

      <div className="v1-project-grid">
        {siteData.projects.map((project) => (
          <div key={project.id} className="v1-project-card">
            <div className="v1-project-header">
              <span className="v1-project-category">[{project.category}]</span>
              <span className={`v1-project-status ${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>
            <h3 className="v1-project-title">{project.title}</h3>
            <p className="v1-project-desc">{project.description}</p>
            <div className="v1-project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="v1-tag">{tag}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="v1-project-link">
                VIEW PROJECT &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
