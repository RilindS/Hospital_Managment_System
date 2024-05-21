import React from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorList from '../components/Doctor/DoctorList';

const DoctorPage = () => {
  const navigate = useNavigate();

  const handleAddPatientClick = () => {
    navigate('/add-doctor');
  };

  return (
    <div>
      <h1>Doctor Management</h1>
      <button onClick={handleAddPatientClick}>Add Doctor</button>
      <DoctorList />
    </div>
  );
};

export default DoctorPage;
