import React from 'react';
import '../Allcss/AdminProfile.css'; // Import CSS nga dosja Allcss
import { useAuth } from '../context/AuthContext';

const AdminProfile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <h1>Admin Profile</h1>
      <div className="profile-details">
       <p><strong>Name:</strong> {user ? user.name : 'Not logged in'}</p> 
        <p><strong>Email:</strong> {user ? user.email : 'Not logged in'}</p>
        <p><strong>Role:</strong> {user ? user.role : 'Not logged in'}</p>
        {/* Add more admin-related details here */}
      </div>
    </div>
  );
};

export default AdminProfile;
