
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';

const experiences = [
  {
    role: 'Frontend Developer Intern / Remote',
    company: 'Edunet Foundation IBM',
    duration: '20th Aug - 1st Sept 2025',
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
    duration: '8 July - 4 Nov 2025',
    description: 'Completed hands-on training on Python programming. Gained practical experience in problem-solving, data structures, and basic automation using Python.'
  }
];

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);
  const multiScrollRef = useRef([]);
  
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(multiScrollRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: multiScrollRef.current,
        start: "top 85%",
        end: "top 60%",
        scrub: true,
      }
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#000] p-4 sm:p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 ref={(el) => (multiScrollRef.current[1] = el)}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#28cd5f] logo">
          My Experience
        </h1>

        <div ref={(el) => (multiScrollRef.current[2] = el)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="p-4 sm:p-5 bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-[#28cd5f] transition-all duration-300 hover:transform hover:scale-105">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-tight">
                {exp.role}
              </h2>
              <p className="text-[#28cd5f] font-medium mb-2 text-sm sm:text-base">{exp.company}</p>
              <p className="text-gray-500 text-xs sm:text-sm mb-3">{exp.duration}</p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;