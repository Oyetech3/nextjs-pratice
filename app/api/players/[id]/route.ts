import mongoose  from 'mongoose';
import { connectToDB } from "@/lib/mongodb"
import Player from "@/models/Player"
import { NextResponse } from 'next/server';

export async function GET(_request: Request, {params}: {
    params: {
        id: string
    }
}) {
    const { id } =  params
    await connectToDB()

    let objectId;
    try {
      objectId = new mongoose.Types.ObjectId(id);
    } catch (err) {
      return NextResponse.json(
        { error: "Invalid ID format" },
        { status: 400 }
      );
    }

    try {
        const player = await Player.findById(objectId);
    
        if (!player) {
          return NextResponse.json(
            { error: "Player not found" },
            { status: 404 }
          );
        }
    
        return NextResponse.json(
          { player },
          { status: 200 }
        );
      } catch (error) {
        return NextResponse.json(
          { error: "Failed to fetch player" },
          { status: 500 }
        );
      }
   

}

function isObjectIdValid(id: string) {
    try {
        return new mongoose.Types.ObjectId(id)
    }
    catch {
        return null
    }
}

export async function PATCH(request: Request, {params}: {params: {id: string}}) {
    const { id } = params
    await connectToDB()
    
    const ObjectId = isObjectIdValid(id)
    if(!ObjectId) {
        return NextResponse.json({
            error: "Invalid ID format"
        }, {
            status: 400
        })
    }

    try {
        const body = await request.json()
        const { name, position } = body

        const updateObj = {
            name,
            position
        }
        await Player.findByIdAndUpdate(ObjectId, updateObj, {new: true})

        return NextResponse.json(
            {updateObj},
            {status: 200}
        )
    }
    catch(err) {
        return NextResponse.json(
            {error: "Error"},
            {status: 500}
        )
    }
}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    const { id } = params
    await connectToDB()
    
    const ObjectId = isObjectIdValid(id)
    if(!ObjectId) {
        return NextResponse.json({
            error: "Invalid ID format"
        }, {
            status: 400
        })
    }

    try {
        await Player.findByIdAndDelete(ObjectId)

        return NextResponse.json(
            {message: `User with ID ${ObjectId} deleted successfully`},
            {status: 200}
        )
    }
    catch(err) {
        return NextResponse.json(
            {error: "Error deleting the user"},
            {status: 500}
        )
    }
}