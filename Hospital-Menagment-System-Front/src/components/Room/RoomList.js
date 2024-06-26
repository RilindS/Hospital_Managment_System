import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteRoomById, getAllRooms } from '../../services/RoomService';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [patients, setPatients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');

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

  const handleDetails = async (roomName) => {
    try {
      const response = await axios.get(`https://localhost:44322/api/Patients/get-patients-by-Room/${roomName}`);
      if (response.data.length === 0) {
        setError('No patients found for the given room.');
        setPatients([]);
      } else {
        setPatients(response.data);
        setError('');
      }
      setSelectedRoom(roomName);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching patients:', error);
      setError('Error fetching patients. Please try again.');
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setPatients([]);
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
                <Button variant="info" size="sm" onClick={() => handleDetails(room.roomName)}>Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Patients in {selectedRoom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {patients.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Date of Birth</th>
                  <th>Street</th>
                  <th>City</th>
                  <th>Date Registered</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr key={index}>
                    <td>{patient.patientId}</td>
                    <td>{patient.name}</td>
                    <td>{patient.surname}</td>
                    <td>{patient.email}</td>
                    <td>{patient.phoneNumber}</td>
                    <td>{patient.dateOfBirth}</td>
                    <td>{patient.street}</td>
                    <td>{patient.qyteti}</td>
                    <td>{patient.dateRegistered}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No patients found for this room.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RoomList;
