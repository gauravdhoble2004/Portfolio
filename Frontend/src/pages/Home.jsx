
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Video from '../components/home/Video.jsx';
import Navbar from '../components/home/Navbar.jsx';
import Info from '../components/home/Info.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx'
import Projects from "./Projects.jsx";
import Contact from './Contact.jsx'

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className='w-full overflow-x-hidden'>
   
   
      <div className='fixed top-0 left-0 z-50 w-full'>
        <Navbar />
      </div>

     
      <section id="home" className='min-h-screen w-full relative bg-black pt-20'>
        <div className='h-screen w-full relative bg-black'>
      
        </div>
        <div className='absolute inset-0 z-20 text-white'>
          <Info />
        </div>
      </section>

      
      <section id="skills" className="min-h-screen w-full bg-[#000] text-white">
        <Skills />
      </section>

  
      <section id="projects" className="min-h-screen w-full bg-[#000000] text-white">
        <Projects />
      </section>

    
      <section id="experience" className="min-h-screen w-full bg-[#000000] text-white">
        <Experience />
      </section>

    
      <section id="contact" className="min-h-screen w-full bg-[#000000] text-white">
        <Contact />
      </section>
    </div>
  )
}

export default Home;