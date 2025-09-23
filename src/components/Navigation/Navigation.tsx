import Link from "next/link";

function Navigation() {
	return (
		<nav className="flex justify-between items-center max-w-5xl mx-auto mt-2xs font-bold px-3xs">
			<Link
				href="/"
				className="text-m"
			>
				<h1>Patrick Roelofs</h1>
			</Link>
		</nav>
	);
}

export default Navigation;
