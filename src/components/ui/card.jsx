import * as React from "react";
import { twMerge } from "tailwind-merge";

export function Card({ className, ...props }) {
  return <div className={twMerge("rounded-xl border bg-card text-card-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={twMerge("p-6", className)} {...props} />;
}
