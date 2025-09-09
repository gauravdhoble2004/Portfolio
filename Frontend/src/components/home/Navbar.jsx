import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
function Navbar() {

  const dropDownRef = useRef(null);
  const multiDropDownRef = useRef([]);
  useGSAP(() => {

    const tl = gsap.timeline()

    tl.from(dropDownRef.current, {
      y: -100,
      duration:1,
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

  return (
    <div className="h-15 w-full flex items-center justify-between gap-110
     text-amber-50  mt-7 mb-2 px-8">

      <div ref={dropDownRef} className='pl-10  '>
        <h1 className="text-[30px] font-bold text-[#28cd5f] logo">Gaurav's</h1>
        <h2 className="text-xl font-medium ml-8">Portfolio</h2>
      </div>


      <div className="flex space-x-7">
        <Link
          ref={(el) => (multiDropDownRef.current[1]) = el}
          className='text-xl  hover:shadow-lg shadow-[#28cd5f] p-6
           rounded-lg text-[#abeeaa] font-medium text-[25px]' to="/">Home</Link>
        <Link
          ref={(el) => (multiDropDownRef.current[2]) = el}
          className='text-xl text-medium hover:shadow-lg shadow-[#28cd5f] p-6
           rounded-lg text-[#abeeaa] font-medium text-[25px]' to="/">Skills</Link>
        <Link
          ref={(el) => (multiDropDownRef.current[3]) = el}
          className='text-xl text-medium hover:shadow-lg shadow-[#28cd5f] p-6
           rounded-lg text-[#abeeaa] font-medium text-[25px]' to="/">Projects</Link>
        <Link
          ref={(el) => (multiDropDownRef.current[4]) = el}
          className='text-xl text-medium hover:shadow-lg shadow-[#28cd5f] p-6
           rounded-lg text-[#abeeaa] font-medium text-[25px]' to="/">Experience</Link>
        <Link
          ref={(el) => (multiDropDownRef.current[5]) = el}
          className='text-xl text-medium hover:shadow-lg shadow-[#28cd5f] p-6
           rounded-lg text-[#abeeaa] font-medium text-[25px]' to="/">Contact</Link>
      </div>


    </div>
  );
}

export default Navbar;
