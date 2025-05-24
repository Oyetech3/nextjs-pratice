"use client"

import { useOptimistic, useState, useTransition } from "react";
import { addTodo } from "./action";

export function OptimisticTodoForm() {
    const [ todos, setTodos ] = useState<string[]>([])
    const [optimisticTodos, addOptimisticTodos ] = useOptimistic(todos, (state, newTodo: string) => [
        newTodo,
        ...state
    ])
    const [isPending, startTransition ] = useTransition()

    const handleSubmit = (formData: FormData) => {
        const title = formData.get("title") as string
        addOptimisticTodos(title)

        startTransition(() => {
            addTodo(formData)
        })
    }

    return (
        <>
          <form action={handleSubmit} className="space-y-2">
            <input title="title" name="title" className="border p-2 w-full" />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Add (Optimistic)
            </button>
          </form>
    
          <ul className="mt-4">
            {optimisticTodos.map((todo, i) => (
              <li key={i} className="border-b py-1">{todo}</li>
            ))}
          </ul>
        </>
      );
}