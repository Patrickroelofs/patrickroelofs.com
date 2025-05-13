import type { Icons } from "@/payload-types";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "../Icon";
import styles from "./Link.module.css";

export type SiteLinkProps = {
	children: ReactNode;
	href: string;
	className?: string;
	target?: string;
};

const SiteLink = (props: SiteLinkProps) => {
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

const IconLink = (props: SiteLinkProps & IconLinkProps) => {
	return (
		<Link href={props.href} target={props.target}>
			<span className="visually-hidden">
				{props.target === "_blank"
					? `${props.children} opens in new tab`
					: props.children}
			</span>
			<Icon aria-hidden={true} size={props.size} name={props.icon} />
		</Link>
	);
};

export { SiteLink, IconLink };
