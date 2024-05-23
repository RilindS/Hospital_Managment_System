import axios from 'axios';

const API_URL = 'https://localhost:44322/api/Nurse'; 


export const addNurse = async (nurse) => {
  try {
    const response = await axios.post(`${API_URL}/add-nurse`, nurse);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllNurses = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-all-nurse`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getNurseById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get-nurse-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateNurseById = async (id, nurse) => {
  try {
    const response = await axios.put(`${API_URL}/update-nurse-by-id/${id}`, nurse);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteNurseById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-nurse-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
