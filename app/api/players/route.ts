import { connectToDB } from '@/lib/mongodb';
import Player from '@/models/Player';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function POST(request: Request) {
    try {
        await connectToDB();
        console.log("DB connection successful");
        
        const body = await request.json();
        console.log("Request body:", body);
        
        const { name, position } = body;
        
        if (!name || !position) {
            console.log("Missing required fields");
            return NextResponse.json(
                { error: "Name and position are required" },
                { status: 400 }
            );
        }
        
        const newPlayer = new Player({ 
            name, 
            position 
        });
        
        const savedPlayer = await newPlayer.save();
       
        return NextResponse.json(savedPlayer, {
            status: 201
        });
    } 
    catch(err) {
        console.error("Error in API route:", err);
        
        return NextResponse.json(
            { 
                error: "Failed to create player",
                message: err instanceof Error ? err.message : "Unknown error",
                details: process.env.NODE_ENV === 'development' && err instanceof Error ? err.stack : undefined
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectToDB()
        
        const players = await Player.find()

        if (players.length === 0) {
            return NextResponse.json(
                { message: "No players found" },
                { status: 200 }
            );
        }

        return NextResponse.json({
            players: players,
            count: players.length
        }, {
            status: 200
        })
    }
    catch(err) {
        console.log("Error getting collections ", err)
        throw err
    }
}