import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { user, checkTokenValidity } = useContext(AuthContext);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      await checkTokenValidity();
      setIsChecking(false);
    };
    checkToken();
  }, [checkTokenValidity]);

  if (isChecking) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && roles.indexOf(user.role) === -1) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
