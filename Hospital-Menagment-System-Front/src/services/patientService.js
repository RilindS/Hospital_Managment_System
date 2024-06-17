import axios from 'axios';

const API_URL = 'https://localhost:44322/api/Patients'; // Adjust the URL based on your API's address

// export const getCurrentPatient = async () => {
//   try {
//     const response = await axios.get('https://localhost:44322/api/Patients/current');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching current patient:', error);
//     throw error;
//   }
// };

export const addPatient = async (patient) => {
  try {
    const response = await axios.post(`${API_URL}/add-Patient`, patient);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Error adding patient');
    } else {
      throw new Error('Error adding patient');
    }
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
