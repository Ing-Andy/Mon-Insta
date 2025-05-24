import React from 'react'
import MiniProfil from './MiniProfil'
import Input from './Input'

type PostProps = {
    image?: string;
    description?: string;
    ismine?: string;
}

export default function Post({ image, description, ismine}: PostProps) {
  return (
    <div className='flex flex-col w-100 border-[1px] border-gray-500 py-2 my-4'>
        <header>
            <MiniProfil ismine={ismine}/>
        </header>
        <section>
            <div className="w-full h-80 bg-gray-400">
                {image && <img src={image} alt="Post" className="w-full h-full object-cover" />}
            </div>
            <div className="w-full h-14 pt-1 pl-1">{description}</div>
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
