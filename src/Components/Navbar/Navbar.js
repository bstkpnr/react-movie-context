import React,{useState} from "react";

export default function Navbar() {
 

  return (
    <div className="border border-green-600 rounded-md  bg-gray-800 border-opacity-50">
      <ul className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
        <li className="text-center text-green-500 font-sans text-xl font-bold">
          Most Popular Movies
        </li>
  
      </ul>
    </div>
  );
}
