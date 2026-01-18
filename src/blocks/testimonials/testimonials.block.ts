import type { Block } from "payload";
import { BLOCK_SLUGS } from "..";
import { BlockModifiers } from "../blockmodifiers.block";

export const TestimonialsBlock: Block = {
	slug: BLOCK_SLUGS.TESTIMONIALS,
	interfaceName: "TestimonialsBlock",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "title",
							type: "text",
							required: true,
						},
						{
							name: "testimonials",
							type: "array",
							required: true,
							minRows: 1,
							fields: [
								{
									type: "tabs",
									tabs: [
										{
											label: "Testimonial",
											fields: [
												{
													name: "quote",
													type: "textarea",
													required: true,
												},
											],
										},
										{
											label: "Author",
											name: "author",
											fields: [
												{
													name: "authorName",
													type: "text",
													required: true,
												},
												{
													name: "authorTitle",
													type: "text",
													required: true,
												},
												{
													name: "authorCompany",
													type: "text",
													required: false,
												},
												{
													name: "authorCompanyLink",
													type: "text",
													required: false,
												},
											],
										},
									],
								},
							],
						},
					],
				},
				...BlockModifiers,
			],
		},
	],
};
