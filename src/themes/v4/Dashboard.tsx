import { siteData } from "../../data/siteContent";

export default function V4Dashboard() {
  const { dashboard } = siteData;

  return (
    <div className="v4-page v4-dashboard">
      <div className="v4-page-header">
        <h1 className="v4-page-title">{dashboard.title}</h1>
        <p className="v4-page-subtitle">{dashboard.subtitle}</p>
      </div>

      {/* Metrics Row */}
      <div className="v4-metrics-row">
        {dashboard.metrics.map((m, i) => (
          <div key={i} className="v4-metric-card">
            <span className="v4-metric-label">{m.label}</span>
            <span className="v4-metric-value">{m.value}</span>
            <span className="v4-metric-sub">{m.sub}</span>
          </div>
        ))}
      </div>

      {/* Ticket Table */}
      <section className="v4-dash-section">
        <h2 className="v4-section-title">Active Tickets</h2>
        <div className="v4-table-wrapper">
          <table className="v4-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Summary</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Region</th>
                <th>SLA</th>
              </tr>
            </thead>
            <tbody>
              {dashboard.tickets.map((t) => (
                <tr key={t.id}>
                  <td className="v4-ticket-id">{t.id}</td>
                  <td>{t.summary}</td>
                  <td><span className={`v4-priority ${t.priority.toLowerCase()}`}>{t.priority}</span></td>
                  <td><span className={`v4-status-tag ${t.status.toLowerCase().replace(" ", "-")}`}>{t.status}</span></td>
                  <td>{t.region}</td>
                  <td className="v4-sla-cell">{t.sla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Regional Status */}
      <section className="v4-dash-section">
        <h2 className="v4-section-title">Regional Status</h2>
        <div className="v4-region-grid">
          {dashboard.regions.map((r) => (
            <div key={r.name} className={`v4-region-card ${r.status.toLowerCase()}`}>
              <div className="v4-region-header">
                <span className="v4-region-name">{r.name}</span>
                <span className={`v4-region-status ${r.status.toLowerCase()}`}>{r.status}</span>
              </div>
              <div className="v4-region-stats">
                <div><span className="v4-region-stat-label">Open:</span> {r.open}</div>
                <div><span className="v4-region-stat-label">SLA:</span> {r.sla}</div>
                <div><span className="v4-region-stat-label">Queue:</span> {r.queue}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
