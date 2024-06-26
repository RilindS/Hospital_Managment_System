import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoomList from '../components/Room/RoomList';

const RoomPage = () => {
  const navigate = useNavigate();

  const handleAddRoomClick = () => {
    navigate('/admin/room/add');
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50', 
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <div>
      <h1>Room Management</h1>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={handleAddRoomClick}
      >
        Add Room
      </button>
      <RoomList />
    </div>
  );
};

export default RoomPage;
