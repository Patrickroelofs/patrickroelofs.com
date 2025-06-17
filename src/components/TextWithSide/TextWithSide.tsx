import styles from "./TextWithSide.module.css";

interface TextWithSideProps {
	title: string;
	children?: React.ReactNode;
}

function TextWithSide(props: TextWithSideProps) {
	return (
		<section className={styles.textWithSide}>
			<div className={styles.title}>
				<h2>{props.title}</h2>
			</div>
			<div>{props.children}</div>
		</section>
	);
}

export default TextWithSide;
