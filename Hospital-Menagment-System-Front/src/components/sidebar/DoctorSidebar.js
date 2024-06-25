import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Sidebar.css';

const DoctorSidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <Link to="/doctor" className="sidebar-link">
        <i className="fas fa-home"></i>
        <span className="link-text">Faqja Kryesore</span>
      </Link>
      <Link to="/doctor/patient" className="sidebar-link">
        <i className="fas fa-procedures"></i>
        <span className="link-text">Shiko Pacientet e Gjith Spitalit</span>
      </Link>
      <Link to="/doctor/appointments" className="sidebar-link">
        <i className="fas fa-calendar-check"></i>
        <span className="link-text">Shiko Pacientet e Tu</span>
      </Link>
      <Link to="/doctor/vacation" className="sidebar-link">
        <i className="fas fa-umbrella-beach"></i>
        <span className="link-text">Kërkesë për Pushim</span>
      </Link>
      <Link to="/doctor/inventory" className="sidebar-link">
        <i className="fas fa-boxes"></i>
        <span className="link-text">Kërkesë për Inventar</span>
      </Link>
      {/* <Link to="/doctor/feedback" className="sidebar-link">
        <i className="fas fa-boxes"></i>
        <span className="link-text">FeedBack</span>
      </Link>  */}
      <Link to="/doctor/appointmentsByDate" className="sidebar-link">
        <i className="fas fa-calendar-day"></i>
        <span className="link-text">Filtro Terminet Baz Dates</span>
      </Link>
      <Link to="/doctor/city-filter" className="sidebar-link">
        <i className="fas fa-city"></i>
        <span className="link-text">Filtro sipas Qytetit</span>
      </Link>
      
      <button onClick={logout} className="sidebar-link">
        <i className="fas fa-sign-out-alt"></i>
        <span className="link-text">Logout</span>
      </button>
    </div>
  );
};

export default DoctorSidebar;
