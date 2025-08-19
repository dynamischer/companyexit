import * as React from "react";
import { twMerge } from "tailwind-merge";

export function Badge({ className, ...props }) {
  return (
    <span
      className={twMerge(
        "inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium",
        className
      )}
      {...props}
    />
  );
}
