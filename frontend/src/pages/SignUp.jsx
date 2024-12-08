import React from 'react'
import { useNavigate } from "react-router";
const SignUp = () => {
    const navigate= useNavigate()
  return (
    <div className='justify-items-center min-h-[650px]'>
       <div className="bg-white shadow-md rounded-lg mt-5 p-8 max-w-md w-full">
                    <h1 className="text-center font-semibold mb-4">Sign up to download unlimited full resolution media</h1>
                    <div className="flex justify-center mb-6">
                        <button className="text-gray-700 font-semibold border-b-2 border-green-500 pb-2 px-4">Sign up</button>
                        <button onClick={()=>navigate('/login')} className="text-gray-700 font-semibold pb-2 px-4">Log in</button>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <button className="flex items-center justify-center border rounded-full py-2 px-4 text-gray-700">
                            <i className="fab fa-google mr-2"></i> Sign up with Google
                        </button>
                    </div>
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-4 text-gray-500">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">* Username</label>
                            <input type="text" placeholder="e.g. maria93" className="w-full border rounded-lg px-3 py-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">* Email</label>
                            <input type="email" placeholder="example@gmail.com" className="w-full border rounded-lg px-3 py-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">* Password</label>
                            <input type="password" className="w-full border rounded-lg px-3 py-2" />
                        </div>
                        <button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg">Join</button>
                    </form>
                </div>
    </div>
  )
}

export default SignUp
