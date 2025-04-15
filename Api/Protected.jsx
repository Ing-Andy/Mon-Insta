import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Chargement...</div> // Ou un spinner de chargement
  }

  return user ? <Outlet /> : <Navigate to="/login" />
}