import { payload } from "@/util/getPayloadConfig";
import Link from "next/link";
import { Button } from "@/components/Button";

async function Navigation() {
	const { navigation } = await payload.findGlobal({
		slug: "settings",
	});

	return (
		<nav
			className="mx-auto mt-4 flex max-w-6xl items-center justify-between"
			aria-label="Main navigation"
		>
			<Link href="/" className="font-bold text-3xl">
				<h1>Patrick Roelofs</h1>
			</Link>
			<div>
				<ul className="flex items-center justify-center gap-2">
					{navigation.map((item) => {
						if (typeof item.link === "string") {
							return null;
						}

						return (
							<li key={item.id}>
								<Button
									as="link"
									href={item.link.slug === "home" ? "/" : `/${item.link.slug}`}
									icon={item.icon}
								>
									{item.overrideLabel ? item.label : item.link.title}
								</Button>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export { Navigation };
