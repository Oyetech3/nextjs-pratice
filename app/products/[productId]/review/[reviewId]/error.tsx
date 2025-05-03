"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

type Props = {
    error: Error,
    reset: () => void
}
const error = ({error,reset}: Props) => {
    const router = useRouter()
    const reload = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }
    return ( 
        <div>
            <h1>Something went wrong</h1>
            <h2>{error.message}</h2>
            <button onClick={reload} className="bg-blue-500 text-white p-2 rounded-md">Try again</button>
        </div>
     );
}
 
export default error;