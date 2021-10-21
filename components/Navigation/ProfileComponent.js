import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { LoginIcon, AddUserIcon } from '../icons'
const ProfileComponent = ({image}) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
      <button className="flex items-center gap-2 bg-white p-2 active:bg-gray-100 transition duration-200 rounded-xl relative"
      onClick={() => setOpen(!isOpen)} >
        <div className="hidden md:flex flex-col items-end text-gray-900 leading-4">
          <h3 className="text-gray-900 font-bold text-sm">Jhon Doe</h3>
          <p className="text-gray-900 text-xs">Guest</p>
        </div>
        <span className="relative overflow-hidden rounded-full w-10 h-10">
        <Image src={image} layout={"fill"} className="object-center object-cover"  />
          
        </span>
        
        <MenuComponent state={isOpen} />
        
      </button>
      
      </>
      
    )
  }
  
  export default ProfileComponent


  const MenuComponent = ({state}) => {

      const listMenu = [
          {title: "Login", route: "/", icon: <LoginIcon className="w-5 h-5 " />},
          {title: "Register", route: "/", icon: <AddUserIcon className="w-5 h-5" />}
      ]
      return (
          <>
        <CSSTransition in={state} unmountOnExit timeout={200} classNames="my-node">
          <ul className={`w-full absolute bg-white bottom-0 left-0 grid rounded-xl transform translate-y-full overflow-hidden text-gray-600`}>
              {listMenu.map((item,idx) => (
                  <Link key={idx} href={item.route}>
                  <li className={`text-sm w-full items-center flex h-full gap-1 py-3 px-3 hover:bg-gray-100 transition ${idx == listMenu.length-1 ? "" : "border-b border-gray-200 "}`}>{item.icon}{item.title}</li>
                  </Link>
              ))}
          </ul>
        </CSSTransition>
          
          <style jsx>
          {`
          .my-node {
              opacity: 0
          }
          .my-node-enter {
            opacity: 0;
           
          }
          .my-node-enter-active {
            opacity: 1;
            transition: opacity 200ms;
           
          }
          .my-node-exit {
            opacity: 1;
           
          }
          .my-node-exit-active {
            opacity: 0;
            transition: opacity 200ms;
           
          }
          `}
      </style>
      </>
      )
  }
  
  