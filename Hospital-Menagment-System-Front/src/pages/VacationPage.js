import React from 'react';
import { useNavigate } from 'react-router-dom';
import VacationList from '../components/Vacation/VacationList';

const VacationPage = () => {
  const navigate = useNavigate();

  const handleAddNurseClick = () => {
    navigate('/admin/vacation/add');
  };

  return (
    <div>
      <button onClick={handleAddNurseClick}>Add Vacation</button>
      <VacationList />
    </div>
  );
};

export default VacationPage;
