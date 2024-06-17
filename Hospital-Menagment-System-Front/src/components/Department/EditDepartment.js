import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getDepartmentById, updateDepartmentById } from '../../services/DepartmentService';

const EditDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [department, setDepartment] = useState({
    name: '',
    description: '',
    departamentSize: 0,
    departamentStatus: false,
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
        <Form.Group as={Row} className="mb-3" controlId="formdepartamentSize">
          <Form.Label column sm={2}>Size:</Form.Label>
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
        <Form.Group as={Row} className="mb-3" controlId="formdepartamentStatus">
          <Form.Label column sm={2}>Status:</Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              name="departamentStatus"
              checked={department.departamentStatus}
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
