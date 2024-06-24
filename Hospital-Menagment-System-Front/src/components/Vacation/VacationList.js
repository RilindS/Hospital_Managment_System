import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteVacationById, getAllVacations, getApprovedVacations, getUnapprovedVacations } from '../../services/VacationService';

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

  const fetchApprovedVacations = async () => {
    try {
      const data = await getApprovedVacations();
      setVacations(data);
    } catch (error) {
      console.error('Error fetching approved vacations:', error);
    }
  };

  const fetchUnapprovedVacations = async () => {
    try {
      const data = await getUnapprovedVacations();
      setVacations(data);
    } catch (error) {
      console.error('Error fetching unapproved vacations:', error);
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
            <th>Doctor Name</th>
            <th>Arsyja</th>
            <th>Prej</th>
            <th>Deri</th>
            <th>Aprovimi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vacations.map(vacation => (
            <tr key={vacation.vacationId}>
              <td>{vacation.doctorName}</td>
              <td>{vacation.arsyja}</td>
              <td>{vacation.prej}</td>
              <td>{vacation.deri}</td>
              <td>{vacation.vertetimi ? 'Yes' : 'No'}</td>
              <td>
                <Link to={`/admin/vacation/edit/${vacation.vacationId}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(vacation.vacationId)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between mt-3">
        <Button variant="success" onClick={fetchApprovedVacations}>
          Show Approved Vacations
        </Button>
        <Button variant="warning" onClick={fetchUnapprovedVacations}>
          Show Unapproved Vacations
        </Button>
        <Button variant="primary" onClick={fetchVacations}>
          Show All Vacations
        </Button>
      </div>
    </div>
  );
};

export default VacationList;
