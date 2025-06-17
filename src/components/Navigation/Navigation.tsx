import Link from "next/link";
import styles from "./navigation.module.css";

function Navigation() {
	return (
		<nav className={styles.navigation}>
			<Link href="/" className={styles.title}>
				<h1>Patrick Roelofs</h1>
			</Link>

			<div className={styles.links}>
				<Link href="#" className={styles.footerLink}>
					Work
				</Link>
				<Link href="#" className={styles.footerLink}>
					About
				</Link>
				<Link href="#" className={styles.footerLink}>
					Blog
				</Link>
				<Link href="#" className={styles.footerLink}>
					Contact
				</Link>
			</div>
		</nav>
	);
}

export default Navigation;
