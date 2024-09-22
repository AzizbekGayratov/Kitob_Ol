import React from "react";

interface TextInputProps {
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

export default function TextInput({
  type,
  name,
  value,
  placeholder,
  onChange,
  required,
  className,
}: TextInputProps) {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      name={name}
      id={name}
      className={`${className} form_input `}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
