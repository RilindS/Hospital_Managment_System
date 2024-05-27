import React, { useState, useEffect } from 'react';
import { getAppointments } from '../services/AppointmentService';
import { Table, Container } from 'react-bootstrap';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <Container>
      <h2>Appointments</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Patient Name</th>
            <th>Patient Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.appointmentId}>
              <td>{appointment.appointmentId}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.patientEmail}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.reason}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminAppointments;
