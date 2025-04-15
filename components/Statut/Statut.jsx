import { NavLink } from 'react-router-dom'
import './Statut.css'
import React from 'react'

export default function Statut() {
  return (
    <div className='Statut'>
        <div className="StatutImage"><div><img src="#" alt="" /></div><NavLink to='#'>mon nom et mon surnom</NavLink></div>
        <div className="StatutFollow">
            <button>suivre</button>
        </div>
    </div>
  )
}
