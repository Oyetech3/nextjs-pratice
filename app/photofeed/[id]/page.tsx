import Image from "next/image";
import wondersImages, { wonderImage }  from "../wonder";


const photoId = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    const photo : wonderImage = wondersImages.find((photo) => photo.id.toString() === id) as wonderImage;
    return ( 
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
                <div className="">
                    <h1 className="text-center text-3xl font-bold my-4">{photo.title}</h1>
                </div>
                <Image width={350} height={350} alt={photo.title} src={photo.imageUrl} className="w-full object-cover aspect-square"/>

                <div className="bg-white py-4">
                    <h3>{photo.description}</h3>
                    <h3>{photo.location}</h3>
                    <h3>{photo.dateVisited.toLocaleString()}</h3>
                </div>
            </div>

        </div>
     );
}
 
export default photoId;