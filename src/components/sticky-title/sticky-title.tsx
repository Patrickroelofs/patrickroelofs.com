import { Blocks } from "@/components/blocks";
import type { StickyTitleType } from "@/payload-types";
import { cva } from "class-variance-authority";
import styles from "./sticky-title.module.css";
import { AnimatedTitle } from "./elements/animated-title";

const stickyTitleStyles = cva(styles.container);

function StickyTitle(props: StickyTitleType) {
	return (
		<section className={stickyTitleStyles()}>
			<AnimatedTitle>{props.title}</AnimatedTitle>
			<div>
				<Blocks blocks={props.blocks} />
			</div>
		</section>
	);
}

export { StickyTitle };
