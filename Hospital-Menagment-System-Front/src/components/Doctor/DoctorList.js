import React, { useEffect, useState } from 'react';
import { getAllDoctors, deleteDoctorById } from '../../services/DoctorService';
import { Link } from 'react-router-dom';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const data = await getAllDoctors();
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoctorById(id);
      fetchDoctors(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting doctros:', error);
    }
  };

  return (
    <div>
      <h1>Doctor List</h1>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.doctorId}>
            {doctor.doctorName} {doctor.surname} {doctor.qytet} {doctor.qualification}  {doctor.phoneNumber}  {doctor.departamentName}
            <Link to={`/edit-doctor/${doctor.doctorId}`}>Edit</Link>
            <button onClick={() => handleDelete(doctor.doctorId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
