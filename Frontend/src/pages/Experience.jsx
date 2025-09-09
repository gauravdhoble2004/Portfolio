import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';


const experiences = [
  {
    role: 'Frontend Developer Intern / Remote',
    company: 'Edunet Foundation IBM',
    duration: '20th Aug - 1st sept 2025',
    description: 'Developed responsive UI components using React.js and Tailwind CSS. Collaborated with backend team for API integration.'
  },
  {
    role: 'Freelance Web Developer / Remote',
    company: 'Codec Technologies',
    duration: '16 May - 16 Aug 2025',
    description: 'Built portfolio and client websites using HTML, CSS, JavaScript, and React. Focused on modern UI/UX design.'
  },
  {
   role: 'Python Programming Intern',
    company: 'YBI Foundation',
    duration: '8 Muly - 4 Nov 2025',
    description: 'Completed hands-on training on Python programming. Gained practical experience in problem-solving, data structures, and basic automation using Python.'
  }
];

const Experience = () => {

    gsap.registerPlugin(ScrollTrigger);


    const multiScrollRef = useRef ([]);
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(multiScrollRef.current,{
            x:-80,
            duration: 2,
            ease: "power3.out",
            stagger:0.5,
            opacity:0,
        scrollTrigger: {
                trigger: multiScrollRef.current,
                start: "top 60%",   
                end: "top 30%",     
                scrub: true,        
             
            }
        })

    }, [])
    


  return (

    <div className="h-full w-full bg-[#000] p-8">
      <h1 ref={(el) => (multiScrollRef.current[1]) = el}
      className="text-4xl font-bold text-center mb-12 text-[#28cd5f] logo">My Experience</h1>

  
      <div  ref={(el) => (multiScrollRef.current[2]) = el}
      className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
   
        <div className="p-6 bg-[#2c2c2c] rounded-xl shadow-sm hover:shadow-xl shadow-[#4ad180] transition duration-300">
          <h2 className="text-xl font-semibold text-white mb-2">
            Frontend Developer Intern / Remote
          </h2>
          <p className="text-green-500 font-medium mb-1">Edunet Foundation IBM</p>
          <p className="text-gray-500 text-sm mb-4">20th Aug - 1st Sept 2025</p>
          <p className="text-[#ffffff]">
            Developed responsive UI components using React.js and Tailwind CSS. 
            Collaborated with backend team for API integration.
          </p>
        </div>

        <div  className="p-6 bg-[#2c2c2c] rounded-xl shadow-sm hover:shadow-xl shadow-[#4ad180] transition duration-300">
          <h2 className="text-xl font-semibold text-white mb-2">
            Freelance Web Developer / Remote
          </h2>
          <p className="text-green-500 font-medium mb-1">Codec Technologies</p>
          <p className="text-gray-500 text-sm mb-4">16 May - 16 Aug 2025</p>
          <p className="text-[#ffffff]">
            Built portfolio and client websites using HTML, CSS, JavaScript, 
            and React. Focused on modern UI/UX design.
          </p>
        </div>

  
        <div  className="p-6 bg-[#2c2c2c] rounded-xl shadow-sm hover:shadow-xl shadow-[#4ad180] transition duration-300">
          <h2 className="text-xl font-semibold text-white mb-2">
            Python Programming Intern
          </h2>
          <p className="text-green-500 font-medium mb-1">YBI Foundation</p>
          <p className="text-gray-500 text-sm mb-4">8 July - 4 Nov 2025</p>
          <p className="text-[#ffffff]">
            Completed hands-on training on Python programming. Gained practical 
            experience in problem-solving, data structures, and basic automation 
            using Python.
          </p>
        </div>

      </div>
    </div>


  );
};

export default Experience;
