import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.getItem('token'));


  //https://localhost:44322/api/Users/authenticate
  const login = async (username, password) => {
    const response = await axios.post('https://localhost:44322/api/Users/authenticate', { username, password });
    const token = response.data.token;
    localStorage.setItem('token', token);
    setAuth(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
