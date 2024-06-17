import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const PatientMyAppointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    if (user && user.name) {
      fetchAppointmentsByPatient();
    }
  }, [user]);

  const fetchAppointmentsByPatient = async () => {
    try {
      const response = await axios.get(`https://localhost:44322/api/Appointments/get-appointments-by-patient/${user.name}`);
      setAppointments(response.data);
    } catch (error) {
      console.error('Failed to fetch appointments', error);
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const fetchAppointmentsByDate = async () => {
    try {
      const response = await axios.get(`https://localhost:44322/api/Appointments/get-appointments-by-date/${date}`);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setAppointments([]);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Historia juaj ne spital {user ? user.name : 'Not logged in'}   </h2>

      <Form className="mb-4">
        <Form.Group controlId="formDate">
          <Form.Label>Date (YYYY-MM-DD)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter date"
            value={date}
            onChange={handleDateChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={fetchAppointmentsByDate}>
          Search by Date
        </Button>
      </Form>

      {appointments.length === 0 ? (
        <div>No appointments found.</div>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Appointment ID</th>
                <th>Patient Name</th>
                <th>Patient Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Reason</th>
                <th>Doctor Name</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={appointment.appointmentId}>
                  <td>{`Takimi ${index + 1}`}</td>
                  <td>{appointment.appointmentId}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.patientEmail}</td>
                  <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.reason}</td>
                  <td>{appointment.doctorName}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default PatientMyAppointments;
