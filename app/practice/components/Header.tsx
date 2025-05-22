import Image from "next/image";
import { RiCloseLine, RiMenu2Line, RiNotification3Line } from "react-icons/ri";


const Header = () => {
    return ( 
        <div className="sticky z-30 top-0 w-full h-20 py-5 px-6 md:px-12 xl:px-24 bg-primary flex justify-between items-center">
            <div className="flex items-end gap-5">
                <div>
                <RiCloseLine  size={30} className="text-black"/> 
                <RiMenu2Line size={30} className="text-black  " />
                </div>
                <Image className="" src={"/photos/logo.svg"} alt="logo" width={110} height={5} />
            </div>
            <div className="">
            <RiNotification3Line  size={20} className="text-primary" />
            </div>
        </div>
     );
}
 
export default Header;