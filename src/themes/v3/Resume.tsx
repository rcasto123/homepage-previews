import { siteData } from '../../data/siteContent';

export default function V3Resume() {
  return (
    <div className="v3-page-section">
      <h2 className="v3-section-title">Resume</h2>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '16px', fontWeight: 700 }}>
          Experience
        </h3>
        {siteData.experience.map((exp, idx) => (
          <div key={idx} className="v3-card-page" style={{ marginBottom: '12px' }}>
            <div className="v3-card-title">{exp.title}</div>
            <div className="v3-card-subtitle">
              {exp.company} • {exp.location}
            </div>
            <div style={{ fontSize: '12px', color: '#8888a0', marginBottom: '12px' }}>
              {exp.period}
            </div>
            <ul style={{ fontSize: '14px', color: '#b0b0c0', lineHeight: 1.6, paddingLeft: '16px' }}>
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
        <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '16px', fontWeight: 700 }}>
          Education
        </h3>
        {siteData.education.map((edu, idx) => (
          <div key={idx} className="v3-card-page" style={{ marginBottom: '12px' }}>
            <div className="v3-card-title">{edu.degree}</div>
            <div className="v3-card-subtitle">{edu.school}</div>
            <div style={{ fontSize: '12px', color: '#8888a0' }}>{edu.year}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '16px', fontWeight: 700 }}>
          Certifications
        </h3>
        <div className="v3-card-page">
          <ul style={{ fontSize: '14px', color: '#b0b0c0', lineHeight: 1.8, paddingLeft: '16px' }}>
            {siteData.certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '16px', fontWeight: 700 }}>
          Skills
        </h3>
        <div className="v3-card-page">
          <div className="v3-tags" style={{ gap: '12px' }}>
            {siteData.skills.map((skill) => (
              <span key={skill} className="v3-tag-item" style={{ padding: '6px 14px' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
