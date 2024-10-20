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
}

const paragraph = cva(styles.paragraph, {
  defaultVariants: {
    size: "medium",
  },
  variants: {
    size: {
      large: styles.large,
      medium: styles.medium,
      small: styles.small,
    },
  },
});

export function Paragraph({
  children,
  size,
  ...other
}: ParagraphProps): React.ReactElement {
  return (
    <p
      {...other}
      className={paragraph({
        size,
      })}
    >
      {children}
    </p>
  );
}
