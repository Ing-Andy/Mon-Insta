import React, { useState } from 'react'
import './connection.css'
import Input from '../Input/Input'
// import { auth } from '../../Api/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Api/Firebase'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Api/AuthContext'



export default function Connection({inscription}) {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        mail: '',
        password: '',
    });
    const {mail, password} = formData;
    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const connection = async (e) => {
        e.preventDefault();
        try{
            await login(mail,password);
            navigate('/insta/acceuil');
        }
        catch(error){
            console.error("andy n'est pas si fort",error.message);
            // console.log("andy n'est pas si fort",error.message);
            navigate('/');
        }
    }
    
  return (
    <div className='connection'>
        <div className='connection__header'>
            <h1>Connection</h1>
        </div>
        <form className='connection__body' onSubmit={connection} >
            <div className="div__input">
                <Input type="text" placeholder="mail" id='mail' value={mail} onChange={handleChange}/>
                <Input type="password" placeholder="password" id='password' value={password} onChange={handleChange}/>
            </div>
            <button className='connection__button'>Sign In</button>   
        </form>
        <div className="div__button">
            <p>Allez a la page d'inscription <button className='inscription__button' onClick={inscription}> ici </button></p>
        </div>
    </div>
  )
}
