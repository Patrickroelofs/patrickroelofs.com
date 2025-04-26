import type React from "react";
import "@/styles/globals.css";
import "@fontsource-variable/national-park";
import type { Metadata } from "next";
import { Footer } from "@/components/footer/footer";
import { Navigation } from "@/components/navigation/navigation";

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
