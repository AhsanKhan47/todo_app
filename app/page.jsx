import AddTodo from "./add-todo";
import TodoList from "./todoList";

export default function page() {
  return (
    <>
      <div className="container ">
        <h1
          className="text-4xl text-center font-noto my-[7rem] 
                     md:text-6xl md:text-center md:font-noto md:my-[7rem]"
        >
          Todo App
        </h1>
      </div>
      <div
        className="   flex flex-col align-center justify-center w-11/12 px-[1rem] py-[4rem] m-auto 
        sm:px-[1rem] sm:py-[4rem]
        md:w-8/12  md:px-[3rem] md:py-[4rem]
       lg:w-6/12
      
      cont "
      >
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}
