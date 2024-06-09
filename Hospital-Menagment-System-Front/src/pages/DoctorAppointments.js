import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const DoctorAppointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (user && user.name) {
      console.log(`User is set: ${JSON.stringify(user)}`);
      console.log(`Fetching appointments for doctor: ${user.name}`);
      const fetchAppointments = async () => {
        try {
          const response = await axios.get(`https://localhost:44322/api/Appointments/get-appointments-by-doctor/${user.name}`);
          console.log('Appointments fetched:', response.data);
          setAppointments(response.data);
        } catch (error) {
          console.error('Failed to fetch appointments', error);
        }
      };

      fetchAppointments();
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log('Appointments state:', appointments);

  return (
    <div>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.appointmentId}>
            <p>Patient: {appointment.patientName}</p>
            <p>Email: {appointment.patientEmail}</p>
            <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
            <p>Time: {appointment.time}</p>
            <p>Reason: {appointment.reason}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorAppointments;
