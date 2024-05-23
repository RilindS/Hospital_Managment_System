import React, { useEffect, useState } from 'react';
import { getAllNurses, deleteNurseById } from '../../services/NurseServices';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NurseList = () => {
  const [nurses, setNurses] = useState([]);

  useEffect(() => {
    fetchNurses();
  }, []);

  const fetchNurses = async () => {
    try {
      const data = await getAllNurses();
      setNurses(data);
    } catch (error) {
      console.error('Error fetching nurses:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNurseById(id);
      fetchNurses(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting nurse:', error);
    }
  };

  return (
    <div>
      <h1>Nurse List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {nurses.map(nurse => (
            <tr key={nurse.nurseId}>
              <td>{nurse.name}</td>
              <td>{nurse.description}</td>
              <td>{nurse.category}</td>
            
              <td>
                <Link to={`/edit-nurse/${nurse.nurseId}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(nurse.nurseId)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default NurseList;
