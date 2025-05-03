import { redirect } from "next/navigation"

type Props = {
    params: {
        productId: string,
        reviewId: string
    }
}

const randomNumer = (num : number) => {
    return Math.floor(Math.random() * num)
}

const reviewId = async ({params}: Props) => {
    const {productId, reviewId} = params

    const random = randomNumer(2)
    console.log("Random number: ", random)
    if(random === 1) {
        throw new Error("Error: Random error occurred")
    }

    if(parseInt(reviewId) > 1000) {
        redirect("/products")
    }
    return ( 
        <div>
            <h1 className="text-3xl font-bold underline">Product ID: {productId}</h1>
            <h2 className="text-2xl font-bold underline">Review ID: {reviewId}</h2>
            <p className="text-lg">Details about product {productId} and review {reviewId} will be displayed here.</p>
            <p className="text-lg">This is a dynamic route with multiple parameters.</p>
        </div>
     );
}
 
export default reviewId;