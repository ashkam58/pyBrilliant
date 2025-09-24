import React from "react";

export function Input({ value, onChange, placeholder = "", className = "", ...props }: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-2 py-1 border rounded ${className}`}
      {...props}
    />
  );
}
