import { Compass, Film, Heart, Home, Instagram, List, MessageCircleCode, Plus, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../Api/supabaseClient';

export default function SideBar() {
    const navigate = useNavigate();
    const handleSignOut = () => {
        supabase.auth.signOut()
        navigate('/')
    }
  return (
    <div className='w-11 hover:w-[10%] group bg-[#333] h-screen duration-500 rounded-none text-gray-300 shadow-lg flex justify-between fixed  shadow-gray-300 overflow-hidden group'>
        <div className=" flex flex-col justify-between py-2 items-center h-screen  w-10 min-w-10 max-w-10 ">
            <p><Instagram  size={35}/></p>
            <div className="flex flex-col gap-4">
                <span><Home size={30}/></span>
                <span><Search size={30}/></span>
                <span><Compass size={30}/></span>
                <span><Film size={30}/></span>
                <span><MessageCircleCode size={30}/></span>
                <span><Heart size={30}/></span>
                <span><Plus color='white' size={30}/></span>
                <div className="w-8 h-8 bg-white rounded-full flex">
                    {/* <Image
                        alt='image'
                        width={24}
                        heigth={24} 
                        src='https://images.unsplash.com/photo-1677631231231-123123123123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGltYWdlfGVufDB8fHx8MTY4MjQxNTY5Ng&ixlib=rb-4.0.3&q=80&w=400'
                    /> */}
                </div>
                <span><List size={30}/></span>
            </div>
        </div>
        <div className="flex flex-col justify-between py-2 w-[calc(100%-40px)] ">
            <p className='group-hover:opacity-100 duration-500 opacity-0 w-full pt-2'>Instagram</p>
            <div className="flex flex-col gap-4 *:group-hover:opacity-100 *:duration-500 *:opacity-0 *:w-full *:capitalize *:h-7 *:mt-0.5">
                <Link to='/acceuil'>Acceuil</Link>
                <Link to='/recherche'>recherhe</Link>
                <Link to='/'>boussolle</Link>
                <Link to='/'>movie</Link>
                <Link to='/'>commentaire</Link>
                <Link to='/'>like</Link>
                <Link to='/'>plus</Link>
                <Link to='/profil'>pofile</Link>
                <span onClick={handleSignOut } className='cursor-pointer'>Sign Out</span>
            </div>

        </div>
    </div>
  )
}
