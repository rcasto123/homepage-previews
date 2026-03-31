import { siteData } from '../../data/siteContent';

export default function V4Resume() {
  return (
    <div className="v4-page-section">
      <h2 className="v4-section-title">Resume</h2>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', color: '#f5efe0', marginBottom: '16px', fontWeight: 700, textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
          Experience
        </h3>
        {siteData.experience.map((exp, idx) => (
          <div key={idx} className="v4-card-page" style={{ marginBottom: '12px' }}>
            <div className="v4-card-title">{exp.title}</div>
            <div className="v4-card-subtitle">
              {exp.company} • {exp.location}
            </div>
            <div style={{ fontSize: '12px', color: '#c8b8a0', marginBottom: '12px', fontFamily: "'Inter', -apple-system, sans-serif" }}>
              {exp.period}
            </div>
            <ul style={{ fontSize: '14px', color: '#c0b8a8', lineHeight: 1.6, paddingLeft: '16px' }}>
              {exp.bullets.map((bullet, bidx) => (
                <li key={bidx} style={{ marginBottom: '8px' }}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', color: '#f5efe0', marginBottom: '16px', fontWeight: 700, textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
          Education
        </h3>
        {siteData.education.map((edu, idx) => (
          <div key={idx} className="v4-card-page" style={{ marginBottom: '12px' }}>
            <div className="v4-card-title">{edu.degree}</div>
            <div className="v4-card-subtitle">{edu.school}</div>
            <div style={{ fontSize: '12px', color: '#c8b8a0', fontFamily: "'Inter', -apple-system, sans-serif" }}>{edu.year}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', color: '#f5efe0', marginBottom: '16px', fontWeight: 700, textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
          Certifications
        </h3>
        <div className="v4-card-page">
          <ul style={{ fontSize: '14px', color: '#c0b8a8', lineHeight: 1.8, paddingLeft: '16px' }}>
            {siteData.certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', color: '#f5efe0', marginBottom: '16px', fontWeight: 700, textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
          Skills
        </h3>
        <div className="v4-card-page">
          <div className="v4-tags" style={{ gap: '12px' }}>
            {siteData.skills.map((skill) => (
              <span key={skill} className="v4-tag-item" style={{ padding: '6px 14px' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
