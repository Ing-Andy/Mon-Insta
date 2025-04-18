// import { collection, getDocs, query, where } from "firebase/firestore";
// import { useAuth } from "../Api/AuthContext"
// import { db } from "../Api/Firebase";


// const listeDonner = []
// const giveliste = () => {
// const Search = async ({name, surname, email}) => {
//     try{
//         const userRef = collection(db, "user");
//         const q = query(
//             userRef,
//             where('email', '>=' ,email),
//             where('email', '<=' ,email +'\uf8ff' )
//         );
//         const rechercheDb = await getDocs(q);

//         console.log(rechercheDb.docs);

//         listeDonner.push(rechercheDb.docs.map((doc) =>({
//             id:doc.id,
//             name:doc.name,
//             ...doc.data(),
//         })));
//         return listeDonner;
//     }catch(error){
//         console.error("andy n'est pqs si fort",error.message);
//         return listeDonner;
//     }
//     finally{
//         return listeDonner;
//     }
// }
//     Search();
// }
// export