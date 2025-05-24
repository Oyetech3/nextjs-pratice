import { getTodos } from "./action";
import { OptimisticTodoForm } from "./OptimisticTodoForm";
import { TodoForm } from "./TodoForm";
import { TodoFormWithVali } from "./TodoFormWithVali";

export default async function Home() {
    const todos = await getTodos()
    return (
      <main className="max-w-xl mx-auto p-6 space-y-8">
        <h1 className="text-2xl font-bold">Next.js 15 Forms Demo</h1>
  
        <section>
          <h2 className="text-xl mb-2">Basic Server Action</h2>
          <TodoForm />
        </section>
  
        <section>
          <h2 className="text-xl mt-4 mb-2">With Validation</h2>
          <TodoFormWithVali />
        </section>
  
        <section>
          <h2 className="text-xl mt-4 mb-2">Optimistic UI</h2>
          <OptimisticTodoForm />
        </section>

        <div>
            <h1 className="font-bold">Todos</h1>
            <ul className="mt-4 space-y-2">
                {todos.map((todo, i) => (
                <li key={i} className="border p-2 rounded shadow-sm">{todo}</li>
                ))}
            </ul>
        </div>
      </main>
    );
  }