import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to Hospital Management System</h1>
      {!user && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </div>
  );
};

export default HomePage;
