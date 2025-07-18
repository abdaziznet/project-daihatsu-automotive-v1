"use client";

import { useEffect, useState } from "react";

type VisitorData = {
  today: number;
  yesterday: number;
  month: number;
  year: number;
  online: number;
};

export default function VisitorStats() {
  const [stats, setStats] = useState<VisitorData>({
    today: 0,
    yesterday: 0,
    month: 0,
    year: 0,
    online: 0,
  });

  useEffect(() => {
    fetch("/api/visitor")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(console.error);
  }, []);

  return (
    <div className="text-white text-sm text-left space-y-1 rounded">
      <div className="text-2xl flex space-x-1 justify-left">
        {String(stats.month)
          .padStart(4, "0")
          .split("")
          .map((n, i) => (
            <div key={i} className="bg-black text-white px-2 py-1 font-mono">
              {n}
            </div>
          ))}
      </div>
      <p>🧍 Visit Today: {stats.today}</p>
      <p>🧍 Visit Yesterday: {stats.yesterday}</p>
      <p>📅 This Month: {stats.month}</p>
      <p>📅 This Year: {stats.year}</p>
      <p>🧍 Who's Online: {stats.online}</p>
    </div>
  );
}
