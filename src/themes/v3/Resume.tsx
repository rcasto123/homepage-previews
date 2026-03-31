import { siteData } from "../../data/siteContent";

export default function V3Resume() {
  const { resume } = siteData;

  return (
    <div className="v3-resume-page">
      <div className="v3-page-header">
        <h1 className="v3-page-title">Resume</h1>
        <p className="v3-page-desc">My professional experience and skill set.</p>
      </div>

      <section className="v3-r-section">
        <h2 className="v3-r-heading">Summary</h2>
        <p className="v3-r-summary">{resume.summary}</p>
      </section>

      <section className="v3-r-section">
        <h2 className="v3-r-heading">Experience</h2>
        <div className="v3-r-experiences">
          {resume.experience.map((exp, i) => (
            <div key={i} className="v3-r-exp-card">
              <div className="v3-r-exp-header">
                <div className="v3-r-exp-left">
                  <h3 className="v3-r-role">{exp.role}</h3>
                  <span className="v3-r-company">{exp.company}</span>
                </div>
                <span className="v3-r-location">{exp.location}</span>
              </div>
              <ul className="v3-r-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="v3-r-section">
        <h2 className="v3-r-heading">Skills</h2>
        <div className="v3-r-skills">
          {Object.entries(resume.skills).map(([cat, skills]) => (
            <div key={cat} className="v3-r-skill-group">
              <h4 className="v3-r-skill-cat">{cat}</h4>
              <p className="v3-r-skill-list">{skills}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
