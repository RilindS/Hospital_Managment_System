import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
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

  return (
    <div className="dashboard">
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
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
      </div>
      <div className="colors">
        <div className="color primary">Primary<br />#4e73df</div>
        <div className="color success">Success<br />#1cc88a</div>
        <div className="color info">Info<br />#36b9cc</div>
        <div className="color warning">Warning<br />#f6c23e</div>
        <div className="color danger">Danger<br />#e74a3b</div>
        <div className="color secondary">Secondary<br />#858796</div>
      </div>
    </div>
  );
};

export default DashboardPage;
