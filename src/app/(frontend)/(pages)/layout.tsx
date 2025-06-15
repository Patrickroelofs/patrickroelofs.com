import type React from "react";

import "@/styles/globals.css";
import "@/styles/reset.css";
import "@fontsource-variable/national-park";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

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
