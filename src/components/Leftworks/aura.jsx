import React from "react";

import { useGlobal } from "../context/GlobalContext";
export default function Aura() {
 const { auraPoints } = useGlobal();
  const ranking = [
    { name: "Upiiii", points: 45, rank: 1 },
    { name: "Keshav Badmosh", points: 39, rank: 2 },
    { name: "Sarvan Sir", points: 31, rank: 3 },
    { name: "Pannu Vansh", points: 28, rank: 4 },
    { name: "Vaibhav mogger", points: 24, rank: 5 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-white px-6 py-10">
      <div className="max-w-3xl w-full border rounded-2xl shadow-md p-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-purple-600 mb-3 text-center">
          Aura Points ✨
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-center mb-8 leading-relaxed">
          <strong>Aura Points</strong> are a reflection of your good deeds, kindness,
          and positive actions within the community.  
          Every time you help someone, report a safety concern, or contribute
          positively to society, your aura grows stronger — symbolizing your inner
          light and impact on the world. 🌟
        </p>

        {/* Current Aura Points */}
        <div className="text-center bg-purple-50 border-l-4 border-purple-500 rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-2">Your Aura Points</h2>
          <div className="text-6xl font-extrabold text-purple-600">{auraPoints}</div>
          <p className="text-gray-600 mt-2 italic">“Good deeds make your aura glow brighter.”</p>
        </div>

        {/* Ranking Table */}
        <div className="bg-gray-50 rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">🏆 Aura Leaderboard</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center text-gray-700">
              <thead>
                <tr className="bg-purple-100 text-purple-800">
                  <th className="p-3 border-b">Rank</th>
                  <th className="p-3 border-b">Name</th>
                  <th className="p-3 border-b">Points</th>
                </tr>
              </thead>
              <tbody>
                {ranking.map((user) => (
                  <tr key={user.rank} className="hover:bg-purple-50 transition-all">
                    <td className="p-3 border-b font-semibold text-purple-700">#{user.rank}</td>
                    <td className="p-3 border-b">{user.name}</td>
                    <td className="p-3 border-b font-medium">{user.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Motivation */}
        <div className="text-center mt-10 bg-purple-50 border-l-4 border-purple-400 rounded-xl p-6">
          <p className="text-gray-700 italic">
            “Every kind act adds a spark to your aura.  
            Keep doing good — and let your light inspire others.” 💜
          </p>
        </div>
      </div>
    </div>
  );
}
