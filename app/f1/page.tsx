import Link from "next/link";

const f1 = () => {
    return ( 
        <div>
            <h1 className="font-bold text-2xl">F1 Page</h1>
            <Link href={"/f1/f2"} className="text-blue-500 hover:underline">Go to F2</Link>
            <Link href={"/f3"} className="text-blue-500 hover:underline mx-2">Go to f3</Link>
        </div>
     );
}
 
export default f1;