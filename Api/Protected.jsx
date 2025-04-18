import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Chargement...</div>; // Tu peux mettre un spinner si tu veux
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
