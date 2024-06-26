import React from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryListA from '../components/Inventory/InventoryListA';

const InventoryPageA = () => {
  const navigate = useNavigate();

  const handleAddNurseClick = () => {
    navigate('/admin/inventory/add');
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
      {/* <h1>Inventory Management</h1> */}
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={handleAddNurseClick}
      >
        Shton kerkes per inventory
      </button>
      <InventoryListA />
    </div>
  );
};

export default InventoryPageA;
