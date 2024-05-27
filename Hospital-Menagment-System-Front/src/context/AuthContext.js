import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Import jwtDecode as a named import
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser({
        email: decoded.email,
        role: decoded.role
      });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://localhost:44322/api/Account/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      const decoded = jwtDecode(token);
      setUser({
        email: decoded.email,
        role: decoded.role
      });

      // Redirect based on user role
      if (decoded.role === 'Admin') {
        navigate('/admin');
      } else if (decoded.role === 'Doctor') {
        navigate('/doctor');
      } else if (decoded.role === 'Patient') {
        navigate('/patient');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const register = async (email, password, role) => {
    try {
      await axios.post('https://localhost:44322/api/Account/register', { email, password, role });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
