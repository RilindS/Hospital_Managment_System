import React, { useState, useEffect } from 'react';
import { getDoctorById, updateDoctorById } from '../../services/DoctorService';
import { getAllCities } from '../../services/CityServices';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllDepartments } from '../../services/DepartmentService';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditDoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({
    doctorName: '',
    surname: '',
    phoneNumber: '',
    specialization: '',
    DepartamentName: '',
    qytet: '',
    qualification: '',
    isActive: ''
  });
  const [cities, setCities] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await getDoctorById(id);
        setDoctor(data);
      } catch (error) {
        console.error('Error fetching doctor:', error);
      }
    };

    const fetchCities = async () => {
      try {
        const data = await getAllCities();
        setCities(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const data = await getAllDepartments();
        setDepartments(data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDoctor();
    fetchCities();
    fetchDepartments();
  }, [id]);

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
      await updateDoctorById(id, doctor);
      navigate('/doctor'); // Redirect to doctor list after updating
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  return (
    <Container>
      <h2>Edit Doctor</h2>
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
        <Button type="submit" variant="primary">Update Doctor</Button>
      </Form>
    </Container>
  );
};

export default EditDoctor;