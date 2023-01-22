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
    <div className="flex flex-row gap-4   justify-center mb-10">
      <input
        className="px-2 py-0 bg-slate-500 outline-none text-2xl  rounded-md h-[4rem]"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        className=" bg-cyan-800 px-8 py-4 h-[4rem] transition rounded-md hover:bg-cyan-700 text-2xl"
        onClick={async () => {
          addT(name, router.refresh);
          setName("");
        }}
      >
        add
      </button>
    </div>
  );
}
