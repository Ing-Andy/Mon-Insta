// import { useAuth } from '../context/AuthContext'
// import { Navigate, Outlet } from 'react-router-dom'

// export default function Protected() {
//   const { user, loading } = useAuth()

//   if (loading) {
//     return <div>Chargement...</div> // Ou un spinner de chargement
//   }

//   return user ? <Outlet /> : <Navigate to="/login" />
// }
import React from 'react';
import { useAuth } from './AuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './Firebase';

const Protected = ({ children }) => {
 const { user, loading } = useAuth();
};

export default Protected;