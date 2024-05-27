import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addAppointment } from '../services/AppointmentService';
import { getAllDoctors } from '../services/DoctorService';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddAppointment = () => {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState({
    patientName: '',
    patientEmail: '',
    doctorId: '',
    date: '',
    time: '',
    reason: ''
  });

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getAllDoctors();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addAppointment(appointment);
      console.log('Appointment added:', response);
      navigate('/patient');
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  return (
    <Container>
      <h2>Reserve an Appointment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPatientName">
          <Form.Label column sm={2}>Patient Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="patientName"
              value={appointment.patientName}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPatientEmail">
          <Form.Label column sm={2}>Patient Email:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              name="patientEmail"
              value={appointment.patientEmail}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        {/* <Form.Group as={Row} className="mb-3" controlId="formDoctor">
          <Form.Label column sm={2}>Doctor:</Form.Label>
          <Col sm={10}>
            <Form.Select
              name="doctorId"
              value={appointment.doctorId}
              onChange={handleChange}
              required
            >
              <option key="" value="">
                Select Doctor
              </option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group> */}
        <Form.Group as={Row} className="mb-3" controlId="formDate">
          <Form.Label column sm={2}>Date:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              name="date"
              value={appointment.date}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formTime">
          <Form.Label column sm={2}>Time:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="time"
              name="time"
              value={appointment.time}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formReason">
          <Form.Label column sm={2}>Reason:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="reason"
              value={appointment.reason}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Reserve</Button>
      </Form>
    </Container>
  );
};

export default AddAppointment;
