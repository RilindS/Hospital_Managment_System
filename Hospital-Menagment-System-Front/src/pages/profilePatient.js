import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../Allcss/AdminProfile.css'; // Import CSS nga dosja Allcss

const PatientProfile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <h1>Patinet Profile</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {user ? user.name : 'Not logged in'}</p>
        <p><strong>Email:</strong> {user ? user.email : 'Not logged in'}</p>
        <p><strong>Role:</strong> {user ? user.role : 'Not logged in'}</p>
        {/* Add more admin-related details here */}
      </div>
    </div>
  );
};

export default PatientProfile;