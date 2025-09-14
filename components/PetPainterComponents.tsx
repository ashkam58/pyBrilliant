"use client";
import React, { useState } from "react";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      background: "#ffe8a3",
      color: "#3b2f00",
      padding: "0.15rem 0.5rem",
      borderRadius: "999px",
      fontSize: "0.8rem",
      border: "1px solid #e2c97c",
      whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

export function Callout({ type = "note", children }: { type?: "note" | "tip" | "warn" | "bug"; children: React.ReactNode }) {
  const palette = {
    note: { bg: "#eef5ff", border: "#b6d0ff" },
    tip: { bg: "#eeffef", border: "#b7f3be" },
    warn: { bg: "#fff7e5", border: "#ffd58f" },
    bug: { bg: "#fff0f3", border: "#ffb3c1" },
  }[type];
  return (
    <div style={{
      background: palette.bg,
      border: `2px solid ${palette.border}`,
      borderRadius: 16,
      padding: "0.9rem 1rem",
      margin: "1rem 0",
      boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
    }}>{children}</div>
  );
}

export function Hint({ title = "Hint", children }: { title?: string; children: React.ReactNode }) {
  return (
    <details style={{
      background: "#f7f7ff",
      border: "1px dashed #bfbff7",
      borderRadius: 12,
      padding: "0.7rem 0.9rem",
      margin: "0.8rem 0",
    }}>
      <summary style={{ cursor: "pointer", fontWeight: 600 }}>{title}</summary>
      <div style={{ marginTop: 8 }}>{children}</div>
    </details>
  );
}

export function Step({ num, title, minutes = 7, children }: { num: number; title: string; minutes?: number; children: React.ReactNode }) {
  return (
    <section style={{
      border: "2px solid #e9e9ef",
      borderRadius: 20,
      padding: "1rem 1.2rem",
      margin: "1.1rem 0",
      background: "#fffdfa",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 999,
          background: "#ffdfe3", display: "grid", placeItems: "center",
          fontWeight: 800, border: "2px solid #ffb6c1"
        }}>{num}</div>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <div style={{ marginLeft: "auto" }}><Badge>{minutes} min</Badge></div>
      </div>
      <div>{children}</div>
    </section>
  );
}

export function MCQ({ question, options = [], correct = 0, explanation = "" }: { question: string; options?: string[]; correct?: number; explanation?: string }) {
  const [picked, setPicked] = useState<number | null>(null);
  const isCorrect = picked === correct;
  return (
    <div style={{
      border: "2px solid #e6ecff",
      borderRadius: 16,
      padding: "0.9rem 1rem",
      margin: "1rem 0",
      background: "#f8fbff",
    }}>
      <div style={{ fontWeight: 700, marginBottom: 10 }}>{question}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
        {options.map((opt, i) => (
          <li key={i}>
            <button onClick={() => setPicked(i)} style={{
              width: "100%",
              textAlign: "left",
              border: "2px solid #ccd9ff",
              background: picked === i ? (i === correct ? "#e9ffe9" : "#ffe9ee") : "white",
              padding: "0.6rem 0.75rem",
              borderRadius: 12,
              cursor: "pointer",
              fontSize: "0.95rem",
            }}>
              {String.fromCharCode(65 + i)}. {opt}
            </button>
          </li>
        ))}
      </ul>
      {picked !== null && (
        <div style={{ marginTop: 10 }}>
          {isCorrect ? (
            <div style={{ color: "#1b7a2a", fontWeight: 700 }}>Nice! That’s correct. ✅</div>
          ) : (
            <div style={{ color: "#a4002a", fontWeight: 700 }}>Not quite. Try another! ❌</div>
          )}
          {explanation && (
            <div style={{ marginTop: 6, fontSize: "0.95rem", opacity: 0.9 }}>{explanation}</div>
          )}
        </div>
      )}
    </div>
  );
}

export function Tiny({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>{children}</div>;
}
