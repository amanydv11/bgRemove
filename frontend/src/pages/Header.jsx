import React from 'react'

const Header = () => {
   const handleClick=()=>{

   }
  return (
    <header className="bg-gray-900 p-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <i className="fas fa-video text-white text-2xl mr-2"></i>
                            <span className="text-white text-2xl font-bold">BgRemove</span>
                        </div>
                        <nav className="flex space-x-8">
                            <a href="/" className="text-white">Home</a>
                            <a href="/example" className="text-white">Examples</a>
                            <a href="/pricing" className="text-white">Pricing</a>
                           
                        </nav>
                        <button type='submit' onClick={handleClick} className="bg-gray-700 font-bold text-white px-4 py-2 rounded hover:bg-white hover:text-black ">Login / Sign up</button>
                    </header>
  )
}

export default Header
