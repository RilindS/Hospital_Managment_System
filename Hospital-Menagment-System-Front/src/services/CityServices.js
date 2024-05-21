import axios from 'axios';


//https://localhost:44322/api/City/get-City

const API_URL = 'https://localhost:44322/api/City'; 

export const getAllCities = async () => {
    try {
      const response = await axios.get(`${API_URL}/get-City`);
      console.log('Cities response:', response.data); // Log the response data
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
