"use client";

import { motion } from "framer-motion";
// Tech stack data(apne hisab se update krna hai)
const techStack = [
  "React",
  "Next.js",
  "Java",
  "Node.js",
  "Python",
  "Git",
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
              <p className="text-lg font-semibold">{tech}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}