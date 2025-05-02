import { RichText } from "@/components/richtext/richtext";
import type { IconCardType } from "@/payload-types";
import styles from "./icon-card.module.css";
import { Icon } from "../icon";

function IconCard(props: IconCardType) {
	return (
		<div className={styles.card}>
			<Icon name={props.icon} size={64} />
			<h3 className={styles.title}>{props.title}</h3>
			<RichText blockType="rich-text" richText={props.text} />
		</div>
	);
}

export { IconCard };
