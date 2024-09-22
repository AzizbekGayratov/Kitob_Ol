import React from "react";

export default function FormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-3">{children}</div>;
}
