import type { Icons } from "@/payload-types";
import * as PhosphorIcons from "@phosphor-icons/react/dist/ssr";
import type { ReactElement } from "react";
import styles from "./icon.module.css";

interface IconType {
  size: number;
  name: Icons;
  className?: string;
  weight?: "light" | "regular" | "duotone" | "thin" | "bold";
}

function Icon(props: IconType): ReactElement | null {
  const IconComponent = PhosphorIcons[props.name];

  return (
    <IconComponent
      className={styles.icon}
      weight={props.weight ?? "duotone"}
      {...props}
    />
  );
}

export { Icon };
