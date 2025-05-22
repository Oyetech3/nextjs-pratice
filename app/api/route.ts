import { NextRequest } from "next/server";
import { Players } from "../component/Players";

export async function GET(request: NextRequest) {
    const serachParams = request.nextUrl.searchParams
    const query = serachParams.get("query")

    const filteredCommments = query ? Players.filter((player) => player.name.includes(query)) : Players

    return Response.json(filteredCommments)
}

export async function POST(request: Request) {
    const {name, position} = await request.json()

    const newPlayers = {
        "id": Players.length + 1,
        "name": name,
        "position": position
    }
    Players.push(newPlayers )

    return new Response(JSON.stringify(newPlayers), {
        headers: {
            "Content-Type": "application/json"
        },
        status:20
    })
}