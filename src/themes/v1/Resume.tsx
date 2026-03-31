import { siteData } from '../../data/siteContent';

export default function V1Resume() {
  return (
    <div className="v1-page-section">
      <h2 className="v1-section-title">RESUME</h2>

      {/* Experience */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '18px', color: '#00e5ff', marginBottom: '16px', fontWeight: 700 }}>
          EXPERIENCE
        </h3>
        {siteData.experience.map((exp, idx) => (
          <div key={idx} className="v1-card" style={{ marginBottom: '12px' }}>
            <div className="v1-card-title">{exp.title}</div>
            <div className="v1-card-subtitle">
              {exp.company} • {exp.location}
            </div>
            <div style={{ fontSize: '12px', color: '#8090a8', marginBottom: '12px' }}>
              {exp.period}
            </div>
            <ul style={{ fontSize: '13px', color: '#8090a8', lineHeight: 1.6, paddingLeft: '16px' }}>
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
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '18px', color: '#00e5ff', marginBottom: '16px', fontWeight: 700 }}>
          EDUCATION
        </h3>
        {siteData.education.map((edu, idx) => (
          <div key={idx} className="v1-card" style={{ marginBottom: '12px' }}>
            <div className="v1-card-title">{edu.degree}</div>
            <div className="v1-card-subtitle">{edu.school}</div>
            <div style={{ fontSize: '12px', color: '#8090a8' }}>{edu.year}</div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '18px', color: '#00e5ff', marginBottom: '16px', fontWeight: 700 }}>
          CERTIFICATIONS
        </h3>
        <div className="v1-card">
          <ul style={{ fontSize: '13px', color: '#8090a8', lineHeight: 1.8, paddingLeft: '16px' }}>
            {siteData.certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 style={{ fontSize: '18px', color: '#00e5ff', marginBottom: '16px', fontWeight: 700 }}>
          SKILLS
        </h3>
        <div className="v1-card">
          <div className="v1-tags" style={{ gap: '12px' }}>
            {siteData.skills.map((skill) => (
              <span key={skill} className="v1-tag" style={{ padding: '6px 14px' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
