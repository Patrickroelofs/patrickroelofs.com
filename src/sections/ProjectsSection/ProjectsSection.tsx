import { ArrowBendDownRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { payload } from "@/utils/get-payload-config";

const ProjectsSection = async () => {
	const projects = await payload.find({
		collection: "projects",
		where: {
			_status: { equals: "published" },
		},
		sort: "-createdAt",
	});

	return (
		<section className="mx-auto mt-16 flex max-w-5xl flex-col gap-8">
			<div className="flex flex-col gap-4">
				<h2>Selected work</h2>
				<hr className="border-0 border-b-2 border-b-black" />
			</div>
			{projects.docs.map((project, index) => {
				if (index === 0) {
					return (
						<div
							className="w-full"
							key={project.id}
						>
							<div className="h-128 w-full rounded-2xl opacity-50" />
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
					);
				}

				if (index % 2 === 1) {
					return (
						<div
							className="flex flex-row gap-8"
							key={`row-${project.id}`}
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
							{projects.docs[index + 1] ? (
								<div className="w-full">
									<div className="h-96 w-full rounded-2xl opacity-50" />
									<div className="flex items-center justify-between">
										<div>
											<h3 className="mt-2 font-medium">{projects.docs[index + 1].title}</h3>
											<p className="text-dark-grey text-xs">
												{projects.docs[index + 1].meta.shortDescription}
											</p>
										</div>
										<div>
											<Link href="#">
												<ArrowBendDownRightIcon size={24} />
											</Link>
										</div>
									</div>
								</div>
							) : null}
						</div>
					);
				}

				return null;
			})}
		</section>
	);
};

export default ProjectsSection;
