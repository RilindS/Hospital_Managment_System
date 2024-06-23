import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getVacationById, updateVacationById } from '../../services/VacationService';

const EditVacation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vacation, setVacation] = useState({
    arsyja: '',
    vertetimi: false,
    prej: '',
    deri: '',
  });

  useEffect(() => {
    const fetchVacation = async () => {
      try {
        const data = await getVacationById(id);
        setVacation(data);
      } catch (error) {
        console.error('Error fetching vacation:', error);
      }
    };

    fetchVacation();
  }, [id]);

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
      await updateVacationById(id, vacation);
      navigate('/admin/vacation'); // Redirect to vacation list after updating
    } catch (error) {
      console.error('Error updating vacation:', error);
    }
  };

  return (
    <Container>
      <h2>Edit Vacation</h2>
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
        <Form.Group as={Row} className="mb-3" controlId="formVertetimi">
          <Form.Label column sm={2}>Vertetimi:</Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              name="vertetimi"
              checked={vacation.vertetimi}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
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
        <Button type="submit" variant="primary">Update Vacation</Button>
      </Form>
    </Container>
  );
};

export default EditVacation;
