import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Example from './pages/Example'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
const App = () => {
  return (
    <>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/example' element={<Example/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>

    </>
  )
}

export default App
