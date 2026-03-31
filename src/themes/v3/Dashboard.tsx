import { siteData } from "../../data/siteContent";

export default function V3Dashboard() {
  const { dashboard } = siteData;

  return (
    <div className="v3-dashboard-page">
      <div className="v3-page-header">
        <h1 className="v3-page-title">{dashboard.title}</h1>
        <p className="v3-page-desc">{dashboard.subtitle}</p>
      </div>

      <div className="v3-d-metrics">
        {dashboard.metrics.map((m, i) => (
          <div key={i} className="v3-d-metric-card">
            <div className="v3-d-metric-label">{m.label}</div>
            <div className="v3-d-metric-value">{m.value}</div>
            <div className="v3-d-metric-sub">{m.sub}</div>
          </div>
        ))}
      </div>

      <section className="v3-d-section">
        <h2 className="v3-d-heading">Active Tickets</h2>
        <div className="v3-d-table-wrap">
          <table className="v3-d-table">
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
                  <td className="v3-d-id">{t.id}</td>
                  <td>{t.summary}</td>
                  <td><span className={`v3-d-priority ${t.priority.toLowerCase()}`}>{t.priority}</span></td>
                  <td><span className={`v3-d-status ${t.status.toLowerCase().replace(" ", "-")}`}>{t.status}</span></td>
                  <td>{t.region}</td>
                  <td>{t.sla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="v3-d-section">
        <h2 className="v3-d-heading">Regional Health</h2>
        <div className="v3-d-regions">
          {dashboard.regions.map((r) => (
            <div key={r.name} className="v3-d-region-card">
              <div className="v3-d-region-header">
                <span className="v3-d-region-name">{r.name}</span>
                <span className={`v3-d-region-badge ${r.status.toLowerCase()}`}>{r.status}</span>
              </div>
              <div className="v3-d-region-stats">
                <div className="v3-d-region-stat">
                  <span className="v3-d-stat-label">Open</span>
                  <span className="v3-d-stat-value">{r.open}</span>
                </div>
                <div className="v3-d-region-stat">
                  <span className="v3-d-stat-label">SLA</span>
                  <span className="v3-d-stat-value">{r.sla}</span>
                </div>
                <div className="v3-d-region-stat">
                  <span className="v3-d-stat-label">Queue</span>
                  <span className="v3-d-stat-value">{r.queue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
