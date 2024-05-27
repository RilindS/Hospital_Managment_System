import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/admin/patient" className="sidebar-link">
        <i className="fas fa-user-injured"></i>
        <span className="link-text">Patient</span>
      </Link>
      <Link to="/admin/doctor" className="sidebar-link">
        <i className="fas fa-user-md"></i>
        <span className="link-text">Doctor</span>
      </Link>
      <Link to="/admin/department" className="sidebar-link">
        <i className="fas fa-building"></i>
        <span className="link-text">Department</span>
      </Link>
      <Link to="/admin/nurse" className="sidebar-link">
        <i className="fas fa-user-nurse"></i>
        <span className="link-text">Nurse</span>
      </Link>
      <Link to="/admin/room" className="sidebar-link">
        <i className="fas fa-procedures"></i>
        <span className="link-text">Room</span>
      </Link>
     
      <Link to="/admin/register" className="sidebar-link">
        <i className="fas fa-user-plus"></i>
        <span className="link-text">Regjistro Perdorues</span>
      </Link>
    </div>
  );
};

export default AdminSidebar;
