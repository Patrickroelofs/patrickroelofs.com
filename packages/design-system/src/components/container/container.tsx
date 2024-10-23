import type { HTMLAttributes, ReactNode } from "react";
import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export interface ContainerProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof container> {
  children: ReactNode;
}

const container = cva("u-container");

export function Container({
  children,
  className,
}: ContainerProps): React.ReactElement {
  return (
    <div
      className={container({
        className,
      })}
    >
      {children}
    </div>
  );
}
