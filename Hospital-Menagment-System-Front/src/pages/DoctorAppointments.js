import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { updateAppointmentById } from '../services/AppointmentService';

const DoctorAppointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);

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

  const handleEditClick = (appointment) => {
    setCurrentAppointment(appointment);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentAppointment({
      ...currentAppointment,
      [name]: value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAppointmentById(currentAppointment.appointmentId, currentAppointment);
      setShowEditModal(false);
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.appointmentId === currentAppointment.appointmentId ? currentAppointment : appointment
        )
      );
    } catch (error) {
      console.error('Failed to update appointment', error);
    }
  };

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
        appointments.map((appointment) => (
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
                  <tr>
                    <td>Doktori(me)</td>
                    <td>{appointment.doctorName}</td>
                    
                  </tr>
                </tbody>
              </table>
              <Button variant="primary" onClick={() => handleEditClick(appointment)}>
                Edit
              </Button>
            </div>
          </div>
        ))
      )}

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentAppointment && (
            <Form onSubmit={handleEditSubmit}>
              <Form.Group controlId="formPatientName">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control
                  type="text"
                  name="patientName"
                  value={currentAppointment.patientName}
                  onChange={handleEditChange}
                  readOnly
                  
                />
              </Form.Group>
              <Form.Group controlId="formPatientEmail">
                <Form.Label>Patient Email</Form.Label>
                <Form.Control
                  type="email"
                  name="patientEmail"
                  value={currentAppointment.patientEmail}
                  onChange={handleEditChange}
                  readOnly
                />
              </Form.Group>
              <Form.Group controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={new Date(currentAppointment.date).toISOString().substr(0, 10)}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group controlId="formTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={currentAppointment.time}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group controlId="formReason">
                <Form.Label>Pershkrimi dhe Medikamentet</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="reason"
                  value={currentAppointment.reason}
                  onChange={handleEditChange}
                />
              </Form.Group>

              
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DoctorAppointments;
