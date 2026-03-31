import { siteData } from '../../data/siteContent';

export default function V2Dashboard() {
  const { incidents, slaCompliance, ticketQueue, avgMTTR, tickets } = siteData.dashboard;

  return (
    <div className="v2-page-section">
      <h2 className="v2-section-title">Operations Dashboard</h2>

      {/* Key Metrics */}
      <div className="v2-grid" style={{ marginBottom: '40px' }}>
        <div className="v2-stat-box">
          <div className="v2-stat-value">{incidents.open}</div>
          <div className="v2-stat-label">Open Incidents</div>
          <div style={{ fontSize: '12px', color: '#3b82f6', marginTop: '4px', fontWeight: 500 }}>
            {incidents.critical} critical
          </div>
        </div>
        <div className="v2-stat-box">
          <div className="v2-stat-value">{slaCompliance.current}</div>
          <div className="v2-stat-label">SLA Compliance</div>
          <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px', fontWeight: 500 }}>
            {slaCompliance.trend}
          </div>
        </div>
        <div className="v2-stat-box">
          <div className="v2-stat-value">{ticketQueue.total}</div>
          <div className="v2-stat-label">Ticket Queue</div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px', fontWeight: 500 }}>
            {ticketQueue.backlog} backlog
          </div>
        </div>
        <div className="v2-stat-box">
          <div className="v2-stat-value">{avgMTTR.hours}</div>
          <div className="v2-stat-label">Average MTTR</div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px', fontWeight: 500 }}>
            {avgMTTR.note}
          </div>
        </div>
      </div>

      {/* Ticket Queue */}
      <div>
        <h3 style={{ fontSize: '16px', color: '#1a1a2e', marginBottom: '12px', fontWeight: 700 }}>
          Active Tickets
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="v2-table">
            <thead>
              <tr>
                <th>Ticket</th>
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
                  <td style={{ fontWeight: 600, color: '#1a1a2e' }}>{ticket.id}</td>
                  <td>{ticket.summary}</td>
                  <td>
                    <span style={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 600,
                      background: ticket.priority === 'critical' ? '#fecaca' : ticket.priority === 'high' ? '#fed7aa' : '#dbeafe',
                      color: ticket.priority === 'critical' ? '#7f1d1d' : ticket.priority === 'high' ? '#92400e' : '#1e40af',
                    }}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td>
                    <span style={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 600,
                      background: ticket.status === 'resolved' ? '#d1fae5' : ticket.status === 'in progress' ? '#e0e7ff' : '#f3f4f6',
                      color: ticket.status === 'resolved' ? '#065f46' : ticket.status === 'in progress' ? '#312e81' : '#4b5563',
                    }}>
                      {ticket.status}
                    </span>
                  </td>
                  <td>{ticket.region}</td>
                  <td style={{ color: ticket.sla === 'Done' ? '#10b981' : '#f59e0b' }}>
                    {ticket.sla}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
