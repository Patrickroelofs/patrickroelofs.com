import type { HTMLAttributes, ReactNode } from "react";
import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import styles from "./heading.module.css";

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {
  children: ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "red" | "blue" | "yellow";
}

const heading = cva(styles.heading, {
  defaultVariants: {},
  variants: {
    as: {
      h1: styles.h1,
      h2: styles.h2,
      h3: styles.h3,
      h4: styles.h4,
      h5: styles.h5,
      h6: styles.h6,
    },
  },
});

export function Heading({
  as,
  children,
  tag,
  ...other
}: HeadingProps): React.ReactElement {
  const HeadingTag = tag || as || "h2";

  return (
    <HeadingTag
      className={heading({
        as: as || tag || "h2",
      })}
      {...other}
    >
      {children}
    </HeadingTag>
  );
}
