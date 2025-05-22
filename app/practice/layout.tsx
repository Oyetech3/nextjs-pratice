"use client"

import React, { useState , useEffect} from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { RiCloseLine, RiMenu2Line, RiNotification3Line } from "react-icons/ri";

const Layout = ({children}: {children: React.ReactNode}) => {
    const [menu, setMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    
useEffect(() => {
    const checkIfMobile = () => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        
        if (mobile) {
            setMenu(false);
        }
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
}, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element
        if (
            isMobile && menu && !target.closest('.sidebar') ) {
            setMenu(false)
        }
    }

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobile, menu]);


    return ( 
    <div className="h-screen flex flex-col">
      <div className="sticky z-30 top-0 w-full h-20 py-5 px-6 md:px-12 xl:px-24 bg-primary flex justify-between items-center">
            <div className="flex items-end gap-5">
                <div>
                 
                <RiMenu2Line onClick={toggleMenu} size={30} className="text-black md:hidden cursor-pointer " />
                </div>
                <h2>Vergold</h2>
            </div>
            <div className="">
            <RiNotification3Line  size={20} className="text-primary" />
            </div>
        </div>

      <div className=" flex flex-1 ">
        {!isMobile || menu ? <Sidebar /> : ""}
        <div className="relative flex flex-col gap-4 py-12  pl-8 pr-10 bg-secondary  w-full h-screen top-border">
          {children}
        </div>

      </div>
    </div>
     );
}
 
export default Layout;