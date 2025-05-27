import { useUser } from "../Api/Context";

type myprops = {
    ismine: string,
}

export default function MiniProfil({ismine}:myprops) {
  const { userData } = useUser();

  return (
    <div className='flex mb-4'>
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
        <div className="flex flex-col flex-grow">
            <h4 className={`font-bold font-Poppins text-${ismine == 'yes' ? "white" : "gray-300"}`}>{ismine == 'yes' ? userData?.name : "otherName"}</h4>
            <p className='text-sm text-gray-300'>{ismine == 'yes' ? userData?.surname : "leur noms"}</p>
        </div>
        <div className="gap-4 flex px-2">
            <p>r</p>
            <p>l</p>
        </div>
    </div>
  )
}
