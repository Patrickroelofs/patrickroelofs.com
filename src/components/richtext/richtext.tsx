import type { RichTextBlock } from "@/payload-types";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as RichTextLexical } from "@payloadcms/richtext-lexical/react";
import { cva } from "class-variance-authority";
import styles from "./richtext.module.css";
import { SiteLink } from "../link/link";

const RichTextLexicalStyles = cva(styles.richtext);

const RichText = (props: RichTextBlock) => {
	const { richText } = props;

	return (
		<RichTextLexical
			data={richText as SerializedEditorState}
			className={RichTextLexicalStyles()}
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
