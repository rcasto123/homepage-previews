export default function V3Home() {
  return (
    <>
      <div className="v3-hero">
        <div className="v3-tag">IT Operations • Global Teams • Aircall</div>
        <h1 className="v3-title">
          I build &amp; scale<br />
          <span className="v3-gradient-text">IT operations</span><br />
          that just work.
        </h1>
        <p className="v3-subtitle">
          From 200 to 2,800+ employees across 3 continents. Designing systems, developing talent, and driving SLA compliance at scale.
        </p>
        <div className="v3-cta-row">
          <a href="#projects" className="v3-btn">See My Work →</a>
        </div>
      </div>

      <div className="v3-cards">
        <div className="v3-card">
          <div className="v3-card-icon">⚙️</div>
          <h3>Operations</h3>
          <p>Global IT infrastructure &amp; support</p>
        </div>
        <div className="v3-card">
          <div className="v3-card-icon">👥</div>
          <h3>Leadership</h3>
          <p>High-performing distributed teams</p>
        </div>
        <div className="v3-card">
          <div className="v3-card-icon">📊</div>
          <h3>Strategy</h3>
          <p>SLA compliance &amp; automation</p>
        </div>
      </div>
    </>
  );
}
