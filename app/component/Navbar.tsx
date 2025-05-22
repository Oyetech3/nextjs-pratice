"use client"

import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs";
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
        <div className="px-8 flex justify-between items-center">
            <div className="flex gap-4 p-4">
            {
                navLinks.map((link,index) => {
                    const isActive = pathname === link.href ||( pathname.startsWith(link.href) && link.href !== "/")
                    return  ( <div key={index}>
                        <Link className={isActive ? "font-semibold" : "text-blue-500 font-bold"} href={link.href} >{link.name}</Link>
                    </div>)}
                )
            }
            </div>

            <div className="p-4 flex gap-4">
                <SignedOut>
                    <SignInButton mode="modal">
                        <div className="py-1 px-2 border rounded">Sign In</div>
                    </SignInButton>
                    <SignUpButton>
                        <div className="px-2 py-1 border rounded">Sign Up</div>
                    </SignUpButton>
                </SignedOut>

                <SignedIn>
                    <Link href={"/user-profile"} >Profile</Link>
                    <SignOutButton />
                </SignedIn>
                
            </div>
            
        </div>
     ); 
}
 
export default Navbar;