import React, { useState, useEffect } from 'react';
import { getPatientById, updatePatientById } from '../../services/patientService';
import { getAllCities } from '../../services/CityServices';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    street: ''
  });
  const [cities, setCities] = useState([]);

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

    fetchPatient();
    fetchCities();
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
      console.error('Error updating patient:', error);
    }
  };

  return (
    <Container>
      <h2>Edit Patient</h2>
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
