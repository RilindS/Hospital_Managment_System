import React from 'react';
import { useNavigate } from 'react-router-dom';
import NurseList from '../components/Nurse/NurseList';

const NursePage = () => {
  const navigate = useNavigate();

  const handleAddPatientClick = () => {
    navigate('/add-nurse');
  };

  return (
    <div>
      <h1>Nurse Management</h1>
      <button onClick={handleAddPatientClick}>Add Nurse</button>
      <NurseList />
    </div>
  );
};

export default NursePage;
