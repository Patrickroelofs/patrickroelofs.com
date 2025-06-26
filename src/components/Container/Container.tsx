import styles from "./container.module.css";

interface ContainerProps {
	children?: React.ReactNode;
}

function Container(props: ContainerProps) {
	return <div className={styles.container}>{props.children}</div>;
}

export default Container;
