import axios from 'axios';

const API_URL = 'https://localhost:44322/api/Patients'; // Adjust the URL based on your API's address

export const addPatient = async (patient) => {
  try {
    const response = await axios.post(`${API_URL}/add-Patient`, patient);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllPatients = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-all-patient`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getPatientById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get-patient-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updatePatientById = async (id, patient) => {
  try {
    const response = await axios.put(`${API_URL}/update-patient-by-id/${id}`, patient);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deletePatientById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-patient-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
