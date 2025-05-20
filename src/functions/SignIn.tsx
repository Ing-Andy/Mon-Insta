// import React from "react";
// import { supabase } from "../Api/supabaseClient";

// type SignProps = {
//   mail: string;
//   password: string;
// };

// export async function SignIn({ mail, password }: SignProps) {
  
//   try {
//     const { data } = await supabase.auth.signInWithPassword({
//       email:mail,
//       password:password,
//     })
//     if(data){
//       console.log('your connected')
//     }

//   } catch (error) {
//     console.error("Erreur lors de la soumission :", error);
//   }
// }
