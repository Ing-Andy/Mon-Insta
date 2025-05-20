import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SideBar from './components/SideBar'
import SideBarHome from './components/SideBarHome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Recherche from './pages/Recherche'
// import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/IG/*' element={(
          // <ProtectedRoute>
            <div className='flex w-full h-screen overflow-hidden'>
              <SideBar />
              <Routes>
                <Route path='acceuil' element={<Home />} />
                <Route path='recherche' element={<Recherche />} />
              </Routes>
            </div>
          // </ProtectedRoute>
        )} />
        <Route path='/profil' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
