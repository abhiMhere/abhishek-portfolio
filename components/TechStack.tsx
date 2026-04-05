"use client";

import { motion } from "framer-motion";

// ✅ import icons
import { FaReact, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiPython } from "react-icons/si";

// ✅ updated tech stack (icon + name)
const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function TechStack() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Tech Stack
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-400 transition"
            >
              {/* ✅ Icon */}
              <div className="text-3xl mb-2 text-indigo-400">
                {tech.icon}
              </div>

              {/* Name */}
              <p className="text-lg font-semibold">{tech.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}