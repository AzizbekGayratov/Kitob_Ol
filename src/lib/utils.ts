import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const AddDotsToValue = (value: string | number, IsNumber?: boolean) => {
  if (IsNumber) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const safeParse = (data: string | null) => {
  try {
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Invalid JSON data:", error);
    return [];
  }
};
