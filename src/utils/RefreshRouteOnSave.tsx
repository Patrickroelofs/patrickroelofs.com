"use client";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation.js";
import type React from "react";
import { env } from "@/env";

export const RefreshRouteOnSave: React.FC = () => {
	const router = useRouter();

	return (
		<PayloadLivePreview
			refresh={() => router.refresh()}
			serverURL={env.NEXT_PUBLIC_URL}
		/>
	);
};
