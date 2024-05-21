import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoctor } from '../../services/DoctorService';
import { getAllCities } from '../../services/CityServices';
import { getAllDepartments } from '../../services/DepartmentService';


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

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await getAllDepartments();
        setDepartments(data);
      } catch (error) {
        console.error('Error fetching Depaetments:', error);
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
      console.log('doctor added:', response);
      navigate('/doctor');
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  return (
    <div>
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="doctorName"
            value={doctor.doctorName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={doctor.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={doctor.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Specialization:</label>
          <input
            type="text"
            name="specialization"
            value={doctor.specialization}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>DepartamentName:</label>
          <select
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
          </select>
        </div>
        <div>
          <label>City:</label>
          <select
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
          </select>
        </div>
        <div>
          <label>Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={doctor.qualification}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;
