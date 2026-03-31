import { siteData } from "../../data/siteContent";

export default function V2Resume() {
  const { resume } = siteData;

  return (
    <div className="v2-resume-page">
      <div className="v2-page-header">
        <h1 className="v2-page-title">Resume</h1>
        <p className="v2-page-desc">My professional experience and skills.</p>
      </div>

      <section className="v2-r-section">
        <h2 className="v2-r-heading">Summary</h2>
        <p className="v2-r-summary">{resume.summary}</p>
      </section>

      <section className="v2-r-section">
        <h2 className="v2-r-heading">Experience</h2>
        {resume.experience.map((exp, i) => (
          <div key={i} className="v2-r-exp">
            <div className="v2-r-exp-top">
              <div>
                <h3 className="v2-r-role">{exp.role}</h3>
                <span className="v2-r-company">{exp.company}</span>
              </div>
              <span className="v2-r-location">{exp.location}</span>
            </div>
            <ul className="v2-r-bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="v2-r-section">
        <h2 className="v2-r-heading">Skills</h2>
        <div className="v2-r-skills">
          {Object.entries(resume.skills).map(([cat, skills]) => (
            <div key={cat} className="v2-r-skill-group">
              <h4 className="v2-r-skill-cat">{cat}</h4>
              <p className="v2-r-skill-list">{skills}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
