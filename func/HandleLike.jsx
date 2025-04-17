import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../Api/Firebase"
import { use } from "react";


export const Like = async (UserId, PostId) => {

    try{
        const postRef = doc(db, "user",PostId);

        await updateDoc(postRef, {
            Like:arrayUnion(UserId)
        })
        return true;
    }
    catch (error) {
        console.error("Error adding like: ", error);
        return false;
    }
}
export const UnLike = async (UserId, PostId) => {

    try{
        const postRef = doc(db, "user",PostId);

        await updateDoc(postRef, {
            Like:arrayRemove(UserId)
        })
        console.log('vous avez likez');
        return true;
    }
    catch (error) {
        console.error("Error adding like: ", error);
        return false;
    }
}

export const Comment = async (PostId, CommentData) => {

    try{
        const CommentRef = doc(db,"user",PostId,"comment",Date.now().toString());
    
    await updateDoc(CommentRef,{
        text: CommentData.text,
        UserId: CommentData.UserId,
        userName: CommentData.userName,
        createAt: new Date().toString(),
    })
    return true;
    }
    catch(error){
        console.error("andy n'est pas ci fort car:",error.message)
    }
}