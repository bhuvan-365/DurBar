import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbarc'
// import Home from './components/Homepage/home'
// import About from './components/Aboutpage/about'
// import Contact from './components/contact/contact'
import Homec from "../src/components/Homepage/homec"

import './App.css'

function App() {


  return (
    <>
      <div className="line1 border border-[#c9ab81] h-full rotate-180 fixed left-22 z-50"></div>
      <div className="line2 border border-[#c9ab81] h-full rotate-180 fixed right-22 z-50"></div>
      <Homec />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      {/* <Route path="/starters" element={<StartersPage />} />
      <Route path="/main-courses" element={<MainCoursesPage />} />
      <Route path="/desserts" element={<DessertsPage />} /> */}


    </>
  )
}

export default App
