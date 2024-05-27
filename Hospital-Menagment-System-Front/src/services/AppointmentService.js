import axios from 'axios';

const API_URL = 'http://localhost:5000/api/appointments'; // Change this to your API URL

export const addAppointment = async (appointment) => {
  const response = await axios.post(API_URL, appointment);
  return response.data;
};
