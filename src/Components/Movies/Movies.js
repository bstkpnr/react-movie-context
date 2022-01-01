import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMovies } from "../../Context/ContextMovie";
import {BsSearch} from 'react-icons/bs'
import Navbar from "../Navbar/Navbar";

export default function Movies() {
  const { movies } = useMovies();


 
 

  return (
    <>
    <Navbar />
    <div className=" bg-gray-100 py-6 flex  justify-center">
        <input
            type="text"
            className="px-4 py-2  rounded-md"
            placeholder="Search..."
          
          />
          <button className="px-4 text-green-700 bg-gray-400 border-l m-1 font-sans rounded-md font-medium hover: focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" >
            <BsSearch />
          </button>
         
        </div>
      <div className="min-h-screen bg-gray-100 py-6 grid grid-cols-4 gap-4 flex  justify-center md:py-10 ">
    
     
        {movies.map((data) => (
          <div className="relative py-3 p-4  ">
            <div className="relative px-4 py-5 bg-gray-200 shadow-lg sm:rounded-3xl">
              <div className="w-16 rounded-md bg-green-500 ">
                <p className="px-2 font-medium text-md text-white">
                  {data.year}
                </p>
              </div>
              <div className="h-96 max-h-full">
                <div>
                  <img
                    src={data.image}
                    className="object-contain h-64 w-full "
                  />
                </div>
                <div className="w-8 h-8 bg-green-500 hover:bg-green-700 rounded-full">
                  <p className="text-center text-white text-sm font-medium p-1">
                    {data.imDbRating}
                  </p>
                </div>
                <div className="py-4 text-base leading-6 space-y-4 text-gray-700 ">
                  <p className="font-bold text-gray-900 text-lg ">
                    {data.title}
                  </p>

                  <p className=" text-black-400 hover:text-white font-medium text-bold">
              
                       <Link to={`/${data.id}` } >Go To The Film's Page &rarr;</Link>
                  
                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
