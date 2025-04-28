function getServersideURL() {
	return process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
}

export { getServersideURL };
