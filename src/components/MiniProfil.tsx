import { useUser } from "../Api/Context";

type myprops = {
    ismine: boolean | string,
    prenom?: string,
    nom?: string,
}

export default function MiniProfil({ismine, prenom, nom}:myprops) {
  const { userData } = useUser();

  return (
    <div className='flex mb-4 px-1'>
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
        <div className="flex flex-col flex-grow">
            <h4 className={`font-bold font-Poppins text-${ismine == 'yes' ? "white" : "gray-300"}`}>{ismine == 'yes' ? userData?.[0]?.name : nom}</h4>
            <p className='text-sm text-gray-300'>{ismine == 'yes' ? userData?.[0]?.surname : prenom}</p>
        </div>
        <div className="gap-4 flex px-2">
            <p>r</p>
            <p>l</p>
        </div>
    </div>
  )
}
