"use client";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation.js";
import { getApplicationURL } from "./getApplicationURL";

export const RefreshRouteOnSave = () => {
	const router = useRouter();

	return (
		<PayloadLivePreview
			refresh={() => router.refresh()}
			serverURL={getApplicationURL()}
		/>
	);
};
