import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeedBackList from '../components/FeedBack/FeedBackList';

const FeedBackPage = () => {
  const navigate = useNavigate();

  const handleAddFeedBackClick = () => {
    navigate('/admin/feedback/add');
  };

  return (
    <div>
      <h1>Feedback Management</h1>
      <button onClick={handleAddFeedBackClick}>Add Feedback</button>
      <FeedBackList />
    </div>
  );
};

export default FeedBackPage;
