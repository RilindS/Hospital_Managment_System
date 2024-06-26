import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import '../Allcss/AdminPage.css'; // Import CSS nga dosja Allcss
import { useAuth } from '../context/AuthContext';

const DoctorHomePage = () => {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="doctor-homepage">
      <header className="header">
        <div className="icons">
          <div>
            <i className="fa fa-bell"></i>
            <span>3+</span>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <span>7</span>
          </div>
          <p>Pershendetje, miresevini!</p>
        </div>
        <div className="profile" onClick={toggleDropdown}>
          <i className="fa fa-user-circle fa-2x"></i>
          <div className="profile-details">
            <span>{user ? user.name : 'Not logged in'}</span>
            {/* <span>{user ? user.email : ''}</span> */}
          </div>
          {dropdownOpen && (
            <div className="dropdown">
              <Link to="Settings">Settings</Link>
              <Link to="profile">Profile</Link>
            </div>
          )}
        </div>
      </header>

      <div className="main-content">
        <h1 className="main-title">HOSPITAL MANAGEMENT SYSTEM</h1>
        <p className="main-subtitle">
        Menaxhimi i perkryer i shendetit tuaj!        </p>
        <div className="image-and-features">
        <div className="image-container">
            <img src="../../../equipment-home.png" alt="Hospital Management System" />
          </div>
          <div className="features">
            <div className="feature">
              <i className="fas fa-laptop-code"></i>
              <h3>Perdorim i lehte</h3>
              <p>
                Faqja jone ofron nje zgjidhje lehte te qasshme dhe te pershtatshme per perdoruesit e faqes tone.
              </p>
            </div>
            <div className="feature">
              <i className="fas fa-cogs"></i>
              <h3>Proceset e permiresuara</h3>
              <p>
                Komunikim i shpejte! I gjithe stafi ka mundesi te kontaktoje online me pacientet qe vizitojne spitalin.
              </p>
            </div>
            <div className="feature">
              <i className="fas fa-file-medical"></i>
              <h3>Dokument mjekesor dixhital</h3>
              <p>
                Nepermjet ketij sistemi pacientet mund te menaxhojne bazen e te dhenave spitalore. Ky sistem ndihmon mjeket ne monitorimin e historise se pacienteve.
              </p>
            </div>
            <div className="feature">
              <i className="fas fa-users"></i>
              <h3>Komunikim me stafin</h3>
              <p>
                Eshte shume me rendesi koordinimi me stafin mjekesor dhe pacientet ne rrethin e punes. Kjo vecori ndihmon gjithke nga stafi te bashkepunojne mes vete.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorHomePage;
