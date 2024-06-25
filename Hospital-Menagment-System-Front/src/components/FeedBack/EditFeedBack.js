import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getFeedBackById, updateFeedBackById } from '../../services/FeedBackService';

const EditFeedBack = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({
    comment: '',
    doctorName: '',
    rating: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFeedBack = async () => {
      try {
        const data = await getFeedBackById(id);
        setFeedback(data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedBack();
  }, [id]);

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
      await updateFeedBackById(id, feedback);
      navigate('/admin/feedback'); // Redirect to feedback list after updating
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        console.error('Error updating feedback:', error);
        setError('Failed to update feedback.');
      }
    }
  };

  return (
    <Container>
      <h2>Edit Feedback</h2>
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
        <Button type="submit" variant="primary">Update Feedback</Button>
      </Form>
    </Container>
  );
};

export default EditFeedBack;
