import React, { useState, useEffect } from 'react';
import { getPatientById, updatePatientById } from '../../services/patientService';
import { getAllCities } from '../../services/CityServices';
import { useParams, useNavigate } from 'react-router-dom';

const EditPatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    const fetchPatient = async () => {
      try {
        const data = await getPatientById(id);
        setPatient(data);
      } catch (error) {
        console.error('Error fetching patient:', error);
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

    fetchPatient();
    fetchCities();
  }, [id]);

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
      await updatePatientById(id, patient);
      navigate('/patient'); // Redirect to patient list after updating
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  return (
    <div>
      <h2>Edit Patient</h2>
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
        <button type="submit">Update Patient</button>
      </form>
    </div>
  );
};

export default EditPatient;
