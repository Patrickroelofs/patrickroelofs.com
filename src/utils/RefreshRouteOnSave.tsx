"use client";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation.js";
import type React from "react";

export const RefreshRouteOnSave: React.FC = () => {
	console.log(process.env.NEXT_PUBLIC_URL);
	const router = useRouter();

	return (
		<PayloadLivePreview
			refresh={() => router.refresh()}
			serverURL={process.env.NEXT_PUBLIC_URL || ""}
		/>
	);
};
