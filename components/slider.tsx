import React from "react";

export function Slider({ value, min, max, step, onChange, className = "w-full accent-blue-500" }: {
  value: number,
  min: number,
  max: number,
  step?: number,
  onChange: (v: number) => void,
  className?: string
}) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step ?? 1}
      value={value}
      onChange={e => onChange(Number(e.target.value))}
      className={className}
    />
  );
}
