import { siteData } from "../../data/siteContent";

export default function V3Contact() {
  return (
    <div className="v3-contact-page">
      <div className="v3-page-header">
        <h1 className="v3-page-title">Get in Touch</h1>
        <p className="v3-page-desc">Have a question or opportunity? I'd love to hear from you.</p>
      </div>

      <div className="v3-contact-layout">
        <div className="v3-contact-info">
          <div className="v3-contact-card">
            <h3 className="v3-contact-card-title">Email</h3>
            <a href={`mailto:${siteData.email}`} className="v3-contact-card-link">{siteData.email}</a>
          </div>
          <div className="v3-contact-card">
            <h3 className="v3-contact-card-title">LinkedIn</h3>
            <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer" className="v3-contact-card-link">Connect on LinkedIn</a>
          </div>
          <div className="v3-contact-card">
            <h3 className="v3-contact-card-title">Location</h3>
            <p className="v3-contact-card-text">{siteData.location}</p>
          </div>
          <div className="v3-contact-card">
            <h3 className="v3-contact-card-title">Current Role</h3>
            <p className="v3-contact-card-text">{siteData.title} at Aircall</p>
          </div>
        </div>

        <form className="v3-contact-form" onSubmit={(e) => { e.preventDefault(); alert("Message functionality coming soon!"); }}>
          <div className="v3-form-row">
            <div className="v3-form-group">
              <label htmlFor="name" className="v3-form-label">Name</label>
              <input id="name" type="text" placeholder="Your name" className="v3-form-input" />
            </div>
            <div className="v3-form-group">
              <label htmlFor="email" className="v3-form-label">Email</label>
              <input id="email" type="email" placeholder="your@email.com" className="v3-form-input" />
            </div>
          </div>
          <div className="v3-form-group">
            <label htmlFor="subject" className="v3-form-label">Subject</label>
            <input id="subject" type="text" placeholder="What's this about?" className="v3-form-input" />
          </div>
          <div className="v3-form-group">
            <label htmlFor="message" className="v3-form-label">Message</label>
            <textarea id="message" rows={6} placeholder="Your message..." className="v3-form-textarea"></textarea>
          </div>
          <button type="submit" className="v3-form-submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
