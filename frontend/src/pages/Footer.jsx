import React from 'react'

const Footer = () => {
  return (
    <div>
     <footer className="w-full bg-gray-800  p-4 text-center text-gray-400">
                        <div className="mb-2 space-x-4 gap-2 ">
                            <a href="#" className="text-gray-400">Privacy Policy</a> | 
                            <a href="#" className="text-gray-400 ">Cookie Policy</a> | 
                            <a href="#" className="text-gray-400">Terms of Service</a> | 
                            <a href="#" className="text-gray-400">General Terms and Conditions</a>  
                            
                        </div>
                        <div className="mb-2">
                            <img src="" alt="BgRemove logo" className="inline-block mr-2" />
                            <span>© BgRemove, a Canva India GmbH brand</span>
                        </div>
                        <div className="text-xs">
                            All trademarks, service marks, trade names, product names, logos and trade dress appearing on our website are the property of their respective owners.
                        </div>
                    </footer>
    </div>
  )
}

export default Footer
