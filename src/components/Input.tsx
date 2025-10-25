import { PlayIcon, Smile } from 'lucide-react'
import { useState } from 'react'

export default function Input() {
    const [ input,setInput ] = useState<string>('')
    const handleChange = (e:any) => {
        setInput(e.target.value)
    }
  return (
    <form className='h-10 flex items-center'>
        <p><Smile  /></p>
        <input 
            type="text"
            value={input}
            onChange={handleChange}
            placeholder='votre commentaie'
            className='w-full h-full outline-none pl-2 bg-transparent text-gray-300'
        />
        <button className='border-none bg-none'><PlayIcon /> </button>
    </form>
  )
}
