import React from 'react'
import MiniProfil from './MiniProfil'

export default function SideBarHome() {
  return (
    <div className='flex flex-col pt-2 w-[30%] '>
        <MiniProfil ismine='yes' />
        <p>suggestions</p>
        <hr className='w-[80%] text-gray-800' />
        <hr className='w-[30%] text-blue-400' />
        <div className="flex flex-col h-80 my-4 overflow-scroll scollbar-none">
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
            <MiniProfil ismine='no' />
        </div>
        <div className="flex w-full justify-center items-center">
            <div className="w-60 flex justify-center flex-wrap *:text-gray-800 *:hover:text-gray-400 *:cursor-pointer">
                <span>home</span>
                <span>canva</span>
                <span>home</span>
                <span>k-ty</span>
                <span>Nangop</span>
                <span>lonfo</span>
                <span>tchounkeu</span>
                <span>canva</span>
                <span>home</span>
                <span>k-ty</span>
            </div>  
        </div>
        <p className='text-center text-gray-300 font-bold font-Poppins mt-4'>Fais par Andy Nzoupet </p>
    </div>
  )
}
