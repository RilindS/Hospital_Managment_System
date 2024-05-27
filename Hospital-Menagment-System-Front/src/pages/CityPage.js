import React from 'react';
import { useNavigate } from 'react-router-dom';
import CityList from '../components/City/CityList';

const CityPage = () => {
  const navigate = useNavigate();

  const handleAddCityClick = () => {
    navigate('/admin/city/add');
  };

  return (
    <div>
      <h1>City Management</h1>
      <button onClick={handleAddCityClick}>Add City</button>
      <CityList />
    </div>
  );
};

export default CityPage;
