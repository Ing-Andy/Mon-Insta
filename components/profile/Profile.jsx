import React from 'react'
import './Profile.css'
import { Heart, List } from 'lucide-react'

export default function Profile() {
  return (
    <div className='Profile'>
        <div className="imageProfile">
            <div className="image">
                <img src="" alt="" />
            </div>
        </div>
        <div className="NameProfile">
            <h3>nom eds</h3>
            <p>je vais faire quoi ici</p>
        </div>
        <div className="MenuProfile">
            <Heart color='white'/>
            <List color='white'/>
        </div>
    </div>
  )
}
