import React from 'react';
import { useNavigate } from 'react-router-dom';
import PatientList from '../components/Patient/PatientList';

const PatientPage = () => {
  const navigate = useNavigate();

  const handleAddPatientClick = () => {
    navigate('/admin/patient/add');
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
      <h1>Patient Management</h1>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={handleAddPatientClick}
      >
        Add Patient
      </button>
      <PatientList />
    </div>
  );
};

export default PatientPage;
