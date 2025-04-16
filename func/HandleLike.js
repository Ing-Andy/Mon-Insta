import {doc, setDoc} from 'firebase/firestore'
import { useAuth } from '../Api/AuthContext';
import { db } from '../Api/Firebase';

const { user } = useAuth();

export const HandleLike = async ( param ) => {
    const { uid } = param;

    if(unsubscribe){
        await setDoc(doc(db,"user",uid),{
            like:[].push(user.uid),    
        })
    }
}

export const handleComment = async ( comment ) => {
    await setDoc(doc(db,"user",user.uid),{
        comment:"",
    })
}