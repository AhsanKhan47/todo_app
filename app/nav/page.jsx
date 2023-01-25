import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex flex-col w-32 justify-end     absolute top-0 right-0">
      <nav className=" w-42 p-6">
        <Link href={"/info"}>
          <Image
            className="rounded-full mx-auto   object-scale-down  cursor-pointer  "
            src="/logo.png"
            width={60}
            height={60}
          ></Image>
        </Link>
        <Link href={"/info"}>
          <h3 className="pt-0 w-full text-center text-[12px] transition hover:text-green-500">
            Ahsan Khan
          </h3>{" "}
        </Link>
      </nav>
    </div>
  );
}
