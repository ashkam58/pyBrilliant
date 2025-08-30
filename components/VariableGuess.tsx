"use client";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function VariableGuess() {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const answer = "Ashkam";

  function checkGuess(e: React.FormEvent) {
    e.preventDefault();
    if (guess.trim() === answer) {
      setResult("✅ Correct! You’re unstoppable 💪");
      setStreak(streak + 1);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else {
      setResult("❌ Nope! Hint: starts with A, ends with m 😉");
      setStreak(0);
    }
  }

  return (
    <div className="my-6 p-6 border-2 border-purple-400 rounded-2xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 shadow-md">
      <h1 className="text-2xl font-extrabold mb-3 text-purple-700 flex items-center gap-2">
        🧩 Guess the Variable Game
      </h1>
      <div className="mb-2 font-semibold">
        What is the value of <code>name</code> after this code?
      </div>
      <pre className="bg-gray-900 text-green-300 p-3 rounded mb-2">
        name = "Ashkam"
      </pre>

      <form onSubmit={checkGuess} className="flex gap-2 items-center">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-500"
          placeholder="Type your guess..."
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition"
        >
          Check
        </button>
      </form>

      {result && (
        <div
          className={`mt-4 text-lg font-bold ${
            result.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {result}
        </div>
      )}

      <div className="mt-3 text-sm">
        🔥 Current streak: <span className="font-bold">{streak}</span>
      </div>
    </div>
  );
}
