"use client";
import "../style/globals.css";
export default function Info() {
  return (
    <div className="container h-screen  ">
      <section className="flex flex-row align-center justify-center  w-11/12  mx-auto my-auto mt-32   gap-6   ">
        <ul
          className=" bg grid  gap-3 px-3 py-6   justify-evenly   grid-cols-2
                 "
        >
          <li>Name</li>
          <li>Ahsan Khan</li>
          <li>Roll No</li>
          <li>PIAIC197467</li>
          <li>Batch</li>
          <li>Batch 38</li>
          <li>City</li>
          <li>Karachi</li>
          <li>Course</li>
          <li>Certified Web 3.0 and Metaverse Developer</li>
          <li>City</li>
          <li>Karachi</li>
        </ul>
      </section>
    </div>
  );
}
