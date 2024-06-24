import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Sidebar.css';

const AdminSidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <Link to="/admin" className="sidebar-link">
        <i className="fas fa-home"></i>
        <span className="link-text">Faqja Kryesore</span>
      </Link>
      <Link to="/admin/patient" className="sidebar-link">
        <i className="fas fa-user-injured"></i>
        <span className="link-text">Pacientët</span>
      </Link>
      <Link to="/admin/doctor" className="sidebar-link">
        <i className="fas fa-user-md"></i>
        <span className="link-text">Doktorët</span>
      </Link>
      <Link to="/admin/department" className="sidebar-link">
        <i className="fas fa-building"></i>
        <span className="link-text">Departamentet</span>
      </Link>
      <Link to="/admin/nurse" className="sidebar-link">
        <i className="fas fa-user-nurse"></i>
        <span className="link-text">Infermierët</span>
      </Link>
      <Link to="/admin/room" className="sidebar-link">
        <i className="fas fa-procedures"></i>
        <span className="link-text">Dhomat</span>
      </Link>
  
      <Link to="/admin/appointments" className="sidebar-link">
        <i className="fas fa-calendar-check"></i>
        <span className="link-text">Rezervimet Online</span>
      </Link>
      <Link to="/admin/city" className="sidebar-link">
        <i className="fas fa-city"></i>
        <span className="link-text">Qytetet</span>
      </Link>
      <Link to="/admin/vacation" className="sidebar-link">
        <i className="fas fa-umbrella-beach"></i>
        <span className="link-text">Pushimet</span>
      </Link>
      {/* <Link to="/admin/appointmentsByDate" className="sidebar-link">
        <i className="fas fa-calendar-day"></i>
        <span className="link-text">Filtro Pacientët sipas Datës</span>
      </Link>
      <Link to="/admin/city-filter" className="sidebar-link">
        <i className="fas fa-city"></i>
        <span className="link-text">Filtro Pacientët sipas Qytetit</span>
      </Link>
      <Link to="/admin/name-filter" className="sidebar-link">
        <i className="fas fa-user"></i>
        <span className="link-text">Filtro Pacientët sipas Emrit</span>
      </Link>
      <Link to="/admin/room-filter" className="sidebar-link">
        <i className="fas fa-procedures"></i>
        <span className="link-text">Filtro Pacientët sipas Dhomës</span>
      </Link> */}
      <Link to="/admin/inventory" className="sidebar-link">
        <i className="fas fa-boxes"></i>
        <span className="link-text">Inventari</span>
      </Link> 
         <Link to="/admin/register" className="sidebar-link">
        <i className="fas fa-user-plus"></i>
        <span className="link-text">Regjistro Përdorues</span>
      </Link>
      <button onClick={logout} className="sidebar-link">
        <i className="fas fa-sign-out-alt"></i>
        <span className="link-text">Logout</span>
      </button>
    </div>
  );
};

export default AdminSidebar;
