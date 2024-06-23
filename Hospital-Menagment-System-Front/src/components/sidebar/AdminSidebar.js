import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Sidebar.css';

const AdminSidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <Link to="/admin/DashboardPage" className="sidebar-link">
        <i className="fas fa-search"></i>
        <span className="link-text">DashboardPage</span>
      </Link>
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
      <Link to="/admin/appointments" className="sidebar-link">
        <i className="fas fa-calendar-check"></i>
        <span className="link-text">Rezervimet Online</span>
      </Link>
      <Link to="/admin/city" className="sidebar-link">
        <i className="fas fa-calendar-check"></i>
        <span className="link-text">City</span>
      </Link>
      <Link to="/admin/appointmentsByDate" className="sidebar-link">
        <i className="fas fa-search"></i>
        <span className="link-text">Filter Patinet by Date</span>
      </Link>
      <Link to="/admin/city-filter" className="sidebar-link">
        <i className="fas fa-search"></i>
        <span className="link-text">Filter Patinet by City</span>
      </Link>
      <Link to="/admin/name-filter" className="sidebar-link">
        <i className="fas fa-search"></i>
        <span className="link-text">Filter Patinet by Name</span>
      </Link>
      <Link to="/admin/room-filter" className="sidebar-link">
        <i className="fas fa-search"></i>
        <span className="link-text">Filter Patinet by Room</span>
      </Link>

      <Link to="/admin/inventory" className="sidebar-link">
        <i className="fas fa-search"></i>
        <span className="link-text">Inventory</span>
      </Link>
      
      <button onClick={logout} className="sidebar-link">
        <i className="fas fa-sign-out-alt"></i>
        <span className="link-text">Logout</span>
      </button>
    </div>
  );
};

export default AdminSidebar;