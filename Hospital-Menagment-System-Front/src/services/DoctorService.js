import axios from 'axios';

const API_URL = 'https://localhost:44322/api/Doctor'; 


export const addDoctor = async (doctor) => {
  try {
    const response = await axios.post(`${API_URL}/add-Doctor`, doctor);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllDoctors = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-all-doctor`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDoctorById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get-doctor-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateDoctorById = async (id, patient) => {
  try {
    const response = await axios.put(`${API_URL}/update-doctor-by-id/${id}`, patient);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteDoctorById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-doctor-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
