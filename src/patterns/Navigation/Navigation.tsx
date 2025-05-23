import { payload } from "@/util/getPayloadConfig";
import Link from "next/link";
import { Icon } from "@/components/Icon";

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
				<ul>
					{navigation.map((item) => {
						if (typeof item.link === "string") {
							return null;
						}

						return (
							<li key={item.id}>
								<Link
									href={item.link.slug === "home" ? "/" : `/${item.link.slug}`}
									className="group inline-flex items-center justify-center gap-2"
								>
									{item.icon && (
										<Icon
											size={32}
											name={item.icon}
											className="-translate-y-2 invisible inline-block translate-x-4 rotate-[60deg] scale-50 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:visible group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100"
										/>
									)}
									<span className="group-hover:-translate-x-0.5 inline-block font-medium text-xl decoration-2 underline-offset-4 transition-all ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:underline">
										{item.overrideLabel ? item.label : item.link.title}
									</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export { Navigation };
