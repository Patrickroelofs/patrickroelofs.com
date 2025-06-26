import Link from "next/link";
import NavigationItems from "./NavigationItems";

function Navigation() {
	return (
		<nav className="flex justify-between items-center max-w-5xl mx-auto mt-2xs font-bold px-3xs">
			<Link
				href="/"
				className="text-m"
			>
				<h1>Patrick Roelofs</h1>
			</Link>

			<div className="flex gap-3xs justify-center wrap">
				<NavigationItems />
			</div>
		</nav>
	);
}

export default Navigation;
