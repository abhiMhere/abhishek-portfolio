"use client";

import { useEffect, useState } from "react";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="mt-6 flex justify-center">
      <div className="px-6 py-3 bg-[#111827] border border-gray-700 rounded-full shadow-lg text-gray-300">
        👁 {count !== null ? count : "0"} visitors
      </div>
    </div>
  );
}