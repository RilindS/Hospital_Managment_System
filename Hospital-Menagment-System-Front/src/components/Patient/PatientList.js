import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deletePatientById, getAllPatients } from '../../services/patientService';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const data = await getAllPatients();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePatientById(id);
      fetchPatients(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>City</th>
            <th>Street</th>
            <th>Room</th>

            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.patientId}>
              <td>{patient.name}</td>
              <td>{patient.surname}</td>
              <td>{patient.qyteti}</td>
              <td>{patient.street}</td>
              <td>{patient.rooma}</td>

              <td>{patient.phoneNumber}</td>
              <td>
                <Link to={`/admin/patient/edit/${patient.patientId}`} className="btn btn-primary btn-sm me-2">Edit</Link> 
                <Button variant="danger" size="sm" onClick={() => handleDelete(patient.patientId)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientList;
