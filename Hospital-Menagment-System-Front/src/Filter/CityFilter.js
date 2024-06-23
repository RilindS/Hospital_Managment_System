import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';

const CityFilterPage = () => {
    const [city, setCity] = useState('');
    const [patients, setPatients] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://localhost:44322/api/Patients/get-patients-by-city/${city}`);
            setPatients(response.data);
            setError('');
        } catch (error) {
            console.error('Error fetching patients:', error);
            setError('Error fetching patients. Please try again.');
        }
    };

    return (
        <Container>
            <div className="city-filter-page">
                <h1>Filter Patients by City</h1>
                <Form>
                    <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter city name"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSearch}>
                        <i className="fas fa-search"></i> Search
                    </Button>
                </Form>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                {patients.length > 0 && (
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Patient ID</th>
                                <th>Name</th>
                                <th>Surname</th>    
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Date of Birth</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>Date Registered</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient, index) => (
                                <tr key={index}>
                                    <td>{patient.patientId}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.surname}</td>
                                    <td>{patient.email}</td>
                                    <td>{patient.phoneNumber}</td>
                                    <td>{patient.dateOfBirth}</td>
                                    <td>{patient.street}</td>
                                    <td>{patient.qyteti}</td>
                                    <td>{patient.dateRegistered}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </div>
        </Container>
    );
};

export default CityFilterPage;
