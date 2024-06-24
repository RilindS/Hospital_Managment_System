import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Sidebar.css';

const PatientSidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <Link to="/patient" className="sidebar-link">
        <i className="fas fa-home"></i>
        <span className="link-text">Faqja Kryesore</span>
      </Link>
      <Link to="/patient/appointments" className="sidebar-link">
        <i className="fas fa-calendar-check"></i>
        <span className="link-text">Rezervimet</span>
      </Link>
      <Link to="/patient/medical-history" className="sidebar-link">
        <i className="fas fa-file-medical-alt"></i>
        <span className="link-text">Historia Mjekësore</span>
      </Link>
      <Link to="/patient/doctor" className="sidebar-link">
        <i className="fas fa-user-md"></i>
        <span className="link-text">Shiko Doktorët</span>
      </Link>
      <button onClick={logout} className="sidebar-link">
        <i className="fas fa-sign-out-alt"></i>
        <span className="link-text">Logout</span>
      </button>
      {/* Add more links specific to the patient role */}
    </div>
  );
};

export default PatientSidebar;
