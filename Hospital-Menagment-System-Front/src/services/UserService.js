// services/UserService.js
// services/UserService.js
import axiosInstance from './axiosInstance';

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get('/Account/current-user');
    return response.data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    throw error;
  }
};

