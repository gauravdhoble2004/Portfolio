import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Robot from './Robot';


function Info() {

  const multiDropRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(multiDropRef.current, {
      y: -100,
      duration: 0.8,
      opacity: 0,
      delay: 2,
      ease: "power3.out",
      stagger: 0.2,
    })
  }, []);

  ////////////////////////////
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Web Developer !', 'MERN Developer !', 'Full Stack Developer !'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,

    });

    return () => {
      typed.destroy();
    };
  }, []);
  /////////////////////////////

  return (
    <>

      <div className='flex flex-col md:flex-row items-center justify-center  mt-50'>


        <div className="absolute w-[500px] h-[400px] md:w-[800px] md:h-[500px] left-1 top-50 z-20 pointer-events-none">
          <Robot />
        </div>



        <div className='absolute right-20 top-60 z-40'>

          <h1 ref={(el) => (multiDropRef.current[1] = el)}
            className='text-[50px] font-bold'>
            Hi, It's <span className='text-[#28cd5f]'>Gaurav</span>
          </h1>

          <div ref={(el) => (multiDropRef.current[2] = el)}  >
            <h3 ref={typedRef}
              className='text-[30px] pt-1.5 inline-block text-6xl font-bold bg-gradient-to-r 
            from-[#28cd5f] to-[#acde7a] bg-clip-text text-transparent'
            ></h3>
          </div>

          <h5 ref={(el) => (multiDropRef.current[3] = el)}
            className='pt-1.5 text-lg leading-relaxed text-gray-300'>
            I’m a passionate web developer who loves turning ideas into interactive digital experiences.<br />
            Skilled in front-end and back-end development, I enjoy building responsive, user-friendly websites.<br />
            Always eager to learn and explore new technologies to deliver modern solutions.
          </h5>


          <div ref={(el) => (multiDropRef.current[4] = el)}
            className="flex gap-5 text-3xl mt-4">
            <a href="https://www.linkedin.com/in/gaurav-dhoble">
              <img className='h-[55px] w-[100%] rounded-xl transition-transform
               duration-300 ease-in-out hover:-translate-y-2 hover:scale-105
                hover:shadow-2xl ' src="/assets/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/gauravdhoble2004">
              <img className='h-[60px] rounded-xl transition-transform
               duration-300 ease-in-out hover:-translate-y-2
                hover:scale-105 hover:shadow-2xl ' src="/assets/GitHub.png"
                alt="Github" />
            </a>
            <a href="mailto:gaurav724897.com">
              <img className='h-[65px] rounded-xl transition-transform
               duration-300 ease-in-out hover:-translate-y-2 
               hover:scale-105 hover:shadow-2xl ' src="/assets/mail.png"
                alt="Mail" />
            </a>
            <a href="/">
              <img className='h-[65px] rounded-xl transition-transform
               duration-300 ease-in-out hover:-translate-y-2 
               hover:scale-105 hover:shadow-2xl ' src="/assets/twitter.png"
                alt="Twitter" />
            </a>
            <a href="https://instagram.com/gaurav2004___">
              <img className='h-[55px] rounded-xl transition-transform 
              duration-300 ease-in-out hover:-translate-y-2 
              hover:scale-105 hover:shadow-2xl ' src="/assets/insta.png"
                alt="Insta" />
            </a>
          </div>

          <div ref={(el) => (multiDropRef.current[5] = el)}
            className="mt-16">
            <Link
              to="/"
              className="text-xl font-semibold tracking-wide px-8 py-3 
                        rounded-xl text-[#28cd5f] border-2 border-[#28cd5f]
                          hover:shadow-lg shadow-[#28cd5f] p-7"
            >
              RESUME
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
