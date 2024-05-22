import React, { useState, useEffect } from 'react';
import { getDepartmentById, updateDepartmentById } from '../../services/DepartmentService';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [department, setDepartment] = useState({
    name: '',
    description: '',
    departamentSize: 0, // Change to number
    departamentStatus: false // Change to boolean
  });

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const data = await getDepartmentById(id);
        setDepartment(data);
      } catch (error) {
        console.error('Error fetching department:', error);
      }
    };

    fetchDepartment();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment((prevDepartment) => ({
      ...prevDepartment,
      [name]: name === 'departamentSize' ? parseInt(value, 10) : 
               name === 'departamentStatus' ? value === 'true' : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDepartmentById(id, department);
      navigate('/department'); // Redirect to department list after updating
    } catch (error) {
      console.error('Error updating department:', error);
    }
  };

  return (
    <Container>
      <h2>Edit Department</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formDepartmentName">
          <Form.Label column sm={2}>Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              value={department.name}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDescription">
          <Form.Label column sm={2}>Description:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="description"
              value={department.description}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDepartamentSize">
          <Form.Label column sm={2}>Departament Size:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="departamentSize"
              value={department.departamentSize}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDepartamentStatus">
          <Form.Label column sm={2}>Departament Status:</Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              name="departamentStatus"
              value={department.departamentStatus}
              onChange={handleChange}
              required
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Update Department</Button>
      </Form>
    </Container>
  );
};

export default EditDepartment;
