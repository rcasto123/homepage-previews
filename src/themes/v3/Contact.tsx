import { useState } from 'react';
import { siteData } from '../../data/siteContent';

export default function V3Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="v3-page-section">
      <h2 className="v3-section-title">Get in Touch</h2>

      {submitted && (
        <div
          style={{
            padding: '12px 16px',
            background: 'rgba(102, 126, 234, 0.1)',
            border: '1px solid #667eea',
            borderRadius: '6px',
            color: '#667eea',
            marginBottom: '24px',
            fontSize: '14px',
          }}
        >
          Thanks for reaching out! I'll get back to you soon.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <div className="v3-card-page">
          <div className="v3-card-title">Email</div>
          <a href={`mailto:${siteData.email}`} style={{ color: '#667eea', fontSize: '14px' }}>
            {siteData.email}
          </a>
        </div>
        <div className="v3-card-page">
          <div className="v3-card-title">LinkedIn</div>
          <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', fontSize: '14px' }}>
            /in/robert-casto
          </a>
        </div>
        <div className="v3-card-page">
          <div className="v3-card-title">Location</div>
          <div style={{ color: '#b0b0c0', fontSize: '14px' }}>
            {siteData.location}
          </div>
        </div>
      </div>

      <div className="v3-card-page">
        <div className="v3-card-title" style={{ marginBottom: '16px' }}>
          Send a Message
        </div>
        <form onSubmit={handleSubmit} className="v3-form">
          <div className="v3-form-group">
            <label className="v3-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="v3-input"
            />
          </div>
          <div className="v3-form-group">
            <label className="v3-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="v3-input"
            />
          </div>
          <div className="v3-form-group">
            <label className="v3-label">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="v3-input"
            />
          </div>
          <div className="v3-form-group">
            <label className="v3-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="v3-textarea"
            />
          </div>
          <button type="submit" className="v3-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
