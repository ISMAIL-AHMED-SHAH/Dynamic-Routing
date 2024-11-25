import Link from "next/link";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default async function Home() {
  // Fetch data from API
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await response.json();

  return (
    <div className="p-6 sm:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Todos List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {todos.map((todo: Todo) => (
          <Link href={`/todos/${todo.id}`} key={todo.id}>
            <div
              className={`p-4 border rounded-lg shadow-md transition-transform duration-200 cursor-pointer ${
                todo.completed ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'
              } hover:scale-105`}
            >
              <h2 className="text-lg md:text-xl font-semibold mb-2">{todo.title}</h2>
              <p
                className={`text-sm md:text-base font-medium ${
                  todo.completed ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {todo.completed ? 'Completed' : 'Pending'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
