import React, { useState, useEffect } from 'react';
import { getDoctorById, updateDoctorById } from '../../services/DoctorService';
import { getAllCities } from '../../services/CityServices';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllDepartments } from '../../services/DepartmentService';


const EditDoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({
    doctorName: '',
    surname: '',
    phoneNumber: '',
    specialization: '',
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
      navigate('/doctor'); // Redirect to patient list after updating
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  return (
    <div>
      <h2>Edit Doctor</h2>
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
        <button type="submit">Update Doctor</button>
      </form>
    </div>
  );
};

export default EditDoctor;
