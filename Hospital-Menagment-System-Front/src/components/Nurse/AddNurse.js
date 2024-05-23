import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNurse } from '../../services/NurseServices';
//import { getAllCities } from '../../services/CityServices';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddNurse = () => {
  const navigate = useNavigate();
  const [nurse, setNurse] = useState({
    name: '',
    description: '',
    category: '',
  });



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
      const response = await addNurse(nurse);
      console.log('Nurse added:', response);
      navigate('/nurse');
    } catch (error) {
      console.error('Error adding nurse:', error);
    }
  };

  return (
    <Container>
      <h2>Add Nurse</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formName">
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
        
        <Button type="submit" variant="primary">Add Nurse</Button>
      </Form>
    </Container>
  );
};

export default AddNurse;
