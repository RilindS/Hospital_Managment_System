import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
//import { useAuth } from '../../context/AuthContext';
import { useAuth } from '../context/AuthContext';
import { getVacationByDoctorName } from '../services/VacationService';
//import { getVacationByDoctorName } from '../../services/VacationService';

const VacationList = () => {
  const { user } = useAuth();
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    if (user) {
      fetchVacations(user.name);
    }
  }, [user]);

  const fetchVacations = async (doctorName) => {
    try {
      const data = await getVacationByDoctorName(doctorName);
      setVacations(data);
    } catch (error) {
      console.error('Error fetching vacations:', error);
    }
  };

  return (
    <Container>
      <h2>Historiku i pushimeve  tuaja te aprovuara</h2>
      <h1>  </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Arsyja</th>
            <th>Prej</th>
            <th>Deri</th>
            <th>Vertetimi</th>
          </tr>
        </thead>
        <tbody>
          {vacations.map((vacation) => (
            <tr key={vacation.VacationId}>
              <td>{vacation.doctorName}</td>
              <td>{vacation.arsyja}</td>
              <td>{vacation.prej}</td>
              <td>{vacation.deri}</td>
              <td>{vacation.Vertetimi ? 'Pa Aprovuar' : 'Aprovuar'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default VacationList;
