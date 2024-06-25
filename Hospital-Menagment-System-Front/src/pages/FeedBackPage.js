import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeedBackList from '../components/FeedBack/FeedBackList';
import FeedBackStats from './FeedBackStats';

const FeedBackPage = () => {
  const navigate = useNavigate();

  const handleAddFeedBackClick = () => {
    navigate('/admin/feedback/add');
  };

  return (
    <div>
      <h1>Feedback nga pacientet</h1>
      {/* <button onClick={handleAddFeedBackClick}>Add Feedback</button> */}
      <FeedBackStats />
      <FeedBackList />

    </div>
  );
};

export default FeedBackPage;
