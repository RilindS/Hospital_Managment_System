

import axios from 'axios';

const API_URL = 'https://localhost:44322/api/FeedBack/';

export const getAllFeedBacks = async () => {
  const response = await axios.get(`${API_URL}get-all-feedbacks`);
  return response.data;
};

export const getFeedBackById = async (id) => {
  const response = await axios.get(`${API_URL}get-feedback-by-id/${id}`);
  return response.data;
};

export const addFeedBack = async (feedback) => {
  const response = await axios.post(`${API_URL}add-feedback`, feedback);
  return response.data;
};

export const updateFeedBackById = async (id, feedback) => {
  const response = await axios.put(`${API_URL}update-feedback-by-id/${id}`, feedback);
  return response.data;
};

export const deleteFeedBackById = async (id) => {
  const response = await axios.delete(`${API_URL}delete-feedback-by-id/${id}`);
  return response.data;
};
