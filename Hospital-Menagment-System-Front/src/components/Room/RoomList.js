import React, { useEffect, useState } from 'react';
import { getAllRooms, deleteRoomById } from '../../services/RoomService';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const data = await getAllRooms();
      setRooms(data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRoomById(id);
      fetchRooms(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting room:', error);
    }
  };

  return (
    <div>
      <h1>Room List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Description</th>
            
            <th>Department Name</th>
            <th>Floor</th>
            <th>Number of Beds</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.roomId}>
              
              <td>{room.roomName}</td>
              <td>{room.description}</td>
              <td>{room.departamentName}</td>
              <td>{room.floor}</td>
              <td>{room.nrOfBeds}</td>
              <td>
                <Link to={`/admin/room/edit/${room.roomId}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(room.roomId)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RoomList;