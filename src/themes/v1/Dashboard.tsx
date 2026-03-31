import { siteData } from "../../data/siteContent";

export default function V1Dashboard() {
  const { dashboard } = siteData;

  return (
    <div className="v1-page v1-dashboard">
      <div className="v1-page-header">
        <div className="v1-terminal-prompt">root@robertcas.to:~/dashboard$</div>
        <h1 className="v1-page-title">{dashboard.title.toUpperCase()}</h1>
        <p className="v1-page-subtitle">// {dashboard.subtitle}</p>
      </div>

      <div className="v1-divider"></div>

      {/* Metrics Row */}
      <div className="v1-metrics-row">
        {dashboard.metrics.map((m, i) => (
          <div key={i} className="v1-metric-card">
            <span className="v1-metric-label">{m.label}</span>
            <span className="v1-metric-value">{m.value}</span>
            <span className="v1-metric-sub">{m.sub}</span>
          </div>
        ))}
      </div>

      {/* Ticket Table */}
      <section className="v1-dash-section">
        <h2 className="v1-section-title">&gt; ACTIVE TICKETS</h2>
        <div className="v1-table-wrapper">
          <table className="v1-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>SUMMARY</th>
                <th>PRIORITY</th>
                <th>STATUS</th>
                <th>REGION</th>
                <th>SLA</th>
              </tr>
            </thead>
            <tbody>
              {dashboard.tickets.map((t) => (
                <tr key={t.id}>
                  <td className="v1-ticket-id">{t.id}</td>
                  <td>{t.summary}</td>
                  <td><span className={`v1-priority ${t.priority.toLowerCase()}`}>{t.priority}</span></td>
                  <td><span className={`v1-status-tag ${t.status.toLowerCase().replace(" ", "-")}`}>{t.status}</span></td>
                  <td>{t.region}</td>
                  <td className="v1-sla-cell">{t.sla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Regional Status */}
      <section className="v1-dash-section">
        <h2 className="v1-section-title">&gt; REGIONAL STATUS</h2>
        <div className="v1-region-grid">
          {dashboard.regions.map((r) => (
            <div key={r.name} className={`v1-region-card ${r.status.toLowerCase()}`}>
              <div className="v1-region-header">
                <span className="v1-region-name">{r.name}</span>
                <span className={`v1-region-status ${r.status.toLowerCase()}`}>{r.status}</span>
              </div>
              <div className="v1-region-stats">
                <div><span className="v1-region-stat-label">Open:</span> {r.open}</div>
                <div><span className="v1-region-stat-label">SLA:</span> {r.sla}</div>
                <div><span className="v1-region-stat-label">Queue:</span> {r.queue}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
