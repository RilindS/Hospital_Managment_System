import axios from 'axios';


//https://localhost:44322/api/City/get-City
// Base URL for the Cities API
const API_URL = 'https://localhost:44322/api/City';

// Method to get all cities

//https://localhost:44322/api/City/get-CityName
export const getAllCitiesName = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-all-cities`);
    console.log('API response:', response.data); // Log the API response
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllCities = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-city`);
    console.log('Cities response:', response.data); // Log the response data
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

//https://localhost:44322/api/City/add-City
// Method to add a new city
export const addCity = async (city) => {
  try {
    const response = await axios.post(`${API_URL}/add-City`, city);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Method to get a city by ID (if needed)
export const getCityById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get-city-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Method to update a city by ID (if needed)
export const updateCityById = async (id, city) => {
  try {
    const response = await axios.put(`${API_URL}/update-city-by-id/${id}`, city);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Method to delete a city by ID (if needed)
export const deleteCityById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-city-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
