import { Home, Instagram, MapPin, Phone, Search, Settings } from 'lucide-react'
import React, { useState } from 'react'
import './Aside.css'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Aside() {
    const [isHover, setIsHover] = useState(false);
    
  return (
    <div className="AsideContainer" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <div className='Aside' >
            <div className='AsideHeader'>
                <table>
                    <tbody>
                        <tr className='tr' >
                            <td className='td'><Instagram /></td>
                            <td className='td1'>{isHover && 'Instagram'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="AsideNav">
               <table>
                <tbody>
                    <tr>
                        <td className='td'><Home /></td>
                        <td className='td1'><NavLink to='recherche'>{isHover && 'Accueil'}</NavLink></td>
                    </tr>
                    <tr>
                        <td className='td'><Search /></td>
                        <td className='td1'><NavLink to='search'>{isHover && 'recherche'}</NavLink></td>
                    </tr>
                    <tr>
                        <td className='td'><MapPin /></td>
                        <td className='td1'><NavLink to='localisation'>{isHover && 'Accueil'}</NavLink></td>
                    </tr>
                    <tr>
                        <td className='td'><Home /></td>
                        <td className='td1'><NavLink to='voyons'>{isHover && 'Accueil'}</NavLink></td>
                    </tr>
                    <tr>
                        <td className='td'><Home /></td>
                        <td className='td1'>{isHover && 'Accueil'}</td>
                    </tr>
                </tbody>
               </table>
            </div>
            <div className='asideEnd'>
                <table>
                    <tbody>
                        <tr>
                            <td className='td'><Settings/></td>
                            <td className='td1'>{isHover && 'parametre'}</td>
                        </tr>
                        <tr>
                            <td className='td'><div className="profil"></div></td>
                            <td className='td1'><NavLink to='profil'>{isHover && 'profile'}</NavLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
