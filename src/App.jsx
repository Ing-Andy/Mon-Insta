import React from 'react'
import './App.css'
import Log from '../pages/log/Log'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Acceuil from '../pages/Dashbord/Acceuil/Acceuil'
import Aside from '../components/Aside/Aside'
import PostComment from '../components/Post/PostComment/PostComment'
import Connection from '../components/Connection/Connection'


export default function App() {
  const Connection = () => {}
  return (
    <BrowserRouter>
      <div className="CONTAINER">
        <aside className='generalAside'>
          <Aside />
        </aside>
        <section className='generalPage'>
            <Routes>
              <Route path='/' element={<Log/>} />
              <Route path='/acceui' element={<Acceuil />} />
            </Routes>
        </section>
      </div>
    </BrowserRouter>
  )
}
