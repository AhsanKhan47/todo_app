"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addT(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddTodo() {
  const router = useRouter();
  let [name, setName] = useState("");

  return (
    <div
      className="flex flex-row gap-4 justify-center mb-10 w-10/12  mx-auto
       md:gap-4 md:justify-center md:mb-10 md:w-7/12  md:mx-auto
    
    "
    >
      <input
        className="px-2 py-0 bg-slate-300 hover:bg-slate-400 outline-none text-lg rounded-md h-[3rem] transition w-11/12
        md:px-2 md:py-0  md:text-2xl md:rounded-md md:h-[3rem]  md:w-full
        "
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        className=" bg-green-600 px-4 py-0 h-[3rem] transition rounded-md hover:bg-green-700 text-xl
        md:bg-green-600 md:px-4 md:py-0 md:h-[3rem] md:transition md:rounded-md md:hover:bg-green-700 md:text-2xl
        "
        onClick={async () => {
          await addT(name, router.refresh);
          setName("");
        }}
      >
        add
      </button>
    </div>
  );
}
