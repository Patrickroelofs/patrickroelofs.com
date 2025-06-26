import Link from "next/link";
import { payload } from "@/utils/getPayloadConfig";
import styles from "./navigation.module.css";

async function NavigationItems() {
	const projectsCount = await payload.count({
		collection: "projects",
	});

	const blogCount = await payload.count({
		collection: "blog",
	});

	return (
		<>
			{projectsCount.totalDocs > 0 && (
				<Link
					href="/projects"
					className={styles.footerLink}
				>
					Projects
				</Link>
			)}
			{blogCount.totalDocs > 0 && (
				<Link
					href="/blog"
					className={styles.footerLink}
				>
					Blog
				</Link>
			)}
		</>
	);
}

export default NavigationItems;
