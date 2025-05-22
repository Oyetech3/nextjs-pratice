import { auth, currentUser } from "@clerk/nextjs/server";

const dashboard = async () => {
    const authObj = await auth()
    const userObj = await currentUser()

    console.log(authObj, userObj)
    return ( 
        <div>
            <h1 className="p-4 text-2xl font-bold">Dashboard</h1>
        </div>
     );
}
 
export default dashboard;