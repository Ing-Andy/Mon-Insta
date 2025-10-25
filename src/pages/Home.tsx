import { useEffect, useState } from 'react'; // useId n'est pas utilisé ici, vous pouvez le retirer
import Statut from '../components/Statut';
import Post from '../components/Post';
import SideBarHome from '../components/SideBarHome';
import { useUser } from '../Api/Context';
import { supabase } from '../Api/supabaseClient';

export default function Home() {
    const { userData } = useUser(); // Récupère les données de l'utilisateur connecté
    const [ lesPosts, setLesPosts] = useState<any[]>([]);
    

    useEffect(() => {
        const takePosts = async () => {
            // Assurez-vous que l'ID de l'utilisateur connecté est disponible
            if (!userData || !userData?.[0]?.id) {
                console.warn('Aucun utilisateur connecté ou ID utilisateur manquant. Ne peut pas filtrer les posts.');
                setLesPosts([]); // Réinitialise les posts si personne n'est connecté
                return; // Sort de la fonction
            }

            const currentUserId = userData?.[0]?.id; // L'ID de l'utilisateur actuellement connecté

            const { data: postsData, error: postsError } = await supabase
                .from('posts')
                .select('*')
                // La correction clé : utiliser .neq() pour "non égal à"
                .neq('userId', currentUserId); // <-- Récupère tous les posts où 'userId' n'est PAS égal à l'ID de l'utilisateur connecté

            if (postsError) {
                console.error('Error fetching posts:', postsError);
            } else {
                setLesPosts(postsData);
                // console.log('Posts des autres utilisateurs récupérés :', postsData);
            }
            
        };

        takePosts();
    }, [userData]); // Déclenche le useEffect lorsque userData change (y compris la connexion/déconnexion)

    return (
        <div className='w-full h-full flex justify-between ml-[50px] overflow-scroll scollbar-none'>
            <main className='w-[80%] flex flex-col'>
                <header className='flex justify-center items-center w-ful '>
                    <div className="flex w-[400px]">
                        <Statut />
                        <Statut />
                        <Statut />
                    </div>
                </header>
                <section className='flex flex-col items-center'>
                    {
                        lesPosts?.map((post, index) => (
                            // Assurez-vous que les noms des propriétés (description, ImageUrl) correspondent à votre BDD
                            <Post key={index} description={post.description} image={post.ImageUrl} ismine='no' id={post.userId}/>
                        ))
                    }
                </section>
            </main>
            <SideBarHome />
        </div>
    );
}