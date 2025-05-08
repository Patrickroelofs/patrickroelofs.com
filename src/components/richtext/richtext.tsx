import type { RichTextType } from "@/payload-types";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as RichTextLexical } from "@payloadcms/richtext-lexical/react";
import { cva } from "class-variance-authority";
import { SiteLink } from "../link/link";
import styles from "./richtext.module.css";
import { spacingStyles } from "@/util/fieldMaps";

const RichTextLexicalStyles = cva(styles.richtext, {
	variants: {
		spacing: spacingStyles,
	},
});

const RichText = (props: RichTextType) => {
	const { richText, spacing } = props;

	return (
		<RichTextLexical
			data={richText as SerializedEditorState}
			className={RichTextLexicalStyles({ spacing })}
			converters={({ defaultConverters }) => ({
				...defaultConverters,
				link: ({ node, nodesToJSX }) => {
					return (
						<SiteLink
							href={node.fields.url || ""}
							target={node.fields.newTab ? "_blank" : undefined}
						>
							{nodesToJSX({ nodes: node.children })}
						</SiteLink>
					);
				},
			})}
		/>
	);
};

export { RichText };
