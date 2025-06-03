import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as RichTextLexical } from "@payloadcms/richtext-lexical/react";
import { cva } from "class-variance-authority";
import { linkConverter } from "./converters/LinkConverter";
import type { RichTextBlockType } from "@/payload-types";

const RichTextLexicalStyles = cva(
	"prose prose-xl text-black marker:text-black mx-auto",
);

const RichText = (props: RichTextBlockType) => {
	const { richText } = props;

	return (
		<RichTextLexical
			data={richText as SerializedEditorState}
			className={RichTextLexicalStyles()}
			converters={({ defaultConverters }) => ({
				...defaultConverters,
				link: ({ node, nodesToJSX }) => linkConverter({ node, nodesToJSX }),
			})}
		/>
	);
};

export { RichText };
