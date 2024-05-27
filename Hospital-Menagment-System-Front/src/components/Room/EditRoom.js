
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoomById, updateRoomById } from '../../services/RoomService';
import {  getAllDepartments } from '../../services/DepartmentService';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    departamentName: '',
    roomName: '',
    description: '',
    floor: 0,
    nrOfBeds: 0,
  });
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const data = await getRoomById(id);
        setRoom(data);
      } catch (error) {
        console.error('Error fetching room:', error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const data = await getAllDepartments();
        setDepartments(data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchRoom();
    fetchDepartments();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateRoomById(id, room);
      navigate('/admin/room'); // Redirect to room list after updating
    } catch (error) {
      console.error('Error updating room:', error);
    }
  };

  return (
    <Container>
      <h2>Edit Room</h2>
      <Form onSubmit={handleSubmit}>
        
        <Form.Group as={Row} className="mb-3" controlId="formRoomName">
          <Form.Label column sm={2}>Room Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="roomName"
              value={room.roomName}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDescription">
          <Form.Label column sm={2}>Description:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="description"
              value={room.description}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDepartment">
          <Form.Label column sm={2}>Department:</Form.Label>
          <Col sm={10}>
            <Form.Select
              name="departamentName"
              value={room.departamentName}
              onChange={handleChange}
              required
            >
              <option key="" value="">
                Select Department
              </option>
              {departments.map((department, index) => (
                <option key={index} value={department}>
                  {department}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formFloor">
          <Form.Label column sm={2}>Floor:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="floor"
              value={room.floor}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formNrOfBeds">
          <Form.Label column sm={2}>Number of Beds:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="nrOfBeds"
              value={room.nrOfBeds}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Update Room</Button>
      </Form>
    </Container>
  );
};

export default EditRoom;
