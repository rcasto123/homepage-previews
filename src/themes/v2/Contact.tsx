import { siteData } from "../../data/siteContent";

export default function V2Contact() {
  return (
    <div className="v2-contact-page">
      <div className="v2-page-header">
        <h1 className="v2-page-title">Get in Touch</h1>
        <p className="v2-page-desc">Have a question or want to connect? Reach out below.</p>
      </div>

      <div className="v2-contact-layout">
        <div className="v2-contact-info">
          <div className="v2-contact-card">
            <h3>Email</h3>
            <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
          </div>
          <div className="v2-contact-card">
            <h3>LinkedIn</h3>
            <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
          </div>
          <div className="v2-contact-card">
            <h3>Location</h3>
            <p>{siteData.location}</p>
          </div>
          <div className="v2-contact-card">
            <h3>Current Role</h3>
            <p>{siteData.title} at Aircall</p>
          </div>
        </div>

        <form className="v2-contact-form" onSubmit={(e) => { e.preventDefault(); alert("Message functionality coming soon!"); }}>
          <div className="v2-form-row">
            <div className="v2-form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="v2-form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>
          <div className="v2-form-group">
            <label>Subject</label>
            <input type="text" placeholder="What's this about?" />
          </div>
          <div className="v2-form-group">
            <label>Message</label>
            <textarea rows={6} placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="v2-form-submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
