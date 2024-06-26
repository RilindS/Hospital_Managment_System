import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCities } from '../../services/CityServices';
import { getAllRoomsName } from '../../services/RoomService';
import { addPatient } from '../../services/patientService';

const AddPatient = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, name } = location.state || {};

  const [patient, setPatient] = useState({
    name: name || '',
    surname: '',
    email: email || '',
    phoneNumber: '',
    dateOfBirth: '',
    qyteti: '',
    room: '',
    street: ''
  });

  const [cities, setCities] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await getAllCities();
        setCities(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAllRoomsName();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPatient(patient);
      navigate('/admin/patient'); 
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        console.error('Error adding patient:', error);
        setError('Failed to add patient. Ska vend ne dhome!!!.');
      }
    }
  };

  return (
    <Container>
      <h2>Add New Patient</h2>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPatientName">
          <Form.Label column sm={2}>Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              value={patient.name}
              onChange={handleChange}
              required
              
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formSurname">
          <Form.Label column sm={2}>Surname:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="surname"
              value={patient.surname}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm={2}>Email:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              name="email"
              value={patient.email}
              onChange={handleChange}
              required
              
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPhoneNumber">
          <Form.Label column sm={2}>Phone Number:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={patient.phoneNumber}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDateOfBirth">
          <Form.Label column sm={2}>Date of Birth:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              name="dateOfBirth"
              value={patient.dateOfBirth}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formCity">
          <Form.Label column sm={2}>City:</Form.Label>
          <Col sm={10}>
            <Form.Select
              name="qyteti"
              value={patient.qyteti}
              onChange={handleChange}
              required
            >
              <option key="" value="">
                Select City
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formRoom">
          <Form.Label column sm={2}>Room:</Form.Label>
          <Col sm={10}>
            <Form.Select
              name="room"
              value={patient.room}
              onChange={handleChange}
              required
            >
              <option key="" value="">
                Select Room
              </option>
              {rooms.map((room, index) => (
                <option key={index} value={room}>
                  {room}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formStreet">
          <Form.Label column sm={2}>Street:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="street"
              value={patient.street}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Add Patient</Button>
      </Form>
    </Container>
  );
};

export default AddPatient;
