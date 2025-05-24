"use client"

import { useFormStatus } from "react-dom";
import { addTodo } from "./action";

export function TodoForm() {
    const { pending } = useFormStatus()

    return (
        <form className="space-y-2" action={addTodo}>
            <input name="title" placeholder="New todo" className="border p-2 w-full" />
            <button
                type="submit"
                disabled={pending}
                className={`px-4 py-2 text-white rounded ${pending ? 'bg-gray-400' : 'bg-blue-500'}`}
            >
                {pending ? 'Adding...' : 'Add Todo'}
            </button>
        </form>
    )
}