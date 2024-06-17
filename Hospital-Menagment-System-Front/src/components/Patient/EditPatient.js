  import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllCities } from '../../services/CityServices';
import { getAllRoomsName } from '../../services/RoomService';
import { getPatientById, updatePatientById } from '../../services/patientService';

  const EditPatient = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [patient, setPatient] = useState({
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      qyteti: '',
      Rooma: '',
      street: ''
    });
    const [cities, setCities] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      const fetchPatient = async () => {
        try {
          const data = await getPatientById(id);
          setPatient(data);
        } catch (error) {
          console.error('Error fetching patient:', error);
        }
      };

      const fetchCities = async () => {
        try {
          const data = await getAllCities();
          setCities(data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      };

      const fetchRooms = async () => {
        try {
          const data = await getAllRoomsName();
          setRooms(data);
        } catch (error) {
          console.error('Error fetching rooms:', error);
        }
      };

      fetchPatient();
      fetchCities();
      fetchRooms();
    }, [id]);

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
        await updatePatientById(id, patient);
        navigate('/admin/patient'); // Redirect to patient list after updating
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          console.error('Error updating patient:', error);
          setError('Failed to update patient. Ska vend ne dhome!!!.');
        }
      }
    };

    return (
      <Container>
        <h2>Edit Patient</h2>
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
          <Form.Group as={Row} className="mb-3" controlId="formroom">
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
          <Button type="submit" variant="primary">Update Patient</Button>
        </Form>
      </Container>
    );
  };

  export default EditPatient;
