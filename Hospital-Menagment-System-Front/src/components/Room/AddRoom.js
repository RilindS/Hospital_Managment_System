import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRoom } from '../../services/RoomService';
import { getAllDepartments } from '../../services/DepartmentService';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddRoom = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    roomName: '',
    description: '',
    departmentId: '',
    DepartamentName: '',

    floor: '',
    nrOfBeds: ''
  });

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await getAllDepartments();
        setDepartments(data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

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
      const response = await addRoom(room);
      console.log('Room added:', response);
      navigate('/admin/room');
    } catch (error) {
      console.error('Error adding room:', error);
    }
  };

  return (
    <Container>
      <h2>Add Room</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formRoomName">
          <Form.Label column sm={2}>Name:</Form.Label>
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
              name="DepartamentName"
              value={room.DepartamentName}
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
              type="text"
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
        <Button type="submit" variant="primary">Add Room</Button>
      </Form>
    </Container>
  );
};

export default AddRoom;
