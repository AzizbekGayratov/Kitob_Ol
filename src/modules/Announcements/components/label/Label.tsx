import React from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export default function Label({ htmlFor, children }: LabelProps) {
  const labelStyle = "font-Inter font-normal text-2xl";

  return (
    <label htmlFor={`${htmlFor}`} className={labelStyle}>
      {children}
    </label>
  );
}
