import React from 'react';
import { useNavigate } from 'react-router-dom';
import DepartmentList from '../components/Department/DepartmentList';

const DepartmentPage = () => {
  const navigate = useNavigate();

  const handleAddDepartmentClick = () => {
    navigate('/admin/department/add');
  };

  return (
    <div>
      <h1>Department Management</h1>
      <button onClick={handleAddDepartmentClick}>Add Department</button>
      <DepartmentList />
    </div>
  );
};

export default DepartmentPage;
