import React from 'react';
import { useNavigate } from 'react-router-dom';
import NurseList from '../components/Nurse/NurseList';

const NursePage = () => {
  const navigate = useNavigate();

  const handleAddNurseClick = () => {
    navigate('/admin/nurse/add');
  };

  return (
    <div>
      <h1>Nurse Management</h1>
      <button onClick={handleAddNurseClick}>Add Nurse</button>
      <NurseList />
    </div>
  );
};

export default NursePage;
