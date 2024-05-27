import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoomList from '../components/Room/RoomList';

const RoomPage = () => {
  const navigate = useNavigate();

  const handleAddRoomClick = () => {
    navigate('/admin/room/add');
  };

  return (
    <div>
      <h1>Room Management</h1>
      <button onClick={handleAddRoomClick}>Add Room</button>
      <RoomList />
    </div>
  );
};

export default RoomPage;
