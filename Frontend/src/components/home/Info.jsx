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

  return (
    <>
      <div className='flex flex-col lg:flex-row min-h-screen items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16'>
        <div className="absolute lg:relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto flex justify-center lg:justify-start items-center lg:items-center mb-8 lg:mb-0 z-50 pointer-events-none">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-full max-w-2xl">
            <Robot />
          </div>
        </div>

        <div className='w-full lg:w-1/2 text-center lg:text-left z-40 mt-4 lg:mt-0 lg:pl-8 xl:pl-16'>
          <h1 
            ref={(el) => (multiDropRef.current[1] = el)}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'
          >
            Hi, It's <span className='text-[#28cd5f]'>Gaurav</span>
          </h1>

          <div 
            ref={(el) => (multiDropRef.current[2] = el)} 
            className='mt-4 mb-6'
          >
            <h3 
              ref={typedRef}
              className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#28cd5f] to-[#acde7a] bg-clip-text text-transparent inline-block min-h-[1.5em]'
            ></h3>
          </div>

          <h5 
            ref={(el) => (multiDropRef.current[3] = el)}
            className='text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0'
          >
            I'm a passionate web developer who loves turning ideas into interactive digital experiences. 
            Skilled in front-end and back-end development, I enjoy building responsive, user-friendly websites. 
            Always eager to learn and explore new technologies to deliver modern solutions.
          </h5>

    
          <div 
            ref={(el) => (multiDropRef.current[4] = el)}
            className="flex justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 mb-8"
          >
            {[
              { 
                href: "https://www.linkedin.com/in/gaurav-dhoble", 
                src: "/assets/linkedin.png", 
                alt: "LinkedIn",
                class: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
              },
              { 
                href: "https://github.com/gauravdhoble2004", 
                src: "/assets/GitHub.png", 
                alt: "Github",
                class: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
              },
              { 
                href: "mailto:gaurav724897.com", 
                src: "/assets/mail.png", 
                alt: "Mail",
                class: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
              },
              { 
                href: "/", 
                src: "/assets/twitter.png", 
                alt: "Twitter",
                class: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
              },
              { 
                href: "https://instagram.com/gaurav2004___", 
                src: "/assets/insta.png", 
                alt: "Insta",
                class: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
              }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:shadow-2xl"
              >
                <img 
                  className={`${social.class} rounded-xl object-contain`}
                  src={social.src} 
                  alt={social.alt} 
                />
              </a>
            ))}
          </div>

          <div 
            ref={(el) => (multiDropRef.current[5] = el)}
            className="flex justify-center lg:justify-start"
          >
            <Link
              to="/"
              className="inline-block text-base sm:text-lg md:text-xl font-semibold tracking-wide px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-[#28cd5f] border-2 border-[#28cd5f] hover:shadow-lg shadow-[#28cd5f] transition-all duration-300 hover:bg-[#28cd5f] hover:text-black"
            >
              DOWNLOAD RESUME
            </Link>
          </div>
        </div>
      </div>

  
      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-content {
            padding-top: 2rem;
          }
        }
        @media (max-width: 768px) {
          .hero-content {
            padding-top: 3rem;
          }
        }
        @media (max-width: 480px) {
          .hero-content {
            padding-top: 4rem;
          }
        }
      `}</style>
    </>
  )
}

export default Info;