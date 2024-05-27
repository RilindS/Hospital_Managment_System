import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCity } from '../../services/CityServices';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCity = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState({
    cityName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCity((prevCity) => ({
      ...prevCity,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addCity(city);
      console.log('City added:', response);
      navigate('/admin/city');
    } catch (error) {
      console.error('Error adding city:', error);
    }
  };

  return (
    <Container>
      <h2></h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formCityName">
          <Form.Label column sm={2}>City Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="cityName"
              value={city.cityName}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Add City</Button>
      </Form>
    </Container>
  );
};

export default AddCity;
