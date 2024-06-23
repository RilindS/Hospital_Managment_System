import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import '../Allcss/AdminPage.css'; // Import CSS nga dosja Allcss
import { useAuth } from '../context/AuthContext';
import './DashboardPage.css';

const AdminPage = () => {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [totalNurses, setTotalNurses] = useState(0);
  const [totalDepartments, setTotalDepartments] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTotalPatients = async () => {
      try {
        const response = await axios.get('https://localhost:44322/api/Patients/get-total-patients');
        setTotalPatients(response.data);
      } catch (error) {
        console.error('Error fetching total patients:', error);
      }
    };

    fetchTotalPatients();
  }, []);

  useEffect(() => {
    const fetchTotalDoctors = async () => {
      try {
        const response = await axios.get('https://localhost:44322/api/Doctor/get-total-doctors');
        setTotalDoctors(response.data);
      } catch (error) {
        console.error('Error fetching total doctors:', error);
      }
    };

    fetchTotalDoctors();
  }, []);

  useEffect(() => {
    const fetchTotalNurses = async () => {
      try {
        const response = await axios.get('https://localhost:44322/api/Nurse/get-total-nurses');
        setTotalNurses(response.data);
      } catch (error) {
        console.error('Error fetching total nurses:', error);
      }
    };

    fetchTotalNurses();
  }, []);

  useEffect(() => {
    const fetchTotalDepartments = async () => {
      try {
        const response = await axios.get('https://localhost:44322/api/Departments/get-total-departments');
        setTotalDepartments(response.data);
      } catch (error) {
        console.error('Error fetching total departments:', error);
      }
    };

    fetchTotalDepartments();
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
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
        </div>
        <div className="profile" onClick={toggleDropdown}>
          <i className="fa fa-user-circle fa-2x"></i>
          <div className="profile-details">
            <span>{user ? user.name : 'Not logged in'}</span>
            <span>{user ? user.email : ''}</span>
            
          </div>
          {dropdownOpen && (
            <div className="dropdown">
              <Link to="Settings">Settings</Link>
              <Link to="profile">Profile</Link>
            </div>
          )}
        </div>
      </header>
      <main>
        <h1>Welcome to the Admin Home Page</h1>
         <p>Name : {user ? user.name : 'Not logged in'}</p> 
        <p>Email: {user ? user.email : 'Not logged in'}</p>
        <p>Role: {user ? user.role : 'Not logged in'}</p>
        <h1>Dashboard</h1>
      <div className="cards">
        <div className="card" onClick={() => handleCardClick('/admin/patient')}>
          <p>Patient (Total)</p>
          <h2>{totalPatients}</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('/admin/doctor')}>
          <p>Doctor (Total)</p>
          <h2>{totalDoctors}</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('/admin/department')}>
          <p>Department (Total)</p>
          <h2>{totalDepartments}</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('/admin/nurse')}>
          <p>Nurse (Total)</p>
          <h2>{totalNurses}</h2>
          {/* <div className="progress-bar">
            <div className="progress"></div>
          </div> */}
        </div>
      </div>
      </main>
    </div>
  );
};

export default AdminPage;
