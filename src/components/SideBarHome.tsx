import React, { useEffect, useState } from 'react';
import MiniProfil from './MiniProfil';
import { useUser } from '../Api/Context';
import { supabase } from '../Api/supabaseClient';

export default function SideBarHome() {
    const { userData } = useUser(); // Récupère les données de l'utilisateur connecté
    // Renommé pour plus de clarté : 'lesAutresUtilisateurs' au lieu de 'lesAutres'
    const [lesAutresUtilisateurs, setLesAutresUtilisateurs] = useState<any[]>([]);

    useEffect(() => {
        const fetchOtherUsers = async () => { // Renommé la fonction pour plus de clarté
            if (!userData || !userData.id) {
                console.warn('Aucun utilisateur connecté ou ID utilisateur manquant. Ne peut pas filtrer les suggestions.');
                setLesAutresUtilisateurs([]); // Réinitialise si personne n'est connecté
                return;
            }

            const currentUserId = userData.id;

            const { data: usersData, error: usersError } = await supabase
                .from('users') // Toujours la table 'users'
                .select('id, name, surname') // <-- Sélectionnez explicitement les colonnes nécessaires
                // La correction clé : utiliser .neq() sur la colonne 'id' de la table 'users'
                .neq('id', currentUserId); // <-- Filtre tous les utilisateurs dont l'ID n'est PAS celui de l'utilisateur connecté

            if (usersError) {
                console.error('Error fetching other users:', usersError.message); // Afficher le message d'erreur
            } else {
                setLesAutresUtilisateurs(usersData);
                console.log('Autres utilisateurs récupérés :', usersData);
            }
        };

        fetchOtherUsers();
    }, [userData]); // Déclenche le useEffect lorsque userData change

    return (
        <div className='flex flex-col pt-2 w-[30%] '>
            <MiniProfil ismine='yes' />
            <p>suggestions</p>
            <hr className='w-[80%] text-gray-800' />
            <hr className='w-[30%] text-blue-400' />
            <div className="flex flex-col h-80 my-4 overflow-scroll scollbar-none">
                {
                    lesAutresUtilisateurs?.map((user, index) => ( // Utiliser 'lesAutresUtilisateurs'
                        <MiniProfil key={index} ismine='no' nom={user.name} prenom={user.surname} />
                    ))
                }
            </div>
            <div className="flex w-full justify-center items-center">
                <div className="w-60 flex justify-center flex-wrap *:text-gray-800 *:hover:text-gray-400 *:cursor-pointer">
                    <span>home</span>
                    <span>canva</span>
                    <span>home</span>
                    <span>k-ty</span>
                    <span>Nangop</span>
                    <span>lonfo</span>
                    <span>tchounkeu</span>
                    <span>canva</span>
                    <span>home</span>
                    <span>k-ty</span>
                </div>
            </div>
            <p className='text-center text-gray-300 font-bold font-Poppins mt-4'>Fais par Andy Nzoupet </p>
        </div>
    );
}