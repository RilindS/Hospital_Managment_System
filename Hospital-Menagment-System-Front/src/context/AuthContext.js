import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const refreshToken = useCallback(async () => {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    if (token && refreshToken) {
      try {
        const response = await axios.post('https://localhost:44322/api/Account/refresh-token', {
          token,
          refreshToken
        });

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        const decoded = jwtDecode(response.data.token);
        setUser({
          email: decoded.email,
          role: decoded.role
        });
      } catch (error) {
        console.error('Token refresh failed', error);
        logout();
      }
    }
  }, []);

  const checkTokenValidity = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        // Token is expired
        refreshToken();
      } else {
        // Token is valid
        setUser({
          email: decoded.email,
          role: decoded.role
        });
      }
    }
  }, [refreshToken]);

  useEffect(() => {
    checkTokenValidity();

    // Set interval to refresh token
    const interval = setInterval(() => {
      refreshToken();
    }, 14 * 60 * 1000); // 14 minutes

    return () => clearInterval(interval);
  }, [checkTokenValidity, refreshToken]);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://localhost:44322/api/Account/login', { email, password });
      const { token, refreshToken } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
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
      const response = await axios.post('https://localhost:44322/api/Account/register', { email, password, role });
      const { isPatient, isDoctor } = response.data;
      if (isPatient) {
        navigate('/add-patient');
      } else if (isDoctor) {
        navigate('/add-doctor');
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, checkTokenValidity }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
