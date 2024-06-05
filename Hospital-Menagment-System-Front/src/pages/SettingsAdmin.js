import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../Allcss/AdminProfile.css'; // Import CSS nga dosja Allcss

const AdminSettings = () => {
  const { user, updateUser } = useAuth(); // Assuming updateUser is a function in AuthContext for updating user data
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    role: user ? user.role : ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Update user data
    updateUser(formData);
    setEditMode(false);
  };

  return (
    <div className="profile-container">
      <h1>Admin Settings</h1>
      {editMode ? (
        <div className="edit-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input type="text" name="role" value={formData.role} onChange={handleInputChange} />
          </div>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div className="profile-details">
          <p><strong>Name:</strong> {user ? user.name : 'Not logged in'}</p>
          <p><strong>Email:</strong> {user ? user.email : 'Not logged in'}</p>
          <p><strong>Role:</strong> {user ? user.role : 'Not logged in'}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default AdminSettings;
