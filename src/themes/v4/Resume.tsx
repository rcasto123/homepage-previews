import { siteData } from "../../data/siteContent";

export default function V4Resume() {
  const { resume } = siteData;

  return (
    <div className="v4-page v4-resume">
      <div className="v4-page-header">
        <h1 className="v4-page-title">Resume</h1>
        <p className="v4-page-subtitle">Professional experience and qualifications</p>
      </div>

      <section className="v4-resume-section">
        <h2 className="v4-section-title">Summary</h2>
        <p className="v4-resume-summary">{resume.summary}</p>
      </section>

      <section className="v4-resume-section">
        <h2 className="v4-section-title">Experience</h2>
        {resume.experience.map((exp, i) => (
          <div key={i} className="v4-exp-block">
            <div className="v4-exp-header">
              <div>
                <h3 className="v4-exp-role">{exp.role}</h3>
                <span className="v4-exp-company">{exp.company}</span>
              </div>
              <span className="v4-exp-location">{exp.location}</span>
            </div>
            <ul className="v4-exp-bullets">
              {exp.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="v4-resume-section">
        <h2 className="v4-section-title">Skills</h2>
        <div className="v4-skills-grid">
          {Object.entries(resume.skills).map(([category, skills]) => (
            <div key={category} className="v4-skill-block">
              <h4 className="v4-skill-category">{category}</h4>
              <p className="v4-skill-list">{skills}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
