import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./Firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (u)=>{
            setUser(u)
            setLoading(false)
        })
        return unsubscribe;
    },[])

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const register = async (email ,password ,name, surname, tel)=> {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = res.user;
        
        await setDoc(doc(db, "user", newUser.uid),{
            uid:newUser.uid,
            name:name,
            surname:surname,
            tel:tel,
            email:email,
            createAt: Date.now(),
            updateAt: Date.now(),
        })
    }
    const logOut = () => signOut(auth);

    return(
        <AuthContext.Provider value={{user,loading,login,logOut,register}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}