import React from 'react'
import './Profile.css'
import { Heart, List } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Profile({lien}) {
  return (
    <div className='Profile'>
        <div className="imageProfile">
            <div className="image">
                <img src="" alt="" />
            </div>
        </div>
        <div className="NameProfile">
            <h3><NavLink to={lien}>nom eds</NavLink></h3>
            <p>je vais faire quoi ici</p>
        </div>
        <div className="MenuProfile">
            <Heart color='white'/>
            <List color='white'/>
        </div>
    </div>
  )
}
