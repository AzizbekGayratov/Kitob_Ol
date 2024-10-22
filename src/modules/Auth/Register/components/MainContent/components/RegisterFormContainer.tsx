import React from "react";

export default function RegisterFormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">{children}</div>;
}
