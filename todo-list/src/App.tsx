import { useRef, useState } from "react";
import { ITodo } from "./types/todo";
import Todos from "./components/todos";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([
    { id: 1, desc: "coding", isDone: false },
    { id: 2, desc: "eat", isDone: true },
    { id: 3, desc: "sleep", isDone: false },
    { id: 4, desc: "repeat", isDone: false },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleAdd = () => {
    if (inputRef.current) {
      if (inputRef.current.value == "")
        return alert("input tidak boleh kosong");
      const newTodo: ITodo = {
        id: todo.length ? Math.max(...todo.map((item) => item.id)) + 1 : 1,
        desc: inputRef.current.value,
        isDone: false,
      };
      setTodo((t) => [...t, newTodo]);
      inputRef.current.value = "";
    }
  };

  const handleDelete = (id: number) => {
    const newArr = todo.filter((item) => item.id !== id);
    setTodo(newArr);
  };

  const handleDone = (id: number) => {
    const newArr = todo.map((item) => {
      if (item.id == id) {
        return { ...item, isDone: !item.isDone };
      }
      return { ...item };
    });
    setTodo(newArr);
  };
  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold text-green-600">
        To<span className="text-red-700">Do</span> List
      </h1>
      <Todos todos={todo} handleDelete={handleDelete} handleDone={handleDone} />
      <div className="flex mt-10 min-w-[400px] gap-4">
        <input
          ref={inputRef}
          className="w-full border border-teal-600 rounded-md p-2"
          type="text"
          placeholder="add todo here"
        />
        <button onClick={handleAdd} className="bg-teal-600 p-2 rounded-md">
          Add
        </button>
      </div>
      <p className="font-medium text-2xl mt-5">
        Done: {todo.filter((item) => item.isDone == true).length}
      </p>
    </div>
  );
}

export default App;
