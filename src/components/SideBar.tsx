import React, { useState } from 'react'

export default function SideBar() {
    const [ isHover,setIsHover ] = useState<boolean>(false);
    const ChangeHover = ({e}:{e:HTMLDivElement}) => {
        setIsHover(!isHover);
    }
  return (
    <div className='w-[5%] bg-[#333] h-screen duration-500 hover:w-[15%] text-gray-300 shadow-lg flex flex-col justify-between  overflow-hidden group' onMouseEnter={ChangeHover} onMouseOut={ChangeHover}>
        <div className="flex">
            <p>{isHover == false ? "":"Instagram"}</p>
        </div>
        <div className="flex flex-col h-50 border-2 justify-between">
            <p className={`flex justify-${"between"} items-center gap-2`}>
                <span className='w-12 min-w-12 max-w-12 text-center border-2'>icone</span>
                <span className='text-black group-hover:text-gray-300 border-2 w-full'>{"Acceuil"}</span>
            </p>
            <p className={`flex justify-${"between"} items-center gap-2`}>
                <span className='w-12 min-w-12 max-w-12 text-center border-2'>icone</span>
                <span className='text-black group-hover:text-gray-300 border-2 w-full'>{"Recherche"}</span>
            </p>
            <p className={`flex justify-${"between"} items-center gap-2`}>
                <span className='w-12 min-w-12 max-w-12 text-center border-2'>icone</span>
                <span className='text-black group-hover:text-gray-300 border-2 w-full'>{"Abonne"}</span>
            </p>
            <p className={`flex justify-${"between"} items-center gap-2`}>
                <span className='w-12 min-w-12 max-w-12 text-center border-2'>icone</span>
                <span className='text-black group-hover:text-gray-300 border-2 w-full'>{"Ami"}</span>
            </p>
            <p className={`flex justify-${"between"} items-center gap-2`}>
                <span className='w-12 min-w-12 max-w-12 text-center border-2'>icone</span>
                <span className='text-black group-hover:text-gray-300 border-2 w-full'>{"communaute"}</span>
            </p>
        </div>
        <div className="flex flex-col">
            <p className={`flex justify-${isHover == false ? "center": "between"} items-center mb-4`}>
                <span className='w-12 min-w-12 max-w-12 text-center border-2'>icone</span>
                <span>{isHover == false ? "":"communaute"}</span>
            </p>
            <p className={`flex justify-${isHover == false ? "center": "between"} items-center mb-4`}>
                <span className='w-12 min-w-12 max-w-12 h-12 rounded-full bg-white'>icone</span>
                <span>{isHover == false ? "":"communaute"}</span>
            </p>
        </div>
    </div>
  )
}
