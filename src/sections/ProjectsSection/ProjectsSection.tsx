import { ArrowBendDownRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import type { ProjectsBlock } from "@/payload-types";

interface ProjectsSectionProps extends ProjectsBlock {}

const ProjectsSection = (props: ProjectsSectionProps) => {
	const { title, featuredProject, projects } = props;

	return (
		<section className="mx-auto mt-32 flex max-w-5xl flex-col gap-8">
			<div className="flex flex-col gap-4">
				<h2>{title}</h2>
				<hr className="border-0 border-b-2 border-b-black" />
			</div>
			{typeof featuredProject !== "string" && (
				<div
					className="w-full"
					key={featuredProject.id}
				>
					<div className="h-128 w-full rounded-2xl opacity-50" />
					<div className="flex items-center justify-between">
						<div>
							<h3 className="mt-2 font-medium">{featuredProject.title}</h3>
							<p className="text-dark-grey text-xs">{featuredProject.meta.shortDescription}</p>
						</div>
						<div>
							<Link href="#">
								<ArrowBendDownRightIcon size={24} />
							</Link>
						</div>
					</div>
				</div>
			)}

			{projects && (
				<div className="grid grid-cols-2 gap-8">
					{projects?.map((project) => {
						if (typeof project === "string") {
							return null;
						}

						return (
							<div
								className="flex flex-row gap-8"
								key={project.id}
							>
								<div className="w-full">
									<div className="h-96 w-full rounded-2xl opacity-50" />
									<div className="flex items-center justify-between">
										<div>
											<h3 className="mt-2 font-medium">{project.title}</h3>
											<p className="text-dark-grey text-xs">{project.meta.shortDescription}</p>
										</div>
										<div>
											<Link href="#">
												<ArrowBendDownRightIcon size={24} />
											</Link>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default ProjectsSection;
