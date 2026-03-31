import { siteData } from "../../data/siteContent";

export default function V2Dashboard() {
  const { dashboard } = siteData;

  return (
    <div className="v2-dashboard-page">
      <div className="v2-page-header">
        <h1 className="v2-page-title">{dashboard.title}</h1>
        <p className="v2-page-desc">{dashboard.subtitle}</p>
      </div>

      <div className="v2-d-metrics">
        {dashboard.metrics.map((m, i) => (
          <div key={i} className="v2-d-metric">
            <span className="v2-d-metric-label">{m.label}</span>
            <span className="v2-d-metric-value">{m.value}</span>
            <span className="v2-d-metric-sub">{m.sub}</span>
          </div>
        ))}
      </div>

      <section className="v2-d-section">
        <h2 className="v2-d-heading">Active Tickets</h2>
        <div className="v2-d-table-wrap">
          <table className="v2-d-table">
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
                  <td className="v2-d-id">{t.id}</td>
                  <td>{t.summary}</td>
                  <td><span className={`v2-d-priority ${t.priority.toLowerCase()}`}>{t.priority}</span></td>
                  <td><span className={`v2-d-status ${t.status.toLowerCase().replace(" ", "-")}`}>{t.status}</span></td>
                  <td>{t.region}</td>
                  <td>{t.sla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="v2-d-section">
        <h2 className="v2-d-heading">Regional Health</h2>
        <div className="v2-d-regions">
          {dashboard.regions.map((r) => (
            <div key={r.name} className="v2-d-region">
              <div className="v2-d-region-top">
                <span className="v2-d-region-name">{r.name}</span>
                <span className={`v2-d-region-badge ${r.status.toLowerCase()}`}>{r.status}</span>
              </div>
              <div className="v2-d-region-stats">
                <span>Open: {r.open}</span>
                <span>SLA: {r.sla}</span>
                <span>Queue: {r.queue}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
