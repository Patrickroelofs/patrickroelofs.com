import { Footer } from "@/patterns/footer/footer";
import { Navigation } from "@/patterns/navigation/navigation";
import type { Metadata } from "next";
import type React from "react";

import "@/styles/globals.css";
import "@fontsource-variable/national-park";

export const metadata: Metadata = {
	description: "",
	title: "Patrick Roelofs",
};

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
