function getApplicationURL() {
	if (typeof window !== "undefined" && window.document) {
		const { protocol, hostname, port } = window.location;

		return `${protocol}//${hostname}${port ? `:${port}` : ""}`;
	}

	return process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
}

export { getApplicationURL };
