
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const dropDownRef = useRef(null);
  const multiDropDownRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(dropDownRef.current, {
      y: -100,
      duration: 1,
      delay: 0,
      opacity: 0,
      ease: "bounce.out",
    });

    tl.from(multiDropDownRef.current, {
      y: -100,
      duration: 0.8,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2,
    })
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="h-15 w-full flex items-center justify-between text-amber-50 mt-7 mb-2 px-4 md:px-8">
        <div ref={dropDownRef} className='pl-4 md:pl-10'>
          <h1 className="text-[24px] md:text-[30px] font-bold text-[#28cd5f] logo">Gaurav's</h1>
          <h2 className="text-lg md:text-xl font-medium ml-4 md:ml-8">Portfolio</h2>
        </div>

        
        <div className="hidden md:flex space-x-4 lg:space-x-7">
          {['home', 'skills', 'projects', 'experience', 'contact'].map((section, index) => (
            <button
              key={section}
              ref={(el) => (multiDropDownRef.current[index + 1] = el)}
              onClick={() => scrollToSection(section)}
              className='text-lg hover:shadow-lg shadow-[#28cd5f] px-4 py-2 md:p-6 rounded-lg text-[#abeeaa] font-medium'
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

     
        <button 
          className="md:hidden text-3xl text-[#28cd5f] z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

    
      <div className={`fixed top-0 left-0 w-full h-screen bg-black z-40 transition-transform duration-300 md:hidden ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['home', 'skills', 'projects', 'experience', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className='text-2xl hover:shadow-lg shadow-[#28cd5f] px-8 py-4 rounded-lg text-[#abeeaa] font-medium w-64 text-center'
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <button 
            className="absolute top-8 right-8 text-3xl text-[#28cd5f]"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;