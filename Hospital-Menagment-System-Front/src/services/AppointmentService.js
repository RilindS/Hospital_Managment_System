import axios from 'axios';

//https://localhost:44322/api/Appointments


const API_URL = 'https://localhost:44322/api/Appointments'; 

export const addAppointment = async (appointment) => {
  const response = await axios.post(API_URL, appointment);
  return response.data;
};
export const getAppointments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};