import { payload } from "@/util/getPayloadConfig";
import Link from "next/link";
import styles from "./navigation.module.css";

async function Navigation() {
	const { navigation } = await payload.findGlobal({
		slug: "settings",
	});

	return (
		<nav className={styles.navigation} aria-label="Main navigation">
			<Link href="/" className={styles.logo}>
				<h1>Patrick Roelofs</h1>
			</Link>
			<div>
				<ul className={styles.list}>
					{navigation.map((item) => {
						if (typeof item.link === "string") {
							return null;
						}

						return (
							<li key={item.id} className={styles.listItem}>
								<Link
									className={styles.link}
									href={item.link.slug === "home" ? "/" : `/${item.link.slug}`}
								>
									{item.overrideLabel ? item.label : item.link.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export { Navigation };
