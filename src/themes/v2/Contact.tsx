import { useState } from 'react';
import { siteData } from '../../data/siteContent';

export default function V2Contact() {
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
    <div className="v2-page-section">
      <h2 className="v2-section-title">Get in Touch</h2>

      {submitted && (
        <div
          style={{
            padding: '12px 16px',
            background: '#d1fae5',
            border: '1px solid #10b981',
            borderRadius: '6px',
            color: '#065f46',
            marginBottom: '24px',
            fontSize: '14px',
          }}
        >
          Thanks for your message! I'll get back to you soon.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <div className="v2-card">
          <div className="v2-card-title">Email</div>
          <a href={`mailto:${siteData.email}`} style={{ color: '#3b82f6', fontSize: '14px' }}>
            {siteData.email}
          </a>
        </div>
        <div className="v2-card">
          <div className="v2-card-title">LinkedIn</div>
          <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', fontSize: '14px' }}>
            /in/robert-casto
          </a>
        </div>
        <div className="v2-card">
          <div className="v2-card-title">Location</div>
          <div style={{ color: '#4b5563', fontSize: '14px' }}>
            {siteData.location}
          </div>
        </div>
      </div>

      <div className="v2-card">
        <div className="v2-card-title" style={{ marginBottom: '16px' }}>
          Send a Message
        </div>
        <form onSubmit={handleSubmit} className="v2-form">
          <div className="v2-form-group">
            <label className="v2-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="v2-input"
            />
          </div>
          <div className="v2-form-group">
            <label className="v2-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="v2-input"
            />
          </div>
          <div className="v2-form-group">
            <label className="v2-label">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="v2-input"
            />
          </div>
          <div className="v2-form-group">
            <label className="v2-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="v2-textarea"
            />
          </div>
          <button type="submit" className="v2-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
