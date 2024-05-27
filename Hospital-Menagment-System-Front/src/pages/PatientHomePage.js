import React from 'react';
import { useAuth } from '../context/AuthContext';

const PatientHomePage = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to the Patient Home Page</h1>
      <p>Email: {user ? user.email : 'Not logged in'}</p>
      <p>Role: {user ? user.role : 'Not logged in'}</p>
      {/* Add more patient-related content here */}
    </div>
  );
};

export default PatientHomePage;
