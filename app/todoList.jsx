import style from "./style/globals.css";
import TodoItem from "./todoItem";

const todoList = async () => {
  let res = await fetch(`http://127.0.0.1:3001/api/todo/list`);
  return res.json();
};

export default async function TodoList() {
  const { todos } = await todoList();
  // let id = todos.map((i) => i.isDone);
  // let finished = id;
  // console.log(finished);
  // console.log(todos);
  return (
    <div>
      <ul>
        {todos.map((obj) => (
          <li key={obj.id}>
            <TodoItem item={obj} />
          </li>
        ))}
      </ul>
    </div>
  );
}
