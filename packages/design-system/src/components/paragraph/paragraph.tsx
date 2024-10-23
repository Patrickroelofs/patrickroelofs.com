import type { HTMLAttributes, ReactNode } from "react";
import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import styles from "./paragraph.module.css";

export interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraph> {
  children: ReactNode;
  size?: "large" | "base" | "small";
}

const paragraph = cva(styles.paragraph, {
  defaultVariants: {
    size: undefined,
  },
  variants: {
    size: {
      base: undefined,
      large: styles.large,
      small: styles.small,
    },
  },
});

export function Paragraph({
  children,
  className,
  size,
  ...other
}: ParagraphProps): React.ReactElement {
  return (
    <p
      {...other}
      className={paragraph({
        className,
        size,
      })}
    >
      {children}
    </p>
  );
}
