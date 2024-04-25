import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Index';
import Home from '../../pages/Home/Index'
import Auth from '../../pages/User/Index'
import Footer from '../../pages/Footer/Index'
const index = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/user"element={<Auth/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default index