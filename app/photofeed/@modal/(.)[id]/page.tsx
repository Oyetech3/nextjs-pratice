import Image from "next/image";
import wondersImages, { wonderImage } from "../../wonder";
import Modal from "@/app/component/Modal";


const photoModal = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    const photo : wonderImage = wondersImages.find((photo) => photo.id.toString() === id) as wonderImage;
    return ( 
        <Modal>
            
            <Image width={350} height={350} alt={photo.title} src={photo.imageUrl} className="w-full object-cover aspect-square"/>

            <h1 className="text-center text-3xl font-bold my-4">New Wonders of the world</h1>
            <div className="bg-white py-4">
                <h3>{photo.description}</h3>
                <h3>{photo.location}</h3>
            </div>

        </Modal>
     );
}
 
export default photoModal;