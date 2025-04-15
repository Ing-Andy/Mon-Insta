// Import des modules nécessaires de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // pour l'authentification
import { getFirestore } from 'firebase/firestore'; // pour Firestore

// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD6XGYgq8Dkq3paDhUr85_7SeVFrFx4ZtY",
  authDomain: "instagramdatabase-4845e.firebaseapp.com",
  projectId: "instagramdatabase-4845e",
  storageBucket: "instagramdatabase-4845e.appspot.com",
  messagingSenderId: "214187810029",
  appId: "1:214187810029:web:9d61213e02699f269080e4"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de l'authentification et Firestore
const auth = getAuth(app);    // Authentification
const db = getFirestore(app); // Firestore

// Exportation des objets nécessaires pour les utiliser dans d'autres fichiers
export { auth, db };
