import type { RichTextType } from "@/payload-types";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as LexicalRichText } from "@payloadcms/richtext-lexical/react";
import type { ReactElement } from "react";

function RichText(props: RichTextType): ReactElement {
  return (
    <LexicalRichText
      className="prose prose-xl text-inherit mx-auto text-pretty"
      data={props.richText as SerializedEditorState}
    />
  );
}

export { RichText };
