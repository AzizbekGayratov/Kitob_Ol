import React from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <h4>
      <label
        htmlFor={`${htmlFor}`}
        className="font-Inter text-[24px] leading-[29px] inline-block mb-6"
      >
        {children}
      </label>
    </h4>
  );
}
