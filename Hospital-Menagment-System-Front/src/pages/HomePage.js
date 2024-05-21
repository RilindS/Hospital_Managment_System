import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Hospital Management System</h1>
      <Link to="/patient">Go to Patient Management</Link>
      <Link to="/doctor">Go to Doctor Management</Link>

    </div>
  );
};

export default HomePage;  // Ensure default export
