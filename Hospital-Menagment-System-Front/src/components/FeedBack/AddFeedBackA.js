import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addFeedBack } from '../../services/FeedBackService';

const AddFeedBack = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({
    comment: '',
    doctorName: '',
    rating: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFeedBack(feedback);
      navigate('/admin/feedback'); 
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        console.error('Error adding feedback:', error);
        setError('Failed to add feedback.');
      }
    }
  };

  return (
    <Container>
      <h2>Add New Feedback</h2>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formFeedBackComment">
          <Form.Label column sm={2}>Comment:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="comment"
              value={feedback.comment}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDoctorName">
          <Form.Label column sm={2}>Doctor Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="doctorName"
              value={feedback.doctorName}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formRating">
          <Form.Label column sm={2}>Rating:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="rating"
              value={feedback.rating}
              onChange={handleChange}
              required
              min="1"
              max="5"
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Add Feedback</Button>
      </Form>
    </Container>
  );
};

export default AddFeedBack;
