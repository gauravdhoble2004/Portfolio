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
      lerp: 0.1, // inertia
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (


    <div className='w-screen'>

      <div className='h-screen w-screen relative bg-black'>
        {/* <Video /> */}
      </div>

      <div className='absolute top-0 left-0 z-30 ' >
        <Navbar />
      </div>

      <div className='absolute inset-0 z-20 text-white'>
        <Info />
      </div>

      <div className="h-screen w-screen   bg-[#000] text-white text-3xl">
        <Skills />

      </div>

      <div className="h-[200vh] w-[200vh] flex  bg-[#000000] text-white text-3xl">
        <Projects />
      </div>

      <div className="h-screen w-screen flex  bg-[#000000] text-white text-3xl">

        <Experience />

      </div>
      <div className="h-screen w-screen flex  bg-[#000000] text-white text-3xl">

        <Contact />

      </div>


    </div>

  )
}

export default Home;