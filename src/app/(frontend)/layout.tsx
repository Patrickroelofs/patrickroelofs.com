import type React from "react";

import "@/app/globals.css";

import "@fontsource-variable/national-park";
import Footer from "@/components/Footer/footer";
import Navigation from "@/components/Navigation/navigation";

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<html
			className="bg-ginger text-base"
			lang="en"
		>
			<body>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
