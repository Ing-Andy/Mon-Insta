import Aside from '../../components/Aside/Aside'
import './Main.css'
// import './Main.css'
import React from 'react'

export default function Main({children}) {
  return (
    <div className='Main CONTAINER'>
        <aside className='generalAside'>
            <Aside />
        </aside>
        <main className='generalPage'>
            {children}
        </main>
    </div>
  )
}
