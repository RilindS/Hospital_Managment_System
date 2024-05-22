import React from 'react';
import { useNavigate } from 'react-router-dom';
import DepartmentList from '../components/Department/DepartmentList';

const DepartmentPage = () => {
  const navigate = useNavigate();

  const handleAddDepartmentClick = () => {
    navigate('/add-department');
  };

  return (
    <div>
      <h1>department Management</h1>
      <button onClick={handleAddDepartmentClick}>Add department</button>
      <DepartmentList />
    </div>
  );
};

export default DepartmentPage;
