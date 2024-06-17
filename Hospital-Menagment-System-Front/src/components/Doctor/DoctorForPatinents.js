
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getAllDoctors } from '../../services/DoctorService';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const data = await getAllDoctors();
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
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
            {/* <th>City</th> */}
            {/* <th>Qualification</th> */}
            {/* <th>Phone Number</th> */}
            <th>Department</th>
            <th>specialization</th>

        
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor.doctorId}>
              <td>{doctor.doctorName}</td>
              <td>{doctor.surname}</td>
              {/* <td>{doctor.qytet}</td> */}
              {/* <td>{doctor.qualification}</td> */}
              {/* <td>{doctor.phoneNumber}</td> */}
              <td>{doctor.departamentName}</td>
              <td>{doctor.specialization}</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DoctorList;
