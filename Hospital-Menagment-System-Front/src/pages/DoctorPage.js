import React from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorList from '../components/Doctor/DoctorList';

const DoctorPage = () => {
  const navigate = useNavigate();

  const handleAddDoctorClick = () => {
    navigate('/admin/doctor/add');
  };

  return (
    <div>
      <h1>Doctor Management</h1>
      <button onClick={handleAddDoctorClick}>Add Doctor</button>
      <DoctorList />
    </div>
  );
};

export default DoctorPage;
