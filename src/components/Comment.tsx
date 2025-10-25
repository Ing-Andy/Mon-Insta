import { ChevronRight } from "lucide-react";
import { useState } from "react";
// import { useUser } from "../Api/Context";

// type Props = {
//     id ?: string;
// }

export default function Comment() {
    const [ open, setOpen ] = useState<boolean>(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    // const { posts } = useUser();
    // const 
  return (
    <div className="flex">
        <div className="flex">
            <div className="w-10 h-10 rounded-sm bg-black"></div>
            <div className="flex flex-col ml-2">
                <h4 className="text-white font-bold">Prenom</h4>
                <p className="text-gray-300 text-sm">Nom</p>
            </div>
            <ChevronRight onClick={handleOpen}/>
        </div>
        <div className={`h-${open ? "20" : "auto"} flex flex-col w-full`}>
            message
        </div>
    </div>
  )
}
