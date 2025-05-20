// import React from 'react'
// import { supabase } from "../Api/supabaseClient";

// type SignProps = {
//   mail: string;
//   password: string;
//   name: string;
//   surName: string;
//   tel:number;
// };

// export async function  SignUp({ mail, password, name, surName, tel }: SignProps) {
  
//   try {
//     console.log("Email:", mail);
//     console.log("Password:", password);
//     const { data: authData , error: authError } = await supabase.auth.signUp({
//       email:mail,
//       password:password,
//     })
//     if(authError){
//       console.error(authError.message);
//       return;
//     }
//     if(authData){
//       console.log('your connected')
//     }

//     const userId = authData?.user?.id ;
//     const { error: insertError} = await supabase.from('users').insert([{
//         id: userId,
//         email:mail,
//         password:password,
//         name:name,
//         surName:surName,
//         tel:tel,
//     }])
//     if (insertError) {
//         console.error("erreur", insertError.message)
//     }else{
//         console.log('reussi')

//     }
//   } catch (error) {
//     console.error("Erreur lors de la soumission :", error);
//   }
// }
