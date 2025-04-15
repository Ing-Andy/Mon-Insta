import './Acceuil.css'
import React, { useState } from 'react'
import Aside from '../../../components/Aside/Aside'
import Statut from '../../../components/Statut/Statut'
import AsideAceuil from '../../../components/Aside/AsideAceuil'
import PostScroll from '../../../components/Post/PostScroll/PostScroll'
import PostComment from '../../../components/Post/PostComment/PostComment'

export default function Acceuil() {
  const [etat, setEtat] = useState(false)
  const handleComment = () => {
      setEtat(!etat)
  }
  return (
    <div className='Acceuil'>
        <main className="mainAceuil">
          <section className='section1'>
            <ul className='listeStatut'>
              <li><Statut /></li>
              <li><Statut /></li>
              <li><Statut /></li>
              <li><Statut /></li>
              <li><Statut /></li>
              <li><Statut /></li>
              <li><Statut /></li>
            </ul>
          </section> 
          <p className='recentPost'>Les posts les plus recents</p>
          <section className="section2">
            <PostScroll />
            <PostScroll />
            <PostScroll />
            <PostScroll />
            <PostScroll />
            <PostScroll />
            <PostScroll />
          </section> 
        </main>
        <aside className="AsideAceuil">
          <AsideAceuil />
        </aside>
    </div>
  )
}
