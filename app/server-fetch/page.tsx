import axios from "axios"

type posts = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const serverFetch = async () => {
    await new Promise((resolve) => setTimeout(resolve,4000))
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const post : posts[] = await response.data 
    
    return ( 
        <div className="bg-black p-4">
            {
                post.map((data,index) => (
                    <div key={index} className="bg-white shadow-md rounded-md p-3 mb-3">
                        <h3 className="font-bold">ID: {data.id}</h3>
                        <p>{data.title}</p>
                        <p>{data.body}</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default serverFetch;