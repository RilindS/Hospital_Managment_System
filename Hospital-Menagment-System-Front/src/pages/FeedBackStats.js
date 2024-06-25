// components/FeedBack/FeedBackStats.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { getFeedBackStats } from '../services/FeedBackService';

const FeedBackStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await getFeedBackStats();
      setStats(data);
    } catch (error) {
      console.error('Error fetching feedback stats:', error);
    }
  };

  return (
    <Container className="my-4">
      {stats ? (
        <Row>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Total Feedbacks</Card.Title>
                <Card.Text>{stats.totalFeedBacks}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Sum of Ratings</Card.Title>
                <Card.Text>{stats.sumOfRatings}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Average Rating</Card.Title>
                <Card.Text>{stats.averageRating ? stats.averageRating.toFixed(2) : 'N/A'}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <p>Loading stats...</p>
      )}
    </Container>
  );
};

export default FeedBackStats;
