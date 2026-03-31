import { siteData } from '../../data/siteContent';

export default function V4Dashboard() {
  const { incidents, slaCompliance, ticketQueue, avgMTTR, tickets } = siteData.dashboard;

  return (
    <div className="v4-page-section">
      <h2 className="v4-section-title">Operations</h2>

      <div className="v4-grid" style={{ marginBottom: '40px' }}>
        <div className="v4-stat-box">
          <div className="v4-stat-value">{incidents.open}</div>
          <div className="v4-stat-label">Open Incidents</div>
        </div>
        <div className="v4-stat-box">
          <div className="v4-stat-value">{slaCompliance.current}</div>
          <div className="v4-stat-label">SLA Compliance</div>
        </div>
        <div className="v4-stat-box">
          <div className="v4-stat-value">{ticketQueue.total}</div>
          <div className="v4-stat-label">Ticket Queue</div>
        </div>
        <div className="v4-stat-box">
          <div className="v4-stat-value">{avgMTTR.hours}</div>
          <div className="v4-stat-label">Avg MTTR</div>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '16px', color: '#f5efe0', marginBottom: '12px', fontWeight: 700, textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
          Active Tickets
        </h3>
        <div style={{ overflowX: 'auto' }}>
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
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td style={{ fontWeight: 600, color: '#f5efe0' }}>{ticket.id}</td>
                  <td>{ticket.summary}</td>
                  <td>{ticket.priority}</td>
                  <td>{ticket.status}</td>
                  <td>{ticket.region}</td>
                  <td>{ticket.sla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
