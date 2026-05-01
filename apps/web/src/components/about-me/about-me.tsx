import {
	GaugeIcon,
	SmileyIcon,
	WheelchairIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Image } from "@unpic/react";
import DividerImage from "#/assets/Line_004.png";

type AboutMeSectionProps = {};

function AboutMeSection(props: AboutMeSectionProps) {
	return (
		<section>
			<div className="mx-auto pt-8 flex max-w-6xl flex-col gap-6 top-32 relative mb-32">
				<p className="text-l">
					With over 8 years of experience in front-end development, I help
					businesses transform their digital presence through thoughtful design
					and robust engineering.
				</p>

				<Image height={47} src={DividerImage} width={240} className="mt-l" />

				<div>
					<ul className="grid grid-cols-2 gap-l">
						<li className="flex justify-center items-center gap-6">
							<div className="w-16 h-16 bg-redleather/30 rounded-full shrink-0 flex items-center justify-center">
								<SmileyIcon className="fill-black w-8 h-8" />
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="text-s font-medium">Fun & Creative</h3>
								<p>
									I strive to infuse fun and creativity into every project I
									undertake, creating engaging and delightful digital
									experiences.
								</p>
							</div>
						</li>

						<li className="flex justify-center items-center gap-6">
							<div className="w-16 h-16 bg-redleather/30 rounded-full shrink-0 flex items-center justify-center">
								<WheelchairIcon className="fill-black w-8 h-8" />
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="text-s font-medium">Accessibility</h3>
								<p>
									I create accessible, inclusive, and user-friendly digital
									experiences that empower all users, regardless of their
									abilities.
								</p>
							</div>
						</li>

						<li className="flex justify-center items-center gap-6">
							<div className="w-16 h-16 bg-redleather/30 rounded-full shrink-0 flex items-center justify-center">
								<GaugeIcon className="fill-black w-8 h-8" />
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="text-s font-medium">Performance</h3>
								<p>
									I optimize websites for speed and efficiency, ensuring fast
									load times and smooth interactions for an exceptional user
									experience.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default AboutMeSection;
