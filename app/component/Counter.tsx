"use client"

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const {isLoaded, userId, isSignedIn, getToken } = useAuth()
    //const {isLoaded, isSignedIn, user} = useUser()

    if(!isLoaded || !userId) {
        return null
    }
    
    return ( 
        <div className="flex gap-3 item-center">
            <p>Counter: {counter}</p>
            <button className="p-1 bg-blue-500 text-white rounded" onClick={() => setCounter(c => c + 1)}>Increase</button>
        </div>
     );
}
 
export default Counter;