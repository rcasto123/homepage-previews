import { siteData } from "../../data/siteContent";

export default function V4Contact() {
  return (
    <div className="v4-page v4-contact">
      <div className="v4-page-header">
        <h1 className="v4-page-title">Say Hello</h1>
        <p className="v4-page-subtitle">I'd love to hear from you. Let's create something meaningful together.</p>
      </div>

      <div className="v4-contact-grid">
        <div className="v4-contact-info">
          <h2 className="v4-section-title">Contact Information</h2>
          <div className="v4-contact-item">
            <span className="v4-contact-label">Name</span>
            <span className="v4-contact-value">{siteData.name}</span>
          </div>
          <div className="v4-contact-item">
            <span className="v4-contact-label">Location</span>
            <span className="v4-contact-value">{siteData.location}</span>
          </div>
          <div className="v4-contact-item">
            <span className="v4-contact-label">Email</span>
            <a href={`mailto:${siteData.email}`} className="v4-contact-link">{siteData.email}</a>
          </div>
          <div className="v4-contact-item">
            <span className="v4-contact-label">LinkedIn</span>
            <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer" className="v4-contact-link">
              linkedin.com/in/robert-casto
            </a>
          </div>
          <div className="v4-contact-item">
            <span className="v4-contact-label">Role</span>
            <span className="v4-contact-value">{siteData.title} @ Aircall</span>
          </div>
        </div>

        <div className="v4-contact-form-wrapper">
          <h2 className="v4-section-title">Send a Message</h2>
          <form className="v4-contact-form" onSubmit={(e) => { e.preventDefault(); alert("Message functionality coming soon!"); }}>
            <div className="v4-form-group">
              <label className="v4-form-label">Name</label>
              <input type="text" className="v4-form-input" placeholder="Your name..." />
            </div>
            <div className="v4-form-group">
              <label className="v4-form-label">Email</label>
              <input type="email" className="v4-form-input" placeholder="your@email.com" />
            </div>
            <div className="v4-form-group">
              <label className="v4-form-label">Message</label>
              <textarea className="v4-form-textarea" rows={6} placeholder="Share your thoughts..."></textarea>
            </div>
            <button type="submit" className="v4-form-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
