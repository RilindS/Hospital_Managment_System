import React from 'react';
import { useNavigate } from 'react-router-dom';
import DepartmentList from '../components/Department/DepartmentList';

const DepartmentPage = () => {
  const navigate = useNavigate();

  const handleAddDepartmentClick = () => {
    navigate('/admin/department/add');
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007BFF', // Blue
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div>
      <h1>Department Management</h1>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={handleAddDepartmentClick}
      >
        Add Department
      </button>
      <DepartmentList />
    </div>
  );
};

export default DepartmentPage;
