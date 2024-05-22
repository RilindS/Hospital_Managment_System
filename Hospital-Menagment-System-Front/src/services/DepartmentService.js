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





export const addDepartment = async (department) => {
  try {
    const response = await axios.post(`${API_URL}/add-department`, department);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllDepartment = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-all-department`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDepartmentById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get-department-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateDepartmentById = async (id, department) => {
  try {
    const response = await axios.put(`${API_URL}/update-department-by-id/${id}`, department);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteDepartmentById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-department-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
