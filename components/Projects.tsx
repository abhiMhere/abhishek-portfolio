"use client";

import { motion } from "framer-motion";
// Projects data(apne hisab se update krna hai)
const projects = [
  {
    name: "Book Recommendor",
    status: "ACTIVE",
    description: "AI based book recommendation system",
    tech: "Next.js, Node.js, Tailwind CSS",
    github: "https://github.com/abhiMhere/book-recommender",
    live: " https://book-recommender-ttjcfxc6kmspcxadhykwbu.streamlit.app/",
  },
  
  {
    name: "AI Content Tool",
    status: "BUILDING",
    description: "Generate content using AI models",
    tech: "Next.js, OpenAI API",
    github: "#",
    live: "#",
  },

  {
    name: "Portfolio v2",
    status: "DEPLOYED",
    description: "Modern developer portfolio system",
    tech: "Next.js, Tailwind",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          System Modules
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-indigo-500 transition"
            >
              {/* Status */}
              <p className="text-sm text-cyan-400 font-mono mb-2">
                ● {project.status}
              </p>

              {/* Name */}
              <h3 className="text-xl font-semibold">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-2 text-sm">
                {project.description}
              </p>

              {/* Tech */}
              <p className="text-gray-500 text-xs mt-3">
                {project.tech}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                <a
                  href={project.github}
                  className="text-sm px-4 py-2 border border-gray-600 rounded-md hover:border-white transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="text-sm px-4 py-2 bg-indigo-500 rounded-md hover:bg-indigo-600 transition"
                >
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}