import React, { useState } from 'react'
import './Inscription.css'
import Input from '../Input/Input'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Api/Firebase'
import { db } from '../../Api/Firebase'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Api/AuthContext'


export default function Inscription({connection}) {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [formData, setFormData] = useState({
        Tel:'',
        Name:'',
        // Date:'',
        Email:'',
        Surname:'',
        Password: '',
    })
    const {Email, Password, Name, Surname, Tel} = formData


    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const Inscription = async (e) => {
        e.preventDefault();

        try{
            await register(Email,Password,Name,Surname,Tel)
            navigate('/acceuil')
        }
        catch(error){
            console.error("andy n'est pas si fort car:", error.message);
            navigate('/')
        }
    }

  return (
    <div className='inscription'>
        <div className='inscription__header'>
            <h1>Inscription</h1>
        </div>
        <form className='inscription__body' onSubmit={Inscription}>
            <div className="div__input">
                <Input type="text" placeholder="name" id='Name' value={Name} onChange={handleChange}                />
                <Input type="text" placeholder="surname" id='Surname' value={Surname} onChange={handleChange}       />
                <Input type="number" placeholder="tel" id='Tel' value={Tel} onChange={handleChange}                 />
                <Input type="text" placeholder="email" id='Email' value={Email} onChange={handleChange}             />
                <Input type="password" placeholder="password" id='Password' value={Password} onChange={handleChange}/>
            </div>
            <button className='inscription_button' type='submit'>Sign Up</button>   
        </form>
        <div className="div__button">
            <p>Allez a la page d'inscription <button className='connection_button' onClick={connection}> ici </button></p>
        </div>
    </div>
  )
}
