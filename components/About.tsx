"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 leading-relaxed text-lg"
        >
          I’m a full stack developer focused on building scalable systems and
          clean user interfaces. I enjoy solving real-world problems and turning
          ideas into production-ready applications. Currently exploring AI-powered
          tools and modern web architectures.
        </motion.p>

      </div>
    </section>
  );
}