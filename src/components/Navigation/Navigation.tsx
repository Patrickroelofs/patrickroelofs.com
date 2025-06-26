import Link from "next/link";
import styles from "./navigation.module.css";
import NavigationItems from "./NavigationItems";

function Navigation() {
	return (
		<nav className={styles.navigation}>
			<Link href="/" className={styles.title}>
				<h1>Patrick Roelofs</h1>
			</Link>

			<div className={styles.links}>
				<NavigationItems />
			</div>
		</nav>
	);
}

export default Navigation;
