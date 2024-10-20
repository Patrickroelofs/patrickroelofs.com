import type { HTMLAttributes, ReactNode } from "react";
import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import styles from "./paragraph.module.css";

export interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraph> {
  children: ReactNode;
  size?: "large" | "medium" | "small";
  color?: "yellow" | "red" | "blue";
}

const paragraph = cva(styles.paragraph, {
  defaultVariants: {
    size: "medium",
  },
  variants: {
    color: {
      blue: styles.blue,
      red: styles.red,
      yellow: styles.yellow,
    },
    size: {
      large: styles.large,
      medium: styles.medium,
      small: styles.small,
    },
  },
});

export function Paragraph({
  children,
  color,
  size,
  ...other
}: ParagraphProps): React.ReactElement {
  return (
    <p
      {...other}
      className={paragraph({
        color,
        size,
      })}
    >
      {children}
    </p>
  );
}
