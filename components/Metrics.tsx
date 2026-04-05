"use client";

import { motion } from "framer-motion";
// Metrics data(apne hisab se data update krna hai)
const metrics = [
  { label: "Projects Deployed", value: "3+" },
  { label: "APIs Built", value: "2+" },
  { label: "GitHub Commits", value: "20+" },
  { label: "Current Focus", value: "AI + SaaS" },
];

export default function Metrics() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        {metrics.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#111827] border border-gray-800 rounded-xl p-6 text-center hover:border-indigo-500 transition"
          >
            <h3 className="text-3xl font-bold text-indigo-400">
              {item.value}
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}