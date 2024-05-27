import React, { useState, useEffect } from 'react';
import { getNurseById, updateNurseById } from '../../services/NurseServices';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditNurse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nurse, setNurse] = useState({
    name: '',
    description: '',
    category: '',
  });

  useEffect(() => {
    const fetchNurse = async () => {
      try {
        const data = await getNurseById(id);
        setNurse(data);
      } catch (error) {
        console.error('Error fetching nurse:', error);
      }
    };

    fetchNurse();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNurse((prevNurse) => ({
      ...prevNurse,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateNurseById(id, nurse);
      navigate('/admin/nurse'); // Redirect to nurse list after updating
    } catch (error) {
      console.error('Error updating nurse:', error);
    }
  };

  return (
    <Container>
      <h2>Edit Nurse</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formNurseName">
          <Form.Label column sm={2}>Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              value={nurse.name}
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
              value={nurse.description}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formCategory">
          <Form.Label column sm={2}>Category:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="category"
              value={nurse.category}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Update Nurse</Button>
      </Form>
    </Container>
  );
};

export default EditNurse;
