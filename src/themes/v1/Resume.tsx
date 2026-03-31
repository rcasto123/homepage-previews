import { siteData } from "../../data/siteContent";

export default function V1Resume() {
  const { resume } = siteData;

  return (
    <div className="v1-page v1-resume">
      <div className="v1-page-header">
        <div className="v1-terminal-prompt">root@robertcas.to:~/resume$</div>
        <h1 className="v1-page-title">RESUME</h1>
        <p className="v1-page-subtitle">// Career overview and technical qualifications</p>
      </div>

      <div className="v1-divider"></div>

      <section className="v1-resume-section">
        <h2 className="v1-section-title">&gt; SUMMARY</h2>
        <p className="v1-resume-summary">{resume.summary}</p>
      </section>

      <div className="v1-divider"></div>

      <section className="v1-resume-section">
        <h2 className="v1-section-title">&gt; EXPERIENCE</h2>
        {resume.experience.map((exp, i) => (
          <div key={i} className="v1-exp-block">
            <div className="v1-exp-header">
              <div>
                <h3 className="v1-exp-role">{exp.role}</h3>
                <span className="v1-exp-company">{exp.company}</span>
              </div>
              <span className="v1-exp-location">{exp.location}</span>
            </div>
            <ul className="v1-exp-bullets">
              {exp.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="v1-divider"></div>

      <section className="v1-resume-section">
        <h2 className="v1-section-title">&gt; SKILLS</h2>
        <div className="v1-skills-grid">
          {Object.entries(resume.skills).map(([category, skills]) => (
            <div key={category} className="v1-skill-block">
              <h4 className="v1-skill-category">{category}</h4>
              <p className="v1-skill-list">{skills}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
