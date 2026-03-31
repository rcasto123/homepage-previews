import { siteData } from '../../data/siteContent';

export default function V1Dashboard() {
  const { incidents, slaCompliance, ticketQueue, avgMTTR, tickets } = siteData.dashboard;

  return (
    <div className="v1-page-section">
      <h2 className="v1-section-title">IT OPS DASHBOARD</h2>

      {/* Key Metrics */}
      <div className="v1-grid" style={{ marginBottom: '32px' }}>
        <div className="v1-stat-box">
          <div className="v1-stat-value">{incidents.open}</div>
          <div className="v1-stat-label">OPEN INCIDENTS</div>
          <div style={{ fontSize: '11px', color: '#ff3d6e', marginTop: '4px' }}>
            {incidents.critical} CRITICAL
          </div>
        </div>
        <div className="v1-stat-box">
          <div className="v1-stat-value">{slaCompliance.current}</div>
          <div className="v1-stat-label">SLA COMPLIANCE</div>
          <div style={{ fontSize: '11px', color: '#00c853', marginTop: '4px' }}>
            {slaCompliance.trend}
          </div>
        </div>
        <div className="v1-stat-box">
          <div className="v1-stat-value">{ticketQueue.total}</div>
          <div className="v1-stat-label">TICKET QUEUE</div>
          <div style={{ fontSize: '11px', color: '#8090a8', marginTop: '4px' }}>
            {ticketQueue.backlog} BACKLOG
          </div>
        </div>
        <div className="v1-stat-box">
          <div className="v1-stat-value">{avgMTTR.hours}</div>
          <div className="v1-stat-label">AVG MTTR</div>
          <div style={{ fontSize: '11px', color: '#8090a8', marginTop: '4px' }}>
            {avgMTTR.note}
          </div>
        </div>
      </div>

      {/* Ticket Queue */}
      <div>
        <h3 style={{ fontSize: '16px', color: '#00e5ff', marginBottom: '12px', fontWeight: 700 }}>
          ACTIVE TICKETS
        </h3>
        <table className="v1-table">
          <thead>
            <tr>
              <th>TICKET</th>
              <th>SUMMARY</th>
              <th>PRIORITY</th>
              <th>STATUS</th>
              <th>REGION</th>
              <th>SLA</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.summary}</td>
                <td style={{ color: ticket.priority === 'critical' ? '#ff3d6e' : ticket.priority === 'high' ? '#ffd600' : '#8090a8' }}>
                  {ticket.priority.toUpperCase()}
                </td>
                <td style={{ color: ticket.status === 'in progress' ? '#00e5ff' : ticket.status === 'resolved' ? '#00c853' : '#8090a8' }}>
                  {ticket.status.toUpperCase()}
                </td>
                <td>{ticket.region}</td>
                <td style={{ color: ticket.sla === 'Done' ? '#00c853' : '#ffd600' }}>
                  {ticket.sla}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
