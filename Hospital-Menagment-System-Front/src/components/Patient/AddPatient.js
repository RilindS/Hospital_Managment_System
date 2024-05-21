import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { addPatient } from '../../services/patientService';
import { getAllCities } from '../../services/CityServices';

const AddPatient = () => {
  const navigate = useNavigate();  // Initialize useNavigate
  const [patient, setPatient] = useState({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    qyteti: '',
    street: ''
  });

  const [cities, setCities] = useState([]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addPatient(patient);
      console.log('Patient added:', response);
      navigate('/patient');  // Redirect to Patient Page upon successful addition
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={patient.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={patient.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={patient.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={patient.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={patient.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <select
            name="qyteti"
            value={patient.qyteti}
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
          </select>
        </div>
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={patient.street}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatient;
