import { useState, useEffect } from 'react';
import './design2.css'; 

const Design2 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('nsdl');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    if (activeTab === 'nsdl') {
      return (
        <div className="tab-content">
          <h3>Level 1: Customer Support</h3>
          <p>Phone: <strong>(Contact Number)</strong></p>
          <p>App Support: <strong>Reach out via the in-app chat feature</strong></p>
          <p>Email (Make sure to mention your ticket number in the subject line): <strong>(Support Email)</strong></p>
          <p>Post: <strong>(Office Address)</strong></p>
          <p>We aim to resolve your concern within 5 business days.</p>
        </div>
      );
    } else if (activeTab === 'credit') {
      return (
        <div className="tab-content">
          <h3>Level 2: Escalation Team</h3>
          <p>If your issue wasn't resolved at Level 1, your case will be automatically escalated to our dedicated resolution team.</p>
          <p>Response Time: <strong>Within 48 hours</strong></p>
          <p>This team handles more complex issues and has additional authorization capabilities to resolve your concerns.</p>
        </div>
      );
    } else if (activeTab === 'loans') {
      return (
        <div className="tab-content">
          <h3>Level 3: Management Review</h3>
          <p>For unresolved or highly critical issues, your case will be escalated to management review.</p>
          <p>A senior manager will personally review your case and contact you directly within 24 hours.</p>
          <p>Our commitment is to provide you with a fair and timely resolution to all concerns.</p>
        </div>
      );
    } else {
      return null;
    }
  };
  

  return (
    <div className="app-container">
      <header>
        <h1>How can I register a complaint?</h1>
        <p>We handle complaints related to:</p>
      </header>

      {loading && <div className="loading">Loading user data...</div>}
      {error && <div className="error">Error: {error}</div>}

      {!loading && !error && (
        <>
          <div className="user-cards-container">
            {users.map((user) => (
              <div className="user-card" key={user.id}>
                <div className="card-icon">👤</div>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Company: {user.company.name}</p>
              </div>
            ))}
          </div>

          <div className="complaint-info">
            <p>Note: Complaints must follow the escalation levels in order and cannot skip directly from Level 1 to Level 3.</p>
            <div className="quote">
              "Each complaint is assigned a 5-level severity system to ensure a proper resolution."
            </div>
          </div>

          <div className="account-section">
            <h2>Your NSDL Payments Bank account</h2>
            <p>This includes savings, corporate, and salary accounts.</p>
            
            <div className="account-buttons">
              <button 
                className={activeTab === 'nsdl' ? 'account-button active' : 'account-button'}
                onClick={() => handleTabChange('nsdl')}
              >
                NSDL Payments Bank Account
              </button>
              <button 
                className={activeTab === 'credit' ? 'account-button active' : 'account-button'}
                onClick={() => handleTabChange('credit')}
              >
                Credit Cards
              </button>
              <button 
                className={activeTab === 'loans' ? 'account-button active' : 'account-button'}
                onClick={() => handleTabChange('loans')}
              >
                Loans
              </button>
            </div>
          </div>

          <div className="tabs-container">
            {renderTabContent()}
          </div>
        </>
      )}
    </div>
  );
};

export default Design2;