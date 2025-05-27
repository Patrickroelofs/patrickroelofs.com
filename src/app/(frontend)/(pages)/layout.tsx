import { Footer } from "@/patterns/Footer/Footer";
import { Navigation } from "@/patterns/Navigation/Navigation";

import type React from "react";
import { headers as getHeaders } from "next/headers";

import "@/styles/globals.css";
import "@fontsource-variable/national-park";
import { RefreshRouteOnSave } from "@/util/refreshRouteOnSave";
import { payload } from "@/util/getPayloadConfig";

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	const headers = await getHeaders();

	const { user } = await payload.auth({
		headers,
	});

	return (
		<html lang="en" className="bg-ginger-500 font-sans">
			<body>
				<Navigation />
				<main>{children}</main>
				<Footer />

				{user && <RefreshRouteOnSave />}
			</body>
		</html>
	);
}
