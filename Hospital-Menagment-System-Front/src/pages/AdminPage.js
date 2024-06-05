import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import '../Allcss/AdminPage.css'; // Import CSS nga dosja Allcss
import { useAuth } from '../context/AuthContext';

const AdminPage = () => {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <header className="header">
        <div className="icons">
          <div>
            <i className="fa fa-bell"></i>
            <span>3+</span>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <span>7</span>
          </div>
        </div>
        <div className="profile" onClick={toggleDropdown}>
          <i className="fa fa-user-circle fa-2x"></i>
          <div className="profile-details">
            <span>{user ? user.name : 'Not logged in'}</span>
            <span>{user ? user.email : ''}</span>
          </div>
          {dropdownOpen && (
            <div className="dropdown">
              <Link to="Settings">Settings</Link>
              <Link to="profile">Profile</Link>
            </div>
          )}
        </div>
      </header>
      <main>
        <h1>Welcome to the Admin Home Page</h1>
        <p>Email: {user ? user.email : 'Not logged in'}</p>
        <p>Role: {user ? user.role : 'Not logged in'}</p>
        {/* Add more patient-related content here */}
      </main>
    </div>
  );
};

export default AdminPage;
