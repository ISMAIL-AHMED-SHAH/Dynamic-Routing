interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  export default async function TodoDetails({ params }: { params: { id: string } }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
    const todo: Todo = await response.json();
  
    return (
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/sunset.webp')" }}
      >
        <div
          className={`w-full max-w-2xl p-8 rounded-lg shadow-2xl transition-all ${
            todo.completed
              ? "bg-green-600 border border-green-700 hover:border-green-500 hover:shadow-green-500/50"
              : "bg-red-600 border border-red-700 hover:border-red-500 hover:shadow-red-500/50"
          }`}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">Todo Details</h1>
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-700">
              Title: {todo.title}
            </h2>
            <p className="text-lg md:text-xl font-medium mb-2 text-gray-600">
              Status: {todo.completed ? 'Completed' : 'Pending'}
            </p>
            <p className="text-lg md:text-xl font-medium text-gray-600">User ID: {todo.userId}</p>
          </div>
        </div>
      </div>
    );
  }
  