import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoomList from '../components/Room/RoomList';

const RoomPage = () => {
  const navigate = useNavigate();

  const handleAddPatientClick = () => {
    navigate('/add-room');
  };

  return (
    <div>
      <h1>Room Management</h1>
      <button onClick={handleAddPatientClick}>Add Room</button>
      <RoomList />
    </div>
  );
};

export default RoomPage;
