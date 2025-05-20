import React from 'react'
import Statut from '../components/Statut'
import Post from '../components/Post'
import SideBarHome from '../components/SideBarHome'

export default function Home() {
  return (
    <div className='w-full h-full flex justify-between ml-[50px] overflow-scroll scollbar-none'>
        <main className='w-[80%] flex flex-col'>
            <header className='flex justify-center items-center w-ful '>
                <div className="flex w-[400px]">
                    <Statut />
                    <Statut />
                    <Statut />
                </div>
            </header>
            <section className='flex flex-col items-center'>
                <Post />
                <Post />
                <Post />
            </section>
        </main>
        <SideBarHome />
    </div>
  )
}
