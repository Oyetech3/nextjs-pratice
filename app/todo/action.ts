"use server"

import { revalidatePath } from "next/cache"

export type TodoFormState =
  | { error: string; success?: undefined }
  | { success: string; error?: undefined };

let todos: string[] = []


export async function addTodo(formData: FormData) {
    const title = formData.get('title')?.toString() || ""
    todos.unshift(title)
    revalidatePath("/todo")
}

export async function addValidatedTodo(_prevState: any, formData: FormData): Promise<TodoFormState> {
    const title = formData.get("title")?.toString() || ""
    if(title.length < 3) {
        return {error: "Must be at least three character"}
    }
    todos.unshift(title)
    revalidatePath("/todo")
    return {
        success: "true"
    }
}

export async function getTodos(): Promise<string[]> {
    return  todos
}