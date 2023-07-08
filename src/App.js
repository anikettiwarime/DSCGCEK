import './App.css'
import React from 'react'
import Navbar from './components/Navbar.js';
import HeroSection from './components/HeroSection.js';
import About from './components/About.js';
import Team from './components/Team.js';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Data from './Assets/Data';



const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Team />
      <Contact />
      <Footer />
      {/* <Data /> */}
    </>
  )
}

export default App
