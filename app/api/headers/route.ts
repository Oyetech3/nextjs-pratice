import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const headersList = await headers()
    console.log(headersList.get('Connection'))
    
    const cookieStore = await cookies()
    cookieStore.set("love", "Messi")
    console.log(cookieStore.get("love"))

    return new Response("<h1>Profile data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}