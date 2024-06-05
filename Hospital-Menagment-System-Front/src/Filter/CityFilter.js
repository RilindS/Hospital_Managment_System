import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import '../Allcss/CityFilterPage.css'; // Import CSS from Allcss

const CityFilterPage = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch the list of cities from your API
    axios.get('https://localhost:44322/api/City/get-CityName')
      .then(response => setCities(response.data))
      .catch(error => console.error('Error fetching cities:', error));
  }, []);

  const handleCityChange = async (event) => {
    const cityName = event.target.value;
    setSelectedCity(cityName);

    try {
      const response = await axios.get(`https://localhost:44322/api/Patients/get-patients-by-city/${cityName}`);
      const data = response.data;

      console.log('Response data:', data);
      console.log('Type of response data:', typeof data);

      let patientsArray = [];
      if (data && Array.isArray(data.$values)) {
        patientsArray = data.$values;
      } else if (Array.isArray(data)) {
        patientsArray = data;
      } else {
        console.error('Expected an array but got:', data);
        setPatients([]);
        return;
      }

      // Resolve references in the patients array
      const resolvedPatients = resolveReferences(patientsArray);
      setPatients(resolvedPatients);
    } catch (error) {
      console.error('Error fetching patients:', error);
      setPatients([]); // Clear the patients state in case of error
    }
  };

  const resolveReferences = (patientsArray) => {
    const resolved = {};
    const result = [];

    patientsArray.forEach(patient => {
      if (patient.$id) {
        resolved[patient.$id] = patient;
      }
    });

    patientsArray.forEach(patient => {
      if (patient.$ref) {
        result.push(resolved[patient.$ref]);
      } else {
        result.push(patient);
      }
    });

    return result;
  };

  return (
    <div className="city-filter-page">
      <h1>Filter Patients by City</h1>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      {patients.length > 0 && (
        <Table striped bordered hover>
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
            {patients.map((patient, index) => {
              if (!patient) {
                console.warn('Undefined patient object at index', index);
                return null;
              }
              const uniqueKey = `${patient.PatientId}-${index}`;
              console.log('Patient:', patient); // Log patient object for debugging
              console.log('Unique Key:', uniqueKey);
              return (
                <tr key={uniqueKey}>
                  <td>{patient.PatientId}</td>
                  <td>{patient.Name}</td>
                  <td>{patient.Surname}</td>
                  <td>{patient.Email}</td>
                  <td>{patient.PhoneNumber}</td>
                  <td>{patient.DateOfBirth}</td>
                  <td>{patient.Street}</td>
                  <td>{patient.Qyteti}</td>
                  <td>{patient.DateRegistered}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default CityFilterPage;
