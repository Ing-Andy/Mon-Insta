import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Api/AuthContext'
import './UserProfile.css'
import { ChevronsLeftRightEllipsis, ContactRound, Cross, PaintbrushVerticalIcon, Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Api/Firebase';
import Post from "../../func/Post";


export default function UserProfile() {
    const { user, loading } = useAuth();
    const [showPostForm, setShowPostForm] = useState(false);
    const [ profile, setProfile ] = useState(''); 
    const [imageFile, setImageFile] = useState(null);
    const [description, setDescription] = useState("");
    const [preview, setPreview] = useState(null);
    
    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setImageFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const postId = Date.now().toString();
        const imageUrl = await uploadImage(imageFile, postId); // Fonction à créer
        await Post(user.uid, postId, imageUrl, description);
        setShowPostForm(false);
    } catch (error) {
        console.error("Erreur lors de la création du post :", error);
    }
    };

    const uploadImage = async (file, postId) => {
    const storage = getStorage();
    const storageRef = ref(storage, `posts/${postId}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
    };

    useEffect( () => {
        const fetchUserData = async () => {
            try {
                const userRef = doc(db, "user", user.uid);
                const UserDate = await getDoc(userRef) ;
                if(UserDate.exists()) {
                    const { name, surname } = UserDate.data();
                    console.log(UserDate)
                    console.log(name, surname);
                    setProfile(UserDate.data());
                }
            }
            catch (error) {
                console.error("Error fetching user data: ", error.message);
            }
        }
        fetchUserData();
    }, []);
    // console.log(user);

    const count1 = 0;
    const count2 = 0;
    const count3 = 0;

  return (
    <div className='MonProfile'>
        <header className="headerProfile">
            <div className="image_Profile">
                <img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/blog-it1.jpg" alt="" />
            </div>
            <div className="Info">
                <div className="optionPofil">
                    <p>{profile.name} {profile.surname}</p>
                    <button className='buttonOption'>Modifier le profil</button>
                    <button className='buttonOption'>voir l'archive</button>
                </div>
                <div className="infoProfile">
                    <p><span>{count1}</span>abonnés</p>
                    <p><span>{count2}</span>publications</p>
                    <p><span>{count3}</span>abonnements</p>
                </div>
                <div className="textProfile">
                    {/* <p>{user.name}</p> */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a impedit molestiae reicie dksadjs dnjnajf a ajlfejkafaj  adkmakdma</p>
                </div>
            </div>
        </header>
        <div className='AddContainer'>
                <div className="AddCon" onClick={() => setShowPostForm(true)}>
                    {/* <NavLink to=''  onClick={Post}> */}
                      <Plus color='#333' width='80px' height='80px' />
                    {/* </NavLink> */}
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
        {showPostForm && (
        <div className="postForm">
            <form onSubmit={handleSubmit}>
                <p className="close"><Cross onClick={() => setShowPostForm(false)}/></p>
                <input type="file" className="found" accept="image/*" onChange={handleImageChange} />
                {preview && <img src={preview} alt="preview" className="imagepos" />}
                <textarea placeholder="Description..." value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Publier</button>
            </form>
        </div>
        )}
    </div>
  )
}
