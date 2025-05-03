import { wondersimages } from "../wonder";

interface wonderImage {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    location: string;
    dateVisited: Date;
}

const photoId = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    const photo : wonderImage = wondersimages.find((photo) => photo.id.toString() === id) as wonderImage;
    return ( 
        <div></div>
     );
}
 
export default photoId;