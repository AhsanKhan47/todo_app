import AddTodo from "./add-todo";
import TodoList from "./todoList";

export default function page() {
  return (
    <>
      <div className="container ">
        <h1 className="text-5xl text-center font-mono my-[5rem]  ">Todo App</h1>
      </div>
      <div className="flex flex-col align-center justify-center w-1/2 m-auto">
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}
