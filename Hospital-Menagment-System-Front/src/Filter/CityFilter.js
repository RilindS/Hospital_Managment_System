import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
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

      <ul>
        {patients.map((patient) => (
          <li key={patient.patientId}>
            {patient.name} {patient.surname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityFilterPage;
