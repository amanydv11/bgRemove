import React from 'react'
import { Avatar, Button, Dropdown } from "flowbite-react";
import { useNavigate } from "react-router";
import { signoutSuccess } from '../redux/userSlice'
import { useSelector,useDispatch } from 'react-redux';
const Header = () => {
    const handleSignout =async ()=>{
        try {
          const res= await fetch('/api/auth/signout',{
            method:'POST',
          });
          const data = await res.json();
          if(!res.ok){
            console.log(data.message)
          }
          else{
    dispatch(signoutSuccess());
          }
        } catch (error) {
          
        }
        
      }
   const {currentUser} = useSelector((state) =>state.user);
   const navigate = useNavigate()
   const dispatch = useDispatch();
  return (
    <header className="bg-gray-900 p-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <i className="fas fa-video text-white text-2xl mr-2"></i>
                            <span className="text-white text-2xl font-bold">BgRemove</span>
                        </div>
                        <nav className="flex font-serif text-lg space-x-8">
                            <a href="/" className="text-white">Home</a>
                            <a href="/example" className="text-white">Examples</a>
                           
                        </nav>
                        
                        {currentUser? (
     <Dropdown
     arrowIcon={false}
     inline
     label={
       <Avatar className='w-12 h-10' alt='user' img='https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180' rounded />
     }
   >
<Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout} >Sign out</Dropdown.Item>
    </Dropdown>
):
(
    <button onClick={()=>navigate('/login')} className="bg-gray-700 font-bold text-white px-4 py-2 rounded hover:bg-white hover:text-black ">Login</button>
)
}
                    </header>
  )
}

export default Header
