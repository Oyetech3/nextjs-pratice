import Link from "next/link";
import wonders from "./wonder";
import Image from "next/image";

const photoHome = () => {
    return ( 
        <main className="container mx-auto p-4">
            <h1 className="text-center text-3xl font-bold my-4">New Wonders of the world</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                
                {
                    wonders.map(({id,title,imageUrl,location}) => (
                        <Link key={id} href={`/photofeed/${id}`} >
                           <Image src={imageUrl} width={200} height={200} alt={title}  className="w-full object-cover aspect-square"  />
                        </Link>
                    ))
                }
            </div>

        </main>
     );
}
 
export default photoHome;