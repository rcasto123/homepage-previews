import { siteData } from '../../data/siteContent';

export default function V2Resume() {
  return (
    <div className="v2-page-section">
      <h2 className="v2-section-title">Resume</h2>

      {/* Experience */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', color: '#1a1a2e', marginBottom: '16px', fontWeight: 700 }}>
          Experience
        </h3>
        {siteData.experience.map((exp, idx) => (
          <div key={idx} className="v2-card" style={{ marginBottom: '12px' }}>
            <div className="v2-card-title">{exp.title}</div>
            <div className="v2-card-subtitle">
              {exp.company} • {exp.location}
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px' }}>
              {exp.period}
            </div>
            <ul style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, paddingLeft: '16px' }}>
              {exp.bullets.map((bullet, bidx) => (
                <li key={bidx} style={{ marginBottom: '8px' }}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', color: '#1a1a2e', marginBottom: '16px', fontWeight: 700 }}>
          Education
        </h3>
        {siteData.education.map((edu, idx) => (
          <div key={idx} className="v2-card" style={{ marginBottom: '12px' }}>
            <div className="v2-card-title">{edu.degree}</div>
            <div className="v2-card-subtitle">{edu.school}</div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>{edu.year}</div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', color: '#1a1a2e', marginBottom: '16px', fontWeight: 700 }}>
          Certifications
        </h3>
        <div className="v2-card">
          <ul style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.8, paddingLeft: '16px' }}>
            {siteData.certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 style={{ fontSize: '18px', color: '#1a1a2e', marginBottom: '16px', fontWeight: 700 }}>
          Skills
        </h3>
        <div className="v2-card">
          <div className="v2-tags" style={{ gap: '12px' }}>
            {siteData.skills.map((skill) => (
              <span key={skill} className="v2-tag" style={{ padding: '6px 14px' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
