import './PostScroll.css'
import Input from '../../Input/Input'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Profile from '../../profile/Profile.jsx'
import { useNavigate } from 'react-router-dom'
import { Forward, Heart, List, MessageCircle, Plane, Smile } from 'lucide-react'

export default function PostScroll() {
    const navigate = useNavigate();
    const [value, setValue] = useState('') 
    
  return (
    <div className='PostScroll'>
        <header className="headerPostScroll">
            <Profile /> 
        </header>
        <section className="ImagePostScroll">
            <div className="imagePost">

            </div>
            <p className='order'>
                <span>
                    <NavLink><Heart /></NavLink>
                    <span onClick={navigate('/instagram/nav')}><MessageCircle /></span>
                    <NavLink><Plane /></NavLink>
                </span>
                <span>
                    <List />
                </span>
            </p>
        </section>
        <footer className="fouterPostScroll">
            <div> 
                <Smile style={{margin:'5px'}}/> 
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='votre commentaire'  />
                <button style={{margin:'5px',backgroundColor:'transparent',border:'none',color:'white'}}><Forward /></button> 
            </div>
        </footer>
    </div>
  )
}
