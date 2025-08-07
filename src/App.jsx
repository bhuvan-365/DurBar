import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homec from "./components/Homepage/homec"
import PageAbout from "./components/Pages/aboutUS"
import PageContact from './components/Pages/contact'
import PageGallery from './components/Pages/gallery'
import Blog from './components/Blogs/Blog'
import Navbar from './components/navbar'
import PageOurMenu from './components/Pages/ourmenu'
import SocialLinks from '../src/components/links'
import Reservation from './components/reservation';
import './App.css'

function App() {


  return (
    <>
      {/* <div className="line1 hidden lg:block border border-[#c9ab81] h-full rotate-180 fixed left-22 z-[9999]"></div>
      <div className="line2 hidden lg:block border border-[#c9ab81] h-full rotate-180 fixed right-22 z-[9999]"></div> */}
      <Navbar/>
 
      
      <Routes>
        <Route path='/' element={<Homec />} />
        <Route path="/ourmenu" element={<PageOurMenu />} />
        <Route path="/aboutus" element={<PageAbout />} />
        <Route path="/contact" element={<PageContact />} />
        <Route path="/gallery" element={<PageGallery />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/reservation" element={<Reservation />} />

      </Routes>
    
<SocialLinks />
    </>
  )
}

export default App
