import axios from 'axios';

const API_URL = 'https://localhost:44322/api/Vacation'; 

export const getVacationByDoctorName = async (doctorName) => {
  const response = await axios.get(`${API_URL}/get-vacation-by-doctorname-vertetimi-true/${doctorName}`);
  return response.data;
};

export const getApprovedVacations = async () => {
  try{
  const response = await axios.get(`${API_URL}/get-vacation-aprovimi-true`);
  return response.data;
  }catch(error){
    throw error.response.data;
  }
};

export const getUnapprovedVacations = async () => {
  try{
  const response = await axios.get(`${API_URL}/get-vacation-aprovimi-false`);
  return response.data;
  }catch(error){
    throw error.response.data;
  }
};

export const getAllVacations = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-all-vacations`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addVacation = async (vacation) => {
  try {
    const response = await axios.post(`${API_URL}/add-vacation`, vacation);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getVacationById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get-vacation-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateVacationById = async (id, vacation) => {
  try {
    const response = await axios.put(`${API_URL}/update-vacation-by-id/${id}`, vacation);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteVacationById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-vacation-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
