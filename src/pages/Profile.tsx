import React, { useState } from 'react'


export default function Profile() {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const myModal = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className="w-full flex flex-col items-center pt-4">
        <div className="w-full flex justify-around pb-2">
            <div className="flex flex-col items-center gap-4">
                <div className="flex bg-gray-400 w-60 h-60 rounded-full items-center justify-center text-black"> Votre profile</div>
                <div className="flex bg-gray-400 w-20 h-20 rounded-full items-center justify-center text-black cursor-pointer" onClick={myModal}>+</div>
            </div>
            <div className="flex flex-col justify-center w-[60%] h-50">
                <div className="flex justify-around items-center w-[60%]">
                    <p className="text-center text-gray-400 font-bold font-Poppins">Mon nom</p>
                    <button className='border-none bg-[#333] px-2 py-1 rounded-md text-gray-300'>mes follow</button>
                    <button className='border-none bg-[#333] px-2 py-1 rounded-md text-gray-300'>mes abonne</button>
                </div>
                <p className='pl-3 text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae placeat sed enim! Quod consequatur aperiam voluptas officiis quo voluptatibus totam vitae laudantium assumenda, accusamus neque deleniti veritatis, exercitationem qui iusto!</p>
            </div>
        </div>
        <hr className='w-[80%]'/>
        <div className="flex justify-center w-full">
            <div className="flex justify-around w-[400px]">
                <span>enregistrement</span>
                <span> publication</span>
                <span>mes yeucoux</span>
            </div>
        </div>
        {isOpen == true ? (
            <div className="flex w-screen h-screen items-center justify-center z-20 absolute bacdrop ">
                <div className="flex flex-col w-100 h-60 border-1 bg-black">
                    <p className='text-end cursor-pointer' onClick={myModal}> close </p>
                    <div className="flex h-full">
                        <div className="flex flex-grow w-[70%] shadow-sm shadow-gray-700">
                           <img src="" alt="" />
                        </div>
                        <div className="flex flex-col justify-end h-full w-[30%]">
                            <input type="file" accept='image/*' name="" id=""/>
                            <button className='cursor-pointer hover:text-blue-400 duration-500 text-gray-400'>poster</button>
                        </div>
                    </div>
                </div>
            </div>
        ):(<></>)}
    </div>
  )
}
