import React, { use, useEffect, useState } from 'react'
import { useAuth } from '../../Api/AuthContext'
import './UserProfile.css'
import { ChevronsLeftRightEllipsis, ContactRound, PaintbrushVerticalIcon, Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Api/Firebase';

export default function UserProfile() {
    const { user, loading } = useAuth()
    const [userData,setUserData] = useState(null);
    const [profileLoading, setProfileLoading] = useState(true) ;
    useEffect(()=>{
        const fetchUserData = async () => {
            if(user){
                try{
                    const userDonnee = await getDoc(doc(db, "user", user.uid ));
                    if(userDonne.exists()){
                        setUserData(userDonnee.data)
                    }
                }
                catch(error){
                    console.error("Error fetching user data:", error);
                }
                finally{
                    setProfileLoading(false)
                }
            }
        }
        fetchUserData()
    },[user])
    if (loading || profileLoading) {
        return <div className="loading">Chargement du profil...</div>;
    }

    if (!user || !userData) {
        return <div className="error">Utilisateur non connecté ou données non disponibles</div>;
    }
    const count1 = 0;
    const count2 = 0;
    const count3 = 0;
  return (
    <div className='MonProfile'>
        <header className="headerProfile">
            <div className="image_Profile">
                <img src="" alt="" />
            </div>
            <div className="Info">
                <div className="optionPofil">
                    <p>{userData.name}dsaknaskda</p>
                    <button className='buttonOption'>Modifier le profil</button>
                    <button className='buttonOption'>voir l'archive</button>
                </div>
                <div className="infoProfile">
                    <p><span>{count1}</span>abonnés</p>
                    <p><span>{count2}</span>publications</p>
                    <p><span>{count3}</span>abonnements</p>
                </div>
                <div className="textProfile">
                    <p>{user.name}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a impedit molestiae reicie dksadjs dnjnajf a ajlfejkafaj  adkmakdma</p>
                </div>
            </div>
        </header>
        <div className='AddContainer'>
                <div className="AddCon">
                    <NavLink to=''>
                      <Plus color='#333' width='80px' height='80px' />
                    </NavLink>
                </div>
        </div>
        <section className='sectionProfile'>
            <div className="SousSection1">
                <hr className='line'/>
                <div className="titleSectionProfile">
                    <div className="texteTitleSectionProfile1">
                        <NavLink to=''><PaintbrushVerticalIcon /> publiciter</NavLink>
                    </div>
                    <div className="texteTitleSectionProfile2">
                        <NavLink to=''><ChevronsLeftRightEllipsis />enregistrements</NavLink>
                    </div>
                    <div className="texteTitleSectionProfile3">
                        <NavLink to=''><ContactRound /> identifie(e)</NavLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
