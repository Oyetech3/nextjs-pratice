"use client"


const Sidebar = () => {
   
    return ( 
        <div className={`sidebar h-[calc(100vh-80px)] fixed top-20 transition-all duration-300 ease-in-out  md:sticky pb-4 flex flex-col justify-between  px-2 z-20 bg-white`}>
            <div className="flex flex-col justify-between py-12 px-5 w-full h-96 side-border bg-secondary">
                <div className="w-full flex flex-col items-center">
                    <div className="border text-primary w-24 h-24 rounded-full flex items-center justify-center">
                        <h1 className="font-bold text-4xl">CE</h1>
                    </div>
                    <div className="mt-1">
                        <p>Amarachi Ipadeola</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <button  className="flex justify-start items-center bg-[#B40FBF] py-7 px-5 gap-2 cursor-pointer text-white">
                        
                        <p>Dashboard</p>
                    </button>

                    <button className="flex justify-start  items-center text-[#339999] py-7 px-5 gap-2 cursor-pointer">
                        
                        <p>Marketers</p>
                    </button>
                </div>
            </div>

            <div className="flex items-center color-two w-72 h-32 px-7 side-border bg-secondary">
                <button className="flex items-center py-6 gap-1 w-full justify-start cursor-pointer">
                    
                    <p className="text-sm">Logout</p>
                </button>
            </div>
        </div>
     );
}
 
export default Sidebar;