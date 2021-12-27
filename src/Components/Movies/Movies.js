import React from 'react'
import { Link } from 'react-router-dom';
import {useMovies} from '../../Context/ContextMovie'

export default function Movies() {
const {movies, isLoading}=useMovies();

    return (
        <div className='min-h-screen bg-gray-100 py-6 grid grid-cols-4 gap-4 flex  justify-center sm:py-12'>
                {movies.map((data)=>(
            <div className='relative py-3 p-4  '>

                <div className='relative px-4 py-5 bg-gray-200 shadow-lg sm:rounded-3xl' >
                <div className='w-16 rounded-md bg-green-500 '>

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
                  <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>
              <Link to={`/${data.id}`} className="text-cyan-600 hover:text-white-700">Go To The Film's Page &rarr;</Link>
            </p>
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
