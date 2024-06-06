import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setError(''); // Clear the error message on successful login
    } catch (err) {
      setError('Login failed. Please check your email and password and try again.');
    }
  };

  return (
    
    <Container className="login-container">
      {error && <div className="error-message">{error}</div>}
      <h2 className="text-center">Login</h2>
      {error && <div className="error-message">{error}</div>}
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm={2}>Email:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Col>
        </Form.Group>
        {error && <div className="error-message">{error}</div>}
        <Form.Group as={Row} className="mb-3" controlId="formPassword">
          <Form.Label column sm={2}>Password:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary" className="login-button">Login</Button>
      </Form>
      {error && <div className="error-message">{error}</div>}
    </Container>
    
  );
};

export default LoginPage;
