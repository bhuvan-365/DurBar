import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homec from "../src/components/Homepage/homec"
import PageAbout from "./components/Pages/aboutUS"
import PageContact from './components/Pages/contact'
import PageGallery from './components/Pages/gallery'
import BlogArchives from './components/Blogs/archives'
import BlogCategories from './components/Blogs/categories'
import BlogLatestPost from './components/Blogs/latestPost'
import Navbar from './components/navbarc'
import PageOurMenu from './components/Pages/ourmenu'
import SocialLinks from '../src/components/links'
import './App.css'

function App() {


  return (
    <>
      <div className="line1 border border-[#c9ab81] h-full rotate-180 fixed left-22 z-[9999]"></div>
      <div className="line2 border border-[#c9ab81] h-full rotate-180 fixed right-22 z-[9999]"></div>
      <Navbar/>
 
      
      <Routes>
        <Route path='/' element={<Homec />} />
        <Route path="/ourmenu" element={<PageOurMenu />} />
        <Route path="/aboutus" element={<PageAbout />} />
        <Route path="/contact" element={<PageContact />} />
        <Route path="/gallery" element={<PageGallery />} />
        <Route path="/archives" element={<BlogArchives />} />
        <Route path="/categories" element={<BlogCategories />} />
        <Route path="/latestpost" element={<BlogLatestPost />} />
      </Routes>
    
<SocialLinks />
    </>
  )
}

export default App
