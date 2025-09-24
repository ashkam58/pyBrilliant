import React from "react";

export function Button({ children, onClick, className = "", variant = "default", ...props }: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: "default" | "secondary" | "outline";
  [key: string]: any;
}) {
  let base = "px-3 py-1 rounded focus:outline-none font-semibold transition ";
  let color = variant === "secondary"
    ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
    : variant === "outline"
    ? "border border-slate-400 bg-white text-slate-700 hover:bg-slate-50"
    : "bg-blue-500 text-white hover:bg-blue-600";
  return (
    <button onClick={onClick} className={`${base} ${color} ${className}`} {...props}>
      {children}
    </button>
  );
}
