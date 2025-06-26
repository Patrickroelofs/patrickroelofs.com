import type {
	DefaultNodeTypes,
	SerializedBlockNode,
	SerializedInlineBlockNode,
} from "@payloadcms/richtext-lexical";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import {
	type JSXConvertersFunction,
	RichText as RichTextLexical,
} from "@payloadcms/richtext-lexical/react";
import type React from "react";

type NodeTypes = DefaultNodeTypes | SerializedBlockNode | SerializedInlineBlockNode;

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
	...defaultConverters,
	blocks: {},
	inlineBlocks: {},
});

export const RichText: React.FC<{
	lexicalData: SerializedEditorState;
}> = ({ lexicalData }) => {
	return (
		<RichTextLexical
			converters={jsxConverters}
			data={lexicalData}
		/>
	);
};
