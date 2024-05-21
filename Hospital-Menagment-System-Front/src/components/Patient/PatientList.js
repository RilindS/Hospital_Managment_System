import React, { useEffect, useState } from 'react';
import { getAllPatients, deletePatientById } from '../../services/patientService';
import { Link } from 'react-router-dom';

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
      <h1>Patient List</h1>
      <ul>
        {patients.map(patient => (
          <li key={patient.patientId}>
            {patient.name} {patient.surname} {patient.qyteti} {patient.street} {patient.phone}
            <Link to={`/edit-patient/${patient.patientId}`}>Edit</Link>
            <button onClick={() => handleDelete(patient.patientId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
