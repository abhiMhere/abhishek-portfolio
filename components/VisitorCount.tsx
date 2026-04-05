"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VisitorCount() {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
      });
  }, []);

  // Smooth count animation
  useEffect(() => {
    let start = 0;
    const duration = 800; // total animation time
    const increment = count / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= count) {
        setDisplayCount(count);
        clearInterval(counter);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [count]);

  return (
    <div className="mt-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 px-6 py-3 rounded-full 
                   bg-white/5 backdrop-blur-md 
                   border border-white/10 
                   shadow-lg shadow-black/30"
      >
        <span className="text-gray-300 text-lg">👁</span>

        <span className="text-white font-semibold">
          {displayCount}
        </span>

        <span className="text-gray-400 text-sm">visitors</span>
      </motion.div>
    </div>
  );
}