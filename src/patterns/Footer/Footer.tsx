import { Button } from "@/components/Button";
import { payload } from "@/util/getPayloadConfig";

async function Footer() {
	const { socials } = await payload.findGlobal({
		slug: "settings",
	});

	return (
		<footer className="mx-auto mt-12 mb-12 flex max-w-6xl justify-between">
			<h2 className="font-bold text-3xl">Patrick Roelofs</h2>
			{socials && (
				<ul className="flex gap-4">
					{socials.map((social) => (
						<li key={social.id}>
							<Button
								as="link"
								href={social.link}
								icon={social.icon}
								iconSize={36}
							/>
						</li>
					))}
				</ul>
			)}
		</footer>
	);
}

export { Footer };
