import axios from 'axios';

const API_URL = 'https://localhost:44322/api/Room'; 


//https://localhost:44322/api/Room/get-rommName

export const getAllRoomsName = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-rommName`);
    console.log('API response:', response.data); // Log the API response
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const addRoom = async (Room) => {
  try {
    const response = await axios.post(`${API_URL}/add-Room`, Room);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllRooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-all-room`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getRoomById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get-room-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateRoomById = async (id, room) => {
  try {
    const response = await axios.put(`${API_URL}/update-room-by-id/${id}`, room);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteRoomById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-room-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
