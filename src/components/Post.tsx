import React, { useEffect, useState } from 'react';
import MiniProfil from './MiniProfil';
import Input from './Input';
import { supabase } from '../Api/supabaseClient';
import { Forward, Heart, MessageCircle } from 'lucide-react';

type PostProps = {
    image?: string;
    description?: string;
    ismine?: string;
    id?: string; // C'est l'ID de l'utilisateur qui a fait le post, pas l'ID du post lui-même
}

export default function Post({ image, description, ismine, id }: PostProps) {
    const [nom, setNom] = useState<string>('');
    const [prenom, setPrenom] = useState<string>('');
    const [ click, setClick ] = useState<boolean>(false)

    useEffect(() => {
        const takeData = async () => {
            // Ajoutez une vérification pour vous assurer que l'id est valide avant de faire la requête
            if (!id) {
                console.warn('ID utilisateur manquant pour ce post. Impossible de récupérer le nom et le prénom.');
                setNom(''); // Réinitialiser pour éviter d'afficher d'anciennes données ou des chaînes vides
                setPrenom('');
                return; // Arrêter la fonction si l'id n'est pas valide
            }

            const { data, error } = await supabase.from('users').select('name, surname').eq('id', id).single(); // <-- Mieux de sélectionner uniquement ce dont vous avez besoin
            if (error) {
                console.error('Error fetching user data for ID:', id, error); // Affichez l'ID en cas d'erreur
            } else {
                // console.log('User data fetched for ID:', id, data);
                setNom(data.name);
                setPrenom(data.surname);
            }
        };
        takeData();
    }, [id]); // <-- CORRECTION ICI : Ajoutez 'id' au tableau de dépendances !
    
    const [ open, setOpen ] = useState<boolean>(false);

    const modal = () => {
        setOpen(!open);
    }

    return (
        <div className='flex flex-col w-100 border-[1px] border-gray-500 py-2 my-4'>
            <header>
                {/* Assurez-vous que MiniProfil prend bien 'nom' et 'prenom' comme props */}
                <MiniProfil ismine={ismine} nom={nom} prenom={prenom} />
            </header>
            <section>
                <div className="w-full h-80 bg-gray-400">
                    {image && <img src={image} alt="Post" className="w-full h-full object-cover" />}
                </div>
                <div className="w-full h-14 pt-1 pl-1">{description}</div>
            </section>
            <footer className='w-full h-15 px-1'>
                <hr className='text-gray-500' />
                <div className="flex justify-between gap-2">
                    <div className="flex gap-2"><Heart onClick={()=> setClick(!click)} className={click ?`text-red-500`: `text-white`} /> <MessageCircle onClick={modal} /> </div>
                    <div className=""><Forward /></div>
                </div>
                <Input />
            </footer>
        </div>
    );
}