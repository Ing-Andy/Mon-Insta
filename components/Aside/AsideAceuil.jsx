import React from 'react'
import './AsideAceuil.css'
import Profile from '../profile/Profile.jsx'
import { NavLink } from 'react-router-dom'

export default function AsideAceuil() {
  return (
    <div className='AsideAceuilContainer'>
        <header className="headerAsideAceuil">
          <Profile lien="/profile" />
        </header>
        <div className="params">
          <p>suggetion d'ami</p>
          <hr width='80%'/>
        </div>
        <section className="sugesstion">
          <Profile lien="" />
          <Profile lien="" />
          <Profile lien="" />
          <Profile lien="" />
          <Profile lien="" />
        </section>
        <footer className="footerAsideAceuil">
          <p>
            <NavLink>book</NavLink>.
            <NavLink>livre</NavLink>.
            <NavLink>cahier</NavLink>.
            <NavLink>sac</NavLink>.
            <NavLink>yess</NavLink>.
            <NavLink>yess</NavLink>.
            <NavLink>yess</NavLink>.
            <NavLink>yess</NavLink>.
            <NavLink>bookyo</NavLink>
          </p>
        </footer>
        <div className="dedicace">Fais par l'ing Andy</div>
    </div>
  )
}
