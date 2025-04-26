import type React from "react";
import "@/styles/globals.css";
import "@fontsource-variable/national-park";
import type { Metadata } from "next";

export const metadata: Metadata = {
	description: "",
	title: "Patrick Roelofs",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<html lang="en">
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}
