import { ArrowBendDownRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { COLLECTION_SLUGS } from "@/collections";
import { ImageMedia } from "@/components/Media/ImageMedia";
import type { Media, ProjectsBlock } from "@/payload-types";
import { payload } from "@/utils/getPayloadConfig";

interface ProjectsSectionProps extends ProjectsBlock {}

const ProjectsSection = async (props: ProjectsSectionProps) => {
	const {
		title,
		featuredProject: featuredProjectFromProps,
		projects: featuredProjectsFromProps,
	} = props;

	let featuredProject = featuredProjectFromProps;
	let projects = featuredProjectsFromProps;

	if (typeof featuredProjectFromProps === "string") {
		featuredProject = await payload.findByID({
			collection: COLLECTION_SLUGS.PROJECTS,
			id: featuredProjectFromProps,
		});
	}

	if (projects && projects.length > 0) {
		projects = await Promise.all(
			projects.map(async (project) => {
				if (typeof project === "string") {
					const fetchedProject = await payload.findByID({
						collection: COLLECTION_SLUGS.PROJECTS,
						id: project,
					});
					return fetchedProject;
				}

				return project;
			})
		);
	}

	return (
		<section className="mx-auto mt-48 flex max-w-5xl flex-col gap-8">
			<div className="flex flex-col gap-4">
				<h2>{title}</h2>
				<hr className="border-0 border-b-2 border-b-black" />
			</div>
			{typeof featuredProject !== "string" && (
				<Link
					className="w-full"
					href={`/projects/${featuredProject.slug}`}
					key={featuredProject.id}
				>
					<div className="relative h-128 w-full">
						<ImageMedia
							{...(featuredProject.meta.thumbnail as Media)}
							fill
						/>
					</div>

					<div className="flex items-center justify-between">
						<div>
							<h3 className="mt-2 font-medium">{featuredProject.title}</h3>
							<p className="text-dark-grey text-xs">{featuredProject.meta.shortDescription}</p>
						</div>
						<div>
							<ArrowBendDownRightIcon size={24} />
						</div>
					</div>
				</Link>
			)}

			{projects && (
				<div className="grid grid-cols-2 gap-8">
					{projects?.map((project) => {
						if (typeof project === "string") {
							return null;
						}

						return (
							<Link
								className="flex flex-row gap-8"
								href={`/projects/${project.slug}`}
								key={project.id}
							>
								<div className="w-full">
									<div className="relative h-94 w-full">
										<ImageMedia
											{...(project.meta.thumbnail as Media)}
											fill
										/>
									</div>
									<div className="flex items-center justify-between">
										<div>
											<h3 className="mt-2 font-medium">{project.title}</h3>
											<p className="text-dark-grey text-xs">{project.meta.shortDescription}</p>
										</div>
										<div>
											<ArrowBendDownRightIcon size={24} />
										</div>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default ProjectsSection;
