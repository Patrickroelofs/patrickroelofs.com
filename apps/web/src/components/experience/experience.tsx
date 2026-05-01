import { Image } from "@unpic/react";
import DividerImage from "#/assets/Line_062.png";

const experiences = [
	{
		type: "work",
		role: "Medior front-end developer",
		company: "iquality",
		period: "2021 — Present",
		description:
			"Contributing to the development of high-quality web applications for various clients, utilizing modern front-end technologies and best practices to create engaging and user-friendly digital experiences.",
	},
	{
		type: "internship",
		role: "Front-end development intern",
		company: "iquality",
		period: "2022 - 2023",
		description:
			"Worked on researching and developing an application in Flutter, with a .NET API and Strapi CMS backend. Created a drag and drop UI with branching (tree like) flow structure.",
	},
	{
		type: "internship",
		role: "Front-end development intern",
		company: "Linku",
		period: "2021 - 2022",
		description:
			"Work experience internship focused on front-end development, gaining practical experience in building and maintaining websites and web applications.",
	},
	{
		type: "education",
		role: "Information Technology",
		company: "Hogeschool van Arnhem en Nijmegen (HAN)",
		period: "2019 - 2024",
		description:
			"Studied IT with a focus on web development, further developing a strong foundation in programming, and web technologies.",
	},
];

function ExperienceSection() {
	return (
		<section className="px-4">
			<div className="relative top-16 mx-auto mb-20 flex max-w-6xl flex-col gap-6 px-4 pt-8 md:top-32 md:mb-32 md:px-0">
				<span>Experience</span>
				<p className="text-m md:text-l">
					A journey of continuous learning and growth in the world of software
					development.
				</p>

				<Image
					height={79}
					src={DividerImage}
					width={437}
					className="mt-l w-40 sm:w-60"
				/>

				<div className="space-y-12 mt-12">
					{experiences.map((exp) => (
						<div
							key={exp.role}
							className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-b-peach/50 last:border-0 pb-12"
						>
							<div className="md:col-span-3">
								<span className="text-base text-muted-foreground">
									{exp.period}
								</span>
							</div>
							<div className="md:col-span-9">
								<h3 className="text-m font-semibold text-foreground mb-1">
									{exp.role}
								</h3>
								<p className="text-accent font-medium mb-3 text-base">
									{exp.company}
								</p>
								<p className="text-muted-foreground leading-relaxed text-base">
									{exp.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ExperienceSection;
