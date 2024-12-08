import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
const App = () => {
  return (
    <>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>

    </>
  )
}

export default App
