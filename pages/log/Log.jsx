import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import Connection from '../../components/Connection/Connection'
import './Log.css'
import Inscription from '../../components/Connection/Inscription'

export default function Log() {
    const [isForConnect, setIsForConnect] = useState(true)
    const handlechange = () => {
        setIsForConnect(!isForConnect)
    }
    
  return (
    <div className='log'>
        <h1 className='log__title'>Mon instagram</h1>
        {isForConnect ? (
            <Connection inscription={handlechange}/>
        ):(
            <Inscription connection={handlechange}/>
        )}
        <p>Ce prototype d'instagram a ete fait par le fils de cathy</p>
    </div>
  )
}
