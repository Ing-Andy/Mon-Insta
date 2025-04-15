import React from 'react'
import './App.css'
import Log from '../pages/log/Log'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Acceuil from '../pages/Dashbord/Acceuil/Acceuil'
import PostComment from '../components/Post/PostComment/PostComment'
import Main from '../pages/main/Main'


export default function App() {
  // const Connection = () => {}
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Log />} />
        <Route path='/' element={<Main />}>
          <Route path='acceuil' element={<Acceuil />} />
          <Route path='comment' element={<PostComment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
