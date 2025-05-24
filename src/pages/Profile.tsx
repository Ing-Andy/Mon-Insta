import { useUser } from '../Api/Context';
import { useNavigate } from 'react-router-dom';
import Post from '../components/Post';


export default function Profile() {
    const navigate = useNavigate();
    const { userData, posts } = useUser();
    // console.log(userData.id);
    // console.log(useUser?.id);
  return (
    <div className="w-full flex flex-col items-center pt-4">
        <div className="w-full flex justify-around pb-2">
            <div className="flex flex-col items-center gap-4">
                <div className="flex bg-gray-400 w-60 h-60 rounded-full items-center justify-center text-black"> Votre profile</div>
                <div className="flex bg-gray-400 w-20 h-20 rounded-full items-center justify-center text-black cursor-pointer" onClick={() => navigate('/createPost')}>+</div>
            </div>
            <div className="flex flex-col justify-center w-[60%] h-50">
                <div className="flex justify-around items-center w-[60%]">
                    <p className="text-center text-gray-400 font-bold font-Poppins">{userData?.name} {userData?.surname}</p>
                    <button className='border-none bg-[#333] px-2 py-1 rounded-md text-gray-300'>mes follow</button>
                    <button className='border-none bg-[#333] px-2 py-1 rounded-md text-gray-300'>mes abonne</button>
                </div>
                <p className='pl-3 text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae placeat sed enim! Quod consequatur aperiam voluptas officiis quo voluptatibus totam vitae laudantium assumenda, accusamus neque deleniti veritatis, exercitationem qui iusto!</p>
            </div>
        </div>
        <hr className='w-[80%]'/>
        <div className="flex justify-center w-full">
            <div className="flex justify-around w-[400px]">
                <span>enregistrement</span>
                <span> publication</span>
                <span>mes yeucoux</span>
            </div>
        </div>
        <div className="flex flex-weap">
            {
                posts?.map((post, index) => (
                    <Post key={index} description={post.description} image={post.imageUrl} ismine='yes'/> 
                ))
            }
        </div>
    </div>
    )
  }
