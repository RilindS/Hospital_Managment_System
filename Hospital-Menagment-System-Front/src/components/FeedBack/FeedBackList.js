import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteFeedBackById, getAllFeedBacks } from '../../services/FeedBackService';

const FeedBackList = () => {
  const [feedbacks, setFeedBacks] = useState([]);

  useEffect(() => {
    fetchFeedBacks();
  }, []);

  const fetchFeedBacks = async () => {
    try {
      const data = await getAllFeedBacks();
      setFeedBacks(data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFeedBackById(id);
      fetchFeedBacks(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Comment</th>
            <th>Doctor Name</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map(feedback => (
            <tr key={feedback.feedBackId}>
              <td>{feedback.comment}</td>
              <td>{feedback.doctorName}</td>
              <td>{feedback.rating}</td>
              <td>
                <Link to={`/admin/feedback/edit/${feedback.feedBackId}`} className="btn btn-primary btn-sm me-2">Edit</Link> 
                <Button variant="danger" size="sm" onClick={() => handleDelete(feedback.feedBackId)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FeedBackList;
