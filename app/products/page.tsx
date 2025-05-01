import Link from "next/link";

export const metadata = {
    title: 'Products',
}

const pages = () => {
    return ( 
        <div className="p-5">
            <h1 className="text-3xl font-bold underline">Available Products</h1>
            <p className="text-lg">Here are some of the products we offer:</p>
            <ul className="list-disc list-inside mt-4">
                <li><Link href="/products/1">Product 1</Link></li>
                <li><Link href="/products/2">Product 2</Link></li>
                <li><Link href="/products/3">Product 3</Link></li>
                <li><Link href="/products/4">Product 4</Link></li>
                <li><Link href="/products/5">Product 5</Link></li>
                <li><Link href="/products/6">Product 6</Link></li>
            </ul>
        </div>
     );
}
 
export default pages;