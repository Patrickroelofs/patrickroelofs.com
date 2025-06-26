import type React from "react";

import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/rich-text.css";

import "@fontsource-variable/national-park";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<html lang="en">
			<body>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
