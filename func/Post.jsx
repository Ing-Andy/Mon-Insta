import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../Api/Firebase";

export default async function Post(userId, postId, imageUrl, description) {
  const postData = {
    id: postId,
    imageUrl,
    description,
    createdAt: new Date().toISOString(),
  };

  const userRef = doc(db, "user", userId);
  const postRef = doc(db, "posts", postId);

  await setDoc(postRef, postData); // Ajoute le post à une collection "posts"
  await updateDoc(userRef, {
    post: arrayUnion(postId),
  });
}
