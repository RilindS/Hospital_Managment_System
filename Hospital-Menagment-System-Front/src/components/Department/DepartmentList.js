
import React, { useEffect, useState } from 'react';
import { getAllDepartment, deleteDepartmentById } from '../../services/DepartmentService';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const data = await getAllDepartment();
      setDepartments(data);
    } catch (error) {
      console.error('Error fetching dep:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDepartmentById(id);
      fetchDepartments(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting dept:', error);
    }
  };

  return (
    <div>
      <h1>Department List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Department Size</th>
            <th>Department Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr key={department.departamentId}>
              <td>{department.name}</td>
              <td>{department.description}</td>
              <td>{department.departamentSize}</td>
              <td>{department.departamentStatus ? 'Active' : 'Inactive'}</td>
              <td>
                <Link to={`/admin/department/edit/${department.departamentId}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(department.departamentId)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DepartmentList;
