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
    departmentSize: '',
    departmentStatus: false,
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
    const { name, value, type, checked } = e.target;
    setDepartment((prevDepartment) => ({
      ...prevDepartment,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDepartmentById(id, department);
      navigate('/admin/department'); // Redirect to department list after updating
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
        <Button type="submit" variant="primary">Update Department</Button>
      </Form>
    </Container>
  );
};

export default EditDepartment;
