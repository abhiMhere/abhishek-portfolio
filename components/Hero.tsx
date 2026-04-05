"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [active, setActive] = useState<"projects" | "contact" | null>(null);
  const [flash, setFlash] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect(); // ✅ FIXED
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <>
      {/* Flash Overlay */}
      {flash && (
        <div className="fixed inset-0 bg-white/5 pointer-events-none animate-pulse z-40" />
      )}

      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* System Status */}
          <p className="text-cyan-400 font-mono text-sm tracking-widest animate-pulse">
            ● SYSTEM ONLINE
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
            Abhishek Sunny
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl text-gray-400">
            Full Stack Developer
          </h2>

          {/* Typing */}
          <div className="max-w-xl mx-auto text-gray-500 text-lg">
            <TypeAnimation
              sequence={[
                "Building scalable web applications...",
                1500,
                "Designing modern UI systems...",
                1500,
                "Creating developer-focused tools...",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center pt-4">

            {/* View Projects */}
            <motion.button
              onClick={(e) => {
                createRipple(e);
                setFlash(true);
                setActive("projects");

                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });

                setTimeout(() => {
                  setActive(null);
                  setFlash(false);
                }, 300);
              }}
              whileTap={{ scale: 0.95 }}
              animate={
                active === "projects"
                  ? {
                      boxShadow: [
                        "0 0 0px #6366F1",
                        "0 0 25px #6366F1",
                        "0 0 0px #6366F1",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden px-6 py-3 bg-indigo-500 rounded-lg"
            >
              View Projects

              {/* Ripple */}
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute bg-white/30 rounded-full animate-ping"
                  style={{
                    top: ripple.y,
                    left: ripple.x,
                    width: 20,
                    height: 20,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </motion.button>

            {/* Contact */}
            <motion.button
              onClick={(e) => {
                createRipple(e);
                setFlash(true);
                setActive("contact");

                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });

                setTimeout(() => {
                  setActive(null);
                  setFlash(false);
                }, 300);
              }}
              whileTap={{ scale: 0.95 }}
              animate={
                active === "contact"
                  ? {
                      boxShadow: [
                        "0 0 0px #22D3EE",
                        "0 0 25px #22D3EE",
                        "0 0 0px #22D3EE",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden px-6 py-3 border border-gray-600 rounded-lg"
            >
              Contact Me

              {/* Ripple */}
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute bg-white/30 rounded-full animate-ping"
                  style={{
                    top: ripple.y,
                    left: ripple.x,
                    width: 20,
                    height: 20,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </motion.button>

          </div>
        </motion.div>
      </section>
    </>
  );
}