import React from 'react';
import { useNavigate } from 'react-router-dom';
import PatientList from '../components/Patient/PatientList';

const PatientPage = () => {
  const navigate = useNavigate();

  const handleAddPatientClick = () => {
    navigate('/admin/patient/add');
  };

  return (
    <div>
      <h1>Patient Management</h1>
      <button onClick={handleAddPatientClick}>Add Patient</button>
      <PatientList />
    </div>
  );
};

export default PatientPage;
