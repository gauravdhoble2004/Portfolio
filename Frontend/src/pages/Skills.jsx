import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


function skills() {

    const scrollRef = useRef();
    const multiScrollRef = useRef ([]);
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(scrollRef.current, {
            x: -90,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
        scrollTrigger: {
                trigger: scrollRef.current,
                start: "top 70%",   
                end: "top 30%",     
                scrub: true,        
               
            }

        })
        tl.from(multiScrollRef.current,{
            x:-80,
            opacity:0,
            delay:2,
            duration: 2,
            ease: "power3.out",
            stagger:0.5,
        scrollTrigger: {
                trigger: multiScrollRef.current,
                start: "top 60%",   
                end: "top 30%",     
                scrub: true,        
            
            }
        })

    }, [])
    

    return (

        <div className='flex flex-col justify-center '>     {/*main*/}

            <div className='mt-7 flex '>
                <div className='p-1'>     {/*heading*/}
                    <h1 className='ml-160 font-bold text-5xl text-[#28cd5f] m-1 p-4 logo'>What I do</h1>
                    <h6 className='font-thin opacity-[0.4] text-sm ml-90'>
                        I’m from Maharashtra and living in Nagpur. I’m currently pursuing my B.Tech in Computer Engineering and will be graduating in 2026.<br>
                        </br>
                    </h6>
                    <h6 className='font-thin opacity-[0.4] text-sm ml-122'>Apart from being a student, I also work as a freelancer to gain experience and improve my skills.
                    </h6>
                </div>

            </div>

            <div className='mt-10 cards flex flex-row'>                 {/*skills*/}

                <div ref={scrollRef} className='h-10 ml-10 mt-33'>
                    <div className="flex flex-col items-center text-4xl font-bold leading-[1.1]  text-[#28cd5f] shadow-[0_0_20px_#28cd5f]   p-6 rounded-lg">
                        <span className="-rotate-90 logo">S</span>
                        <span className="-rotate-90 logo">L</span>
                        <span className="-rotate-90 logo">L</span>
                        <span className="-rotate-90 logo">I</span>
                        <span className="-rotate-90 logo">K</span>
                        <span className="-rotate-90 logo">S</span>
                    </div>
                </div>


                <div  className='flex pr-5 pl-15 flex-wrap gap-4 m-10 '>
                    {/*card comtainer*/}
                    <div ref={(el) => (multiScrollRef.current[1]) = el}
                    className='card bg-[#0d0d0d] h-50   shadow-black    shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/html2.png' />
                    </div>

                    <div ref={(el) => (multiScrollRef.current[2]) = el}
                     className='card bg-[#0d0d0d] h-50   shadow-black    shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/css.png' />
                    </div>

                    <div ref={(el) => (multiScrollRef.current[3]) = el} 
                    className='card bg-[#0d0d0d] h-50   shadow-black   shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/bootstrap.png' />
                    </div>

                    <div ref={(el) => (multiScrollRef.current[4]) = el}
                     className='card bg-[#0d0d0d] h-50   shadow-black    shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/react2.png' />
                    </div>

                    <div ref={(el) => (multiScrollRef.current[5]) = el}
                     className='card bg-[#0d0d0d] h-45   shadow-black   shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/tailwind.png' />
                    </div>

                    <div ref={(el) => (multiScrollRef.current[6]) = el}
                    className='card bg-[#0d0d0d] h-50   shadow-black    shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/js2.png' />
                    </div>

                    <div ref={(el) => (multiScrollRef.current[7]) = el}
                    className='card bg-[#0d0d0d] h-45  shadow-black    shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/node.png' />
                    </div>

                    <div ref={(el) => (multiScrollRef.current[8]) = el}
                     className='card bg-[#0d0d0d] h-45   shadow-black    shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/express.png' />
                    </div>

                    <div ref={(el) => (multiScrollRef.current[9]) = el}
                     className='card bg-[#0d0d0d] h-45   shadow-black   shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/mongo.png' />
                    </div>

                    <div ref={(el) => (multiScrollRef.current[10]) = el}
                     className='card bg-[#0d0d0d] h-45   shadow-black    shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/gsap.png' />
                    </div>

                    <div ref={(el) => (multiScrollRef.current[11]) = el}
                     className='card bg-[#0d0d0d] h-45   shadow-black    shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/python.png' />
                    </div>

                    <div ref={(el) => (multiScrollRef.current[12]) = el}
                     className='card bg-[#0d0d0d] h-47 w-50  shadow-black    shadow-8xl rounded-xl'>
                        <img className='w-[100%] h-[100%] p-5  rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
                            src='/assets/r3f.jpg' />
                    </div>

            




                </div>



                <div>

                </div>

            </div>


        </div>
    )
}

export default skills