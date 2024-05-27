import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDepartment } from '../../services/DepartmentService';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddDepartment = () => {
  const navigate = useNavigate();
  const [department, setDepartment] = useState({
    name: '',
    description: '',
    departmentSize: '',
    departmentStatus: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDepartment((prevDepartment) => ({
      ...prevDepartment,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addDepartment(department);
      console.log('Department added:', response);
      navigate('/admin/department');
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  return (
    <Container>
      <h2></h2>
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
        <Form.Group as={Row} className="mb-3" controlId="formDepartmentSize">
          <Form.Label column sm={2}>Size:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="departmentSize"
              value={department.departmentSize}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDepartmentStatus">
          <Form.Label column sm={2}>Status:</Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              name="departmentStatus"
              checked={department.departmentStatus}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Add Department</Button>
      </Form>
    </Container>
  );
};

export default AddDepartment;
