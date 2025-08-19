import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

export function Sheet({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

export function SheetTrigger({ asChild = false, children }) {
  return <Dialog.Trigger asChild={asChild}>{children}</Dialog.Trigger>;
}

export function SheetContent({ side = "right", className, children, ...props }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/40" />
      <Dialog.Content
        {...props}
        className={twMerge(
          "fixed top-0 h-full w-80 bg-white p-6 shadow-xl focus:outline-none",
          side === "right" ? "right-0" : "left-0",
          className
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
