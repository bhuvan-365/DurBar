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
      <section className='bg-[linear-gradient(90deg,_black_0%,_#0f172a_50%,_black_100%)]'>
        <Navbar />


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
      </section>
    </>
  )
}

export default App
