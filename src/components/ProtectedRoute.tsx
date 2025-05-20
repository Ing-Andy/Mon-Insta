// import React, { useEffect, type ReactNode } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { supabase } from '../Api/supabaseClient';


// export default function ProtectedRoute({children}:{children:ReactNode}) {
//   const navigate = useNavigate();

//   useEffect(()=>{
//     const Chekuser = async () => {
//       const { data: { session } } = await supabase.auth.getSession(); 
//       if(!session){
//         navigate('/');
//       }
//     }
//     Chekuser();
//   },[navigate]);

//   return <>{children}</>
// }



// import { Navigate } from "react-router-dom";
// import { useUser } from "../Api/Contex";
// import type { ReactNode } from "react";

// export default function ProtectedRoute({ children }: { children: ReactNode }) {
//   const { user, loading } = useUser();

//   if (loading) return <p>Chargement...</p>;
//   if (!user) return <Navigate to="/login" replace />;

//   return children;
// }
