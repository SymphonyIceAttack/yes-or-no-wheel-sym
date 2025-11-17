"use client";

import * as React from "react";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export function Slot({ children, ...props }: SlotProps) {
  if (React.isValidElement(children)) {
    return React.cloneElement(
      children,
      props as React.ComponentProps<typeof children>,
    );
  }
  return <div {...props}>{children}</div>;
}

export { Slot };
