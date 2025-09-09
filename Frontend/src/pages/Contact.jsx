// ContactSection.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-[#000000] text-white flex flex-col md:flex-row items-center justify-center p-8 gap-12">
      
      {/* 3D Sphere */}
      <div className="w-full md:w-1/2 h-96">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Sphere args={[1.5, 64, 64]} scale={1.5}>
              <MeshDistortMaterial
                color="#8cbaf2"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-1/2 bg-[#1b1b1b] p-8 rounded-sm shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-[#6cff73]">Contact Me 📧 </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
          />
          <button
            type="submit"
            className="bg-[#6cff73] text-gray-900 font-bold py-3 rounded-lg hover:bg-green-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
