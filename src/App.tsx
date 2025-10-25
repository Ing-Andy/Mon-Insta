import Home from './pages/Home'
import Profile from './pages/Profile'
import SideBar from './components/SideBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Recherche from './pages/Recherche'
import CreatePost from './pages/CreatePost'
import CreateProfie from './pages/CreateProfie'
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
        <Route path='/createProfil' element={<CreateProfie />} />
        <Route path='/createPost' element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  )
}
