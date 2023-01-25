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
    <div>
      <div className="flex flex-row justify-between align-center  mb-10          ">
        <input
          className=" w-[2rem] h-[2rem]
         md:w-[2rem] md:h-[4rem]  
          bg-sky-600 text-lg"
          type="checkbox"
          onChange={(e) => update(item.id, e.target.checked, router.refresh)}
          checked={item.isDone}
        />

        <span
          className="text-md h-[2rem]  text-center my-auto
                   md:text-2xl md:h-[2rem]  md:text-center md:my-auto"
        >
          {item.name}
        </span>
        <button
          className=" 
        bg-red-400 px-2 h-[2rem] my-auto transition rounded-md hover:bg-red-500 text-md
        md:bg-red-400 md:px-3 md:h-[3rem] md:my-auto md:transition md:rounded-md md:hover:bg-red-500 md:text-xl"
          onClick={() => deleteTodo(item.id, router.refresh)}
        >
          delete
        </button>
      </div>
    </div>
  );
}
