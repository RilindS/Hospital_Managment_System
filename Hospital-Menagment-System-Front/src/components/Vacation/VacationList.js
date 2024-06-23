import React, { useEffect, useState } from 'react';
import { getAllVacations, deleteVacationById } from '../../services/VacationService';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const VacationList = () => {
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    fetchVacations();
  }, []);

  const fetchVacations = async () => {
    try {
      const data = await getAllVacations();
      setVacations(data);
    } catch (error) {
      console.error('Error fetching vacations:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteVacationById(id);
      fetchVacations(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting vacation:', error);
    }
  };

  return (
    <div>
      <h1>Vacation List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Arsyja</th>
            <th>Vertetimi</th>
            <th>Prej</th>
            <th>Deri</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vacations.map(vacation => (
            <tr key={vacation.vacationId}>
              <td>{vacation.arsyja}</td>
              <td>{vacation.vertetimi ? 'Yes' : 'No'}</td>
              <td>{vacation.prej}</td>
              <td>{vacation.deri}</td>
              <td>
                <Link to={`/admin/vacation/edit/${vacation.vacationId}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(vacation.vacationId)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VacationList;
