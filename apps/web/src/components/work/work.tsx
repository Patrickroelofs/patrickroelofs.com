import { Image } from "@unpic/react";

type WorkSectionProps = {};

function WorkSection(props: WorkSectionProps) {
	return (
		<section className="px-s mt-3xl py-2xl bg-black text-ginger">
			<div className="max-w-6xl mx-auto py-16">
				<span>Work</span>
				<p className="text-m md:text-l">
					A couple of projects that I have worked on, showcasing my skills and
					experience.
				</p>

				<div className="flex flex-col gap-2xl pt-2xl">
					<div className="grid grid-cols-3 gap-m">
						<div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								sapiente tempore sint explicabo cupiditate praesentium maxime
								error. Nesciunt accusamus quo ducimus, cumque quibusdam debitis.
							</p>
						</div>

						<Image
							className="col-span-2"
							alt=""
							height={650}
							src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
							width={1152}
						/>
					</div>

					<div className="grid grid-cols-3 gap-m">
						<Image
							className="col-span-2"
							alt=""
							height={650}
							src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
							width={1152}
						/>

						<div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								sapiente tempore sint explicabo cupiditate praesentium maxime
								error. Nesciunt accusamus quo ducimus, cumque quibusdam debitis.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WorkSection;
