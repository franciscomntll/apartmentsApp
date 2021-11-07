import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { LoginIcon, AddUserIcon } from '../icons'
const ProfileComponent = ({image}) => {
    const [isOpen, setOpen] = useState(true)
    return (
        <>
      <button className="flex items-center gap-2 bg-white p-2 active:bg-gray-100 transition duration-200 rounded-xl relative"
      onClick={() => setOpen(!isOpen)} >
        <span className="relative overflow-hidden rounded-full w-10 h-10">
        <Image src={image} layout={"fill"} className="object-center object-cover"  />
          
        </span>
        <div className="hidden md:flex flex-col items-start text-gray-900 leading-4">
          <h3 className="text-gray-900 font-bold text-sm">Jhon Doe</h3>
          <p className="text-gray-900 text-xs">Guest</p>
        </div>
        
        {/* <MenuComponent state={isOpen} /> */}
        
      </button>
      
      </>
      
    )
  }
  
  export default ProfileComponent


  
  