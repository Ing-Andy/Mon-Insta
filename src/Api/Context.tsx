import type { Session, User } from '@supabase/supabase-js'
import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import { supabase } from './supabaseClient';

type contextType = {
    user: User | null;
    session: Session | null;
    loading: boolean;
}
const userContext = createContext<contextType>({
    user: null,
    session: null,
    loading:false,
});

export const useUser = () => useContext(userContext);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [ user, setUser ] = useState< User | null >(null);
    const [ session, setSession ] = useState< Session | null >(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    
    useEffect(()=>{
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(!loading);
        })
        const { data: { subscription}, } = supabase.auth.onAuthStateChange((_event,session) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(!loading);
        })
        return () => { subscription.unsubscribe()};
    },[])
    return (
        <userContext.Provider value={{ user, session, loading }}>
            {children}
        </userContext.Provider>
    )
}

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import type { Session, User } from '@supabase/supabase-js';
// import { supabase } from '../Api/supabaseClient'; // adapte le chemin

// // Définir le type du contexte
// type UserContextType = {
//   user: User | null;
//   session: Session | null;
// };

// // Créer le contexte
// const UserContext = createContext<UserContextType>({
//   user: null,
//   session: null,
// });

// // Hook pour utiliser le contexte
// export const useUser = () => useContext(UserContext);

// // Composant Provider
// export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [session, setSession] = useState<Session | null>(null);

//   useEffect(() => {
//     // Obtenir la session actuelle
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//       setUser(session?.user ?? null);
//     });

//     // Ecouter les changements de session (connexion / déconnexion)
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//       setUser(session?.user ?? null);
//     });

//     // Nettoyer l'écouteur
//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, session }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
