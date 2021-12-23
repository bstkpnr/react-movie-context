import React from "react";

export default function Navbar() {
  return (
    <div className="border border-green-600 rounded-md  bg-gray-800 border-opacity-50">
      <ul className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
        <li className="text-center text-green-700 font-sans text-lg font-medium">
          Most Popular Movies
        </li>
        <div class="flex border-2 border-gray-200 rounded">
          <input
            type="text"
            className="px-4 py-2  rounded-md"
            placeholder="Search..."
          />
          <button className="px-4 text-green-700 bg-gray-400 border-l m-1 font-sans rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
            Search
          </button>
        </div>
      </ul>
    </div>
  );
}
