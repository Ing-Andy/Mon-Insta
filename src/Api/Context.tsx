import type { Session, User } from '@supabase/supabase-js'
import React, { createContext, use, useContext, useEffect, useState } from 'react'
import { supabase } from './supabaseClient';

type contextType = {
    user: User | null;
    session: Session | any;
    loading: boolean;
    userData: any[] | null;
    posts: null | any[];
    likes: null | any[];
}
const userContextType = createContext<contextType>({
    user: null,
    session: null,
    loading: false,
    userData: null,
    posts: null,
    likes:null,
})
export const useUser = () => useContext(userContextType);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [ user, setUser ] = useState<User | null>(null);
    const [ session, setSession ] = useState<Session | null>(null);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ userData, setUserData ] = useState<any[] | null>([]);
    const [ posts, setPosts ] = useState<any[] | null>(null);
    const [ likes, setLikes ] = useState<any[] | null>(null);

    useEffect(() => {
    const myContext = async () => {
        const { data: { session } , error } = await supabase.auth.getSession();
        if (error) {
            console.error('Error fetching session:', error);
        } else {
            setSession(session);
            setUser(session?.user ?? null); 
        }
        const { data, error: userError } = await supabase.from('users').select('*').eq('id', session?.user.id).single();
        if (userError) {
            console.error('Error fetching user data:', userError);
        } else {
            setUserData(data);
            // console.log(data);
        }
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            console.log('Auth state changed:', event);
        });
        const { data: postsData, error: postsError } = await supabase.from('posts').select('*').eq('userId', session?.user.id);
        if (postsError) {
            console.error('Error fetching posts:', postsError);
        } else {
            setPosts(postsData);
            // console.log(postsData);
        }
    };
    myContext();
}, []);
    return (
        <userContextType.Provider value={{ user, session, loading, userData , likes, posts }}>
            {children}
        </userContextType.Provider>
    )
}


