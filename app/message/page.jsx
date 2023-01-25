import { useSelectedLayoutSegment } from "next/navigation";
const todoList = async () => {
  let res = await fetch(`http://127.0.0.1:3001/api/todo/list`);
  return res.json();
};

export default async function UserSegment() {
  let { todosL } = await todoList();
  let length = todosL;
  let realLength = length.length;
  console.log(realLength);
  return;
  <div></div>;
}
