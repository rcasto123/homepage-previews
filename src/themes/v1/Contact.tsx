import { siteData } from "../../data/siteContent";

export default function V1Contact() {
  return (
    <div className="v1-page v1-contact">
      <div className="v1-page-header">
        <div className="v1-terminal-prompt">root@robertcas.to:~/contact$</div>
        <h1 className="v1-page-title">CONTACT</h1>
        <p className="v1-page-subtitle">// Open a connection</p>
      </div>

      <div className="v1-divider"></div>

      <div className="v1-contact-grid">
        <div className="v1-contact-info">
          <h2 className="v1-section-title">&gt; CONNECTION DETAILS</h2>
          <div className="v1-contact-item">
            <span className="v1-contact-label">NAME:</span>
            <span className="v1-contact-value">{siteData.name}</span>
          </div>
          <div className="v1-contact-item">
            <span className="v1-contact-label">LOCATION:</span>
            <span className="v1-contact-value">{siteData.location}</span>
          </div>
          <div className="v1-contact-item">
            <span className="v1-contact-label">EMAIL:</span>
            <a href={`mailto:${siteData.email}`} className="v1-contact-link">{siteData.email}</a>
          </div>
          <div className="v1-contact-item">
            <span className="v1-contact-label">LINKEDIN:</span>
            <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer" className="v1-contact-link">
              linkedin.com/in/robert-casto
            </a>
          </div>
          <div className="v1-contact-item">
            <span className="v1-contact-label">ROLE:</span>
            <span className="v1-contact-value">{siteData.title} @ Aircall</span>
          </div>
        </div>

        <div className="v1-contact-form-wrapper">
          <h2 className="v1-section-title">&gt; SEND MESSAGE</h2>
          <form className="v1-contact-form" onSubmit={(e) => { e.preventDefault(); alert("Message functionality coming soon!"); }}>
            <div className="v1-form-group">
              <label className="v1-form-label">NAME:</label>
              <input type="text" className="v1-form-input" placeholder="Enter your name..." />
            </div>
            <div className="v1-form-group">
              <label className="v1-form-label">EMAIL:</label>
              <input type="email" className="v1-form-input" placeholder="Enter your email..." />
            </div>
            <div className="v1-form-group">
              <label className="v1-form-label">MESSAGE:</label>
              <textarea className="v1-form-textarea" rows={6} placeholder="Type your message..."></textarea>
            </div>
            <button type="submit" className="v1-form-submit">TRANSMIT &rarr;</button>
          </form>
        </div>
      </div>
    </div>
  );
}
