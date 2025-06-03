import { Button } from "@/components/Button";
import type { SerializedLinkNode } from "@payloadcms/richtext-lexical";
import type { SerializedLexicalNode } from "@payloadcms/richtext-lexical/lexical";
import type {
	JSXConverters,
	SerializedLexicalNodeWithParent,
} from "@payloadcms/richtext-lexical/react";

interface LinkNode {
	node: SerializedLinkNode;
	nodesToJSX: (args: {
		converters?: JSXConverters;
		disableIndent?: boolean | string[];
		disableTextAlign?: boolean | string[];
		nodes: SerializedLexicalNode[];
		parent?: SerializedLexicalNodeWithParent;
	}) => React.ReactNode[];
}

function linkConverter({ node, nodesToJSX }: LinkNode) {
	return (
		<Button
			as="link"
			href={node.fields.url || ""}
			target={node.fields.newTab ? "_blank" : undefined}
		>
			{nodesToJSX({ nodes: node.children })}
		</Button>
	);
}

export { linkConverter };
