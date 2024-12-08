import React from 'react'
import { BsArrowBarUp } from "react-icons/bs";
const Home = () => {
  return (
    <div >
      <div className="flex flex-col  h-screen items-center justify-center">
                        <h1 className="text-5xl md:text-5xl text-white font-serif line-clamp-3 font-bold text-center">Upload a video or GIF to remove the background</h1>
                        <div className="bg-gray-600 m-20 p-6 rounded text-center">
                            <button className=" flex bg-blue-600 text-white  font-semibold px-6 py-2 gap-2  rounded-lg text-lg mb-2"><BsArrowBarUp className='mt-1 text-lg' />Upload Clip</button>
                        </div>
                         </div>
      
    </div>
  )
}

export default Home
