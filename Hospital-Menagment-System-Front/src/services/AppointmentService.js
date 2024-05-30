/*import axios from 'axios';

//https://localhost:44322/api/Appointments


const API_URL = 'https://localhost:44322/api/Appointments'; 

export const addAppointment = async (appointment) => {
  const response = await axios.post(API_URL, appointment);
  return response.data;
};
export const getAppointments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};*/
import axios from 'axios';

const API_URL = 'https://localhost:44322/api/Appointments'; 


export const addAppointment = async (appointment) => {
  try {
    const response = await axios.post(`${API_URL}/add-Appointments`, appointment);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllAppointments  = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-all-appointment`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAppointmentById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get-appointment-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateAppointmentById = async (id, appointment) => {
  try {
    const response = await axios.put(`${API_URL}/update-appointment-by-id/${id}`, appointment);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteAppointmentById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-appointment-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
