"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()

    const navLinks = [
        {name: "Home", href: "/"},
        {name: "About", href: "/about"},
        {name: "Products", href: "/products"},
        {name: "Profile", href: "/profile"}
    ]

    return ( 
        <div className="p-4 flex gap-4">
            {
                navLinks.map((link,index) => {
                    const isActive = pathname === link.href ||( pathname.startsWith(link.href) && link.href !== "/")
                    return  ( <div key={index}>
                        <Link className={isActive ? "font-semibold" : "text-blue-500 font-bold"} href={link.href} >{link.name}</Link>
                    </div>)}
                )
            }
        </div>
     ); 
}
 
export default Navbar;