import Link from "next/link";
import styles from "./navigation.module.css";

function Navigation() {
	return (
		<nav className={styles.navigation}>
			<Link href="/" className={styles.title}>
				<h1>Patrick Roelofs</h1>
			</Link>
		</nav>
	);
}

export default Navigation;
