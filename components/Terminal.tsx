"use client";

import { useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleCommand = (cmd: string) => {
    let output = "";

    switch (cmd.toLowerCase()) {
      case "help":
        output = "Commands: help, projects, skills, contact";
        break;
      case "projects":
        output = "Projects: NovaDrive, AI Tool, Portfolio";
        break;
      case "skills":
        output = "Skills: React, Next.js, Node.js, MongoDB";
        break;
      case "contact":
        output = "Email: abhisunny019@gmail.com";
        break;
      default:
        output = "Command not found";
    }

    setHistory((prev) => [...prev, `> ${cmd}`, output]);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm">

        {/* History */}
        <div className="space-y-2 mb-4">
          {history.map((line, index) => (
            <p key={index} className="text-green-400">
              {line}
            </p>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center">
          <span className="text-cyan-400 mr-2">$</span>
          <input
            className="bg-transparent outline-none w-full text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCommand(input);
                setInput("");
              }
            }}
          />
        </div>

      </div>
    </section>
  );
}