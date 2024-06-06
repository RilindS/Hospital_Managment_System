import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';

const AppointmentsByDate = () => {
  const [date, setDate] = useState('');
  const [appointments, setAppointments] = useState([]);

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

  return (
    <Container>
      <div className="appointments-by-date">
        <h1>Search Appointments by Date</h1>
        <Form>
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
            Search
          </Button>
        </Form>
        

        {appointments.length > 0 && (
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
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
              {appointments.map((appointment) => (
                <tr key={appointment.appointmentId}>
                  <td>{appointment.appointmentId}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.patientEmail}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.reason}</td>
                  <td>{appointment.doctorName}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </Container>
  );
};

export default AppointmentsByDate;
