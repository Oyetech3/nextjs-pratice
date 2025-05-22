import { Players } from "@/app/component/Players";

type params = {
    params: Promise<{
        id: string
    }>
}
export async function GET(_request: Request, {params}: params ) {
    const {id} =  await params
    const player = Players.find((player) => player.id === parseInt(id))

    return Response.json(player) 
}

export async function PATCH(request: Request, {params}: params) {
    const { id } = await params
    const { name, position } = await request.json()
    const index = Players.findIndex((player) => player.id === parseInt(id))

    Players[index].name = name
    Players[index].position = position

    return Response.json(Players[index])
}

export async function DELETE(_request: Request, {params}: params) {
    const { id } = await params
    const index = Players.findIndex((player) => player.id === parseInt(id))

    const deletedComment = Players.splice(index, 1)

    return Response.json(deletedComment)
}