import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAllCities } from '../services/CityServices';
import { getAllDepartments } from '../services/DepartmentService';
import { addDoctor } from '../services/DoctorService';

const AddDoctor = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({
    doctorName: '',
    surname: '',
    phoneNumber: '',
    specialization: '',
    DepartamentName: '',
    qytet: '',
    qualification: '',
  });

  const [cities, setCities] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await getAllCities();
        setCities(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };
    fetchCities();
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await getAllDepartments();
        setDepartments(data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };
    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addDoctor(doctor);
      console.log('Doctor added:', response);
      navigate('/admin/register'); // Ridrejto tek faqja e doktorëve pas shtimit të suksesshëm
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  return (
    <Container>
      <h2>Add Doctor Details</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formDoctorName">
          <Form.Label column sm={2}>Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="doctorName"
              value={doctor.doctorName}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formSurname">
          <Form.Label column sm={2}>Surname:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="surname"
              value={doctor.surname}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPhoneNumber">
          <Form.Label column sm={2}>Phone Number:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={doctor.phoneNumber}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formSpecialization">
          <Form.Label column sm={2}>Specialization:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="specialization"
              value={doctor.specialization}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDepartment">
          <Form.Label column sm={2}>Department:</Form.Label>
          <Col sm={10}>
            <Form.Select
              name="DepartamentName"
              value={doctor.DepartamentName}
              onChange={handleChange}
              required
            >
              <option key="" value="">
                Select Department
              </option>
              {departments.map((department, index) => (
                <option key={index} value={department}>
                  {department}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formCity">
          <Form.Label column sm={2}>City:</Form.Label>
          <Col sm={10}>
            <Form.Select
              name="qytet"
              value={doctor.qytet}
              onChange={handleChange}
              required
            >
              <option key="" value="">
                Select City
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formQualification">
          <Form.Label column sm={2}>Qualification:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="qualification"
              value={doctor.qualification}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Add Doctor</Button>
      </Form>
    </Container>
  );
};

export default AddDoctor;
