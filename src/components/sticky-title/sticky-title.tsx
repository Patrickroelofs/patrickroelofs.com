import { Blocks } from "@/components/blocks";
import type { StickyTitleType } from "@/payload-types";
import { cva } from "class-variance-authority";
import styles from "./sticky-title.module.css";

const stickyTitleStyles = cva(styles.container);

function StickyTitle(props: StickyTitleType) {
	return (
		<section className={stickyTitleStyles()}>
			<div>
				<h2 className={styles.title}>{props.title}</h2>
			</div>
			<div>
				<Blocks blocks={props.blocks} />
			</div>
		</section>
	);
}

export { StickyTitle };
