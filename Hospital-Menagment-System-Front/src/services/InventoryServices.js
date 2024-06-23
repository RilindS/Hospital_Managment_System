import axios from 'axios';

const API_URL = 'https://localhost:44322/api/Inventory'; 

//https://localhost:44322/api/Inventory/get-all-inventorys

export const addInventory = async (nurse) => {
  try {
    const response = await axios.post(`${API_URL}/add-inventory`, nurse);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllInventorys = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-all-inventorys`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getInventoryById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get-inventory-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateInventoryById = async (id, nurse) => {
  try {
    const response = await axios.put(`${API_URL}/update-inventory-by-id/${id}`, nurse);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteInventoryById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-inventory-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
