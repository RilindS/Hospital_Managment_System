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
    departamentSize: '',
    departamentStatus: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setDepartment((prevDepartment) => ({
      ...prevDepartment,
      [name]: val,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert departamentSize to int and departamentStatus to boolean
      const departmentData = {
        ...department,
        departamentSize: parseInt(department.departamentSize, 10),
        departamentStatus: department.departamentStatus === 'true' || department.departamentStatus === true
      };
      const response = await addDepartment(departmentData);
      console.log('Department added:', response);
      navigate('/department');
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  return (
    <Container>
      <h2>Add Department</h2>
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
          <Form.Label column sm={2}>Department Size:</Form.Label>
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
        <Button type="submit" variant="primary">Add Department</Button>
      </Form>
    </Container>
  );
};

export default AddDepartment;
