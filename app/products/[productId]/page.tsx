import { Metadata } from "next";
import { metadata } from "../page";

type Props = {
    params: {
        productId: string;
    }
}



export const generateMetadata =  async ({params,} : Props) : Promise<Metadata> =>  {
    const id = params.productId;
    return {
        title: `Product ${id}`,
    }
}

const productId = (param : Props)  =>  {
    const {productId} = param.params;
    
    return ( 
        <div className="p-5">
            <h1 className="text-3xl font-bold underline">Product ID: {productId}</h1>
            <p className="text-lg">Details about product {productId} will be displayed here.</p>
        </div>
     );
}
 
export default productId;