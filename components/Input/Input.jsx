import React from 'react'
import './Input.css'

export default function Input({type, placeholder, value, onChange, id}) {
  return (
    <div className='Input'>
        <label htmlFor={id}>{id} :</label>
        <input 
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='Input__input'
        />
    </div>
  )
}
