import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { getAllAppointments } from '../services/AppointmentService';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAllAppointments();
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
            <th>Doctor Name</th>
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
              <td>{appointment.doctorName}</td>
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
