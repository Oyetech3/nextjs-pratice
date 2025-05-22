import axios from "axios";

type posts = {
    userId: number,
    id: number,
    title: string,
    body: string 
}

type albums = {
    userId: number,
    id: number,
    title: string
}

type params = {
    params?: {
        id?: string
    }
}

async function getPost(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return response.json()
}

async function getAlbum(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    return response.json()
}

const fetchOne = async  ({params}: params) => {
    const  id  =  params?.id ||  "1"

    const post =  getPost(id)
    const album =  getAlbum(id)

    const [posts, albums] = await Promise.all([post, album])

    return ( 
        <div className="p-4 grid grid-cols-2 gap-3 bg-black">
            
            <div className="flex flex-col gap-3">
                <h1 className="font-bold text-xl">Posts</h1>
                {
                    posts.map((post: posts) => (
                        <div key={post.id} className="bg-white shadow-md rounded-md p-3">
                            <h3 className="font-bold">ID: {post.id}</h3>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-bold">Albums</h1>
                {
                    albums.map((album: albums) => (
                        <div key={album.id} className="bg-white shadow-md rounded-md p-3">
                            <h3 className="font-bold">ID: {album.id}</h3>
                            <p>{album.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default fetchOne;