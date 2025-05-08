import type { ContainerBlockType } from "@/payload-types";
import { Blocks } from "../blocks";
import styles from "./container.module.css";

function Container(props: ContainerBlockType) {
	return (
		<div className={styles.container}>
			<Blocks blocks={props.content} />
		</div>
	);
}

export { Container };
