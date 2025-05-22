"use client";

import axios from "axios";
import { FormEvent, useEffect, useState } from "react";

interface Player {
    name: string
    position: string
}

export default function postListPage() {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [players, setPlayers] = useState<Player[]>([])
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
       
        setError(null);
        setSuccess(null);
        setLoading(true);
        
        if (!name.trim() || !position.trim()) {
            setError("Name and position are required");
            setLoading(false);
            return;
        }
        
        try {
            const response = await axios.post("/api/players", {
                name,
                position
            });
            
            setSuccess("Player created successfully!");
            setName("");
            setPosition("");
        } 
        catch(err: any) {
            console.error("Error submitting form:", err);

            const errorMessage = err.response?.data?.message || 
                                 err.response?.data?.error || 
                                 err.message || 
                                 "An unknown error occurred";
            
            setError(`Error: ${errorMessage}`);
        } 
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        const getPlayers = async () => {
            const response = await axios("/api/players")
            const datas = response.data.players
            setPlayers(datas)
        }
        getPlayers()

    }, [])

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Create Player</h1>
            
            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}
            
            {success && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                    {success}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter Name"
                        className="border p-2 rounded" 
                        disabled={loading}
                    />
                </div>
                
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Position</label>
                    <input 
                        type="text" 
                        value={position} 
                        onChange={(e) => setPosition(e.target.value)} 
                        placeholder="Enter Position"
                        className="border p-2 rounded" 
                        disabled={loading}
                    />
                </div>
                
                <button 
                    type="submit"
                    className={`w-full p-2 rounded text-white ${
                        loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>

            <div className="my-3">
                <h1 className="text-2xl font-bold mb-6 text-center">List of Players</h1>
                <div className="flex flex-col gap-2">
                    {
                        loading ? 
                        <div className="flex items-center justify-center h-screen">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                        </div> : ""
                    }

                    <div className="p-2 flex flex-col gap-2">
                    {
                        players.map((player, index) => (
                            <div className="p-3 shadow-md rounded" key={index}>
                                <p className="font-bold">{player.name}</p>
                                <p>{player.position}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}