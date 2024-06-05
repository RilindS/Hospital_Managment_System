import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getAllPatients } from '../../services/patientService';

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

  

  return (
    <div>
      <h1></h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>City</th>
            <th>Street</th>
            <th>Phone</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.patientId}>
              <td>{patient.name}</td>
              <td>{patient.surname}</td>
              <td>{patient.qyteti}</td>
              <td>{patient.street}</td>
              <td>{patient.phoneNumber}</td>
             
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientList;
