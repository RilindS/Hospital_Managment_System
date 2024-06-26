import React from 'react';
import { useNavigate } from 'react-router-dom';
import VacationList from '../components/Vacation/VacationList';

const VacationPage = () => {
  const navigate = useNavigate();

  const handleAddVacationClick = () => {
    navigate('/admin/vacation/add');
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
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={handleAddVacationClick}
      >
        Add Vacation
      </button>
      <VacationList />
    </div>
  );
};

export default VacationPage;
