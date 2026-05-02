import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import { Image } from "@unpic/react";
import DividerImage from "#/assets/Line_062.png";

const experiences = [
	{
		type: "work",
		role: "Medior front-end developer",
		company: "iquality",
		period: "2021 — Present",
		link: "https://www.iquality.nl/",
		description:
			"Contributing to the development of high-quality web-portals for various clients, utilizing modern front-end technologies and best practices to create efficient and user-friendly platforms.",
	},
];

function ExperienceSection() {
	return (
		<section className="px-s pt-3xl">
			<div className="relative mx-auto flex max-w-6xl flex-col gap-6">
				<span>Experience</span>
				<p className="text-m md:text-l">
					A journey of continuous learning and growth in the world of software
					development.
				</p>

				<Image
					height={79}
					src={DividerImage}
					width={437}
					className="my-l w-40 sm:w-60"
				/>

				{experiences.map((exp) => (
					<div
						key={`${exp.role}-${exp.company}-${exp.period}`}
						className="grid grid-cols-1 gap-s border-b border-b-peach/50 pb-12 last:border-0 md:grid-cols-12"
					>
						<div className="md:col-span-3">
							<span className="text-base text-muted-foreground">
								{exp.period}
							</span>
						</div>
						<div className="md:col-span-9 flex flex-col gap-3xs">
							<h3 className="mb-1 text-m font-semibold text-foreground">
								{exp.role}
							</h3>
							<a
								href={exp.link}
								target="_blank"
								rel="noopener noreferrer"
								className="mb-3 text-base font-medium text-accent inline-flex items-center gap-1 hover:underline group transition-all duration-300 ease-in-out"
							>
								{exp.company}
								<ArrowSquareOutIcon className="opacity-40 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
							</a>
							<p className="text-base leading-relaxed text-muted-foreground">
								{exp.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default ExperienceSection;
