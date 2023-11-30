import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ path, element }) => {
  // Check if the user is authenticated, otherwise redirect to login
  const isAuthenticated = !!localStorage.getItem('authToken');

  return isAuthenticated ? (
    
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
