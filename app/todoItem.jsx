"use client";
import { useRouter } from "next/navigation";
// toggle checkBox function
async function update(id, isDone, refresh) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}
// Delete todo function
async function deleteTodo(id, refresh) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });
  refresh();
}

export default function TodoItem({ item }) {
  let router = useRouter();
  return (
    <div className="flex flex-row justify-between align-center  mb-10          ">
      <input
        className=" w-[2rem] h-[4rem]  "
        type="checkbox"
        onChange={(e) => update(item.id, e.target.checked, router.refresh)}
        checked={item.isDone}
      />

      <span className="text-2xl h-[2rem]  text-center my-auto">
        {item.name}
      </span>
      <button
        className=" bg-cyan-800 px-8 py-4 h-[4rem] transition rounded-md hover:bg-cyan-700 text-2xl"
        onClick={() => deleteTodo(item.id, router.refresh)}
      >
        delete
      </button>
    </div>
  );
}
