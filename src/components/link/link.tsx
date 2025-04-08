import type { Icons } from "@/payload-types";
import Link from "next/link";
import { Icon } from "../icon/icon";
import styles from "./link.module.css";

export type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
};

const PageLink = (props: LinkProps) => {
  return (
    <Link href={props.href} target={props.target} className={styles.link}>
      {props.children}
      {props.target === "_blank" && (
        <span className="visually-hidden">opens in a new tab</span>
      )}
      <Icon
        aria-hidden={true}
        className={styles.icon}
        size={24}
        name={props.target === "_blank" ? "ArrowSquareOut" : "LinkSimple"}
      />
    </Link>
  );
};

type IconLinkProps = {
  size: number;
  icon: Icons;
};

const IconLink = (props: LinkProps & IconLinkProps) => {
  return (
    <Link href={props.href} target={props.target}>
      <span className="visually-hidden">
        {props.target === "_blank"
          ? `${props.children}, opens in new tab`
          : props.children}
      </span>
      <Icon aria-hidden={true} size={props.size} name={props.icon} />
    </Link>
  );
};

export { PageLink, IconLink };
