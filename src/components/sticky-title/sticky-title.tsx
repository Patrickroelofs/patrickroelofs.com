import { Blocks } from "@/components/blocks";
import { cva } from "class-variance-authority";
import type { StickyTitleBlock } from "@/payload-types";
import styles from "./sticky-title.module.css";

const stickyTitleStyles = cva(styles.container);

function StickyTitle(props: StickyTitleBlock) {
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
