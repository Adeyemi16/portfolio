import React from 'react';
import "./App.css"
import Navb from './components/nav/navbar';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
// import Testimonials from './components/testimonial/Testimonials';
import Contact from './components/contact/Contact';
export default function App() {
  return (
    <main className='main'>
      <Navb />
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      {/* <Testimonials /> */}
      <Contact/>
    </main>
  );
}

