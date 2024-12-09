import React from 'react'
import { BsArrowBarUp } from "react-icons/bs";
import UploadFile from '../components/UploadFile';
const Home = () => {
  return (
    <div >
      <div className="flex flex-col  h-screen items-center justify-center">
                        <h1 className="text-5xl md:text-5xl text-white font-serif line-clamp-3 font-bold text-center">Upload a video or GIF to remove the background</h1>
                        <div className="-20 p-6 rounded text-center">
                          <UploadFile/>
                        </div>
                        <p className="text-gray-400">Supported formats: .mp4, .webm, .mov, .gif</p>
                        <p className="text-gray-700 text-sm mt-4">By uploading a video or URL you agree to our <a href="#" className="text-gray-500 font-semibold">Terms of Service</a>. To learn more about how Unscreen handles your personal data, check our <a href="#" className="text-gray-500 font-semibold">Privacy Policy</a>.</p>
                         </div>

      
    </div>
  )
}

export default Home
