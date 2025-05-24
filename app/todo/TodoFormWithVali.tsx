"use client"

import { useActionState } from "react"
import { addValidatedTodo } from "./action"

const inittialState = {
    error: "",
}

export function TodoFormWithVali() {
    const [state, formAction ] = useActionState(addValidatedTodo, inittialState)

    return (
        <form action={formAction} className="space-y-2">
            <input name="title" className="border p-2 w-full" placeholder="Add todo" />
            {state.error && <p className="text-red-500">{state.error}</p>}
            {state.success && <p className="text-green-500">Todo added!</p>}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
            </button>
        </form>
    )
}