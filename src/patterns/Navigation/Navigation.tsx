import { payload } from "@/util/getPayloadConfig";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { Icon } from "@/components/Icon";

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
									{item.icon && (
										<Icon size={32} name={item.icon} className={styles.icon} />
									)}
									<span>
										{item.overrideLabel ? item.label : item.link.title}
									</span>
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
