import React from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <div className="search-bar">
        <input type="text" placeholder="Search for..." />
        <button>🔍</button>
      </div>
      <h1>Dashboard</h1>
      <div className="cards">
        <div className="card">
          <p>EARNINGS (MONTHLY)</p>
          <h2>$40,000</h2>
        </div>
        <div className="card">
          <p>EARNINGS (ANNUAL)</p>
          <h2>$215,000</h2>
        </div>
        <div className="card">
          <p>TASKS</p>
          <h2>50%</h2>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
        <div className="card">
          <p>PENDING REQUESTS</p>
          <h2>18</h2>
        </div>
      </div>
      <div className="charts">
        <div className="chart earnings-overview">
          <h3>Earnings Overview</h3>
          <img src="line-chart.png" alt="Earnings Overview" />
        </div>
        <div className="chart revenue-sources">
          <h3>Revenue Sources</h3>
          <img src="pie-chart.png" alt="Revenue Sources" />
        </div>
      </div>
      
      <div className="colors">
        <div className="color primary">Primary<br />#4e73df</div>
        <div className="color success">Success<br />#1cc88a</div>
        <div className="color info">Info<br />#36b9cc</div>
        <div className="color warning">Warning<br />#f6c23e</div>
        <div className="color danger">Danger<br />#e74a3b</div>
        <div className="color secondary">Secondary<br />#858796</div>
        <div className="color light">Light<br />#f8f9fc</div>
        <div className="color dark">Dark<br />#5a5c69</div>
      </div>
    </div>
  );
};

export default DashboardPage;
