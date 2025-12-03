import Link from "next/link";

function Navigation() {
	return (
		<nav className="mx-auto mt-2xs flex max-w-5xl items-center justify-between px-3xs font-bold">
			<Link
				className="text-m"
				href="/"
			>
				<h1>Patrick Roelofs</h1>
			</Link>
		</nav>
	);
}

export default Navigation;
