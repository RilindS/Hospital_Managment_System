import React from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryListA from '../components/Inventory/InventoryListA';

const InventoryPageA = () => {
  const navigate = useNavigate();

  const handleAddNurseClick = () => {
    navigate('/admin/inventory/add');
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <button onClick={handleAddNurseClick}>Add Inventory</button>
      <InventoryListA />
    </div>
  );
};

export default InventoryPageA;
