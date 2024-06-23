import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addVacation } from '../../services/VacationService';

const AddVacation = () => {
  const navigate = useNavigate();
  const [vacation, setVacation] = useState({
    arsyja: '',
    vertetimi: false,
    prej: '',
    deri: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVacation((prevVacation) => ({
      ...prevVacation,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addVacation(vacation);
      console.log('Vacation added:', response);
      navigate('/doctor');
    } catch (error) {
      console.error('Error adding vacation:', error);
    }
  };

  return (
    <Container>
      <h2>Add Vacation</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formArsyja">
          <Form.Label column sm={2}>Arsyja:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="arsyja"
              value={vacation.arsyja}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        {/* <Form.Group as={Row} className="mb-3" controlId="formVertetimi">
          <Form.Label column sm={2}>Vertetimi:</Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              name="vertetimi"
              checked={vacation.vertetimi}
              onChange={handleChange}
            />
          </Col>
        </Form.Group> */}
        <Form.Group as={Row} className="mb-3" controlId="formPrej">
          <Form.Label column sm={2}>Prej:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="datetime-local"
              name="prej"
              value={vacation.prej}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDeri">
          <Form.Label column sm={2}>Deri:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="datetime-local"
              name="deri"
              value={vacation.deri}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Add Vacation</Button>
      </Form>
    </Container>
  );
};

export default AddVacation;
