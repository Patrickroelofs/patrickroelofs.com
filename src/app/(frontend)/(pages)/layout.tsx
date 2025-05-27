import { Footer } from "@/patterns/Footer/Footer";
import { Navigation } from "@/patterns/Navigation/Navigation";

import type React from "react";

import "@/styles/globals.css";
import "@fontsource-variable/national-park";

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<html lang="en" className="bg-ginger-500 font-sans">
			<body>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
