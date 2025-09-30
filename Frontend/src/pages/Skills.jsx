
import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const scrollRef = useRef();
    const multiScrollRef = useRef([]);
    
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(scrollRef.current, {
            x: -90,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: scrollRef.current,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            }
        })
        
        tl.from(multiScrollRef.current, {
            x: -80,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: multiScrollRef.current,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            }
        })
    }, [])

    const skills = [
        { name: 'HTML', src: '/assets/html2.png' },
        { name: 'CSS', src: '/assets/css.png' },
        { name: 'Bootstrap', src: '/assets/bootstrap.png' },
        { name: 'React', src: '/assets/react2.png' },
        { name: 'Tailwind', src: '/assets/tailwind.png' },
        { name: 'JavaScript', src: '/assets/js2.png' },
        { name: 'Node.js', src: '/assets/node.png' },
        { name: 'Express', src: '/assets/express.png' },
        { name: 'MongoDB', src: '/assets/mongo.png' },
        { name: 'GSAP', src: '/assets/gsap.png' },
        { name: 'Python', src: '/assets/python.png' },
        { name: 'React Three', src: '/assets/r3f.jpg' }
    ];

    return (
        <div className='flex flex-col justify-center min-h-screen px-4 sm:px-6 py-8 sm:py-12 bg-[#000]'>
            {/* Header Section */}
            <div className='text-center mb-8 sm:mb-12'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#28cd5f] mb-4 logo'>My Skills</h1>
                <div className='max-w-2xl mx-auto px-2'>
                    <p className='font-thin opacity-70 text-sm sm:text-base md:text-lg mb-3 leading-relaxed text-gray-300'>
                        From Maharashtra, living in Nagpur. Pursuing B.Tech in Computer Engineering (2026).
                    </p>
                    <p className='font-thin opacity-70 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300'>
                        Working as a freelancer to gain real-world experience.
                    </p>
                </div>
            </div>

            {/* Skills Layout - Single column on mobile */}
            <div className='flex flex-col xl:flex-row items-center justify-center gap-6 sm:gap-8 xl:gap-12 max-w-6xl mx-auto'>
                
                {/* Skills Title - Horizontal on mobile, vertical on desktop */}
                <div ref={scrollRef} className='xl:flex-shrink-0'>
                    <div className="flex xl:flex-col items-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#28cd5f] shadow-[0_0_20px_#28cd5f] p-4 sm:p-5 rounded-xl border border-[#28cd5f]/20">
                        {'SKILLS'.split('').map((letter, index) => (
                            <span 
                                key={index} 
                                className="xl:-rotate-90 mx-1 sm:mx-2 xl:mx-0 xl:my-2 logo hover:text-[#acde7a] transition-colors duration-300"
                            >
                                {letter}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Skills Grid - 4 per row on mobile, perfect touch targets */}
                <div className='w-full'>
                    <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 sm:gap-4'>
                        {skills.map((skill, index) => (
                            <div 
                                key={index}
                                ref={(el) => (multiScrollRef.current[index + 1] = el)}
                                className='group relative bg-[#0d0d0d] rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#28cd5f]/20 transition-all duration-300 border border-gray-800 hover:border-[#28cd5f]/50 min-h-[80px] flex items-center justify-center'
                            >
                                <div className='aspect-square p-3 sm:p-4 flex items-center justify-center w-full'>
                                    <img 
                                        className='w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110'
                                        src={skill.src} 
                                        alt={skill.name}
                                        loading="lazy"
                                    />
                                </div>
                                
                                {/* Skill Name - Appear on hover */}
                                <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#28cd5f] text-black text-xs font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg pointer-events-none'>
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Skills Counter */}
            <div className='text-center mt-6 sm:mt-8'>
                <div className='inline-flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-[#28cd5f]/20'>
                    <div className='w-2 h-2 bg-[#28cd5f] rounded-full animate-pulse'></div>
                    <span className='text-gray-300 text-sm'>{skills.length} Technologies Mastered</span>
                </div>
            </div>
        </div>
    )
}

export default Skills;