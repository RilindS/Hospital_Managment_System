import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { addAppointment, checkAppointmentAvailability } from '../services/AppointmentService';
import { getAllDoctorss } from '../services/DoctorService';

const AddAppointment = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const [appointment, setAppointment] = useState({
    patientName: user ? user.name : '',
    patientEmail: user ? user.email : '',
    doctorName: '',
    date: today,
    time: '',
    reason: ''
  });

  const [doctors, setDoctors] = useState([]);
  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  const [timeError, setTimeError] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getAllDoctorss();
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
    setAvailabilityChecked(false); // Reset availability check if any input changes

    // Check if time is within allowed range
    if (name === 'time') {
      const timeValue = value;
      const minTime = '08:00';
      const maxTime = '20:00';
      if (timeValue < minTime || timeValue > maxTime) {
        setTimeError('Please select a time between 08:00 and 20:00.');
      } else {
        setTimeError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (timeError) {
      return; // Do not submit if there's a time error
    }
    try {
      const isAvailable = await checkAppointmentAvailability(appointment);
      if (!isAvailable) {
        alert('This time slot is already booked for the selected doctor.');
        return;
      }
      const response = await addAppointment(appointment);
      console.log('Appointment added:', response);
      navigate('/patient');
    } catch (error) {
      console.error('Error adding appointment:', error);
      alert(error.message || 'Failed to add appointment.');
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
              readOnly
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
              readOnly
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDoctor">
          <Form.Label column sm={2}>Doctor:</Form.Label>
          <Col sm={10}>
            <Form.Select
              name="doctorName"
              value={appointment.doctorName}
              onChange={handleChange}
              required
            >
              <option key="" value="">
                Select Doctor
              </option>
              {doctors.map((doctor, index) => (
                <option key={index} value={doctor}>
                  {doctor}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
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
              min="08:00"
              max="20:00"
              required
            />
            {timeError && (
              <div style={{ color: 'red', marginTop: '5px' }}>{timeError}</div>
            )}
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
