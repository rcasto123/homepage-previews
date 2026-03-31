import { useState } from 'react';
import { siteData } from '../../data/siteContent';

export default function V4Contact() {
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
    <div className="v4-page-section">
      <h2 className="v4-section-title">Get in Touch</h2>

      {submitted && (
        <div
          style={{
            padding: '12px 16px',
            background: 'rgba(255, 144, 128, 0.1)',
            border: '1px solid #ff9080',
            borderRadius: '6px',
            color: '#ff9080',
            marginBottom: '24px',
            fontSize: '14px',
            fontFamily: "'Inter', -apple-system, sans-serif",
          }}
        >
          Thank you for reaching out. I look forward to connecting with you.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <div className="v4-card-page">
          <div className="v4-card-title">Email</div>
          <a href={`mailto:${siteData.email}`} style={{ color: '#ff9080', fontSize: '14px' }}>
            {siteData.email}
          </a>
        </div>
        <div className="v4-card-page">
          <div className="v4-card-title">LinkedIn</div>
          <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#ff9080', fontSize: '14px' }}>
            /in/robert-casto
          </a>
        </div>
        <div className="v4-card-page">
          <div className="v4-card-title">Location</div>
          <div style={{ color: '#c0b8a8', fontSize: '14px' }}>
            {siteData.location}
          </div>
        </div>
      </div>

      <div className="v4-card-page">
        <div className="v4-card-title" style={{ marginBottom: '16px' }}>
          Send a Message
        </div>
        <form onSubmit={handleSubmit} className="v4-form">
          <div className="v4-form-group">
            <label className="v4-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="v4-input"
            />
          </div>
          <div className="v4-form-group">
            <label className="v4-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="v4-input"
            />
          </div>
          <div className="v4-form-group">
            <label className="v4-label">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="v4-input"
            />
          </div>
          <div className="v4-form-group">
            <label className="v4-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="v4-textarea"
            />
          </div>
          <button type="submit" className="v4-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
