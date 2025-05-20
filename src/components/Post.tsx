import React from 'react'
import MiniProfil from './MiniProfil'
import Input from './Input'

export default function Post() {
  return (
    <div className='flex flex-col w-100 border-[1px] border-gray-500 py-2 my-4'>
        <header>
            <MiniProfil ismine='no'/>
        </header>
        <section>
            <div className="w-full h-80 bg-gray-400"></div>
            <div className="w-full h-14 pt-1 pl-1">descrip</div>
        </section>
        <footer className='w-full h-15 px-1'>
            <hr  className='text-gray-500 '/>
            <div className="flex justify-between">
                <div className="flex">heart comment</div>
                <div className="">partage</div>
            </div>
            <Input />
        </footer>
    </div>
  )
}
