import { bottomSpacingStyles, topSpacingStyles } from "@/util/fieldMaps";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as RichTextLexical } from "@payloadcms/richtext-lexical/react";
import { cva } from "class-variance-authority";

const RichTextLexicalStyles = cva("", {
	variants: {
		topSpacing: topSpacingStyles,
		bottomSpacing: bottomSpacingStyles,
	},
});

// biome-ignore lint/suspicious/noExplicitAny: implement when needed
const RichText = (props: any) => {
	const { richText, topSpacing, bottomSpacing } = props;

	return (
		<RichTextLexical
			data={richText as SerializedEditorState}
			className={RichTextLexicalStyles({ topSpacing, bottomSpacing })}
			// converters={({ defaultConverters }) => ({
			// 	...defaultConverters,
			// 	link: ({ node, nodesToJSX }) => {
			// 		return (
			// 			<SiteLink
			// 				href={node.fields.url || ""}
			// 				target={node.fields.newTab ? "_blank" : undefined}
			// 			>
			// 				{nodesToJSX({ nodes: node.children })}
			// 			</SiteLink>
			// 		);
			// 	},
			// })}
		/>
	);
};

export { RichText };
