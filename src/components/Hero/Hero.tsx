"use client";

import Image from "next/image";
import styles from "./hero.module.css";
import image from "@/images/000008510008.jpg";

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h2 className={styles.title}>
					A front-end developer with a passion for creating.
				</h2>
				<p className={styles.description}>
					A dedicated developer, trusted advisor, and passionate front-end
					specialist focused on creating accessible, high-performing, and
					user-friendly web experiences.
				</p>
			</div>
			<div className={styles.image}>
				<Image alt="" src={image} fill />
			</div>
		</section>
	);
}

export default Hero;
