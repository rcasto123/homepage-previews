import { useState } from 'react';
import { siteData } from '../../data/siteContent';

export default function V1Contact() {
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
    <div className="v1-page-section">
      <h2 className="v1-section-title">GET IN TOUCH</h2>

      {submitted && (
        <div
          style={{
            padding: '12px 16px',
            background: 'rgba(0, 200, 83, 0.1)',
            border: '1px solid #00c853',
            borderRadius: '4px',
            color: '#00c853',
            marginBottom: '24px',
            fontSize: '13px',
          }}
        >
          &gt; Message received. I'll get back to you soon.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div className="v1-card">
          <div className="v1-card-title">EMAIL</div>
          <a href={`mailto:${siteData.email}`} style={{ color: '#00e5ff' }}>
            {siteData.email}
          </a>
        </div>
        <div className="v1-card">
          <div className="v1-card-title">LINKEDIN</div>
          <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#00e5ff' }}>
            /in/robert-casto
          </a>
        </div>
        <div className="v1-card">
          <div className="v1-card-title">LOCATION</div>
          <div style={{ color: '#8090a8', fontSize: '13px' }}>
            {siteData.location}
          </div>
        </div>
      </div>

      <div className="v1-card">
        <div className="v1-card-title" style={{ marginBottom: '16px' }}>
          SEND A MESSAGE
        </div>
        <form onSubmit={handleSubmit} className="v1-form">
          <div className="v1-form-group">
            <label className="v1-label">NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="v1-input"
            />
          </div>
          <div className="v1-form-group">
            <label className="v1-label">EMAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="v1-input"
            />
          </div>
          <div className="v1-form-group">
            <label className="v1-label">SUBJECT</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="v1-input"
            />
          </div>
          <div className="v1-form-group">
            <label className="v1-label">MESSAGE</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="v1-textarea"
            />
          </div>
          <button type="submit" className="v1-button">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
