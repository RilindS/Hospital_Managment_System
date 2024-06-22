import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className="container mt-5">
      <h2 className="mb-4">Your Appointments</h2>
      {appointments.length === 0 ? (
        <div>No appointments found.</div>
      ) : (
        appointments.map(appointment => (
          <div key={appointment.appointmentId} className="mb-4">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Detail</th>
                    <th>Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Patient</td>
                    <td>{appointment.patientName}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{appointment.patientEmail}</td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>{appointment.time}</td>
                  </tr>
                  <tr>
                    <td>Pershkrimi dhe Medikamentet</td>
                    <td>{appointment.reason}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DoctorAppointments;
