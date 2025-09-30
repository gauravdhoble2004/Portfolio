
import React from "react";

const projects = [
  {
    title: "Campus Recruitment System",
    description: "A web app built with PHP, MySQL, and Tailwind where students, companies, and admins interact for job placements.",
    tech: ["PHP", "MySQL", "Tailwind", "JavaScript"],
    link: "https://github.com/yourusername/campus-recruitment",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, Tailwind, and GSAP animations to showcase my work and skills.",
    tech: ["React", "Tailwind", "GSAP"],
    link: "https://yourportfolio.com",
  },
  {
    title: "Todo List App",
    description: "A simple and intuitive Todo List app where users can add, edit, and delete tasks with persistent local storage.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/yourusername/todo-list",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen w-full py-16 bg-black text-white px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">🚀 My Projects</h2>

        <div className="relative">
          {/* Vertical timeline line - Hidden on mobile */}
          <div className="hidden md:block absolute top-0 left-1/2 w-1 bg-gray-700 h-full transform -translate-x-1/2"></div>

          {projects.map((project, index) => (
            <div key={index} className="mb-12 md:mb-16 relative">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-950 z-10"></div>
              
              {/* Project card */}
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 md:px-8 mb-4 md:mb-0">
                  <ProjectCard project={project} />
                </div>
                <div className="md:w-1/2"></div> {/* Spacer for desktop layout */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:shadow-green-400/40 transition">
      <h3 className="text-xl md:text-2xl font-semibold mb-3">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-3 py-1 text-xs md:text-sm bg-green-700/20 border border-green-500 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline text-sm md:text-base">
        🔗 View Project
      </a>
    </div>
  );
}