import React from 'react';
import "./App.css"
import Navb from './components/nav/navbar';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
// import Testimonials from './components/testimonial/Testimonials';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import ScrollUp from './components/scrollup/ScrollUp';
export default function App() {
  return (
    <>
    <Navb />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      {/* <Testimonials /> */}
      <Contact/>
      
    </main>
    <Footer/>
    <ScrollUp/>
    </>
    
  );
}

