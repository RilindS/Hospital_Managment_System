import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import AuthContext from '../../context/AuthContext';


const PatientSidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <Link to="/patient/appointments" className="sidebar-link">
        <i className="fas fa-calendar-check"></i>
        <span className="link-text">Appointments</span>
      </Link>
      <Link to="/patient/medical-history" className="sidebar-link">
        <i className="fas fa-notes-medical"></i>
        <span className="link-text">Medical History</span>
      </Link>
      
      {/* Add more links specific to the patient role */}
    </div>
  );
};

export default PatientSidebar;
