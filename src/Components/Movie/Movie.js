import React from 'react'
import { useParams } from 'react-router-dom'
import { useMovies } from '../../Context/ContextMovie'

export default function Movie() {
    const {id}=useParams();
    const {movies}=useMovies();

    const tmpArray=movies.filter((movie)=>movie.id===id);
    return (
        <div className='min-h-screen bg-gray-100 py-6 grid grid-cols-4 gap-4  flex flex-col justify-center sm:py-12'>
            {tmpArray.map((data)=>(
                <div className=' py-3 p-4 '>

                <div className='px-4 py-5 bg-gray-200 shadow-lg sm:rounded-3xl' >
                <div className='w-16 rounded-md bg-green-500  '>

                                  <p className='px-2 font-medium text-md text-white'>{data.year}</p>
                                  </div>
                    <div className='h-96 max-h-full'>
              <div>
              <img src={data.image} className='object-contain h-64 w-full ' />
          </div>
          <div className='divide-y divide-gray-200'>
              <div className='py-8 text-base leading-6 space-y-4 text-gray-700 '>
                  <p className='font-bold text-gray-900 text-xl'>{data.title}</p>
                  <div className='w-8 h-8 bg-green-500 hover:bg-green-700 rounded-full'>
                  <p className='text-center text-white text-sm font-medium p-1'>{data.imDbRating}</p>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
            ))}
            
        </div>
    )
}
