import React from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorForPatinents from '../components/Doctor/DoctorForPatinents';

const DoctorPage = () => {
  const navigate = useNavigate();

  const handleAddDoctorClick = () => {
    navigate('/admin/doctor/add');
  };

  return (
    <div>
      <h1>Doctor Management</h1>
        <button onClick={handleAddDoctorClick}>Add Doctor</button>
      <DoctorForPatinents />
    </div>
  );
};

export default DoctorPage;
