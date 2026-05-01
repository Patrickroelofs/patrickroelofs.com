import {
	GaugeIcon,
	SmileyIcon,
	WheelchairIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Image } from "@unpic/react";
import DividerImage from "#/assets/Line_004.png";

function AboutMeSection() {
	return (
		<section className="px-4">
			<div className="relative top-16 mx-auto mb-20 flex max-w-6xl flex-col gap-6 px-4 pt-8 md:top-32 md:mb-32 md:px-0">
				<p className="text-m md:text-l">
					I am a creative with a passion for creating engaging and user-friendly
					websites. With a strong background in front-end development.
				</p>

				<Image
					height={47}
					src={DividerImage}
					width={240}
					className="mt-l w-40 sm:w-60"
				/>

				<div>
					<ul className="grid grid-cols-1 gap-m md:grid-cols-2 md:gap-l">
						<li className="flex items-start justify-start gap-4 md:gap-6">
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

						<li className="flex items-start justify-start gap-4 md:gap-6">
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

						<li className="flex items-start justify-start gap-4 md:gap-6">
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
