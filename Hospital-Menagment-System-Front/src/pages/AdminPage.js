import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Link, useNavigate } from 'react-router-dom';
import '../Allcss/AdminPage.css';
import { useAuth } from '../context/AuthContext';
import './DashboardPage.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Total Patients',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
    },
    {
      label: 'Total Doctors',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      backgroundColor: 'rgba(153,102,255,0.4)',
      borderColor: 'rgba(153,102,255,1)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

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
    <div className="admin-page">
      <header className="header">
        <div className="icons">
          <i className="fa fa-bell"></i>
          <i className="fa fa-envelope"></i>
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
        <div className="welcome-message">
          <h2>Welcome to the System: {user ? user.name : 'Not logged in'}</h2>
          <h2>You are logged in with: {user ? user.email : 'Not logged in'}</h2>
          <h2>Your role in the system is: {user ? user.role : 'Not logged in'}</h2>
        </div>
        <div className="cards">
          <div className="card" onClick={() => handleCardClick('/admin/patient')}>
            <p>Patients (Total)</p>
            <h4>{totalPatients}</h4>
          </div>
          <div className="card" onClick={() => handleCardClick('/admin/doctor')}>
            <p>Doctors (Total)</p>
            <h4>{totalDoctors}</h4>
          </div>
          <div className="card" onClick={() => handleCardClick('/admin/department')}>
            <p>Departments (Total)</p>
            <h4>{totalDepartments}</h4>
          </div>
          <div className="card" onClick={() => handleCardClick('/admin/nurse')}>
            <p>Nurses (Total)</p>
            <h4>{totalNurses}</h4>
          </div>
        </div>
        <div className="filters">
          <Link to="/admin/appointmentsByDate" className="filter-link">
            <i className="fas fa-calendar-day"></i>
            <span className="link-text">Filter Patients by Date</span>
          </Link>
          <Link to="/admin/city-filter" className="filter-link">
            <i className="fas fa-city"></i>
            <span className="link-text">Filter Patients by City</span>
          </Link>
          <Link to="/admin/name-filter" className="filter-link">
            <i className="fas fa-user"></i>
            <span className="link-text">Filter Patients by Name</span>
          </Link>
          <Link to="/admin/room-filter" className="filter-link">
            <i className="fas fa-procedures"></i>
            <span className="link-text">Filter Patients by Room</span>
          </Link>
        </div>
        <section className="statistics">
          <h3>Statistics</h3>
          <div className="charts">
            <div className="chart">
              <h4>Patient and Doctor Statistics</h4>
              <Line data={data} options={options} />
            </div>
            <div className="chart">
              <h4>Monthly Appointments</h4>
              <Bar data={data} options={options} />
            </div>
          </div>
        </section>
       
      </main>
    </div>
  );
};

export default AdminPage;
