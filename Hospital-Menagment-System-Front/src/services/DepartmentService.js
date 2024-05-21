import axios from 'axios';


//localhost:44322/api/Departments/get-all-department

const API_URL = 'https://localhost:44322/api/Departments'; 

export const getAllDepartments = async () => {
    try {
      const response = await axios.get(`${API_URL}/get-department`);
      console.log('Departments response:', response.data); // Log the response data
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
