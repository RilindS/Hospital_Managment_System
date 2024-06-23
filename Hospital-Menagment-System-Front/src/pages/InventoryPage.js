import React from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryList from '../components/Inventory/InventoryList';

const InventoryPage = () => {
  const navigate = useNavigate();

  const handleAddNurseClick = () => {
    navigate('/doctor/inventory/add');
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <button onClick={handleAddNurseClick}>Add Inventory</button>
      <InventoryList />
    </div>
  );
};

export default InventoryPage;
