import React from 'react'

function Statut() {
  return (
    <div className='w-48 h-50 flex flex-col shadow py-1 group text-gray-300'>
        <div className="flex flex-col items-center">
            <div className="w-25 h-25 rounded-full bg-gray-400"></div>
            <p className="font-bold text-sm mt-2">Name and surName</p>
        </div>
        <button className='text-gray-300 mt-4 group-hover:text-blue-600 duration-500 cursor:pointer'> suivre </button>
    </div>
  )
}

export default Statut