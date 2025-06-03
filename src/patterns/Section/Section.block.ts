import { RichTextBlock } from "@/components/RichText/RichText.block";
import type { Block } from "payload";

const SectionBlock: Block = {
	slug: "section",
	interfaceName: "SectionBlockType",
	fields: [
		{
			name: "content",
			label: "Content",
			type: "blocks",
			blocks: [RichTextBlock],
		},
	],
};

export { SectionBlock };
