import { Link } from "react-router-dom";
import { siteData } from "../../data/siteContent";
import { useTheme } from "../../contexts/ThemeContext";

export default function V3Home() {
  const { basePath } = useTheme();

  const features = [
    {
      title: "Operations",
      description: "12+ years scaling global IT operations from 200 to 2,800+ employees across multiple continents."
    },
    {
      title: "Leadership",
      description: "Building high-performing teams through mentoring, coaching, and fostering cultures of ownership."
    },
    {
      title: "Strategy",
      description: "Aligning IT initiatives with business objectives through ITIL best practices and data-driven KPIs."
    }
  ];

  return (
    <div className="v3-home">
      <section className="v3-hero">
        <div className="v3-hero-content">
          <h1 className="v3-hero-title">I build & scale IT operations that just work.</h1>
          <p className="v3-hero-tagline">IT Operations Leader at Aircall</p>
          <p className="v3-hero-bio">{siteData.homeBio}</p>
          <div className="v3-cta-group">
            <Link to={`${basePath}/projects`} className="v3-btn-primary">View My Work</Link>
            <Link to={`${basePath}/contact`} className="v3-btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="v3-features">
        <div className="v3-features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="v3-feature-card">
              <div className="v3-feature-number">{idx + 1}</div>
              <h3 className="v3-feature-title">{feature.title}</h3>
              <p className="v3-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
